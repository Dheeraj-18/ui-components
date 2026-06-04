import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Tablist from './Components/Tablist'

function App() {
  const tabList = [
    {
      id: 'a',
      label: 'component A',
      Component: ComponentA,
    },
    {
      id: 'b',
      label: 'component B',
      Component: ComponentB,
    },
    {
      id: 'c',
      label: 'component C',
      Component: ComponentC,
    },
    {
      id: 'd',
      label: 'component D',
      Component: ComponentD,
    },
  ]

  function ComponentA() {
    return <h1>Component A</h1>
  }
  function ComponentB() {
    return <h1>Component B</h1>
  }
  function ComponentC() {
    return <h1>Component C</h1>
  }
  function ComponentD() {
    return <h1>Component D</h1>
  }

  return (
    <div className="app">
      <Tablist tabs={tabList} />
    </div>
  )
}

export default App
