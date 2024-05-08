import React from "react";
import ReactDOM from 'react-dom';
import Heading, {Paragraph, List} from "./components/Heading";
import Cards from "./components/Cards";

var numbers = [5,10,15]

var newnumbers = [];

function double(x){
    newnumbers.push(x*2);
};

numbers.forEach(double)

console.log(newnumbers)

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