import React from "react";
import { motion } from "framer-motion";

const Novedades = () => {
  return (
    <section className="w-full py-16 flex justify-center bg-[var(--color-background)]">

      {/* Contenedor */}
      <div className="w-[95%] max-w-6xl">

        {/* Título principal */}
        <h2 className="text-[45px] font-bold text-center mb-16 text-[var(--color-titulos)]">
          ENTERATE DE LAS ÚLTIMAS NOVEDADES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          <div className="flex justify-center">
            <img
              src="/mail.png"
              alt="Newsletter"
              className="w-[250px] md:w-[320px]"
            />
          </div>


          {/* Texto + Form */}
          <div className="mt-10 md:mt-0 text-center md:text-left">

            <h3 className="text-[30px] font-semibold text-[var(--p-negro)] mb-4">
              Únete a nuestro boletín informativo
            </h3>

            <p className="text-[var(--p-gris-claro)] text-[18px] mb-6 leading-relaxed">
              Recibe las últimas novedades y ofertas exclusivas.
            </p>

            {/* Input */}
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full md:w-[80%] p-3 rounded-md border 
               border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none mb-4"/>

            {/* Botón  */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="w-full md:w-[80%] 
                bg-[var(--botones-rojos)] hover:bg-[var(--botones-rojos-hover)]
                text-[var(--p-blanco)] font-semibold
                px-8 py-3 rounded-md">
              Subscribirse ahora
            </motion.button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Novedades;
