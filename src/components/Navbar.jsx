import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navStyling from "./styling/navStyling.css"
import logo from "./images/favicon-2.png";

const Navbar = ({ loggedIn }) => {

  const navigate = useNavigate();

  return (
    <div id="navbar">
      <img src={logo} width="90px" height="90px" />
      <Link to="/">HOME</Link>
      <Link to="/my-work">MY WORK</Link>
      { loggedIn ? null : <Link to="/admin-login">LOGIN</Link> }
      {
       loggedIn ? <Link to="/admin">ADMIN DASH</Link> : null
      }
      {
        loggedIn ? <p onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("user");
          navigate("/");
          location.reload();
        }} >LOGOUT</p> : null
      }
    </div>
  );
};

export default Navbar;