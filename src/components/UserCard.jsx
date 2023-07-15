import React from "react";

const UserCard = ({ user }) => {
    return(
        <div>
            <h3>username</h3>
            <p>{ user.username }</p>
            <h3>
                password
            </h3>
<p>{ user.password } </p>
<button>delete user</button>
        </div>
    )
}

export default UserCard;