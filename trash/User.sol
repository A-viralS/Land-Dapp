//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {

    struct User {
        uint256 userId;
        address walletAddress;
        string emailAddress;
        string firstName;
        string lastName;
        string contact;
        string residentialAddress;
        string ghanaCard;
        uint256 landSold;
        bool verified;
    }

    User[] public user;
    mapping (uint256 => address) public users;

    event AddUser(address recipient, uint256 taskId);

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

}