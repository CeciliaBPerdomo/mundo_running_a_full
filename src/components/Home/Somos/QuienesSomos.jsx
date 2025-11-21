import React from "react";

const QuienesSomos = () => {
  return (
    <section className="w-full py-16 flex justify-center bg-[var(--color-background-forth)]">

      {/* Contenedor */}
      <div className="w-[95%] max-w-6xl">

        {/* Título */}
        <h2 className="text-[45px] md:text-4xl font-bold text-center mb-12 text-[var(--color-titulos)]">
          ¿QUIENES SOMOS?
        </h2>

        {/* Contenido en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="/quienes.png"
              alt="Nosotros"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="leading-relaxed text-lg bg-[var(--recuadro)] p-5">
            <p className="text-[var(--p-negro)] text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default QuienesSomos;
