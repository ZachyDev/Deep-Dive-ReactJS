import React, {useState} from 'react'

function User() {
    // initialize state
    const [user,setUser] = useState('Zachy');
    // handler
    const handleUserChange = (e) => {
        setUser(e.target.value);
    }
  return (
    <div>
        <input value={user} onChange={handleUserChange}/>
        
    </div>
  )
}

export default User