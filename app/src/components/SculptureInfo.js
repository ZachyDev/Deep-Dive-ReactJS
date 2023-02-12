import React,{useContext} from 'react'
import { DataContext } from '../contexts/Data'

function SculptureInfo() {
  const {sculptureList} = useContext(DataContext)

  return (
    <div>
        {sculptureList.map(sculpture => {
            return(
                <div key={sculpture.name}>
                    <span>{sculpture.name}</span>
                </div>
            )
        })}
    </div>
  )
}

export default SculptureInfo