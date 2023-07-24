import React from "react";
import { deleteUserAPI } from "./api-adapter";

const UserCard = ({ user, token }) => {

    const deleteUser = async() => {
        const response = await deleteUserAPI(token, user.id);

        if(response.success){
            alert("you deleted the user!");
            setTimeout(() => {
                location.reload();
            }, 2000)
        }else{
            alert("oh no! there was a problem!");
        }
    }

    return(
        <div id={`user${user.id}`}>
            <h3>username</h3>
            <p>{ user.username }</p>
            <h3>
                password
            </h3>
<p>{ user.password } </p>
<button onClick={() => {
    // if(localStorage.getItem("username") === "joann-w") {
    //     if(confirm("are you sure you wanna delete?")){
    //         deleteUser();
    //     }
    // }else{
    //     alert("you are not permitted to perform this action");
    // }

   
        if(confirm("are you sure you wanna delete?")){
            deleteUser();
        }
   
    
}} >delete user</button>
        </div>
    )
}

export default UserCard;