//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandInspector {

    struct LandInspector {
        uint256  inspectorId;
        address walletAddress;
        string district;
        string city;
        uint256  verifiedUser;
        uint256  verifiedLand;
    }

    LandInspector[] public landInspector;
    mapping (uint256 => address) public landInspectors;

    event AddlandInspector(address recipient, uint256  taskId);

    function createLandInspector(address _walletAddress, string memory  _district, string memory _city) public {
        require(bytes(_district).length > 0, "District is required");
        require(bytes(_city).length > 0, "City is required");
        require(_walletAddress != address(0), "Address is required");
        uint landInspectorId = landInspector.length;
        landInspector.push( LandInspector(landInspectorId, _walletAddress, _district, _city, 0, 0));
        landInspectors[landInspectorId] = _walletAddress;
        emit AddlandInspector(_walletAddress, landInspectorId);
    }

}
