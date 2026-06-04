import React, { useState } from 'react'
import './style.css'

function Tablist({ tabs }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleTabChange = (index) => {
    setSelectedIndex(index)
  }

  const Component = tabs[selectedIndex].Component

  return (
    <div className="tab-list" role="tab-list">
      <div className="tab-container">
        {tabs.map((tb, index) => {
          return (
            <button
              onClick={() => handleTabChange(index)}
              key={tb.id}
              data-selected={index === selectedIndex}
              aria-selected={index === selectedIndex}
              role="tabs"
            >
              {tb.label}
            </button>
          )
        })}
      </div>
      <div role="tabpanel">
        <Component />
      </div>
    </div>
  )
}

export default Tablist
