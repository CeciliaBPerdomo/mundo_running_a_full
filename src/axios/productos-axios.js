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
                message: error.response.data?.errors?.[0]?.msg || "Error al traer los productos"
            }
        }

        throw {
            status: 500,
            message: "Error de conexión con el servidor"
        }
    }
}

// Guardar los productos 
export const postProductos = async (marca, descripcion, precio, categoria, foto, talles, colores) => {
    try {
        const url = `${ruta}products/createProduct`
        const data = { marca, descripcion, precio, categoria, foto, talles, colores }
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
                message: error.response.data?.errors?.[0]?.msg || "Error al guardar el producto"
            }
        }

        throw {
            status: 500,
            message: "Error de conexión con el servidor"
        }
    }
}

// Borrar productos
export const deleteProducto = async (id) => {
    try {
        const url = `${ruta}products/${id}`
        const token = localStorage.getItem("token");

        const response = await axios.delete(url, {
            headers: {
                "x-token": token,
            },
        })
        return response.data
    } catch (error) {
        if (error.response) {
            throw {
                status: error.response.status,
                message: error.response.data?.errors?.[0]?.msg || "Error al guardar el producto"
            }
        }

        throw {
            status: 500,
            message: "Error de conexión con el servidor"
        }
    }
}


// Actualizar información de los productos 
export const updateProductos = async (id, data) => {
    try {
        const url = `${ruta}products/${id}`
        const token = localStorage.getItem("token");

        if (!token) {
            throw {
                status: 401,
                message: "Token no encontrado"
            }
        }

        const response = await axios.patch(url, data, {
            headers: {
                "x-token": token,
            },
        });
        return response.data
    } catch (error) {
        if (error.response) {
            throw {
                status: error.response.status,
                message: error.response.data?.errors?.[0]?.msg || "Error al guardar el producto"
            }
        }

        throw {
            status: 500,
            message: "Error de conexión con el servidor"
        }
    }
}

// Productos por categoria
export const getProductosPorCategoria = async (categoria) => {
    try {
        const url = `${ruta}products/category/${categoria}`
        const token = localStorage.getItem("token");
        if (!token) {
            throw {
                status: 401,
                message: "Token no encontrado"
            }
        }
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
                message: error.response.data?.errors?.[0]?.msg || "Error al guardar el producto"
            }
        }

        throw {
            status: 500,
            message: "Error de conexión con el servidor"
        }
    }
}

// Trae los últimos 4 como destacados
export const getProductosDestacados = async () => {
  try {
    const url = `${ruta}products/destacados`;

    const response = await axios.get(url);
    console.log(response.data)
    return response.data.productos;

  } catch (error) {
    console.error(error)
    throw {
      status: error.response?.status || 500,
      message: "Error al traer productos destacados"
    };
  }
};