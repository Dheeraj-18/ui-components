import React, { useState } from 'react'
import './style.css'

function StatRating({ starCount = 5 }) {
  const [starValue, setStarValue] = useState()
  const [hoverValue, setHoverValue] = useState()
  console.log(hoverValue)
  return (
    <div>
      <div className="container">
        {new Array(starCount).fill(0).map((star, index) => {
          return (
            <span
              className={
                (hoverValue === 0 && index < starValue) || index < hoverValue
                  ? 'gold'
                  : ''
              }
              onClick={() => setStarValue(index + 1)}
              onMouseEnter={() => {
                setHoverValue(index + 1)
              }}
              onMouseLeave={() => {
                setHoverValue(0)
              }}
            >
              &#9733;
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default StatRating
