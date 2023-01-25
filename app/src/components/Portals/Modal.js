import React, {useState} from 'react'

function Modal() {
  const [show,setShow] = useState(false)
  
  const toogleModel = () => {
    setShow(show => !show)
  }
  return (
    <div>
        <h1>Click to open Modal</h1>
        <button onClick={toogleModel}>Open Modal</button>
        {show && <h1>Modal will display here</h1>}
    </div>
  )
}

export default Modal