import React, {useState, useContext} from 'react'
import { SculptureContext } from '../contexts/Sculptures'

function SculpList() {
    const {sculp} = useContext(SculptureContext)

    const [index,setIndex] = useState(0)
    const [showMore,setShowMore] = useState(false)

    // handle index
    const handleNext = () => {
        setIndex(n => n +1)
    }
    let sculptures = sculp[index];
    // handle show more
    const handleShowMore = () => {
        setShowMore(!showMore)
    }
  return (
    <div>
        <button onClick={handleNext}>Next</button>
        <h3>{sculptures.name} by {sculptures.artist}</h3>
        <h4>Page {index+1} of {sculp.length}</h4>
        <img src={sculptures.url}/>
        <button onClick={handleShowMore}>{showMore ? 'Hide' : 'Show' } details</button>
        {showMore && sculptures.description}
    </div>
  )
}

export default SculpList