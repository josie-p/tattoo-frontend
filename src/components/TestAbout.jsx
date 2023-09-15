import React from "react";

import tryAbout from "./styling/tryAbout.css";

import joPic from "./images/headshot-1.JPEG";

const TestAbout = () => {
  return (
    <div>
      <div id="test-about-page">
        <div id="about-content">
            <h1>Joann Woods</h1>
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
        </div>
        <div id="about-photo" >
            <div id="bg-c">
            <div id="photo-container" >
                {/* <img src={ joPic } id="jo-photo" /> */}
                {/* <p>this is some content</p> */}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TestAbout;
