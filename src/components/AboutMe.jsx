import React from "react";

import { useInView } from "react-intersection-observer";

import aboutMeStyling from "./styling/aboutMeStyling.css";

import joPic from "./images/jo-cutout-2.png";

const NewAbout = () => {

  const { ref: myRef, inView: changeColorVisible } = useInView();
  const { ref: bounce, inView: bounceVisible } = useInView();

  const { ref: slideRight, inView: aboutVisible } = useInView();
  const { ref: slideLeft, inView: pictureVisible } = useInView();

  return (
    
    // <div id="about-page" className={ changeColorVisible ? "change-color" : null }>
     <div id="about-page" > 
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
  );
};

export default NewAbout;
