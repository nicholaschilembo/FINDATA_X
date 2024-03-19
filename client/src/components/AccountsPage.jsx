// AccountsPage.jsx
import React, { useState, useEffect } from 'react';
import { getAccounts, validateAccount } from './utils/blockchain';

const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    const accts = await getAccounts();
    setAccounts(accts);
  };

  const handleValidateAccount = async (account) => {
    const isValid = await validateAccount(account);

    if (isValid) {
      // Execute smart contract logic
      console.log('Account is valid, executing smart contract');
    } else {
      alert('Invalid account');
    }
  };

  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            <span>{account.name}</span>
            <button onClick={() => handleValidateAccount(account)}>
              Validate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountsPage;