import React from 'react'
import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import * as Icons from 'react-feather'
import FilterableTable from '../../../components/common/FilterableTable'

const EmployeeList = (props) => {
  const navigate = useNavigate();
  const data = [
    { Name: <Link to="/admin/employee/update" style={{cursor:'pointer', color:'#2f0935', textDecoration:'none'}}>John Doe</Link>, Age: 28, Occupation: 'Engineer', Status: 'Active' },
    { Name: <Link to="/admin/employee/update" style={{cursor:'pointer', color:'#2f0935', textDecoration:'none'}}>Jane Smith</Link>, Age: 34, Occupation: 'Designer' , Status: 'Active' },
    { Name: <Link to="/admin/employee/update" style={{cursor:'pointer', color:'#2f0935', textDecoration:'none'}}>Alice Johnson</Link>, Age: 25, Occupation: 'Developer', Status: 'Active' },
    { Name: <Link to="/admin/employee/update" style={{cursor:'pointer', color:'#2f0935', textDecoration:'none'}}>Robert Brown</Link>, Age: 42, Occupation: 'Manager', Status: 'Active' },
    { Name: <Link to="/admin/employee/update" style={{cursor:'pointer', color:'#2f0935', textDecoration:'none'}}>Emily Davis</Link>, Age: 30, Occupation: 'Analyst', Status: 'Active' },
    // Add more rows as needed
  ];

  const columns = ['Name', 'Age', 'Occupation', 'Status'];
  const gotoAdd=()=>{
        navigate('/admin/employee/add')
  }
  return (
      <Card>
        <CardHeader style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <CardTitle>Employee List</CardTitle>
          <Icons.PlusCircle size={25} onClick={gotoAdd} style={{cursor:'pointer'}}/>
        </CardHeader>
        <CardBody>
          <FilterableTable data={data} columns={columns} rowsPerPage={3} />
        </CardBody>
      </Card>
  )
}

export default EmployeeList