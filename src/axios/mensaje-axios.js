import axios from "axios";

const ruta = import.meta.env.VITE_RUTA;

export const crearMensaje = async (nombre, apellido, email, mensaje) => {
  try {
    const url = `${ruta}mensajes`;
    const data = { nombre, apellido, email, mensaje };

    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    if (error.response) {
      throw {
        status: error.response.status,
        message:
          error.response.data?.errors?.[0]?.msg ||
          error.response.data?.msg ||
          "Error al enviar el mensaje",
      };
    }

    throw {
      status: 500,
      message: "Error de conexion con el servidor",
    };
  }
};

export const getMensajes = async () => {
  try {
    const url = `${ruta}mensajes`;
    const token = localStorage.getItem("token");

    const response = await axios.get(url, {
      headers: {
        "x-token": token,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw {
        status: error.response.status,
        message:
          error.response.data?.errors?.[0]?.msg ||
          error.response.data?.msg ||
          "Error al traer los mensajes",
      };
    }

    throw {
      status: 500,
      message: "Error de conexion con el servidor",
    };
  }
};

export const actualizarEstadoMensaje = async (mensajeId, estado) => {
  try {
    const url = `${ruta}mensajes/${mensajeId}/estado`;
    const token = localStorage.getItem("token");

    const response = await axios.patch(
      url,
      { estado },
      {
        headers: {
          "x-token": token,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw {
        status: error.response.status,
        message:
          error.response.data?.errors?.[0]?.msg ||
          error.response.data?.msg ||
          "Error al actualizar el estado del mensaje",
      };
    }

    throw {
      status: 500,
      message: "Error de conexion con el servidor",
    };
  }
};

export const getMensajesPorEstado = async (estado) => {
  try {
    const url = `${ruta}mensajes/estado/${encodeURIComponent(estado)}`;
    const token = localStorage.getItem("token");

    const response = await axios.get(url, {
      headers: {
        "x-token": token,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw {
        status: error.response.status,
        message:
          error.response.data?.errors?.[0]?.msg ||
          error.response.data?.msg ||
          "Error al traer los mensajes por estado",
      };
    }

    throw {
      status: 500,
      message: "Error de conexion con el servidor",
    };
  }
};
