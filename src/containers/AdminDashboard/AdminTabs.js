import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './admintabs.css';

const AdminTabs = () => {
  const tabs = [
    { path: '/admin/profile', label: 'Profile' },
    { path: '/admin/home', label: 'Dashboard' },
    { path: '/admin/employee', label: 'Employees' },
    { path: '/admin/attendance', label: 'Attendance' },
    { path: '/admin/payroll', label: 'Payroll' },

  ];

  return (
    <div className="sidebar_container">
      {/* Sidebar */}
      <nav className="sidebar_nav">
        <ul className="sidebar_list">
          {tabs.map((tab) => (
            <li key={tab.path} className="sidebar_item">
              <NavLink
                to={tab.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content_area">
        <Outlet /> {/* Nested routes content */}
      </div>
    </div>
  );
};

export default AdminTabs;