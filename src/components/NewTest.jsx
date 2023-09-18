import React from "react";
import logo from "./images/clear-logo.png";
import joPic from "./images/jo-cutout-2.png";
import insta from "./images/insta.png"

import { AboutMe, Contact, Home, TestAbout } from "./";

import homeHeroStyling from "./styling/homeHeroStyling.css"
import aboutMeStyling from "./styling/contactMeStyling.css"


const NewTest = () => {
  return (
    <div id="home">
    <section id="home-hero">
      <Home/>
    </section>
{/* <div className="spacer layer1"></div> */}
    <section id="home-about">
    {/* <AboutMe /> */}
    < TestAbout />
    </section>

    {/* <div className="spacer layer2"></div> */}

    <section id="home-contact" >
        <Contact/>
    </section>
    </div>
  );
};

export default NewTest;
