//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract LandRegistrationSystem {
    struct Land {
        uint landId;
        string city;
        string district;
        string state;
        address owner;
        uint  marketValue;
        uint size;
        string landDocument;
        bool verified;
        bool forSell;
    }

    struct User {
        uint userId;
        address walletAddress;
        string emailAddress;
        string firstName;
        string lastName;
        string contact;
        string residentialAddress;
        string ghanaCard;
        uint landSold;
        bool verified;
    }

    struct LandInspector {
        uint inspectorId;
        address walletAddress;
        string district;
        string city;
        uint verifiedUser;
        uint verifiedLand;
    }

    Land[] private land;
    User[] private user;
    LandInspector[] private landInspector;

    address owner;
    mapping (uint => address) public users;
    mapping (uint => address) public landInspectors;
    mapping (uint => address) public lands; // use propertyNumber as primary key

    event LandSold(address indexed _seller, address indexed _buyer, uint _value);
    event AddLand(address recipient, uint taskId);
    event AddUser(address recipient, uint taskId);
    event AddlandInspector(address recipient, uint taskId);


    constructor() {
        owner = msg.sender;
    }

    modifier onlyLandOwner(uint landId) {
        require(lands[landId] == msg.sender, "You are not the land owner.");
        _;
    }

    // modifier onlyLandInspector() {
    //     require(landInspectors[msg.sender].walletAddress == msg.sender, "You are not a land inspector.");
    //     _;
    // }

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

    // onlyLandInspector

    function verifyUser(uint inspectorId, uint userId) external {
        user[userId].verified = true;
        // require(users[userId].walletAddress == userAddress, "User not found");
        landInspector[inspectorId].verifiedUser++;
    }

    function createLand(string memory _city, string memory _district, string memory _state, string memory _propertyNumber, uint _marketValue, uint _size, string memory _landDocument) public {
        require(bytes(_city).length > 0, "City is required");
        require(bytes(_district).length > 0, "District is required");
        require(bytes(_state).length > 0, "State is required");
        require(bytes(_propertyNumber).length > 0, "Property number is required");
        require(_marketValue > 0, "Market value is required and must be greater than zero");
        require(_size > 0, "Size is required and must be greater than zero");
        require(bytes(_landDocument).length > 0, "Land document is required");
        uint landId = land.length;
        land.push( Land(landId, _city, _district, _state, msg.sender, _marketValue, _size, _landDocument, false, false));
        lands[landId] = msg.sender;
        emit AddLand(msg.sender, landId);
        // add propertyNumber to user's list of owned lands
    }


    function getLandDetails(uint landId) public view returns (string memory, string memory, string memory, uint, uint, bool) {
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

    function verifyLand(uint inspectorId, uint landId) public  {
        // require(lands[landId] == msg.sender, "You are not the land owner.");
        land[landId].verified = true;
        landInspector[inspectorId].verifiedLand++;
    }

    function setLandForSale(uint landId) public onlyLandOwner(landId) {
        land[landId].forSell = true;
    }

    function cancelSale(uint landId) public onlyLandOwner(landId) {
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

    function buyLand(uint  landId) public payable {
        require(land[landId].verified == true, "Land is not yet verified");
        require(land[landId].forSell == true, "Land is not for sale");
        require(msg.value >0, "Insufficient funds, Please You pay more than 0 ether");

        address payable seller = payable(land[landId].owner);
        seller.transfer(msg.value);
        land[landId].owner = msg.sender;
        lands[landId] = msg.sender;
        land[landId].forSell = false;
    }

}