import React from "react";
import ServiceImageCard from "./ServiceImageCard";

const Servicios = () => {
  return (
    <section className="w-full py-16 flex justify-center bg-[var(--color-background-secondary)]">
      <div className="w-full">
        <h2 className="text-[45px] font-bold text-center mb-12 text-[var(--color-titulos)]">
          NUESTROS SERVICIOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <ServiceImageCard
            imageSrc="/servicios/reparacion.jpg"
            imageAlt="Reparación y mantenimiento"
            title="REPARACIÓN Y MANTENIMIENTO DE BICICLETAS"
            hover
          />

          <ServiceImageCard
            imageSrc="/servicios/fotos.jpg"
            imageAlt="Fotografías deportivas"
            title="FOTOGRAFÍAS DE EVENTOS DEPORTIVOS"
            hover
          />
        </div>
      </div>
    </section>
  );
};

export default Servicios;
