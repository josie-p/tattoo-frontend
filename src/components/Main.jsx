import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, AboutMe, MyWork, Contact, Login, Admin, Register, EditInfo } from "./";
import { getAllUsersAPI } from "./api-adapter";


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
        </Routes>
        </div>
    )
}

export default Main