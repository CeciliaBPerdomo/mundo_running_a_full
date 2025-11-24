import React from "react";
import { motion } from "framer-motion";

const Servicios = () => {
  return (
    <section className="w-full py-16 flex justify-center bg-[var(--color-background-secondary)]">

      {/* Contenedor */}
      <div className="w-full">

        {/* Título */}
        <h2 className="text-[45px] font-bold text-center mb-12 text-[var(--color-titulos)]">
          NUESTROS SERVICIOS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Card 1 */}
          <motion.div
            className="relative w-full h-[350px]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src="/servicios/reparacion.jpg"
              alt="Reparación y mantenimiento"
              className="w-full h-full object-cover"
            />

            {/* Botón sobre imagen */}
            <button
              className="
                absolute bottom-4 left-1/2 -translate-x-1/2 
                w-[90%] py-3 text-sm md:text-base font-semibold 
                text-[var(--p-blanco)] italic tracking-wider
                bg-[var(--botones-rojos)]
                shadow-lg
              "
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
              }}
            >
              REPARACIÓN Y MANTENIMIENTO DE BICICLETAS
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative w-full h-[350px]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src="/servicios/fotos.jpg"
              alt="Fotografías deportivas"
              className="w-full h-full object-cover"
            />

            {/* Botón sobre imagen */}
            <button
              className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                w-[90%] py-3 text-sm md:text-base font-semibold
                text-[var(--p-blanco)] italic tracking-wider
                bg-[var(--botones-rojos)]
                shadow-lg
              "
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
              }}
            >
              FOTOGRAFÍAS DE EVENTOS DEPORTIVOS
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Servicios;
