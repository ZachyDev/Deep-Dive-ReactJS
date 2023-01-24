import React, { useContext } from 'react'
import { UsersContext  } from '../contexts/UsersContext'

function Users() {
  // call useContext
  const { users,resetUsers } = useContext(UsersContext)

  return (
    <div>
        {users.map((user) => {
            return(
                <ul>
                    <li id={user.id}>
                        First Name: { user.firstName }
                        Last Name: { user.lastName }
                        Role: { user.role }
                    </li>
                </ul>
            )
        })}
    </div>
  )
}

export default Users