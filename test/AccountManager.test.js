// test/AccountManager.test.js
const AccountManager = artifacts.require("AccountManager");

contract("AccountManager", (accounts) => {
  let instance;

  beforeEach(async () => {
    instance = await AccountManager.new();
  });

  it("should create a new account", async () => {
    await instance.createAccount("Test Account", 1000);
    const account = await instance.getAccount(0);
    assert.equal(account.name, "Test Account");
    assert.equal(account.balance, 1000);
  });

  // Add more tests here
});