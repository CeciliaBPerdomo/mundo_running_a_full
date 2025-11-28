import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const CardProducto = ({ id, imagen, nombre, descripcion, colores }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative rounded-xl p-4 flex flex-col"
      style={{
        backgroundColor: "var(--fondo-cards)",
        width: "290px"
      }}
    >
      {/* ICONOS DERECHA */}
      <div className="absolute top-3 right-3 flex flex-col gap-1">
        <FiHeart className="text-[var(--botones-rojos)] text-2xl cursor-pointer" />
        <FiShoppingCart className="text-[var(--botones-rojos)] text-2xl cursor-pointer" />
      </div>

      {/* Imagen */}
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Nombre */}
      <h3 className="text-[var(--color-titulos)] text-xl font-bold text-center tracking-wide mb-2 h-[60px] flex items-center justify-center">
        {nombre}
      </h3>

      {/* Contenedor descripción + colores */}
      <div className="flex items-center gap-4 mb-4">
        {/* Descripción */}
        <p className="text-[var(--p-negro)] text-left" style={{ fontSize: "20px" }} >
          {descripcion}
        </p>

        {/* Colores */}
        <div className="flex gap-2">
          {colores?.map((color, idx) => (
            <span
              key={idx}
              className="w-5 h-5 rounded-full border border-[var(--bordes-botones-negro)]"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>

      {/* Botón VER DETALLES */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="bg-[var(--botones-rojos)] hover:bg-[var(--botones-rojos-hover)] text-[var(--p-blanco)] py-2 px-4 uppercase tracking-wide mt-auto"
        style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
      >
        Ver detalles
      </motion.button>
    </motion.div>
  );
};

export default CardProducto;
