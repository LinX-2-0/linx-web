import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import AddOrUpdateEmployee from './AddOrUpdateEmployee';

const Employee = () => {
  return (
    <Routes>
      <Route path="" element={<EmployeeList />} />
      <Route path="add" element={<AddOrUpdateEmployee />} />
      <Route path="update" element={<AddOrUpdateEmployee />} />
    </Routes>
  );
};

export default Employee;