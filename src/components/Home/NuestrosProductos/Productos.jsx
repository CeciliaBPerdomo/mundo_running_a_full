import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import BuscadorProductos from "../../UI/Buscador/BuscadorProductos";

const Productos = () => {
  const cards = [
    { title: "CICLISMO", img: "/productos/ciclismo.jpg" },
    { title: "NATACIÓN", img: "/productos/natacion.jpg" },
    { title: "RUNNING", img: "/productos/running.jpg" },
  ];

  const [busqueda, setBusqueda] = useState("")

  return (
    <section className="w-full py-16 bg-[var(--color-background-secondary)] flex justify-center">
      <div className="w-[95%] max-w-6xl">

        {/* Título */}
        <h2 className="text-[45px] font-bold text-center text-[var(--color-titulos)] mb-4">
          NUESTROS PRODUCTOS
        </h2>

        <div className="flex justify-center mb-8">
          <BuscadorProductos
            value={busqueda}
            onChange={setBusqueda}
            onSubmit={() => console.log("hola")}
          />
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
