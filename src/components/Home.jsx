import React from "react";
import logo from "./images/clear-logo.png";

const Home = () => {
    return (
        <div id="home-page">
            {/* <h1>home page!</h1> */}
            <img id="home-logo" src={logo} height="600px" width="650px" alt="home logo" />

            <div id="home-h3">
                <h3>tattoo apprentice based in norman, ok!</h3>
            </div>
        </div>
    )
}

export default Home;