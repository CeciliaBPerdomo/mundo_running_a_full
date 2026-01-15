import axios from "axios";
import { isTokenExpired } from "../helpers/auth";

const api = axios.create({
  baseURL: "http://localhost:5173",
});

api.interceptors.request.use((config) => {
  if (isTokenExpired()) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    throw new axios.Cancel("Token expirado");
  }

  return config;
});

export default api;
