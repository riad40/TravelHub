import api from "../../configs/api"

// login service
const login = async (email: string, password: string) => {
    try {
        const response = await api.post("/auth/login", {
            email,
            password,
        })

        return response.data
    } catch (error) {
        return error
    }
}

// register service
const register = async (username: string, email: string, password: string) => {
    try {
        const response = await api.post("/auth/register", {
            username,
            email,
            password,
        })

        return response.data
    } catch (error) {
        return error
    }
}

export { login, register }
