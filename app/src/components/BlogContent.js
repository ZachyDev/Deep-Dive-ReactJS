import React from 'react'
import Articles from './Articles'

function BlogContent({articleName,publicationDate}) {
    return (
        <div>
            <h4>{articleName}</h4>
            <p>{publicationDate}</p>
            <Articles />
        </div>
    )
}

export default BlogContent
