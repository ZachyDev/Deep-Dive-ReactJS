import React from 'react'
import NonStaff from './NonStaff'

function Employees() {
    const employees = [
        { id: 1, firstName: "Zachary", lastName: "Moseti", department: "Software" },
        { id: 2, firstName: "Rodgers", lastName: "Makori", department: "Design" },
        { id: 3, firstName: "Jeff", lastName: "Matieso", department: "Backend" },
    ]
    const nonStaffMembers = [
      { id: 1, firstName: "Finna", lastName: "Mobisa", department: "Finance" },
      { id: 2, firstName: "Jim", lastName: "Makori", department: "IT" },
    ]
  return (
    <div>
      <h3>Employees</h3>
        <ul>{employees.map(employee => {
            return <li key={employee.id}>firstName: { employee.firstName } lastName: {employee.lastName}</li>
        })}</ul>

        <h4>Non Staff Members</h4>
        { nonStaffMembers.map(staff => {
          return <NonStaff id={staff.id} firstName={staff.firstName} lastName={staff.lastName}/>
        })}
        
    </div>

  )
}

export default Employees