import React, {createContext, useState} from 'react'

// create context
export const ThemeContext = createContext();

function ThemeColors(props) {
    // declare state
    const [theme,setTheme] = useState({
        backgroundColor: 'orange',
        color: 'green',
        fontFamily: 'poppins'
    })
  return (
    <>
    <ThemeContext.Provider value={{theme}}>
        {props.children}
    </ThemeContext.Provider>
    </>
  )
}

export default ThemeColors