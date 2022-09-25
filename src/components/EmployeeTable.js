import React from 'react';
import Table from 'react-bootstrap/Table';

const EmployeeTable = ({ employee, handleEdit}) => {

  return (

    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>EMP ID</th>
            <th>Full Name</th>
            <th>Email ID</th>
            <th>MobiLe Number</th>
            <th>DOB/Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
     
        <tbody className='table-employee'>
        {employee.map((employees, index) =>  (
              <tr key={index}>
                <td className='td'>{index+1}</td>
                <td className='td emp-id'>{employees.employeeId}</td>
                <td className='td'>{employees.employeeName}</td>
                <td className='td'>{employees.employeeEmail}</td>
                <td className='td'>{employees.employeeNumber}</td>
                <td className='td'>{employees.employeeDob}</td>
                <td className='td'>{employees.employeeGender}</td>
                <td className='td'>
                  <span onClick={handleEdit}>Edit</span>
                  <span>Delete</span>
                  <span>View</span>
                </td>
                </tr>
               
            )
        
         )}
         </tbody>
      </Table>



    </div>


  )
}

export default EmployeeTable