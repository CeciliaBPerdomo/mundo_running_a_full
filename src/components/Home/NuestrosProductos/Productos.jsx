import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const Productos = () => {
  const cards = [
    { title: "CICLISMO", img: "/productos/ciclismo.jpg" },
    { title: "NATACIÓN", img: "/productos/natacion.jpg" },
    { title: "RUNNING", img: "/productos/running.jpg" },
  ];

  return (
    <section className="w-full py-16 bg-[var(--color-background-secondary)] flex justify-center">
      <div className="w-[95%] max-w-6xl">

        {/* Título */}
        <h2 className="text-[45px] font-bold text-center text-[var(--color-titulos)] mb-10">
          NUESTROS PRODUCTOS
        </h2>

        {/* Input de búsqueda */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full md:w-[60%]">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="
        w-full p-3 pr-14 rounded-full border 
        border-gray-300 outline-none text-[18px]
      "
            />

            {/* Botoncito dentro del input */}
            <button
              className="
        absolute right-1 top-1/2 -translate-y-1/2
        bg-[var(--botones-rojos)] text-[var(--p-blanco)] 
        w-10 h-10 rounded-full flex items-center justify-center text-lg
      "
            >
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(0,0,0,0.25)" }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="w-full h-[540px] relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay con 56% de transparencia */}
                <div className="absolute bottom-0 left-0 w-full bg-black/56 py-5 flex justify-center">
                  <p className="text-[var(--p-blanco)] text-[24px] font-semibold tracking-wide">
                    {card.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Productos;
