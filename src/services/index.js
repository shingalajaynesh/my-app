const APIURL = 'http://localhost:3000/'

const makeApi = async (url, method, data) => {
    return await fetch(APIURL + url, { method, body: JSON.stringify(data) })
}
export const getAllUsers = async () => {
    try {
        const response = await makeApi('dashboard', 'GET')
        if (response.ok) {
            return await response.json()
        }
    }
    catch (e) {
        console.log(e)
    }

}

export const registerUser = async (userData) => {
    const reg = await makeApi('registration', 'POST', userData)
    const result = await reg.json()
    return result
}