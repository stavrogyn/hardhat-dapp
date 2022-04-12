//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Secret {
    event UpdateSecret(string secret, string changedSecret);

    string private secret;

    constructor(string memory message) {
        secret = message;
    }

    function getSecret() public view returns (string memory) {
        return secret;
    }

    function setSecret(string memory message) public {
        string memory changedSecret = secret;
        secret = message;
        emit UpdateSecret(secret, changedSecret);
    }
}
