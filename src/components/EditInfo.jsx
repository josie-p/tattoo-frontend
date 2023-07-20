import React, { useState } from "react";
import { editInfoAPI, deleteMeAPI } from "./api-adapter";

const EditInfo = ({ token, username }) => {

    const [ newUsername, setNewUsername ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");
    // const localUser = localStorage.getItem("user");

    const editInfo = async() => {
        const response = await editInfoAPI(newUsername, newPassword, token);

        if(response.success){
            console.log(response, "successful response from edit info!!");
        }
    }

    const deleteAccount = async() => {
        const response = await deleteMeAPI(token);

        if(response.success){
            alert("your account was successfully deleted");

            setTimeout(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("user");
            navigate("/");
            location.reload();
            }, 2000)
        }
    }

return(
    <div>
        <div id="your-info" >
            {/* <h3>username:</h3> */}
            <p> hi { username }!</p>
        </div>

        <div id="edit-form-div">
            <h3>
                edit your information! enter a new username or password.
            </h3>
        <form onSubmit={(e) => {
            e.preventDefault();
            editInfo();
        }}>
            <label>new username:</label>
            <input type="text" onChange={(e) => {
                setNewUsername(e.target.value);
            }} ></input>
            <label>new password:</label>
            <input type="text" onChange={(e) => {
                setNewPassword(e.target.value);
            }} ></input>
            <button type="submit">edit your info!</button>
        </form>
        </div>
        <div id="delete-account" >
            <button onClick={() => {
                if(confirm("are you sure you want to delete your account")){
                    deleteAccount();
                }
            }} >delete your account</button>
        </div>
    
    </div>
)
}

export default EditInfo;