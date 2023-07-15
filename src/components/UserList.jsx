import React from "react";
import { UserCard } from "./";

const UserList = ({ allUsers, token }) => {
    return(
        <div>
            <p>user list!</p>
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
    )
}

export default UserList;