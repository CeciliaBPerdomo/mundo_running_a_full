import axios from "axios";

const ruta = import.meta.env.VITE_RUTA;

/**
 * ❤️ Agregar producto a favoritos
 */
export const agregarFavorito = async (productoId) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.post(
            `${ruta}favoritos`,
            { productoId },
            {
                headers: {
                    "x-token": token
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error al agregar favorito", error);
        throw error;
    }
};


/**
 * ⭐ Obtener favoritos del usuario
 */
export const obtenerFavoritos = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
            `${ruta}favoritos`,
            {
                headers: {
                    "x-token": token
                }
            }
        );

        return response.data.favoritos;
    } catch (error) {
        console.error("Error al obtener favoritos", error);
        throw error;
    }
};


/**
 * ❌ Eliminar favorito
 */
export const eliminarFavorito = async (productoId) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.delete(
            `${ruta}favoritos/${productoId}`,
            {
                headers: {
                    "x-token": token
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error al eliminar favorito", error);
        throw error;
    }
};