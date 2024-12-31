import React, { useState, useEffect } from 'react';
import './Payroll.css';
import { Card } from 'react-bootstrap';

const Payroll = () => {
  const [payrollData, setPayrollData] = useState([]);
  const [filter, setFilter] = useState({ search: '', date: '' });

  // Example payroll data (replace with API call)
  useEffect(() => {
    setPayrollData([
      { id: 1, name: 'John Doe', salary: 50000, payDate: '2024-12-01', status: 'Paid' },
      { id: 2, name: 'Jane Smith', salary: 60000, payDate: '2024-12-05', status: 'Unpaid' },
      { id: 3, name: 'Alice Johnson', salary: 45000, payDate: '2024-12-10', status: 'Paid' },
      { id: 4, name: 'Robert Brown', salary: 55000, payDate: '2024-12-15', status: 'Unpaid' },
    ]);
  }, []);

  // Filtered data
  const filteredData = payrollData.filter(
    (record) =>
      (filter.search === '' ||
        record.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        record.id.toString().includes(filter.search)) &&
      (filter.date === '' || record.payDate === filter.date)
  );

  return (
    <Card className="payroll-tab">
      <h2>Employee Payroll</h2>
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
      <table className="payroll-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Pay Date</th>
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
                <td>₹{record.salary.toLocaleString()}</td>
                <td>{record.payDate}</td>
                <td>{record.status}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default Payroll;