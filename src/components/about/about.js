import React from 'react'

export default ({ title = 'about', text = 'Full-stack web developer with a background in game development.' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}
