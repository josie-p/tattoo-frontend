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