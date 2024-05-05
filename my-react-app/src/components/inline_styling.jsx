import React from "react";

const constantStyle = {
  color: "red",
  fontSize: "20px",
}
function App() {
    return(
      <>
        <h1 style={{color:"red"}}>Inline styling</h1>
        <h2 style={constantStyle}>styling again</h2>
      </>
    )
}

export default App