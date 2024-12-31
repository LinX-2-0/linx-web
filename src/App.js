import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './containers/AdminDashboard/AdminDashboard';
import EmployeeDashboard from './containers/EmployeeDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/dashboard/*" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;