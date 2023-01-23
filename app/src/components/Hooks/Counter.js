import React, {useState,useEffect} from 'react'

function Counter() {
    const [counter,setCounter] = useState(0);
    
    useEffect(() => {
       if(counter === 10) {
        document.body.style.backgroundImage = 'linear-gradient(to right, coral, teal)';
       }
    },[counter])
    // update counters
    const updateCounter = () => {
        setCounter(counter + 1);
    }
  return (
    <div>
        <p>Counter - {counter} </p>
        <button onClick={updateCounter}>Update counter</button>
    </div>
  )
}

export default Counter