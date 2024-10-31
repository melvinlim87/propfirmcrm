import React, { useState, useEffect } from 'react';
import { Settings, DollarSign, Users, AlertCircle, Upload } from 'lucide-react';
import LogoUpload from '../components/LogoUpload';

// Mock data - replace with actual API calls
const mockAdminData = {
  totalTraders: 150,
  activeChallenges: 75,
  totalDeposits: 37500,
  pendingPayouts: 15000,
};

const AdminPanel: React.FC = () => {
  const [adminData, setAdminData] = useState(mockAdminData);

  useEffect(() => {
    // Fetch real data from API here
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Users className="text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Total Traders</h2>
          </div>
          <p className="text-2xl font-bold mt-2">{adminData.totalTraders}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Settings className="text-green-500 mr-2" />
            <h2 className="text-lg font-semibold">Active Challenges</h2>
          </div>
          <p className="text-2xl font-bold mt-2">{adminData.activeChallenges}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <DollarSign className="text-yellow-500 mr-2" />
            <h2 className="text-lg font-semibold">Total Deposits</h2>
          </div>
          <p className="text-2xl font-bold mt-2">${adminData.totalDeposits}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <AlertCircle className="text-red-500 mr-2" />
            <h2 className="text-lg font-semibold">Pending Payouts</h2>
          </div>
          <p className="text-2xl font-bold mt-2">${adminData.pendingPayouts}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Company Logo Management</h2>
        <LogoUpload />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Admin Actions</h2>
        <div className="space-y-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Manage Trader Accounts
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Review Challenge Results
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
            Process Payouts
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
            System Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;