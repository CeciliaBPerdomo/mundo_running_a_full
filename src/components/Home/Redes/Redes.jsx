import React from "react";
import { FaInstagram } from "react-icons/fa";

const Redes = () => {
  return (
    <section className="w-full relative">
      <a
        href="https://www.instagram.com/mundorunningafull/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Imagen full width */}
        <img
          src="/comparte.jpg"
          alt="Comparte tus momentos"
          className="w-full h-[237px] object-cover"
        />
      </a>
      {/* Overlay con contenido centrado */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

        {/* Texto principal */}
        <h2 className="text-xl md:text-2xl font-semibold drop-shadow-lg">
          Comparte tus momentos favoritos en Instagram
        </h2>

        {/* Hashtag + ícono */}
        <a
          href="https://www.instagram.com/mundorunningafull/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto"
        >
          <div className="flex items-center gap-2 mt-4 text-lg md:text-xl">
            <FaInstagram className="text-white" />
            <span>#mundorunningfull</span>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Redes;
