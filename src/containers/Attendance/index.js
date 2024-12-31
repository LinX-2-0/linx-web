import React, { useState, useEffect } from 'react';
import './Attendance.css';
import { Card } from 'react-bootstrap';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filter, setFilter] = useState({ search: '', date: '' });

  // Example attendance data (can be replaced with API call)
  useEffect(() => {
    setAttendanceData([
      { id: 1, name: 'John Doe', date: '2024-12-10', status: 'Present' },
      { id: 2, name: 'Jane Smith', date: '2024-12-10', status: 'Absent' },
      { id: 3, name: 'Alice Johnson', date: '2024-12-09', status: 'Late' },
      { id: 4, name: 'Robert Brown', date: '2024-12-09', status: 'Present' },
    ]);
  }, []);

  // Filtered data
  const filteredData = attendanceData.filter(
    (record) =>
      (filter.search === '' ||
        record.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        record.id.toString().includes(filter.search)) &&
      (filter.date === '' || record.date === filter.date)
  );

  return (
    <Card className="attendance-tab">
      <h2>Employee Attendance</h2>
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by Name or ID"
          value={filter.search}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, search: e.target.value }))
          }
          className="filter-input"
        />
        <input
          type="date"
          value={filter.date}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, date: e.target.value }))
          }
          className="filter-input"
        />
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.date}</td>
                <td>{record.status}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default Attendance;