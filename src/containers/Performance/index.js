import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './Performance.css'; // Add a CSS/SCSS file for styling

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
  
const Performance = () => {
  // Example performance data
  const monthlyPerformanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [20, 25, 22, 30, 28, 35, 40],
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const skillProficiencyData = {
    labels: ['Communication', 'Technical Skills', 'Teamwork', 'Problem Solving'],
    datasets: [
      {
        label: 'Proficiency',
        data: [85, 90, 80, 75],
        backgroundColor: ['#1abc9c', '#3498db', '#e74c3c', '#f1c40f'],
      },
    ],
  };

  return (
    <div className="performance-page">
      <h1 className="page-title">Performance Overview</h1>

      <div className="chart-container">
        <h2>Monthly Performance</h2>
        <Line 
          data={monthlyPerformanceData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
            },
          }}
        />
      </div>

      <div className="chart-container">
        <h2>Skill Proficiency</h2>
        <Bar 
          data={skillProficiencyData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: 'Proficiency (%)',
                },
              },
            },
          }}
        />
      </div>

      <div className="summary-section">
        <h2>Performance Summary</h2>
        <p>
          Based on recent evaluations, your performance has been consistently improving. 
          Keep up the great work in completing tasks efficiently and enhancing your skills.
        </p>
      </div>
    </div>
  );
};

export default Performance;