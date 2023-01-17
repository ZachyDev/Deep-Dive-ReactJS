import React from 'react'

function NonStaff({id,firstName,lastName}) {
  return (
    <div>
        <li key={id}>{firstName} {lastName}</li>
    </div>
  )
}

export default NonStaff