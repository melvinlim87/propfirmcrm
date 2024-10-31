import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TraderList from './pages/TraderList';
import AdminPanel from './pages/AdminPanel';
import ScalingPlan from './pages/ScalingPlan';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/traders" element={<TraderList />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/scaling-plan" element={<ScalingPlan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;