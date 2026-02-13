import axios from "axios"

const ruta = import.meta.env.VITE_RUTA

// Registro de usuario
export const crearUsuario = async (nombre, email, password, celular, ciudad, codigoAdmin) => {
    try {
        const url = `${ruta}auth/register`

        const user = { nombre, email, password, celular, ciudad }

        const config = {}

        // Si hay código admin
        if (codigoAdmin && codigoAdmin.trim() !== "") {
            config.headers = {
                "admin-key": codigoAdmin
            }
        }

        const response = await axios.post(url, user, config)
        return response.data
    } catch (error) {
        if (error.response) {
            throw {
                status: error.response.status,
                message: error.response.data?.errors?.[0]?.msg || "Error al crear usuario"
            }
        }

        throw {
            status: 500,
            message: "Error de conexión con el servidor"
        }
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


// Modificar información del usuario
export const updateUser = async (data, usuario) => {
    try {
        const url = `${ruta}auth/updateUser`
        const token = localStorage.getItem("token");
        const payload = {
            email: usuario.email, // mail anterior, el que ya está guardado
            ...data               // datos nuevos del form
        }

        const response = await axios.patch(url, payload, {
            headers: {
                "x-token": token,
            },
        })
        return response.data
    } catch (error) {
        console.error(error.response?.data || error)
        throw error
    }
}
