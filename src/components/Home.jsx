import React from "react";
import logo from "./images/clear-logo.png";

import homeHeroStyling from "./styling/homeHeroStyling.css";

const Home = () => {
    return (
        <div id="home-page">
            <img id="home-logo" src={logo} height="600px" width="650px" alt="logo with a tattoo machine and text that says 'Joann Woods Ink'" />

            <div id="home-h3">
                <h3>tattoo apprentice based in norman, ok</h3>
                
            </div>
        </div>
    )
}

export default Home;