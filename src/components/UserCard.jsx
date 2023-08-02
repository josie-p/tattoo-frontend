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
        <div className="user-card" id={`user${user.id}`}>
            {/* <h3>username</h3> */}
            <h3>user: <span className="card-username" >{ user.username }</span></h3>
          
<button onClick={() => {
   
   
        if(confirm("are you sure you wanna delete?")){
            deleteUser();
        }
   
    
}} >delete user</button>
        </div>
    )
}

export default UserCard;