//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//herencia de ERC20
contract KevCoin is ERC20 {
    // llamo a constructor de ERC20
    constructor(uint256 initialSupply) ERC20("KevCoin", "Kev") {
        // _mint crear nuevos token que no existen y se lo asocia a alguien
        _mint(msg.sender, initialSupply);
    }
}
