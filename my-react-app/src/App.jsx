import { useState } from 'react'

function App() {
  const fname = "jai"
  const lname = "singh"
  return (
    <>
    <h1>{fname} {lname}</h1>
    <h1>{fname + " " + lname}</h1>
    <h1>{`${fname} ${lname}`}</h1>
      <h1>Unordered list</h1>
      <ul>
        <li>samosa</li>
        <li>jalebi</li>
        <li>fafda</li>
        <li>gulab jamun</li>
      </ul>
    </>
  )
}

export default App
