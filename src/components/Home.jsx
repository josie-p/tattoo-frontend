import React from "react";
import logo from "./images/clear-logo.png";

const Home = () => {
    return (
        <div id="home-page">
            {/* <h1>home page!</h1> */}
            <img id="home-logo" src={logo} height="600px" width="600px" alt="home logo" />
            {/* <img src={logo} height="200px" width="200px" alt="home logo" /> */}
        </div>
    )
}

export default Home;