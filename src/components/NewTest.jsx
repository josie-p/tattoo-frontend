import React from "react";
import logo from "./images/clear-logo.png";
import joPic from "./images/cutout.png";
import insta from "./images/insta.png"

import homeHeroStyling from "./styling/homeHeroStyling.css"


const NewTest = () => {
  return (
    <div id="home">
    <section id="home-hero">
      <div>
        <img
          id="home-logo"
          src={logo}
          alt="logo with a tattoo machine and text that says 'Joann Woods Ink'"
        />

        <div id="home-h3">
          <h3>tattoo apprentice based in norman, ok</h3>
        </div>
      </div>
    </section>
<div className="spacer layer1"></div>
    <section id="home-about">
    <div id="about-page">
      <div id="about-container">
        <div id="pic-col">
            <div id="name-title" >
            <h1>JOANN WOODS</h1>
            </div>
          <img src={joPic} alt="photo of tattoo artist Joann Woods" id="jo-pic" />
        </div>
        <div id="about-col">
            <div id="about-col-content">
            <h1>hi! i'm joann!</h1>
            <p>
            Shaman banjo farm-to-table, mustache tumblr bespoke bodega boys
            bicycle rights mixtape. Voluptate JOMO dolore, edison bulb chillwave
            activated charcoal man bun cronut gastropub blackbird spyplane
            consectetur. Fixie franzen tousled, adipisicing fanny pack
            distillery viral dreamcatcher est neutra. Plaid readymade hell of
            labore. Fit wayfarers grailed offal gorpcore, migas semiotics small
            batch hexagon man bun. Wayfarers health goth ut nisi, plaid
            lumbersexual roof party jianbing pinterest synth kogi aliquip
            cold-pressed retro. Street art tonx pabst irure, stumptown next
            level in umami normcore raclette thundercats occaecat.
          </p>
            </div>
          
        {/* <div id="contact">
        <p>get in contact with me through instagram</p>
        </div> */}
        </div>

      </div>
    </div>
    </section>

    <section id="home-contact" >
    <div>
            <h2>contact me page!</h2>
            <p>if you have any questions or concerns, you can reach me through <a href="mailto:joann.woods.23@gmail.com?subject=Contact Joann!">email</a></p>
            <p>to inquire about booking an appointment, dm me through instagram!</p>
            <a href="https://www.instagram.com/jowoods_ink/?hl=en" target="_blank"><img src={insta} /></a>
        </div>
    </section>
    </div>
  );
};

export default NewTest;
