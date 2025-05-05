import React from "react";
import './style.css';
function App() {
    const punjabi_thali = "../src/assets/download (1).jpeg"
    const south = "../src/assets/download.jpeg"
    const bengali = "../src/assets/download (2).jpeg"
    const rajasthani = "../src/assets/download (3).jpeg"
    const gujarat = "../src/assets/download (4).jpeg" 
    return(
        <>
            <h1>Indian traditional food thali</h1>
            <ul>
                <li>South Indian Thali</li>
                <img className="Indian-Food" src={south} alt="indian food" />
                <li>Punjabi Thali</li>
                <img className="Indian-Food" src={punjabi_thali} alt="indian food" />
                <li>Bengali Thali</li>
                <img className="Indian-Food" src={bengali} alt="indian food" />
                <li>Rajasthani Thali</li>
                <img className="Indian-Food" src={rajasthani} alt="indian food" />
                <li>Gujarati Food Thali</li>
                <img className="Indian-Food" src={gujarat} alt="indian food" />
            </ul>
        </>
    )
}

export default App