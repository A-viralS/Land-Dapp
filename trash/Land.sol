//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Land {

    struct Land {
        uint256 landId;
        string city;
        string district;
        string state;
        address owner;
        uint256 marketValue;
        string propertyNumber;
        uint256 size;
        string landDocument;
        bool verified;
        bool forSell;
    }

    Land[] public land;
    mapping (uint256 => address) public lands; // use propertyNumber as primary key

    event AddLand(address recipient, uint256 taskId);

    function createLand(string memory  _city, string memory  _district, string memory  _state, string memory  _propertyNumber, uint256 _marketValue, uint256 _size, string memory  _landDocument) public {
        require(bytes(_city).length > 0, "City is required");
        require(bytes(_district).length > 0, "District is required");
        require(bytes(_state).length > 0, "State is required");
        require(bytes(_propertyNumber).length > 0, "Property number is required");
        require(_marketValue > 0, "Market value is required and must be greater than zero");
        require(_size > 0, "Size is required and must be greater than zero");
        require(bytes(_landDocument).length > 0, "Land document is required");
        uint256 landId = land.length;
        land.push( Land(landId, _city, _district, _state, msg.sender, _marketValue, _propertyNumber, _size, _landDocument, false, false));
        lands[landId] = msg.sender;
        emit AddLand(msg.sender, landId);
        // add propertyNumber to user's list of owned lands
    }

    function getLandDetails(uint256 landId) public view returns (string memory , string memory , string memory , uint256, uint256, bool) {
        require(land[landId].verified == true, "Land is not yet verified");
        return (land[landId].city, land[landId].district, land[landId].state, land[landId].marketValue, land[landId].size, land[landId].forSell);
    }
}
