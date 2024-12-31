import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EmployeeTabs from './EmployeeTabs.js';
import { employeeModules } from '../AdminDashboard/routeConfig.js';
import Header from '../../components/common/Header/index.js';

const EmployeeDashboard = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Header userType="employee" userName="Jane Smith" /> {/* Example props */}
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/home" />} />
      <Route path="/*" element={<EmployeeTabs />}>
        {employeeModules.map((module) => (
          <Route
            key={module.path}
            path={module.path + '/*'}
            element={<module.component />}
          />
        ))}
      </Route>
    </Routes>
  </Suspense>
  )
}

export default EmployeeDashboard