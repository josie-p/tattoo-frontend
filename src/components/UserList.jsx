import React from "react";
import { UserCard } from "./";

const UserList = ({ allUsers, token }) => {

   const userList = allUsers.filter((user, idx) => {
      if( user.username === "joann-w" || user.username === "josie-p"){
        return false;
      }else{
        return true;
      }
   })

    return(
        <div id="users-page">
            <h4>manage admin users here!</h4>
            <button id="manage-users" onClick={() => {

                if(document.getElementById("users-list").style.display === "flex"){
                    
                    document.getElementById("users-list").style.display = "none";
                }else{
                    document.getElementById("users-list").style.display = "flex";      
                        }

            }} >manage admin users</button>
            <div id="users-list" >
                {
                    userList.map((user, idx) => {
                        return(
                            <div className="user-in-list" key={ `${idx} - user list map` } >
                                <UserCard token={ token } user={ user }  />
                            </div>
                        )
                    })
                }
                </div>
        </div>
    )
}

export default UserList;