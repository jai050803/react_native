import { useState } from 'react'

const constStyle = {
  fontSize: "20px",
  color: "hotpink"
}

const img = "../src/assets/download (4).jpeg"

function App() {
  const fname = "jai"
  const lname = "singh"
  return (
    <>
    <h1 style={{color:"red"}}>{fname} {lname}</h1>
    <h1 style={constStyle}>{fname + " " + lname}</h1>
    <h1>{`${fname} ${lname}`}</h1>
      <h1>Unordered list</h1>
      <ul>
        <li>samosa</li>
        <li>jalebi</li>
        <li>fafda</li>
        <li>gulab jamun</li>
      </ul>
      <img src="../src/assets/download.jpeg" alt="indian food" /><br/>
      <img src="../src/assets/download (1).jpeg" alt="indian food" /><br/>
      <img src="../src/assets/download (2).jpeg" alt="indian food" /><br/>
      <img src="../src/assets/download (3).jpeg" alt="indian food" /><br/>
      <img src= {img} alt="indian food" />
    </>
  )
}

export default App
