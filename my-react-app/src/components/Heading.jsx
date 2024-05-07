import React from "react";
import ReactDOM from 'react-dom';

function Heading(){
    return <h1>Hello!! This is a component Heading</h1>
}

function Paragraph(){
    return(
        <>
            <p>Hello My Name is Jai</p>
            <p>I am 21 years old programmer</p>
        </>
    )
}

function List(){
    return (
        <>
            <ul>
                <li>Data Science</li>
                <li>Power Bi</li>
                <li>Microsoft Excel</li>
                <li>Python Programming Language</li>
            </ul>
        </>
    )
}
export default Heading;

export {Paragraph, List};