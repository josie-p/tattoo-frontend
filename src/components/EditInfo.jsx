import React, { useState } from "react";
import { editInfoAPI } from "./api-adapter";

const EditInfo = ({ token }) => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const editInfo = async() => {
        const response = await editInfoAPI(username, password, token);
    }

return(
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <label>username:</label>
            <input type="text"></input>
            <label>password:</label>
            <input type="text"></input>
            <button type="submit">edit your info!</button>
        </form>
    </div>
)
}

export default EditInfo;