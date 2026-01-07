import axios from "axios"

const ruta = import.meta.env.VITE_RUTA

// trae todos los productos
export const getProductos = async () => {
    try {
        const url = `${ruta}products`
        const token = localStorage.getItem("token");

        const response = await axios.get(url, {
                headers: {
                "x-token": token,
            },
        })
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