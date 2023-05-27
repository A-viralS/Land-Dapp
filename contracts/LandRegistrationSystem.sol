//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistrationSystem {
    struct Land {
        uint256  landId;
        string city;
        string district;
        string state;
        address owner;
        uint256   marketValue;
        string propertyNumber;
        uint256  size;
        string landDocument;
        bool verified;
        bool forSell;
    }

    struct User {
        uint256  userId;
        address walletAddress;
        string emailAddress;
        string firstName;
        string lastName;
        string contact;
        string residentialAddress;
        string ghanaCard;
        uint256  landSold;
        bool verified;
    }

    struct LandInspector {
        uint256  inspectorId;
        address walletAddress;
        string district;
        string city;
        uint256  verifiedUser;
        uint256  verifiedLand;
    }

    Land[] private land;
    User[] private user;
    LandInspector[] private landInspector;

    address owner;
    mapping (uint256  => address) public users;
    mapping (uint256  => address) public landInspectors;
    mapping (uint256  => address) public lands; // use propertyNumber as primary key

    event LandSold(address indexed _seller, address indexed _buyer, uint256  _value);
    event AddLand(address recipient, uint256  taskId);
    event AddUser(address recipient, uint256  taskId);
    event AddlandInspector(address recipient, uint256  taskId);


    constructor() {
        owner = msg.sender;
    }

    modifier onlyLandOwner(uint256  landId) {
        require(lands[landId] == msg.sender, "You are not the land owner.");
        _;
    }

    modifier onlyLandInspector() {
        bool isLandInspector = false;
        for (uint i = 0; i < landInspector.length; i++) {
            if (landInspector[i].walletAddress == msg.sender) {
                isLandInspector = true;
                break;
            }
        }
        require(isLandInspector == true, "You are not a land inspector.");
        _;
    }

    function createUser(string memory _emailAddress, string memory _firstName, string memory _lastName, string memory _contact, string memory _residentialAddress, string memory _ghanaCard) public {
        require(bytes(_emailAddress).length > 0, "Email address is required");
        require(bytes(_firstName).length > 0, "First name is required");
        require(bytes(_lastName).length > 0, "Last name is required");
        require(bytes(_contact).length > 0, "Contact is required");
        require(bytes(_residentialAddress).length > 0, "Residential address is required");
        require(bytes(_ghanaCard).length > 0, "Ghana card is required");
        uint userId = user.length;
        user.push(User(userId, msg.sender, _emailAddress, _firstName, _lastName, _contact, _residentialAddress, _ghanaCard,0, false));
        users[userId] = msg.sender;
        emit AddUser(msg.sender, userId);
    }

    function createLand(string memory _city, string memory _district, string memory _state, string memory  _propertyNumber, uint256  _marketValue, uint256  _size, string memory _landDocument) public {
        require(bytes(_city).length > 0, "City is required");
        require(bytes(_district).length > 0, "District is required");
        require(bytes(_state).length > 0, "State is required");
        require(bytes(_propertyNumber).length > 0, "Property number is required");
        require(_marketValue > 0, "Market value is required and must be greater than zero");
        require(_size > 0, "Size is required and must be greater than zero");
        require(bytes(_landDocument).length > 0, "Land document is required");
        uint256  landId = land.length;
        land.push( Land(landId, _city, _district, _state, msg.sender, _marketValue, _propertyNumber, _size, _landDocument, false, false));
        lands[landId] = msg.sender;
        emit AddLand(msg.sender, landId);
        // add propertyNumber to user's list of owned lands
    }


    function getLandDetails(uint256  landId) public view returns (string memory, string memory, string memory, uint256 , uint256 , bool) {
        require(land[landId].verified == true, "Land is not yet verified");
        return (land[landId].city, land[landId].district, land[landId].state, land[landId].marketValue, land[landId].size, land[landId].forSell);
    }

    function createLandInspector(address _walletAddress, string memory _district, string memory _city) public {
        require(bytes(_district).length > 0, "District is required");
        require(bytes(_city).length > 0, "City is required");
        require(_walletAddress != address(0), "Address is required");
        uint landInspectorId = landInspector.length;
        landInspector.push( LandInspector(landInspectorId, _walletAddress, _district, _city, 0, 0));
        landInspectors[landInspectorId] = _walletAddress;
        emit AddlandInspector(_walletAddress, landInspectorId);
    }

    // onlyLandInspector

    function verifyUser(uint256  userId) public onlyLandInspector() {
        require(userId < user.length, "User does not exist.");
        require(user[userId].verified == false, "User has already been verified.");
        user[userId].verified = true;
        for (uint i = 0; i < landInspector.length; i++) {
            if (landInspector[i].walletAddress == msg.sender) {
                landInspector[i].verifiedUser++;
                break;
            }
        }
    }

    function verifyLand(uint256  landId) public onlyLandInspector() {
        require(landId < land.length, "Land does not exist.");
        require(land[landId].verified == false, "Land has already been verified.");
        land[landId].verified = true;
        for (uint i = 0; i < landInspector.length; i++) {
            if (landInspector[i].walletAddress == msg.sender) {
                landInspector[i].verifiedLand++;
                break;
            }
        }
    }

    function setLandForSale(uint256  landId) public onlyLandOwner(landId) {
        land[landId].forSell = true;
    }

    function cancelSale(uint256  landId) public onlyLandOwner(landId) {
        land[landId].forSell = false;
    }

    function unverifiedOwnerLands()  external view returns (Land[] memory) {
        Land[] memory temporary = new Land[](land.length);
        uint counter = 0;
        for(uint i=0; i<land.length; i++) {
            if(lands[i] == msg.sender && land[i].verified == false) {
                temporary[counter] = land[i];
                counter++;
            }
        }

        Land[] memory result = new Land[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }
    
    function getOwnerLands()  external view returns (Land[] memory) {
        Land[] memory temporary = new Land[](land.length);
        uint counter = 0;
        for(uint i=0; i<land.length; i++) {
            if(lands[i] == msg.sender && land[i].verified == true) {
                temporary[counter] = land[i];
                counter++;
            }
        }

        Land[] memory result = new Land[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function countOwnerLands()  external view returns (uint) {
        Land[] memory temporary = new Land[](land.length);
        uint counter = 0;
        for(uint i=0; i<land.length; i++) {
            if(lands[i] == msg.sender && land[i].verified == true) {
                temporary[counter] = land[i];
                counter++;
            }
        }
        return counter;
    }

    function getNonVerifiedLands()  external view returns (Land[] memory) {
        Land[] memory temporary = new Land[](land.length);
        uint counter = 0;
        for(uint i=0; i<land.length; i++) {
            if(land[i].verified == false) {
                temporary[counter] = land[i];
                counter++;
            }
        }

        Land[] memory result = new Land[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function searchLandsforInspector(string memory _keyword) external view returns (Land[] memory) {
        Land[] memory temporary = new Land[](land.length);
        uint counter = 0;
        bytes32 keywordHash = keccak256(abi.encodePacked(_keyword)); // hash the keyword to reduce gas cost
        string memory lowercaseKeyword = lowercase(_keyword);
        bytes32 lowercaseKeywordHash = keccak256(abi.encodePacked(lowercaseKeyword)); // hash the lowercase keyword to reduce gas cost
        for(uint i=0; i<land.length; i++) {
            bytes32 cityHash = keccak256(bytes(land[i].city));
            bytes32 districtHash = keccak256(bytes(land[i].district));
            if((cityHash == keywordHash || districtHash == keywordHash)&&land[i].verified==false) {
                temporary[counter] = land[i];
                counter++;
            } else if ((cityHash.length == keywordHash.length || districtHash.length == keywordHash.length)) {
                // If cityHash, districtHash and keywordHash have the same length ,
                // they could still be a match if they are equal when compared in lowercase.
                if ((keccak256(bytes(lowercase(land[i].city))) == lowercaseKeywordHash || 
                    keccak256(bytes(lowercase(land[i].district))) == lowercaseKeywordHash)&&land[i].verified==false) {
                    temporary[counter] = land[i];
                    counter++;
                }
            }
        }

        Land[] memory result = new Land[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function searchLands(string memory _keyword) external view returns (Land[] memory) {
        Land[] memory temporary = new Land[](land.length);
        uint counter = 0;
        bytes32 keywordHash = keccak256(abi.encodePacked(_keyword)); // hash the keyword to reduce gas cost
        string memory lowercaseKeyword = lowercase(_keyword);
        bytes32 lowercaseKeywordHash = keccak256(abi.encodePacked(lowercaseKeyword)); // hash the lowercase keyword to reduce gas cost
        for(uint i=0; i<land.length; i++) {
            bytes32 cityHash = keccak256(bytes(land[i].city));
            bytes32 districtHash = keccak256(bytes(land[i].district));
            if(cityHash == keywordHash || districtHash == keywordHash) {
                temporary[counter] = land[i];
                counter++;
            } else if (cityHash.length == keywordHash.length || districtHash.length == keywordHash.length) {
                // If cityHash, districtHash and keywordHash have the same length,
                // they could still be a match if they are equal when compared in lowercase.
                if (keccak256(bytes(lowercase(land[i].city))) == lowercaseKeywordHash || 
                    keccak256(bytes(lowercase(land[i].district))) == lowercaseKeywordHash) {
                    temporary[counter] = land[i];
                    counter++;
                }
            }
        }

        Land[] memory result = new Land[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    // helper function to convert a string to lowercase
    function lowercase(string memory str) internal pure returns (string memory) {
        bytes memory bStr = bytes(str);
        bytes memory bLower = new bytes(bStr.length);
        for (uint i = 0; i < bStr.length; i++) {
            // Uppercase character...
            if ((uint8(bStr[i]) >= 65) && (uint8(bStr[i]) <= 90)) {
                // So we add 32 to make it lowercase
                bLower[i] = bytes1(uint8(bStr[i]) + 32);
            } else {
                bLower[i] = bStr[i];
            }
        }
        return string(bLower);
    }

    function getNonVerifiedUsers()  external view returns (User[] memory) {
        User[] memory temporary = new User[](user.length);
        uint counter = 0;
        for(uint i=0; i<user.length; i++) {
            if(user[i].verified == false) {
                temporary[counter] = user[i];
                counter++;
            }
        }

        User[] memory result = new User[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function getLands()  external view returns (Land[] memory) {
        Land[] memory temporary = new Land[](land.length);
        uint counter = 0;
        for(uint i=0; i<land.length; i++) {
                temporary[counter] = land[i];
                counter++;
        }

        Land[] memory result = new Land[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function getUsers()  external view returns (User[] memory) {
        User[] memory temporary = new User[](user.length);
        uint counter = 0;
        for(uint i=0; i<user.length; i++) {
                temporary[counter] = user[i];
                counter++;
        }

        User[] memory result = new User[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function getInspectors()  external view returns (LandInspector[] memory) {
        LandInspector[] memory temporary = new LandInspector[](landInspector.length);
        uint counter = 0;
        for(uint i=0; i<landInspector.length; i++) {
                temporary[counter] = landInspector[i];
                counter++;
        }

        LandInspector[] memory result = new LandInspector[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    // function getLandSold() external view returns (uint256 landSold) {
    //     for (uint256 i = 0; i < user.length; i++) {
    //         if (user[i].walletAddress == msg.sender) {
    //             return user[i].landSold;
    //         }
    //     }
    // }


    function buyLand(uint256 landId) public payable {
        require(land[landId].verified == true, "Land is not yet verified");
        require(land[landId].forSell == true, "Land is not for sale");
        require(msg.value >0, "Insufficient funds, Please You pay more than 0 ether");

        address previousOwner = land[landId].owner;
        address payable seller = payable(land[landId].owner);

        for (uint256 i = 0; i < user.length; i++) {
            if (user[i].walletAddress == previousOwner) {
                user[i].landSold += 1;
                break;
            }
        }

        seller.transfer(msg.value);
        land[landId].owner = msg.sender;
        lands[landId] = msg.sender;
        land[landId].forSell = false;
    }
}