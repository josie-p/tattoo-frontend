import React from "react";
import { Link } from "react-router-dom";
import navStyling from "./styling/navStyling.css"

const Navbar = () => {
  return (
    <div id="navbar">
      <h2>joann woods</h2>
      <Link to="/">home</Link>
      <Link to="/my-work">my work</Link>
      <Link to="/about-me">about me</Link>
      <Link to="/contact">contact me</Link>
      <Link to="/admin-login">login</Link>
    </div>
  );
};

export default Navbar;