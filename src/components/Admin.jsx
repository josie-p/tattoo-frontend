import React from "react";
import { Link } from "react-router-dom";
import { Register, EditInfo, UserList, AddPhotos } from "./";
import adminStyling from "./styling/adminStyling.css";

const Admin = ({ username, token, allUsers }) => {
    return(
        <div id="admin-page" >

            <div id="open-admin" >
            { username ? <h2 id="admin-welcome" >hi <span id="greeting-username" >{username}</span>!</h2> : null }
                <Link id="your-account" to="edit-my-info">your account!!</Link>
            </div>
            
            <div id="add-photos-div">
                {/* <p>add photos to your work!</p> */}
                < AddPhotos />
            </div>

            <div id="register" >
                <h4>sign up a new admin user here!</h4>
                <Register/>
            </div>

{
    username === "joann-w" || username === "josie-p" ? <div>
    <UserList allUsers={ allUsers } token={token} />
</div> : null
}
        </div>
    )
}

export default Admin;