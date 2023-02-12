import React,{useContext, useState} from 'react'
import { DataContext } from '../contexts/Data'

function SculptureInfo() {
  const {sculptureList} = useContext(DataContext)

  const [index,setIndex] = useState(0);
  const [showMore,setShowMore] = useState(false);

  const handleNextClick = () => {
    setIndex(index + 1);
  }
  const handleMoreClick = () => {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
       <h2>{sculpture.name} by {sculpture.artist}</h2>
       <h3>
        ({index+1} of {sculptureList.length})
       </h3>
       <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
       {showMore && <p>{sculpture.description}</p>}
       <img
       src={sculpture.url}
       alt={sculpture.alt} 
       />
    </div>
  )
}

export default SculptureInfo