const URL = "http://localhost:4000";

const makeHeaders = (token) => {
    return{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

export const loginUserAPI = async(username, password) => {
    try {
        const response = await fetch(`${URL}/api/users/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        const result = await response.json();
        
        console.log(result, "result from loginAPI func!!");

        return result;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const registerUserAPI = async(username, password) => {
    try {
        
        const response = await fetch(`${URL}/api/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        const result = await response.json();

        console.log(result, "result from registerAPI func!!");

        return result;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const editInfoAPI = async(username, password, token) => {
    try {
        
        const response = await fetch(`${URL}/api/users/edit-my-info`, {
            method: "PATCH",
            headers: makeHeaders(token),
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        const result = await response.json();

        console.log(result, "result from editInfoAPI func!!!");

        return result;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getAllUsersAPI = async() => {
    try {
        
        const response = await fetch(`${URL}/api/users/all`, {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        console.log(result, "result from all users api call");

        return result;

    } catch (error) {
        console.error(error);
        throw error;
    }
}