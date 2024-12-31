/* eslint-disable */
import React from 'react'; // Add this import statement

export const adminModules = [
    { path: 'employee', component: React.lazy(() => import('../Employee')) },
    { path: 'attendance', component: React.lazy(() => import('../Attendance')) },
    { path: 'payroll', component: React.lazy(() => import('../Payroll')) },
    { path: 'home', component: React.lazy(() => import('../Dashboard')) },
    { path: 'profile', component: React.lazy(() => import('../Profile')) },


];

export const employeeModules = [
    { path: 'profile', component: React.lazy(() => import('../Profile')) },
    { path: 'attendance', component: React.lazy(() => import('../Attendance')) },
    { path: 'payroll', component: React.lazy(() => import('../Payroll')) },
    { path: 'tasks', component: React.lazy(() => import('../Tasks')) },
    { path: 'performance', component: React.lazy(() => import('../Performance')) },
    { path: 'announcements', component: React.lazy(() => import('../Announcements')) },
    { path: 'training', component: React.lazy(() => import('../Training')) },
    { path: 'support', component: React.lazy(() => import('../Support')) },
    { path: 'documents', component: React.lazy(() => import('../Documents')) },
    { path: 'home', component: React.lazy(() => import('../EmployeeDashboard/EmployeeDashboard')) },

];
