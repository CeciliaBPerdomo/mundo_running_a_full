import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMobileMenu = ({ menuItems, onClose }) => {
  return (
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
        {menuItems.map((item) => (
          <motion.li
            key={item.link}
            className="
              cursor-pointer 
              px-6 py-3 
              border-b border-gray-700 
              hover:bg-gray-800 
              transition-colors
            "
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={onClose}
          >
            <Link to={item.link}>
              {item.titulo}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default NavbarMobileMenu;
