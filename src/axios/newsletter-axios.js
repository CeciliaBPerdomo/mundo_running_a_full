import axios from "axios";

const ruta = import.meta.env.VITE_RUTA;

export const crearNewsletter = async (email) => {
  try {
    const url = `${ruta}newsletter`;
    const data = { email };

    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    if (error.response) {
      throw {
        status: error.response.status,
        message:
          error.response.data?.errors?.[0]?.msg ||
          error.response.data?.msg ||
          "Error al suscribirse al newsletter",
      };
    }

    throw {
      status: 500,
      message: "Error de conexion con el servidor",
    };
  }
};

export const getNewsletters = async () => {
  try {
    const url = `${ruta}newsletter`;
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
          "Error al obtener los newsletters",
      };
    }

    throw {
      status: 500,
      message: "Error de conexion con el servidor",
    };
  }
};
