import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss'; // Import the CSS for styling
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'; // Use only the specific chart component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController,
  ArcElement
} from 'chart.js';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, LineController, ArcElement);

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header> */}
      
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Employee Management</h2>
          <p>Manage employee profiles, roles, and departments.</p>
          <Link to="/admin/employee" className="dashboard-link">Go to Employees</Link>
          {/* Bar chart for Employees by Department */}
          <Bar 
            data={{
              labels: ['HR', 'IT', 'Finance', 'Marketing'],
              datasets: [{
                label: 'Employees by Department',
                data: [15, 30, 10, 20],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              }],
            }} 
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Employees by Department',
                },
              },
            }}
          />
        </div>

        
         <div className="dashboard-card">
          <h2>Attendance & Leaves</h2>
          <p>Track employee attendance and leave requests.</p>
          <Link to="/admin/attendance" className="dashboard-link">View Attendance</Link>
          <Line data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          label: 'Employee Attendance',
                          data: [90, 85, 88, 87, 92, 89],
                          borderColor: '#4BC0C0',
                          fill: false
                        }]
                      }} />
        </div>
        
        <div className="dashboard-card">
          <h2>Payroll Management</h2>
          <p>View and manage salaries, bonuses, and deductions.</p>
          <Link to="/admin/payroll" className="dashboard-link">Manage Payroll</Link>
          <Bar data={{
                            labels: ['Salaries', 'Bonuses', 'Deductions'],
                            datasets: [{
                              label: 'Payroll Breakdown',
                              data: [80, 15, 5],
                              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                            }]
                          }} />
        </div>
        
        <div className="dashboard-card">
          <h2>Reports & Analytics</h2>
          <p>Generate insights and reports on employee performance.</p>
          <Link to="/admin/reports" className="dashboard-link">View Reports</Link>
          <Pie data={
            {
              labels: ['Excellent', 'Good', 'Average', 'Poor'],
              datasets: [{
                data: [40, 35, 20, 5],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              }]
            }
          } />
        </div>
        
        <div className="dashboard-card">
          <h2>Notifications</h2>
          <p>Send announcements or policy updates to employees.</p>
          <Link to="/admin/notifications" className="dashboard-link">Manage Notifications</Link>
          <Doughnut data={{
            labels: ['HR', 'IT', 'Finance', 'Marketing'],
            datasets: [{
              label: 'Notifications Sent',
              data: [5, 8, 3, 10],
              backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
              borderColor: 'rgba(0,0,0,0.1)',
            }]
          }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;