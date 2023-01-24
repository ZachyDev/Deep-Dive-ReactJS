import React,{useState,createContext} from 'react'

// create context
export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    // iniatiliaze state
    const [isdarkTheme,setIsDarkTheme] = useState(false)
    // update state
    const updateTheme = () => {
        setIsDarkTheme(isdarkTheme => !isdarkTheme)
    }
    // state values
    const values = { isdarkTheme,updateTheme }
  return (
    <>
        <ThemeContext.Provider value={values}>
            { props.children }
        </ThemeContext.Provider>
    </>
  )
}

export default ThemeContextProvider