import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Award } from 'lucide-react';

// Mock data - replace with actual API calls
const mockScalingData = {
  currentStage: 'Evaluation',
  accountBalance: 5250,
  totalDeposits: 250,
  profitPercentage: 3.5,
  maxDrawdown: 1.2,
  profitTarget: 5,
  profitSplit: 40,
  timeInStage: 15, // days
  stages: [
    { name: 'Evaluation', deposit: 250, multiplier: 20, accountSize: 5000, profitSplit: 40 },
    { name: 'Funded Stage 1', deposit: 500, multiplier: 20, accountSize: 10000, profitSplit: 40 },
    { name: 'Funded Stage 2', deposit: 750, multiplier: 30, accountSize: 22500, profitSplit: 50 },
    { name: 'Funded Stage 3', deposit: 1250, multiplier: 50, accountSize: 62500, profitSplit: 60 },
    { name: 'Funded Stage 4', deposit: 2250, multiplier: 80, accountSize: 180000, profitSplit: 70 },
    { name: 'Funded Stage 5', deposit: 4250, multiplier: 120, accountSize: 510000, profitSplit: 80 },
    { name: 'Funded Stage 6', deposit: 8250, multiplier: 180, accountSize: 1485000, profitSplit: 90 },
  ],
};

const ScalingPlan: React.FC = () => {
  const [scalingData, setScalingData] = useState(mockScalingData);

  useEffect(() => {
    // Fetch real data from API here
  }, []);

  const currentStageIndex = scalingData.stages.findIndex(stage => stage.name === scalingData.currentStage);
  const nextStage = scalingData.stages[currentStageIndex + 1];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Scaling Plan</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Current Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Current Stage</p>
            <p className="text-xl font-bold">{scalingData.currentStage}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Account Balance</p>
            <p className="text-xl font-bold">${scalingData.accountBalance}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Deposits</p>
            <p className="text-xl font-bold">${scalingData.totalDeposits}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Profit Split</p>
            <p className="text-xl font-bold">{scalingData.profitSplit}%</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">Progress to Next Stage</p>
          <div className="mt-2 bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${(scalingData.profitPercentage / scalingData.profitTarget) * 100}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {scalingData.profitPercentage}% / {scalingData.profitTarget}% Profit Target
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Next Stage</h2>
        {nextStage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Stage Name</p>
              <p className="text-xl font-bold">{nextStage.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Required Deposit</p>
              <p className="text-xl font-bold">${nextStage.deposit}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Account Size</p>
              <p className="text-xl font-bold">${nextStage.accountSize}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Profit Split</p>
              <p className="text-xl font-bold">{nextStage.profitSplit}%</p>
            </div>
          </div>
        ) : (
          <p>Congratulations! You've reached the highest stage.</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Scaling Plan Stages</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deposit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Multiplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit Split</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scalingData.stages.map((stage, index) => (
                <tr key={index} className={stage.name === scalingData.currentStage ? 'bg-blue-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stage.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${stage.deposit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stage.multiplier}x</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${stage.accountSize}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stage.profitSplit}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScalingPlan;