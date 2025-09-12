// src/components/TransactionList.jsx
import React from 'react';

// In a real app, this data would come from an API
const mockTransactions = [
  { id: 't1', date: '2025-09-08', description: 'Coffee Shop', amount: -5.75, status: 'Completed' },
  { id: 't2', date: '2025-09-07', description: 'Paycheck', amount: 1200.00, status: 'Completed' },
  { id: 't3', date: '2025-09-06', description: 'Online Order', amount: -89.99, status: 'Pending' },
  { id: 't4', date: '2025-09-05', description: 'Gas Station', amount: -45.30, status: 'Completed' },
];

function TransactionList() {
  // Conditional rendering for the transaction status
  const getStatusStyle = (status) => {
    return status === 'Completed' ? { color: 'green' } : { color: 'orange' };
  };

  return (
    <div>
      <h2>Recent Transactions</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Use .map() to create a table row for each transaction */}
          {mockTransactions.map((transaction) => (
            // Each item in the list needs a unique "key" prop
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              {/* Conditional rendering for the amount color */}
              <td style={transaction.amount > 0 ? { color: 'green' } : { color: 'red' }}>
                {transaction.amount.toFixed(2)}
              </td>
              <td style={getStatusStyle(transaction.status)}>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;