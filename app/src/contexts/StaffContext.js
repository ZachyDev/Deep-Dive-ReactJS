import React, { createContext,useState } from 'react'

// create context
export const StaffContext = createContext();

function StaffContextProvider(props) {
  const [staff,setStaff] = useState([
    {
        id: 1,
        fullName: 'Zachary Moseti',
        position: 'Software Engineer'
    },
    {
        id: 2,
        fullName: 'Finna Mobisa',
        position: 'Actuary'
    }
  ])
  const resetList = () => {
    setStaff([])
  }
  return (
    <>
    <StaffContext.Provider value={{staff,resetList}}>
        { props.children }
    </StaffContext.Provider>
    </>
  )
}

export default StaffContextProvider