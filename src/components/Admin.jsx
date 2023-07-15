import React from "react";
import { Link } from "react-router-dom";
import { Register, EditInfo, UserList } from "./";
import adminStyling from "./styling/adminStyling.css";

const Admin = ({ username, token, allUsers }) => {
    return(
        <div>

            { username ? <h3>welcome back, {username}!!</h3> : null }
            <div>
                <Link to="edit-my-info">edit your user info!</Link>
            </div>

            <h2>admin page!!!</h2>
            <div id="register" >
                <h4>register a user!</h4>
                <Register/>
            </div>

            <div>
                <UserList allUsers={ allUsers } />
            </div>

            {/* <div id="edit-info">
                <h4>edit your information</h4>
                <EditInfo token={ token } />
            </div> */}
        </div>
    )
}

export default Admin;