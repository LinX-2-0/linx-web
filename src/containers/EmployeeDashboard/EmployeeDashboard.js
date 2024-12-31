import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeDashboard.scss';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'; // Use specific chart components
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
  ArcElement,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, LineController, ArcElement);

const EmployeeDashboard = () => {
  return (
    <div className="employee-dashboard">
      {/* <header className="dashboard-header">
        <h1>Employee Dashboard</h1>
      </header> */}

      <div className="dashboard-cards">
        {/* Profile */}
        <div className="dashboard-card">
          <h2>Profile</h2>
          <p>View and update your personal and professional details.</p>
          <Link to="/dashboard/profile" className="dashboard-link">Go to Profile</Link>
          <Pie
            data={{
              labels: ['Completed', 'Pending Updates'],
              datasets: [
                {
                  data: [80, 20],
                  backgroundColor: ['#36A2EB', '#FF6384'],
                },
              ],
            }}
          />
        </div>

        {/* Attendance */}
        <div className="dashboard-card">
          <h2>Attendance</h2>
          <p>Track your attendance and leave records.</p>
          <Link to="/dashboard/attendance" className="dashboard-link">View Attendance</Link>
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Attendance (%)',
                  data: [95, 90, 92, 93, 94, 96],
                  borderColor: '#4BC0C0',
                  fill: false,
                },
              ],
            }}
          />
        </div>

        {/* Payroll */}
        <div className="dashboard-card">
          <h2>Payroll</h2>
          <p>View your salary details, deductions, and bonuses.</p>
          <Link to="/dashboard/payroll" className="dashboard-link">View Payroll</Link>
          <Bar
            data={{
              labels: ['Basic Pay', 'Bonuses', 'Deductions'],
              datasets: [
                {
                  label: 'Payroll Details',
                  data: [50000, 10000, 5000],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            }}
          />
        </div>

        {/* Tasks */}
        <div className="dashboard-card">
          <h2>Tasks</h2>
          <p>Manage and track your assigned tasks.</p>
          <Link to="/dashboard/tasks" className="dashboard-link">View Tasks</Link>
          <Doughnut
            data={{
              labels: ['Completed', 'Pending'],
              datasets: [
                {
                  data: [70, 30],
                  backgroundColor: ['#4BC0C0', '#FF6384'],
                },
              ],
            }}
          />
        </div>

        {/* Performance */}
        <div className="dashboard-card">
          <h2>Performance</h2>
          <p>Analyze your performance metrics and feedback.</p>
          <Link to="/dashboard/performance" className="dashboard-link">View Performance</Link>
          <Bar
            data={{
              labels: ['Q1', 'Q2', 'Q3', 'Q4'],
              datasets: [
                {
                  label: 'Performance Score',
                  data: [85, 88, 90, 92],
                  backgroundColor: ['#36A2EB'],
                },
              ],
            }}
          />
        </div>

        {/* Announcements */}
        <div className="dashboard-card">
          <h2>Announcements</h2>
          <p>Stay updated with company news and updates.</p>
          <Link to="/dashboard/announcements" className="dashboard-link">View Announcements</Link>
          <Pie
            data={{
              labels: ['Read', 'Unread'],
              datasets: [
                {
                  data: [60, 40],
                  backgroundColor: ['#FFCE56', '#36A2EB'],
                },
              ],
            }}
          />
        </div>

        {/* Training */}
        <div className="dashboard-card">
          <h2>Training</h2>
          <p>Access your ongoing and completed training modules.</p>
          <Link to="/dashboard/training" className="dashboard-link">View Training</Link>
          <Doughnut
            data={{
              labels: ['Completed', 'In Progress', 'Pending'],
              datasets: [
                {
                  data: [50, 30, 20],
                  backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
                },
              ],
            }}
          />
        </div>

        {/* Support */}
        <div className="dashboard-card">
          <h2>Support</h2>
          <p>Reach out for help with your queries or issues.</p>
          <Link to="/dashboard/support" className="dashboard-link">Get Support</Link>
          <Bar
            data={{
              labels: ['Resolved', 'Pending'],
              datasets: [
                {
                  label: 'Support Tickets',
                  data: [8, 2],
                  backgroundColor: ['#4BC0C0', '#FF6384'],
                },
              ],
            }}
          />
        </div>

        {/* Documents */}
        <div className="dashboard-card">
          <h2>Documents</h2>
          <p>Access and manage your uploaded documents.</p>
          <Link to="/dashboard/documents" className="dashboard-link">View Documents</Link>
          <Line
            data={{
              labels: ['Uploaded', 'Pending'],
              datasets: [
                {
                  label: 'Documents',
                  data: [15, 5],
                  borderColor: '#FF6384',
                  fill: false,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;