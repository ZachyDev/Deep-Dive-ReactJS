import React, {useContext} from 'react'
import { StaffContext } from '../contexts/StaffContext'

function Staff() {
    const {staff,resetList} = useContext(StaffContext)
  return (
    <div>
        {staff.map((member) => {
            return(
                <ul>
                    <li id={member.id}>Full Name: {member.fullName} Role: {member.position}</li>
                </ul>
            )
        })}
        <button onClick={resetList}>Reset Employees</button>
    </div>
  )
}

export default Staff