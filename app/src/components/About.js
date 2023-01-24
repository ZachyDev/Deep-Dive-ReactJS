import React,{useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function About() {
  // call useContext and pass the context value
  const { isdarkTheme,updateTheme } = useContext(ThemeContext)

  return (
    <div>
      {
        isdarkTheme ? ({backgroundColor: '#fff'}) : ({backgroundColor: '#000'})
      }
    </div>
  )
}

export default About