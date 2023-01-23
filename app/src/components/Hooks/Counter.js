import React, {useState,useEffect} from 'react'

function Counter() {
    const [counter,setCounter] = useState(0);
    useEffect(() => {
        setCounter(counter+1)
    },[counter])
  return (
    <div>Counter - {counter}</div>
  )
}

export default Counter