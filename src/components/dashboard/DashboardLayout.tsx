import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import Overview from './pages/Overview';
import IrrigationControl from './pages/IrrigationControl';
import Analytics from './pages/Analytics';
import FieldMonitoring from './pages/FieldMonitoring';
import Schedules from './pages/Schedules';
import Alerts from './pages/Alerts';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/irrigation" element={<IrrigationControl />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/monitoring" element={<FieldMonitoring />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}