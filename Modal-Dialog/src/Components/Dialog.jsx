import React from 'react'
import './style.css'

function Dialog({ onClose, children }) {
  return (
    <div className="dialog">
      <div className="dialog-backdrop"></div>
      <div className="dialog-content">
        {!!onClose && <button onClick={onClose} className="dialog-close">&times;</button>}
        {children}
      </div>
    </div>
  )
}

export default Dialog
