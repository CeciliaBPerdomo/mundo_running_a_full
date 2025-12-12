import axios from "axios"

export const crearUsuario = async (nombre, email, password, celular, ciudad) => {
    try {
        const ruta = import.meta.env.VITE_RUTA
        const url = ruta + "auth/register"

        const user = { nombre, email, password, celular, ciudad }

        const response = await axios.post(url, user)
        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}