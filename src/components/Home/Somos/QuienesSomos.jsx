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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">

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
            <p className="text-[var(--p-negro)] text-[20px] mb-4">
           <span className="text-[var(--color-titulos)]">Jonil Gougeon</span>: Apasionado deportista, emprendedor de Juan Lacaze con una destacada trayectoria como triatleta e Ironman finisher, ha demostrado su determinación y dedicación en cada desafío. Como director de Mundo Running TV y organizador de eventos deportivos desde 2015, está dejando una huella imborrable en el mundo deportivo.
            </p>

             <p className="text-[var(--p-negro)] text-[20px]">
              <span className="text-[var(--color-titulos)]">Natalia Hernández</span>: Profesional destacada que se desempeña como codirectora y fotógrafa en Mundo Running TV. Asimismo, como deportista aficiona combina su pasión por el deporte con su compromiso empresarial.
             </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default QuienesSomos;
