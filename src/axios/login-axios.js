import axios from "axios"

const ruta = import.meta.env.VITE_RUTA

export const loginUsuario = async (email, password) => {
    try {
        const url = `${ruta}auth/login`
        const response = await axios.post(url, { email, password })
        return response.data
    } catch (error) {
        console.error("Error en login:", error.response?.data || error.message)
        return false
    }
}