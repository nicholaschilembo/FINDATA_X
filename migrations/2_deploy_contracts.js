// migrations/2_deploy_contracts.js
const TransactionManager = artifacts.require("TransactionManager");
const AccountManager = artifacts.require("AccountManager");

module.exports = function (deployer) {
  deployer.deploy(TransactionManager).then(() => {
    return deployer.deploy(AccountManager);
  });
};