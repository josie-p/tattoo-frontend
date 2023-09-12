import React from "react";

import { useInView } from "react-intersection-observer";

import ig from "./images/ig.png";
import fb from "./images/fb.png";

const Contact = () => {
const {ref: changeColor, inView: colorChangeVisible} = useInView();

    return(
        <div>
            <h2 id="contact-title">contact me</h2>
            <p>if you have any questions or concerns, you can reach me through <a id="email" href="mailto:joann.woods.23@gmail.com?subject=Contact Joann!">email</a></p>
            <p>to inquire about booking an appointment, dm me through instagram!</p>
            <img src={ ig } alt="ig logo" height="100px" width="100px" />
            <img src={ fb } alt="fb logo" height="100px" width="100px" />
            {/* <a href="https://www.instagram.com/jowoods_ink/?hl=en" target="_blank"><img src={insta} /></a> */}
            {/* <img className="link-logo" src="https://www.transparentpng.com/thumb/logo-instagram/JFyofc-logo-instagram-background-png.png" alt="logo instagram background png @transparentpng.com"></img>
            <a href="https://www.transparentpng.com/details/logo-instagram-background-_13551.html" target="_blank">logo instagram background png @transparentpng.com</a>
            <a href="https://www.transparentpng.com/details/facebook-logo-clipart-hd_9010.html" target="_blank">facebook logo clipart hd @transparentpng.com</a>
            <img className="link-logo" src="https://www.transparentpng.com/thumb/facebook-logo-png/facebook-logo-clipart-hd-10.png" alt="facebook logo clipart hd @transparentpng.com"></img> */}
            <span className="material-symbols-outlined">
mail
</span>
        </div>
    )
}

export default Contact;