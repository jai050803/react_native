import React from "react";
import './style.css';
function App() {
    return(
        <>
            <h1>Indian traditional food thali</h1>
            <ul>
                <li>South Indian Thali</li>
                <img className="Indian-Food" src="../src/assets/download.jpeg" alt="indian food" />
                <li>Punjabi Thali</li>
                <img className="Indian-Food" src="../src/assets/download (1).jpeg" alt="indian food" />
                <li>Bengali Thali</li>
                <img className="Indian-Food" src="../src/assets/download (2).jpeg" alt="indian food" />
                <li>Rajasthani Thali</li>
                <img className="Indian-Food" src="../src/assets/download (3).jpeg" alt="indian food" />
                <li>Gujarat Food Thali</li>
                <img className="Indian-Food" src="../src/assets/download (4).jpeg" alt="indian food" />
            </ul>
        </>
    )
}

export default App