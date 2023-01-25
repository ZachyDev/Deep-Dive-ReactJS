import React, {useState} from 'react'
import Popup from './Popup'

function Modal() {
  const [show,setShow] = useState(false)
  
  const toogleModel = () => {
    setShow(show => !show)
  }
  return (
    <div>
        <h1>Click to open Modal</h1>
        <button onClick={toogleModel}>Open Modal</button>
        <Popup show={show} closeModal={toogleModel}/>
    </div>
  )
}

export default Modal