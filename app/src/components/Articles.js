import React from 'react'

function Articles() {
    const colors = [
        "firebrick",
        "rebeccapurple",
        "salmon",
        "darkslategray",
        "hotpink",
    ]
    const colorElements = colors.map(color => {
        return <li style={{ color: color }}>{color}</li>
    })
  return (
    <div>
        {colorElements}
    </div>
  )
}

export default Articles