import { useState } from 'react'

function App() {
  const name = "Unordered List"
  const number = "7"
  return (
    <>
    <h1>{name}</h1>
      <h1>{name}</h1>
      <ul>
        <li>{1*2} samosa</li>
        <li>{4+6} jalebi</li>
        <li>{9-4} fafda</li>
        <li>{number} gulab jamun</li>
        <li>{20/4} rasmalaai</li>
      </ul>
    </>
  )
}

export default App
