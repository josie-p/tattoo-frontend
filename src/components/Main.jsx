import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home } from "./";

const Main = () => {
    return(
        <div id="main">
            <Navbar />
        <Routes>
            <Route exact path="/" element={ <Home /> } />
        </Routes>
        </div>
    )
}

export default Main