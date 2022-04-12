//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Secret {
    event UpdateSecret(string secret, string changedSecret);

    string private secret;

    constructor(string memory message) {
        secret = message;
    }

    function setGreeting(string memory message) public {
        string memory changedSecret = secret;
        secret = message;
        emit UpdateSecret(secret, changedSecret);
    }
}
