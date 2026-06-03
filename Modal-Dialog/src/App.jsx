import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Dialog from './Components/Dialog'

function App() {
  const [showDialog, setShowDialog] = useState(false)

  function handleShowDialog() {
    setShowDialog(!showDialog)
  }

  function handleCloseDialog() {
    setShowDialog(false)
  }

  return (
    <div className="app">
      <button onClick={handleShowDialog}>Show Dialog</button>
      {showDialog && (
        <Dialog onClose={handleCloseDialog}>
          <h1>Title</h1>
          <span>Random Text</span>
        </Dialog>
      )}
    </div>
  )
}

export default App
