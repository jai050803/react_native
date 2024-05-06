import React from "react";

let text;
const now = new Date();
const currentTime = now.getHours();

const customStyle = {
  color: ""
}

if (currentTime<=12){
  text = "Morning";
  customStyle.color = "red";
} else if (currentTime>12 & currentTime<18){
    text = "Afternoon";
    customStyle.color = "blue";
} else {
  text = "evening";
  customStyle.color = "orange";
}

function App() {
    return(
        <>
            <h1 style={customStyle}>Good {text}</h1><hr style={customStyle}></hr>
        </>
    )
}

export default App

