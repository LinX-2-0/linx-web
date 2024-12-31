import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './employeetabs.css';

const EmployeeTabs = () => {
  const tabs = [
    { path: '/dashboard/profile', label: 'Profile' },
    { path: '/dashboard/home', label: 'Dashboard' },
    { path: '/dashboard/attendance', label: 'Attendance' },
    { path: '/dashboard/tasks', label: 'Tasks' },
    { path: '/dashboard/performance', label: 'Performance' },
    { path: '/dashboard/announcements', label: 'Announcements' },
    { path: '/dashboard/training', label: 'Training' },
    { path: '/dashboard/support', label: 'Support' },
    { path: '/dashboard/documents', label: 'Documents' },

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

export default EmployeeTabs;