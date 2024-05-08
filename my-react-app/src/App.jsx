import React from "react";
import ReactDOM from 'react-dom';
import Heading, {Paragraph, List} from "./components/Heading";
import Cards from "./components/Cards";

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