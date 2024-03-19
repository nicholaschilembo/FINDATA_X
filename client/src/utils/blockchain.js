// blockchain.js
import Web3 from 'web3';
import TransactionManagerContract from '../../../contracts/TransactionManager.json';
import AccountManagerContract from '../../../contracts/AccountManager.json';

// Initialize Web3 provider
const provider = new Web3.providers.HttpProvider('https://your-blockchain-node.com');
const web3 = new Web3(provider);

// Contract instances
const transactionManagerInstance = new web3.eth.Contract(
  TransactionManagerContract.abi,
  TransactionManagerContract.networks[42].address // Replace with your network ID
);

const accountManagerInstance = new web3.eth.Contract(
  AccountManagerContract.abi,
  AccountManagerContract.networks[42].address // Replace with your network ID
);

// Fetch transactions from the blockchain
export const getTransactions = async () => {
  const transactions = await transactionManagerInstance.methods.getTransactions().call();
  return transactions;
};

// Validate a transaction
export const validateTransaction = async (transaction) => {
  const isValid = await transactionManagerInstance.methods.validateTransaction(transaction).call();
  return isValid;
};

// Fetch accounts from the blockchain
export const getAccounts = async () => {
  const accounts = await accountManagerInstance.methods.getAccounts().call();
  return accounts;
};

// Validate an account
export const validateAccount = async (account) => {
  const isValid = await accountManagerInstance.methods.validateAccount(account).call();
  return isValid;
};