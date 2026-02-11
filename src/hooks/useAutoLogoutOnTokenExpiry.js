import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/usuario/usuarioSlice";
import { isTokenExpired } from "../helpers/auth/TokenValido";
import { mensaje } from "../components/UI/Toast/mensaje";

export const useAutoLogoutOnTokenExpiry = (intervalMs = 30000) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const didLogoutRef = useRef(false);

  useEffect(() => {
    const check = () => {
      const token = localStorage.getItem("token");
      if (didLogoutRef.current) return;

      if (token && isTokenExpired(token)) {
        didLogoutRef.current = true;
        mensaje("⏳ Tu sesión expiró. Volvé a iniciar sesión.");
        setTimeout(() => {
          dispatch(logout());
          navigate("/login");
        }, 800);
      }
    };

    check();
    const id = setInterval(check, intervalMs);
    return () => clearInterval(id);
  }, [dispatch, navigate, intervalMs]);
};
