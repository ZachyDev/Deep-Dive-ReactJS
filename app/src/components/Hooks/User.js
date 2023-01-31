import React, {useState,useContext} from 'react'
import { ThemeContext } from '../../contexts/ThemeColors';

function User() {
    const {theme} = useContext(ThemeContext);

    // initialize state
    const [user,setUser] = useState('Zachy');
    const [username,setUsername] = useState('ZachyM');

    // handler
    const handleUserChange = (e) => {
        setUser(e.target.value);
    }
    // handler2
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
  }
  return (
   <section style={{fontFamily: theme.fontFamily, color: theme.color}}>
      <input value={user} onChange={handleUserChange}/>
      {user}
      <input value={username} onChange={handleUsernameChange}/>
      {username}
   </section>
  )
}

export default User