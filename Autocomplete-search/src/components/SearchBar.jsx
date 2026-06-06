import React, { use, useEffect, useState } from 'react'
import './style.css'

function SearchBar() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState([])
  const [show, setShow] = useState(false)
  const [cache, setCache] = useState({})

  const fetchData = async () => {
    if (cache[input]) {
      setResult(cache[input])
      return
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=` + input)
    const json = await data.json()
    setResult(json?.recipes)
    setCache((prev) => ({ ...prev, [input]: json.recipes }))
  }

  useEffect(() => {
    const timer = setTimeout(fetchData, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [input])
  return (
    <div className="container">
      <h2>Autocomplete search Bar</h2>
      <input
        className="search-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={(e) => setShow(true)}
        onBlur={(e) => setShow(false)}
      ></input>
      {show && (
        <div className="search-result">
          {result.map((res) => {
            return <span className="result">{res.name}</span>
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
