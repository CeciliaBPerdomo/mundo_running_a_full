import React from "react";
import { FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Moon, Sun } from "lucide-react";
import { useSelector } from "react-redux";


const IconButton = ({ onClick, children, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="
      p-2 rounded-full 
      bg-[var(--color-background-black)] 
      hover:bg-[var(--color-titulos)] 
      transition-transform hover:scale-110
    ">
    {children}
  </button>
);

const NavbarIcons = ({ navigate, mode, toggleTheme, isMenuOpen, toggleMenu }) => {

  const usuarioActual = useSelector((state) => state.usuario.usuarioActual)


  return (
    <div className="flex items-center gap-5 text-[22px]">
      <IconButton onClick={() => usuarioActual ? navigate("/perfil") : navigate("/login")} ariaLabel="Login">
        <FiUser size={22} className="text-[var(--color-encabezados)]" />
      </IconButton>

      {usuarioActual && (
        <>
          <IconButton onClick={() => console.log("Favoritos")} ariaLabel="Favoritos">
            <FiHeart size={22} className="text-[var(--color-encabezados)]" />
          </IconButton>

          <IconButton onClick={() => console.log("Carrito")} ariaLabel="Carrito">
            <FiShoppingCart size={22} className="text-[var(--color-encabezados)]" />
          </IconButton>
        </>
      )}

      <IconButton onClick={toggleTheme} ariaLabel="Cambiar tema">
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
