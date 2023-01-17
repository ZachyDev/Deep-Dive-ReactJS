import React from 'react'

function BlogContent({articleName,publicationDate}) {
    return (
        <div>
            <h4>{articleName}</h4>
            <p>{publicationDate}</p>
        </div>
    )
}

export default BlogContent
