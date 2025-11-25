import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiHeart, FiShoppingCart, FiMoon } from "react-icons/fi";

const menuItems = [
  "INICIO",
  "TIENDA DEPORTIVA",
  "SERVICIOS",
  "QUIÉNES SOMOS",
  "CONTACTO",
];

const Navbar = () => {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full 
        bg-[var(--color-background-black)] 
        text-white z-50
        h-[60px]
        flex items-center
        shadow-md
      "
    >
      <div className="w-[95%] max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[40px] w-auto"
          />
        </div>

        {/* Menú */}
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
                variants={{
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Iconos */}
        <div className="flex items-center gap-5 text-[22px]">
          <FiUser className="cursor-pointer hover:text-[var(--color-titulos)] transition" />
          <FiHeart className="cursor-pointer hover:text-[var(--color-titulos)] transition" />
          <FiShoppingCart className="cursor-pointer hover:text-[var(--color-titulos)] transition" />
          <FiMoon className="cursor-pointer hover:text-[var(--color-titulos)] transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
