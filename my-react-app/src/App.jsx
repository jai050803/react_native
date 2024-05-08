import React from "react";
import ReactDOM from 'react-dom';
import Heading, {Paragraph, List} from "./components/Heading";
import Cards from "./components/Cards";

var numbers = [2,3,4,5,8,9,20]

function double(num){
    return num*2
}

console.log(numbers.map(double))

function App(){
    return (
        <>
            <Heading />
            <Paragraph />
            <List />
            <Cards 
            name="jai"
            number="8178508658"
            emailId = "sjai5803@gmail.com"
            />
        </>
    )
}

export default App;