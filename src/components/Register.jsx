import React, { useState } from "react";
import { registerUserAPI } from "./api-adapter";

const Register = () => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const registerUser = async() => {
        const response = await registerUserAPI(username, password);

        console.log(response, "response from registerUser func in reg component");

        //add success and error messages here!
        if(response.success){
            console.log("you have successfully registered a user!");
            alert("you successfully registered a user!");
            location.reload();
        }

    }

    return(
        <div id="register-user">
            <form id="register-form" onSubmit={(e) => {
                e.preventDefault();
                registerUser();
            }} >
                <label>username:</label>
                <input type="text" onChange={(e) => {
                    setUsername(e.target.value);
                }} ></input>
                <label>password:</label>
                <input type="text" onChange={(e) => {
                    setPassword(e.target.value);
                }} ></input>
                <button type="submit">register new user</button>
            </form>
        </div>
    )
}

export default Register;