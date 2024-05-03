import { useState } from 'react'

function App() {
  const fname = "Jai"
  const lname = "Singh"
  return (
    <>
        <h1>Hello {fname + " " + {lname}}</h1>
        <h1>Hello {fname} {lname}</h1>
        <h1>hello {`${fname} ${lname}`}</h1>
        <h4>Your lucky number is {num}</h4>
    </>
  )
}

export default App
