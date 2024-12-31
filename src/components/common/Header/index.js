import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling
import { Image } from 'react-bootstrap';
import Logo from '../../../Assets/Images/Logo.png'

const Header = ({ userType, userName }) => {
  return (
    <header className="common-header">
      <div className="header-content">
        <div className="logo">
          {/* <img href='../../../../public/Logo.png' alt='LinX'/> */}
          <Image src={Logo} height={50} width={50} />
        </div>

        {/* <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {userType === 'admin' ? (
              <>
                <li>
                  <Link to="/admin/employee">Employees</Link>
                </li>
                <li>
                  <Link to="/admin/payroll">Payroll</Link>
                </li>
                <li>
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard/attendance">Attendance</Link>
                </li>
                <li>
                  <Link to="/dashboard/tasks">Tasks</Link>
                </li>
              </>
            )}
          </ul>
        </nav> */}

        <div className="user-info">
          <span>Welcome, {userName}</span>
          <Link to="/logout" className="logout-button">Logout</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;