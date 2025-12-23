import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../../redux/usuario/usuarioSlice";
import { mensaje } from "../../UI/Toast/mensaje";
import IconButton from "../../UI/IconButton/IconButton";

const LogoutButton = ({ className = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    mensaje("Sesión cerrada correctamente 👋");
    navigate("/");
  };

  return (
    <div className={className}>
      <IconButton onClick={handleLogout} ariaLabel="Cerrar sesión" className={`w-full justify-start text-[var(--p-blanco)] rounded-md`}>
        <FiLogOut size={20} />
        <span className="px-2">Cerrar sesión</span>
      </IconButton>
    </div>
  );
};

export default LogoutButton;
