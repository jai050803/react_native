import { useState } from 'react'

function App() {
  const name = "Jai"
  const num = Math.floor(Math.random()*10)
  return (
    <>
        <h1>Hello {name}</h1>
        <h4>Your lucky number is {num}</h4>
    </>
  )
}

export default App
