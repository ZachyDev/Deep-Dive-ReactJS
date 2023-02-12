import React, {useContext} from 'react'
import { StudentContext } from '../contexts/StudentDetails'

function Student() {
// call context
  const {students,resetStudents} = useContext(StudentContext);
  return (
    <div>
        {students.map(student => {
            return(
                <li>{student.fullName}</li>
            )
        })}
        <button onClick={resetStudents}>Reset</button>
    </div>
  )
}

export default Student