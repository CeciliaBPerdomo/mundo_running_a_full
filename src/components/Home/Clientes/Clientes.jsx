import React from "react";
import { motion } from "framer-motion";

const Clientes = () => {
  return (
    <section className="w-full py-16 flex justify-center bg-[var(--color-background)]">

      {/* Contenedor */}
      <div className="w-[95%] max-w-6xl text-center">

        {/* Título */}
        <h2 className="text-[45px] font-bold mb-12 text-[var(--color-titulos)]">
          CLIENTES
        </h2>

        {/* Grid de clientes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 justify-items-center">

          {["1", "2", "3", "4"].map((num) => (
            <motion.img
              key={num}
              src={`/clientes/cliente${num}.jpg`}
              alt={`Cliente ${num}`}
              className="w-[310px] h-[310px] object-cover rounded-[20px] shadow-md"
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            />
          ))}

        </div>

        {/* Botón */}
        <a
          href="https://www.instagram.com/mundorunningafull/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="relative inline-block 
            px-12 py-4 font-semibold text-[var(--p-blanco)] tracking-widest
            bg-[var(--botones-rojos)] hover:bg-[var(--botones-rojos-hover)]
            text-lg italic overflow-hidden"

            style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
          >
            VER TODOS NUESTROS CLIENTES
          </button>
        </a>
      </div>
    </section>
  );
};

export default Clientes;
