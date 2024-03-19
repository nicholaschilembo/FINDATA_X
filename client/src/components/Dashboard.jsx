// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>FINDataX Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;