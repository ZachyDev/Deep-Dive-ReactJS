import React, { createContext,useState } from 'react'

export const UsersContext = createContext();

function UsersContextProvider(props) {
  const [users,setUsers] = useState([
    {
        id: 1,
        firstName: 'Zachy',
        lastName: 'Moseti',
        role: 'Software Developer'
    },
    {
        id: 2,
        firstName: 'Finna',
        lastName: 'Mobisa',
        role: 'Actuary'
    },
  ])

  const resetUsers = () => {
    setUsers([]);
  }

  return (
    
    <>
    <UsersContext.Provider value={{users,resetUsers}}>
        {props.children}
    </UsersContext.Provider>
    </>
  )
}

export default UsersContextProvider