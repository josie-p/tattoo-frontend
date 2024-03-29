import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, AboutMe, MyWork, Contact, Login, Admin, Register, EditInfo, LightboxTest, Footer, NewAbout, Loading, NewTest, TestAbout } from "./";
import { getAllUsersAPI } from "./api-adapter";

// import myWorkStyling from "./styling/myWorkStyling.css";
// import aboutMeStyling from "./styling/aboutMeStyling.css";
// import homeStyling from "./styling/homeStyling.css";
import footerStyling from "./styling/footerStyling.css";


const Main = () => {

    const loggedIn = localStorage.getItem("token");
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    const [ allUsers, setAllUsers ] = useState([]);


    const getAllUsers = async() => {
        const response = await getAllUsersAPI();
        if(response.success){
            setAllUsers(response.allUsers);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, [token])


    return(
        <div id="main">
            <Navbar loggedIn={ loggedIn } />
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="my-work" element={ <MyWork/> }  />
            <Route exact path="/about-me" element={ <AboutMe/> } />
            <Route exact path="/contact" element={ <Contact/> } />
            <Route exact path="/admin-login" element={ <Login/> } />
            <Route exact path="/admin" element={ <Admin username={ username } token={ token } allUsers={ allUsers } /> } />
            <Route exact path="admin/edit-my-info" element={< EditInfo token={ token } username={ username } />} />
            <Route exact path="lightbox-test" element={ <LightboxTest/> } />
            <Route exact path="about-test" element={<NewAbout/>} />
            <Route exact path="loading" element={<Loading/>} />
            <Route exact path="/test-home" element={<NewTest/>} />
            <Route exact path="/try-about" element={ <TestAbout/> } />
        </Routes>
        <Footer/>
        </div>
    )
}

export default Main