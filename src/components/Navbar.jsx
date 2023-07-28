import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navStyling from "./styling/navStyling.css"
import logo from "./images/favicon-2.png";

const Navbar = ({ loggedIn }) => {

  const navigate = useNavigate();

  return (
    <div id="navbar">
      <img src={logo} width="90px" height="90px" />
      <Link to="/">home</Link>
      <Link to="/my-work">my work</Link>
      <Link to="/about-me">about me</Link>
      <Link to="/contact">contact me</Link>
      { loggedIn ? null : <Link to="/admin-login">login</Link> }
      {
       loggedIn ? <Link to="/admin">admin dash</Link> : null
      }
      {
        loggedIn ? <p onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("user");
          navigate("/");
          location.reload();
        }} >logout</p> : null
      }
    </div>
  );
};

export default Navbar;