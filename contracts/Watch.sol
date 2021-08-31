// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

/**
 * @title Watch
 * Watch - a contract for my non-fungible wtches.
 */
contract Watch is ERC721Tradable {
    constructor(address _proxyRegistryAddress)
        ERC721Tradable("Generative Watches", "GENWATCH", _proxyRegistryAddress)
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "ipfs://QmeNPC6Wrtq8SHpu96VuF8m6Rjd3jMbyRvbhQcfxBPi6uT/";
    }

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmWVqv7R7RS8Wn12h1u2qNnu6voT6rPK1UMyT4shrgLDbR";
    }

    function bulkMint(address toAddress, uint256 fromTokenId, uint256 toTokenId) public onlyOwner {
        for (uint256 i = fromTokenId; i <= toTokenId; ++i) {
            _mint(toAddress, i);
        }
    }

    function mintToken(address toAddress, uint256 tokenId) public onlyOwner {
        _mint(toAddress, tokenId);
    }
}
