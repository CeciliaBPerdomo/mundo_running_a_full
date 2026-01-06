import axios from "axios"

const ruta = import.meta.env.VITE_RUTA

// Registro de issue
export const crearIssue = async (title, description, priority) => {
    try {
        const url = `${ruta}issues`
        const data = { title, description, priority }

        const token = localStorage.getItem("token");

        const response = await axios.post(url, data, {
            headers: {
                "x-token": token,
            },
        });


        return response.data
    } catch (error) {
        if (error.response) {
            throw {
                status: error.response.status,
                message: error.response.data?.errors?.[0]?.msg || "Error al reportar problema"
            }
        }

        throw {
            status: 500,
            message: "Error de conexión con el servidor"
        }
    }
}
