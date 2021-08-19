// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC1155Tradable.sol";

contract CreatureAccessory is ERC1155Tradable {
    constructor(address _proxyRegistryAddress)
        ERC1155Tradable(
            "Generative Watches",
            "GW",
            "ipfs://QmXe2PLD4tJxssLbyWqFBsew1Jgxpx7r6Ce8NnNEf4xHPd/{id}.json",
            _proxyRegistryAddress
        ) {}

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmWVqv7R7RS8Wn12h1u2qNnu6voT6rPK1UMyT4shrgLDbR";
    }
}
