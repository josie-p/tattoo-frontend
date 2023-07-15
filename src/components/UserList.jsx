import React from "react";
import { UserCard } from "./";

const UserList = ({ allUsers }) => {
    return(
        <div>
            <p>user list!</p>
                {
                    allUsers.map((user, idx) => {
                        return(
                            <div>
                                <UserCard user={ user } key={ `${idx} - user list map` } />
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default UserList;