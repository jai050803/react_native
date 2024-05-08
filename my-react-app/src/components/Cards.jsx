import React from "react";

function Cards(props){
    return (
        <div>
            <img src="../src/assets/download (2).jpeg" alt="image" />
            <h2>{props.name}</h2>
            <h2>{props.number}</h2>
            <h2>{props.emailId}</h2>
        </div>
    )
}

export default Cards;