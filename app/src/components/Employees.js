import React from 'react'

function Articles() {
    const employees = [
        { id: 1, firstName: "Zachary", lastName: "Moseti", department: "Software" },
        { id: 2, firstName: "Rodgers", lastName: "Makori", department: "Design" },
        { id: 3, firstName: "Jeff", lastName: "Matieso", department: "Backend" },
    ]
  return (
    <div>
        <ul>{employees.map(employee => {
            return <li key={employee.id}> Id: {employee.id } firstName: { employee.firstName } lastName: {employee.lastName}</li>
        })}</ul>
    </div>
  )
}

export default Articles