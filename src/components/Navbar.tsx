import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Users, Settings, TrendingUp, BarChart2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <BarChart2 size={32} className="text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">Prop Firm Capital</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
              <BarChart className="mr-1" /> Dashboard
            </Link>
            <Link to="/traders" className="flex items-center text-gray-600 hover:text-blue-600">
              <Users className="mr-1" /> Traders
            </Link>
            <Link to="/scaling-plan" className="flex items-center text-gray-600 hover:text-blue-600">
              <TrendingUp className="mr-1" /> Scaling Plan
            </Link>
            <Link to="/admin" className="flex items-center text-gray-600 hover:text-blue-600">
              <Settings className="mr-1" /> Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;