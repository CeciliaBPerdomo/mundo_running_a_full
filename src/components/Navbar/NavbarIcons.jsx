import React from "react";
import { FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Moon, Sun } from "lucide-react";
import { useSelector } from "react-redux";
import IconButton from "../UI/IconButton/IconButton";
import { contarProductosCarrito } from "../../helpers/compras/compras";

import { useEffect } from "react";
import { fetchCarrito } from "../../redux/carrito/carritoSlice";
import { useDispatch } from "react-redux";

const NavbarIcons = ({ navigate, mode, toggleTheme, isMenuOpen, toggleMenu }) => {
  const dispatch = useDispatch();

  const usuarioActual = useSelector((state) => state.usuario.usuarioActual)
  const carritoActual = useSelector((state) => state.carrito.carritoActual);
  const cantidadProductos = contarProductosCarrito(carritoActual);

  //  const esAdmin = usuarioActual?.rol === "admin";
  const esUser = usuarioActual?.rol === "user";

  useEffect(() => {
    if (usuarioActual) {
      dispatch(fetchCarrito());
    }
  }, [usuarioActual, dispatch]);

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

          <IconButton
            onClick={() => navigate("/carrito")}
            ariaLabel="Carrito"
            className="relative rounded-full"
          >
            <FiShoppingCart size={22} className="text-[var(--color-encabezados)]" />

            {cantidadProductos > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--text-errors)] text-[var(--p-blanco)] text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cantidadProductos}
              </span>
            )}
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
