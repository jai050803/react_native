import React from "react";

let text = "";
const now = new Date();
const currentTime = now.getHours();

const customStyle = {
  color: "",
}

if (currentTime<=12){
  text = "Morning"
  customStyle.color = "red"
} else if (currentTime>12 & currentTime<18){
    text = "Afternoon"
    customStyle.color = "blue"
} else {
  text = "evening"
  customStyle = "Orange"
}

function App() {
    return(
        <>
            <h1>Good {text}</h1>
        </>
    )
}

export default App

