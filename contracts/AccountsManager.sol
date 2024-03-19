// AccountManager.sol
pragma solidity ^0.8.0;

contract AccountManager {
    struct Account {
        uint256 id;
        address owner;
        string name;
        uint256 balance;
        bool isValid;
    }

    mapping(uint256 => Account) public accounts;
    uint256 public accountCount;

    event AccountCreated(uint256 indexed id, address indexed owner, string name, uint256 balance);
    event AccountValidated(uint256 indexed id, bool isValid);

    modifier onlyOwner(uint256 _id) {
        require(accounts[_id].owner == msg.sender, "Only the account owner can perform this action.");
        _;
    }

    function createAccount(string memory _name, uint256 _balance) public {
        accounts[accountCount] = Account(accountCount, msg.sender, _name, _balance, false);
        emit AccountCreated(accountCount, msg.sender, _name, _balance);
        accountCount++;
    }

    function validateAccount(uint256 _id) public onlyOwner(_id) {
        accounts[_id].isValid = true;
        emit AccountValidated(_id, true);
    }

    function getAccount(uint256 _id) public view returns (Account memory) {
        return accounts[_id];
    }
}