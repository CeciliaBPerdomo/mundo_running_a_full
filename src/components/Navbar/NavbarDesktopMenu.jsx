import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarDesktopMenu = ({ menuItems }) => {
  return (
    <ul className="hidden md:flex gap-6 text-[15px] tracking-wide">
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          className="cursor-pointer relative"
          whileHover="hover"
        >
          <Link to={item.link}>
            {item.titulo}
          </Link>

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
  );
};

export default NavbarDesktopMenu;
