import React from "react";

function App() {

    const name = "Jai"
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <>
            <p>Created by {name}</p>
            <p>Copyright by {currentYear}</p>
        </>
    )
}

export default App
