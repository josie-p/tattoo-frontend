import React from "react";
import { Register } from "./";
import adminStyling from "./styling/adminStyling.css";

const Admin = () => {
    return(
        <div>
            <h2>admin page!!!</h2>
            <div id="register" >
                <h4>register a user!</h4>
                <Register/>
            </div>
        </div>
    )
}

export default Admin;