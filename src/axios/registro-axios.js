import axios from "axios"

const ruta = import.meta.env.VITE_RUTA

// Registro de usuario
export const crearUsuario = async (nombre, email, password, celular, ciudad) => {
    try {
        const url = `${ruta}auth/register`

        const user = { nombre, email, password, celular, ciudad }
        const response = await axios.post(url, user)
        return response.data
    } catch (error) {
        console.error('Error en crearUsuario:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        return false
    }
}

// Verificar codigo
export const verificarCodigo = async (email, code) => {
    try {
        const url = `${ruta}auth/verify`

        const response = await axios.patch(url, { email, code })
        return response.data
    } catch (error) {
        console.error(error.response?.data || error)
        throw error
    }
}