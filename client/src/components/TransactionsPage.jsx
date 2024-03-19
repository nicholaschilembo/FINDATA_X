// TransactionsPage.jsx
import React, { useState, useEffect } from 'react';
import { getTransactions, validateTransaction } from './utils/blockchain';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const txns = await getTransactions();
    setTransactions(txns);
  };

  const handleValidateTransaction = async (txn) => {
    const isValid = await validateTransaction(txn);

    if (isValid) {
      // Execute smart contract logic
      console.log('Transaction is valid, executing smart contract');
    } else {
      alert('Invalid transaction');
    }
  };

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id}>
            <span>{txn.description}</span>
            <button onClick={() => handleValidateTransaction(txn)}>
              Validate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;