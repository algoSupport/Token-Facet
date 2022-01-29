// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Faucet is Ownable{

    ///
    // Modifier to execute the function just after the specified time
    ///
    modifier onlyAfter(uint _time) {
        require(block.timestamp >= _time , "You need to wait the redeption time");
        _;
    }

    // Events
    // event indicating who asked for ERC20 tokens
    event FundsRetrieved(address indexed who, uint256 amount);

    // Import the ERC20 contract used on the Faucet
    IERC20 public ERC20Contract;
    // Keep a track of the available amount of tokens
    uint256 public availableAmount;
    // Set a max retrieval 
    uint256 public allowed_retrieval;
    // mapping to track if the user already requested 
    mapping(address=>uint256) lockList;

    constructor(address erc20token){
        ERC20Contract = IERC20(erc20token);
        allowed_retrieval = 10*10**18;
    }

    // add ERC20 tokens into the Faucet contract
    function addFunds(uint256 amount) public onlyOwner{
        require(amount > 0);
        availableAmount+=amount;
        ERC20Contract.transferFrom(msg.sender,address(this), amount);
    }

    // ask for ERC20 contracts 
    function askForTokens() public onlyAfter(lockList[msg.sender]){
        require(availableAmount > 0, "no more tokens on the contract");

        availableAmount-=allowed_retrieval;
        ERC20Contract.transfer(msg.sender, allowed_retrieval);

        lockList[msg.sender] = block.timestamp + 10 minutes;
        emit FundsRetrieved(msg.sender, allowed_retrieval);
    }

    function removeFunds() public onlyOwner{
        require(availableAmount>0);
        ERC20Contract.transfer(msg.sender,availableAmount);
        availableAmount=0;
    }

    function setAllowedRetrieval(uint256 amount) public onlyOwner{
        allowed_retrieval = amount;
    }

}