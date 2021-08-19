// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract Creature is ERC721Tradable {
    constructor(address _proxyRegistryAddress)
        ERC721Tradable("Generative Watches", "GW", _proxyRegistryAddress)
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "ipfs://QmeNPC6Wrtq8SHpu96VuF8m6Rjd3jMbyRvbhQcfxBPi6uT/";
    }

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmWVqv7R7RS8Wn12h1u2qNnu6voT6rPK1UMyT4shrgLDbR";
    }
}
