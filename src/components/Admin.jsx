import React from "react";
import { Register, EditInfo } from "./";
import adminStyling from "./styling/adminStyling.css";

const Admin = ({ username, token }) => {
    return(
        <div>

            { username ? <h3>welcome back, {username}!!</h3> : null }

            <h2>admin page!!!</h2>
            <div id="register" >
                <h4>register a user!</h4>
                <Register/>
            </div>

            <div id="edit-info">
                <h4>edit your information</h4>
                <EditInfo token={ token } />
            </div>
        </div>
    )
}

export default Admin;