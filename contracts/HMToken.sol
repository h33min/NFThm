pragma solidity ^0.5.0;
import "@openZeppelin/contracts/utils/Address.sol";
import "@openZeppelin/contracts/math/SafeMath.sol";
import "@openZeppelin/contracts/drafts/Counters.sol";
import "@openZeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openZeppelin/contracts/token/ERC721/ERC721.sol";


contract HMToken is ERC721 {



    address payable public owner;

    mapping(uint256 => address) tokenOwners;
    asset[] public allTokens;


    struct asset {
        uint8 x;
        uint8 y;
        uint8 z;
    }


    constructor() public {
        owner = msg.sender;

    }


    function mint(uint8 _x, uint8 _y, uint8 _z) external payable {

        asset memory newAsset = asset(_x, _y, _z);
        uint tokenId = allTokens.push(newAsset) - 1;
        //token id starts from 0, index of assets array


        _mint(msg.sender, tokenId);
    }

    //ERC721Metadata
    function name() external pure returns (string memory) {
        return "HM TOKEN";
    }

    //ERC721Metadata
    function symbol() external pure returns (string memory) {
        return "HM";
    }



}