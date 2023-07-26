import React from "react";
import insta from "./images/insta.png"

const Contact = () => {
    return(
        <div>
            <h2>contact me page!</h2>
            <p>if you have any questions or concerns, you can reach me through <a href="mailto:joann.woods.23@gmail.com?subject=Contact Joann!">email</a></p>
            <p>to inquire about booking an appointment, dm me through instagram!</p>
            <a href="https://www.instagram.com/jowoods_ink/?hl=en" target="_blank"><img src={insta} /></a>
        </div>
    )
}

export default Contact;