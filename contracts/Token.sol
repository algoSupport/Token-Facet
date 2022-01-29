// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("ismaBitcoin", "ismaBTC") {
        _mint(msg.sender, 21000000 * 10 ** decimals());
    }
}