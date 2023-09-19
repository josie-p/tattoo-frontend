import React from "react";

import { useInView } from "react-intersection-observer";

import ig from "./images/ig.png";
import fb from "./images/fb.png";

import contactMe from  "./styling/contactMeStyling.css"

const Contact = () => {
  const { ref: slideInRight, inView: slideInRightVisible } = useInView();

  return (
    <div id="contact-content" ref={ slideInRight } className={ slideInRightVisible ? "slide-in-right" : null }>
      {/* <h2 className="contact-me" id="contact-title">contact me</h2> */}
      <h2 className="contact-me" id="contact-title">CONTACT ME</h2>
      <p>
        if you have any questions or concerns, you can reach me through{" "}
        <a
          id="email"
          href="mailto:joann.woods.23@gmail.com?subject=Contact Joann!"
        >
          email
        </a>
      </p>
      <p>to inquire about booking an appointment, dm me through instagram!</p>
      <div id="hold-links">
        <a href="https://www.instagram.com/jowoods_ink/?hl=en" target="_blank">
          <img src={ig} alt="ig logo" height="100px" width="100px" />
        </a>
        <a
          href="https://www.facebook.com/joann.woods.353?mibextid=ZbWKwL"
          target="_blank"
        >
          <img src={fb} alt="fb logo" height="100px" width="100px" />
        </a>
        <a href="mailto:joann.woods.23@gmail.com?subject=Contact Joann!">
        <span id="email-logo" className="material-symbols-outlined">
          mail
        </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
