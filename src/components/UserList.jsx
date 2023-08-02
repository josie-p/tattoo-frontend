import React from "react";
import { UserCard } from "./";

const UserList = ({ allUsers, token }) => {
    return(
        <div>
            <button onClick={() => {
                const usersList = document.getElementById("users-list");
                // const displayStat = document.getElementById("users-list").style;

                if(document.getElementById("users-list").style.display === "none"){
                    console.log("display is none", document.getElementById("users-list").style.display);
                    // usersList.style.display = "flex";
                    document.getElementById("users-list").style.display = "flex"
                    console.log("changed display to flex");
                }else{
                    console.log("display is flex", document.getElementById("users-list").style.display);
                    // usersList.style.display = "none";
                    document.getElementById("users-list").style.display = "none";
                console.log("changed to none");                }

            }} >manage admin users!</button>
            <div id="users-list" >
                {
                    allUsers.map((user, idx) => {
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