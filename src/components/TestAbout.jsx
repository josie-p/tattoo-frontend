import React from "react";

import { useInView } from "react-intersection-observer";

import tryAbout from "./styling/tryAbout.css";

import joPic from "./images/headshot-1.JPEG";

// import ""
const TestAbout = () => {

  const { ref: slideUp, inView: slideUpVisible } = useInView();

  return (
    <div>
      <div id="test-about-page">
        <div id="about-content" ref={ slideUp } className={ slideUpVisible ? "slideUp" : null } >
        {/* <div id="about-content" ref={ slideUp } className="slideUp" > */}
            <h1 id="about-name">JOANN WOODS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            laudantium eligendi vel voluptatem nostrum molestiae et, aliquid
            deserunt sint dicta corrupti hic repellendus perferendis suscipit
            veniam non odit quas voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            laudantium eligendi vel voluptatem nostrum molestiae et, aliquid
            deserunt sint dicta corrupti hic repellendus perferendis suscipit
            veniam non odit quas voluptatibus.
          </p>
          {/* <p id="try-p">joann Woods</p> */}
        </div>
        <div id="about-photo" >
            <div id="bg-c">
            <div id="photo-container" >
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TestAbout;
