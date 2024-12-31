import React from 'react';
import './Training.css';

const Training = () => {
  const trainingSessions = [
    {
      name: 'React Basics',
      date: 'Dec 20, 2024',
      duration: '3 Hours',
      status: 'Completed',
    },
    {
      name: 'Advanced JavaScript',
      date: 'Dec 25, 2024',
      duration: '4 Hours',
      status: 'Upcoming',
    },
    {
      name: 'Spring Boot Introduction',
      date: 'Jan 5, 2025',
      duration: '5 Hours',
      status: 'Upcoming',
    },
    {
      name: 'AWS Fundamentals',
      date: 'Nov 30, 2024',
      duration: '3 Hours',
      status: 'Completed',
    },
  ];

  return (
    <div className="training-container">
      <h2 className="training-header">Training Programs</h2>
      <table className="training-table">
        <thead>
          <tr>
            <th>Training Name</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trainingSessions.map((session, index) => (
            <tr key={index} className={session.status === 'Upcoming' ? 'upcoming' : 'completed'}>
              <td>{session.name}</td>
              <td>{session.date}</td>
              <td>{session.duration}</td>
              <td>{session.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Training;