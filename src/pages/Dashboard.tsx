import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, AlertCircle, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d'];

const Dashboard: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState('MT4-12345');
  const [traderData, setTraderData] = useState({
    accountBalance: 5250,
    equity: 5300,
    availableMargin: 4800,
    totalDeposits: 250,
    profitPercentage: 3.5,
    maxDrawdown: 1.2,
    profitTarget: 5,
    challengeStatus: 'In Progress',
    challengeStartDate: '2024-03-01',
  });
  const [tradeHistory, setTradeHistory] = useState([
    { date: '2024-03-01', profit: 50 },
    { date: '2024-03-02', profit: -20 },
    { date: '2024-03-03', profit: 80 },
    { date: '2024-03-04', profit: 30 },
    { date: '2024-03-05', profit: -10 },
  ]);
  const [tradedPairs, setTradedPairs] = useState([
    { name: 'EURUSD', value: 40 },
    { name: 'GBPUSD', value: 30 },
    { name: 'USDJPY', value: 20 },
    { name: 'AUDUSD', value: 10 },
  ]);
  const [profitablePairs, setProfitablePairs] = useState([
    { name: 'EURUSD', value: 50 },
    { name: 'GBPUSD', value: 30 },
    { name: 'USDJPY', value: 20 },
  ]);
  const [lossPairs, setLossPairs] = useState([
    { name: 'AUDUSD', value: 60 },
    { name: 'USDCAD', value: 40 },
  ]);

  useEffect(() => {
    // Fetch real data from API here
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Passed':
        return 'text-green-500';
      case 'Failed':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Trader Dashboard
      </h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
        <div className="bg-white p-4 rounded-lg">
          <label htmlFor="account-select" className="block text-sm font-medium text-gray-700 mb-2">
            Select MT4/5 Challenge Account:
          </label>
          <select
            id="account-select"
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="MT4-12345">MT4-12345</option>
            <option value="MT5-67890">MT5-67890</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center">
              <DollarSign className="text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold">Account Balance</h2>
            </div>
            <p className="text-2xl font-bold mt-2">${traderData.accountBalance}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center">
              <TrendingUp className="text-green-500 mr-2" />
              <h2 className="text-lg font-semibold">Equity</h2>
            </div>
            <p className="text-2xl font-bold mt-2">${traderData.equity}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="text-yellow-500 mr-2" />
              <h2 className="text-lg font-semibold">Available Margin</h2>
            </div>
            <p className="text-2xl font-bold mt-2">${traderData.availableMargin}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center">
              <DollarSign className="text-purple-500 mr-2" />
              <h2 className="text-lg font-semibold">Total Deposits</h2>
            </div>
            <p className="text-2xl font-bold mt-2">${traderData.totalDeposits}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Challenge Progress</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Current Profit</p>
              <p className="text-2xl font-bold text-green-500">{traderData.profitPercentage}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Max Drawdown</p>
              <p className="text-2xl font-bold text-red-500">{traderData.maxDrawdown}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Profit Target</p>
              <p className="text-2xl font-bold">{traderData.profitTarget}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className={`text-2xl font-bold ${getStatusColor(traderData.challengeStatus)}`}>
                {traderData.challengeStatus}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Start Date</p>
              <p className="text-2xl font-bold">{traderData.challengeStartDate}</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${(traderData.profitPercentage / traderData.profitTarget) * 100}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-600 text-center">
            {traderData.profitPercentage}% / {traderData.profitTarget}% Profit Target
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Profit/Loss Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={tradeHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="profit" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Traded Pairs</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tradedPairs}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {tradedPairs.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Most Profitable Pairs</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={profitablePairs}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {profitablePairs.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Most Loss-Making Pairs</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={lossPairs}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {lossPairs.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;