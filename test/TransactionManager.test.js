// test/TransactionManager.test.js
const TransactionManager = artifacts.require("TransactionManager");

contract("TransactionManager", (accounts) => {
  let instance;

  beforeEach(async () => {
    instance = await TransactionManager.new();
  });

  it("should add a new transaction", async () => {
    await instance.addTransaction(
      accounts[0],
      accounts[1],
      100,
      "Test Transaction"
    );
    const transactions = await instance.getTransactions();
    assert.equal(transactions.length, 1);
  });

  // Add more tests here
});