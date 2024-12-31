import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminTabs from './AdminTabs.js';
import { adminModules } from './routeConfig.js';
import Header from '../../components/common/Header/index.js';

const AdminDashboard = () => {
  console.log("ADMIN MODULES",adminModules)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header userType="admin" userName="John Doe" /> {/* Example props */}
      <Routes>
        <Route path="/" element={<Navigate to="/admin/home" />} />
        <Route path="/*" element={<AdminTabs />}>
          {adminModules.map((module) => (
            <Route
              key={module.path}
              path={module.path + '/*'}
              element={<module.component />}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AdminDashboard;