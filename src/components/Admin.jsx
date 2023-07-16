import React from "react";
import { Link } from "react-router-dom";
import { Register, EditInfo, UserList, AddPhotos } from "./";
import adminStyling from "./styling/adminStyling.css";

const Admin = ({ username, token, allUsers }) => {
    return(
        <div>

            { username ? <h3>welcome back, {username}!!</h3> : null }
            <div>
                <Link to="edit-my-info">your account!!</Link>
            </div>

            <h2>admin page!!!</h2>
            <div id="register" >
                <h4>register a user!</h4>
                <Register/>
            </div>
            
            <div id="add-photos-div">
                <p>add photos to your work!</p>
                < AddPhotos />
            </div>

            <div>
                <UserList allUsers={ allUsers } token={token} />
            </div>

            {/* <div id="edit-info">
                <h4>edit your information</h4>
                <EditInfo token={ token } />
            </div> */}
        </div>
    )
}

export default Admin;