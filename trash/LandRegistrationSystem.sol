//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Land.sol";
import "./User.sol";
import "./LandInspector.sol";


contract LandRegistrationSystem is Land, User, LandInspector {

    address owner;
    
    // mapping (uint256 => address) public users;
    // mapping (uint256 => address) public landInspectors;
    // mapping (uint256 => address) public lands; // use propertyNumber as primary key

    event LandSold(address indexed _seller, address indexed _buyer, uint256 _value);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyLandOwner(uint256 landId) {
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

    function buyLand(uint256 landId) public payable {
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
