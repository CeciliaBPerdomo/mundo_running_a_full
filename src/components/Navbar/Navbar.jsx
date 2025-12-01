import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "../../redux/theme/themeSlice"

// Estilos e iconos 
import { motion } from "framer-motion";
import { FiUser, FiHeart, FiShoppingCart, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Moon, Sun } from 'lucide-react';

const menuItems = ["INICIO", "TIENDA DEPORTIVA", "SERVICIOS", "QUIÉNES SOMOS", "CONTACTO"];

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[var(--color-background-black)] text-[var(--p-blanco)] z-50 h-[60px] flex items-center shadow-md">
      <div className="w-[95%] max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[40px] w-auto"
          />
        </Link>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-6 text-[15px] tracking-wide">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer relative"
              whileHover="hover"
            >
              {item}

              {/* Línea animada */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-[var(--color-titulos)]"
                initial={{ width: 0 }}
                variants={{ hover: { width: "100%" } }}
                transition={{ duration: 0.2 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Iconos + Hamburguesa */}
        <div className="flex items-center gap-5 text-[22px]">
          <button
            onClick={() => navigate("/login")}
            className="p-2 rounded-full bg-[var(--color-background-black)] hover:bg-[var(--color-titulos)] transition-transform hover:scale-110"
          >
            <FiUser size={22} className="text-[var(--color-encabezados)]" />
          </button>

          <button
            onClick={() => console.log("Hola")}
            className="p-2 rounded-full bg-[var(--color-background-black)] hover:bg-[var(--color-titulos)] transition-transform hover:scale-110"
          >
            <FiHeart size={22} className="text-[var(--color-encabezados)]" />
          </button>

          <button
            onClick={() => console.log("Hola")}
            className="p-2 rounded-full bg-[var(--color-background-black)] hover:bg-[var(--color-titulos)] transition-transform hover:scale-110"
          >
            <FiShoppingCart size={22} className="text-[var(--color-encabezados)]" />
          </button>


          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-[var(--color-background-black)] hover:bg-[var(--color-titulos)] transition-transform hover:scale-110"
            aria-label="Cambiar tema"
          >
            {mode === 'dark' ? (
              <Sun size={22} className="text-[var(--color-encabezados)]" />
            ) : (
              <Moon size={22} className="text-[var(--color-encabezados)]" />
            )}
          </button>

          {/* MENÚ HAMBURGUESA (solo mobile) */}
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

        {/* Menú móvil (aparece cuando el hamburguesa está activo) */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              absolute top-full left-0 w-full 
              bg-[var(--color-background-black)] 
              shadow-lg md:hidden
            "
          >
            <ul className="flex flex-col py-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="
                    cursor-pointer 
                    px-6 py-3 
                    border-b border-gray-700 
                    hover:bg-gray-800 
                    transition-colors"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  onClick={toggleMenu}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
