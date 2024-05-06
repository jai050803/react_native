import React from "react";
import ReactDOM from 'react-dom';


function Heading(){
  return <h1>My heading</h1>
}

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
            <Heading />
            <h1 style={customStyle}>Good {text}</h1><hr style={customStyle}></hr>
        </>
    )
}

export default AllCode

