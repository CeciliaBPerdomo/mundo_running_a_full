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

    const response = await axios.patch(url, { envio },
      { headers: { "x-token": token } }
    )
    return response.data
  } catch (error) {
    console.error("Error al confirmar carrito", error)
    throw error
  }
}


export const obtenerHistorialCarritos = async () => {
  try {
    const token = localStorage.getItem("token");
    const url = `${ruta}carrito/historial`;

    const response = await axios.get(url, {
      headers: { "x-token": token }
    });

    return response.data.carritos;
  } catch (error) {
    console.error("Error al confirmar carrito", error)
    throw error
  }
}

export const carritosPendientesPago = async () => {
  try {
    const token = localStorage.getItem("token")
    const url = `${ruta}carrito/pendientes`;

    const response = await axios.get(url, {
      headers: { "x-token": token }
    })
    return response.data
  } catch (error) {
    console.error("Error al confirmar carrito", error)
    throw error
  }
}

// Actualizar estado del carrito
export const actualizarEstadoCarrito = async (carritoId, estado) => {
  try {
    const token = localStorage.getItem("token")
    const url = `${ruta}carrito/${carritoId}/estado`

    const response = await axios.patch(
      url,
      { estado },
      {
        headers: { "x-token": token },
      }
    );

    return response.data
  } catch (error) {
    console.error("Error al actualizar estado del carrito", error);
    throw error;
  }
};


export const carritosPendientesEnvio = async () => {
  try {
    const token = localStorage.getItem("token");
    const url = `${ruta}carrito/pendientes-envio`;

    const response = await axios.get(url, {
      headers: { "x-token": token },
    });

    return response.data; 
  } catch (error) {
    console.error("Error al obtener carritos pendientes de envío", error);
    throw error;
  }
};
