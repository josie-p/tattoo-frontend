import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserAPI } from "./api-adapter";

const Login = () => {
    const navigate = useNavigate();

    //state for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async(username, password) => {
        const response = await loginUserAPI(username, password);

        console.log(response, "response from loginUser in login page!!!");

        if (response?.success){
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", username);
            setTimeout(() => {
                alert("you've been logged in!!");
                navigate("/");
            }, 3000);
        }
    }

    return (
        <div>
            <h2>login page!</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                loginUser(username, password);
            }} >
                <label>username:</label>
                <input type="text" onChange={(e) => {
                    setUsername(e.target.value);
                }} />
                <label>password:</label>
                <input type="text" onChange={(e) => {
                    setPassword(e.target.value);
                }}  />
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login;