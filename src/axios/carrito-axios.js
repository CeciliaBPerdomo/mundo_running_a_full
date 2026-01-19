import axios from "axios"

const ruta = import.meta.env.VITE_RUTA

// Agregar al carrito
export const agregarAlCarrito = async ({ producto, cantidad = 1, envio = null }) => {
    try {
        const token = localStorage.getItem("token");
        const body = { producto, cantidad }

        // solo mandamos envio si existe
        if (envio) {
            body.envio = envio;
        }

        const response = await axios.post(`${ruta}/carrito`, body, {
            headers: {
                "Content-Type": "application/json",
                "x-token": token
            }
        }
        );
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error al agregar al carrito", error);
        throw error;
    }
};
