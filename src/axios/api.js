import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_RUTA,
});

//  Agrega el token automáticamente en cada request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["x-token"] = token;
  }

  return config;
});

//  Manejo global de 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      console.warn("Sesión expirada o token inválido");
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      localStorage.removeItem("expirationTime");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
