import axios from "axios"
const APIURL = 'http://localhost:3000/'

const makeApi = async (url, method, data = null) => {

    const token = localStorage.getItem("accessToken");
    return await axios({
        url: APIURL + url,
        method: method,
        data,
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json'
        }
    })
}
export const getAllUsers = async () => {
    try {
        const { data } = await makeApi('users', 'GET')
        console.log('response', data)
        return data
    }
    catch (e) {
        console.log(e)
    }

}

export const registerUser = async (userData) => {
    const result = await makeApi('registration', 'POST', userData)
    // const result = await reg.json()
    return result
}

export const loginUser = async (userData) => {
    try {
        const { data } = await makeApi('login', 'POST', userData);
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const getProfile = async () => {

    try {

        const { data } = await makeApi(
            'profile',
            'GET'
        );

        return data;

    } catch (e) {

        console.log(e);
    }
};