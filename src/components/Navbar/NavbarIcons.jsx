import React from "react";
import { FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Moon, Sun } from "lucide-react";
import { useSelector } from "react-redux";
import IconButton from "../UI/IconButton/IconButton";

const NavbarIcons = ({ navigate, mode, toggleTheme, isMenuOpen, toggleMenu }) => {
  const usuarioActual = useSelector((state) => state.usuario.usuarioActual)

  //  const esAdmin = usuarioActual?.rol === "admin";
  const esUser = usuarioActual?.rol === "user";

  return (
    <div className="flex items-center gap-2 text-[22px]">
      <IconButton onClick={() => usuarioActual ? navigate("/perfil") : navigate("/login")} ariaLabel="Login" className="rounded-full">
        <FiUser size={22} className="text-[var(--color-encabezados)]" />
      </IconButton>

      {esUser && (
        <>
          <IconButton onClick={() => console.log("Favoritos")} ariaLabel="Favoritos" className="rounded-full">
            <FiHeart size={22} className="text-[var(--color-encabezados)]" />
          </IconButton>

          <IconButton onClick={() => console.log("Carrito")} ariaLabel="Carrito" className="rounded-full">
            <FiShoppingCart size={22} className="text-[var(--color-encabezados)]" />
          </IconButton>
        </>
      )}

      <IconButton onClick={toggleTheme} ariaLabel="Cambiar tema" className="rounded-full">
        {mode === "dark" ? (
          <Sun size={22} className="text-[var(--color-encabezados)]" />
        ) : (
          <Moon size={22} className="text-[var(--color-encabezados)]" />
        )}
      </IconButton>

      {/* Hamburguesa mobile */}
      {isMenuOpen ? (
        <FiX
          className="cursor-pointer md:hidden text-[26px]"
          onClick={toggleMenu}
        />
      ) : (
        <FiMenu
          className="cursor-pointer md:hidden text-[26px]"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default NavbarIcons;
