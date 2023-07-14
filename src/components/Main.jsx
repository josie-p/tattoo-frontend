import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, AboutMe, MyWork, Contact, Login, Admin } from "./";

const Main = () => {

    const loggedIn = localStorage.getItem("token");
    const token = localStorage.getItem("token");

    return(
        <div id="main">
            <Navbar loggedIn={ loggedIn } />
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="my-work" element={ <MyWork/> }  />
            <Route exact path="/about-me" element={ <AboutMe/> } />
            <Route exact path="/contact" element={ <Contact/> } />
            <Route exact path="/admin-login" element={ <Login/> } />
            <Route exact path="/admin" element={ <Admin/> } />
        </Routes>
        </div>
    )
}

export default Main