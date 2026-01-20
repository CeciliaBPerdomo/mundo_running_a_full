import axios from "axios"

const ruta = import.meta.env.VITE_RUTA

// Agregar al carrito
export const agregarAlCarrito = async ({ producto, cantidad = 1, envio = null, precio }) => {
    try {
        const url = `${ruta}carrito`
        const token = localStorage.getItem("token")
        const data = { producto, cantidad, precio }

        // solo mandamos envio si existe
        if (envio) {
            data.envio = envio;
        }

        const response = await axios.post(url, data, {
            headers: { "x-token": token }
        })
        return response.data;
    } catch (error) {
        console.error("Error al agregar al carrito", error);
        throw error;
    }
};

// Obtener carrito activo del usuario
export const obtenerCarrito = async () => {
  try {
    const url = `${ruta}carrito`;
    const token = localStorage.getItem("token");

    const response = await axios.get(url, {
      headers: {
        "x-token": token
      }
    });

    return response.data.carrito;
  } catch (error) {
    console.error("Error al obtener el carrito", error);
    throw error;
  }
};

export const confirmarCarrito = async (envio) => {
  try {
    const url = `${ruta}carrito/confirmar`
    const token = localStorage.getItem("token")

    const response = await axios.patch(url,{ envio },
      { headers: { "x-token": token } }
    )
console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error al confirmar carrito", error)
    throw error
  }
}
