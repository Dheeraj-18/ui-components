import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StatRating from './components/StatRating'

function App() {
  return <div className="app">
    <StatRating starCount={10}/>
  </div>
}

export default App
