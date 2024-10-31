import React, { useState, useEffect } from 'react';
import { Table, User, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

// Mock data - replace with actual API calls
const mockTraders = [
  { id: 1, name: 'John Doe', accountBalance: 5250, profitPercentage: 3.5, status: 'In Progress' },
  { id: 2, name: 'Jane Smith', accountBalance: 4800, profitPercentage: -1.2, status: 'Failed' },
  { id: 3, name: 'Bob Johnson', accountBalance: 5500, profitPercentage: 6.2, status: 'Passed' },
];

const TraderList: React.FC = () => {
  const [traders, setTraders] = useState(mockTraders);

  useEffect(() => {
    // Fetch real data from API here
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Trader List</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trader</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Balance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit/Loss</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {traders.map((trader) => (
              <tr key={trader.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{trader.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
                    <div className="text-sm text-gray-900">{trader.accountBalance}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center ${trader.profitPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {trader.profitPercentage >= 0 ? <TrendingUp className="h-5 w-5 mr-1" /> : <TrendingDown className="h-5 w-5 mr-1" />}
                    <div className="text-sm font-medium">{trader.profitPercentage}%</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${trader.status === 'Passed' ? 'bg-green-100 text-green-800' : 
                      trader.status === 'Failed' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'}`}>
                    {trader.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TraderList;