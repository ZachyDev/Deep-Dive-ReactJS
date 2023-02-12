import React, {createContext,useState} from 'react'

// create context
export const StudentContext = createContext();

function StudentDetails(props) {
  const [students,setStudents] = useState([
    {
      fullName: 'Zachy Moseti',
      role: 'software engineer'
    },
    {
      fullName: 'Susan Maina',
      role: 'backend engineer'
    }
  ])
  // reset students
  const resetStudents = () => {
    setStudents([])
  }
  return (
    <div>
      <StudentContext.Provider value={{students,resetStudents}}>
        {props.children}
      </StudentContext.Provider>
    </div>
  )
}

export default StudentDetails