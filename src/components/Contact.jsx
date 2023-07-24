import React from "react";
import insta from "./images/insta.png"

const Contact = () => {
    return(
        <div>
            <h2>contact me page!</h2>
            <p>you can reach me on instagram through dms!</p>
            <a href="https://www.instagram.com/jowoods_ink/?hl=en" target="_blank"><img src={insta} /></a>
        </div>
    )
}

export default Contact;