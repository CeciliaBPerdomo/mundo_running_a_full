import React from "react";
import Servicios from "../../components/Home/Servicios/Servicios";
import ServiciosBicicleta from "../../components/Home/Servicios/ServiciosBicicleta";
import FotografiaEventos from "../../components/Home/Servicios/FotografiaEventos";
import ServiceImageCard from "../../components/Home/Servicios/ServiceImageCard";

const Services = () => {
  return (
    <div className="py-4 bg-[var(--color-background-secondary)] pb-8">
      <div className="hidden md:block">
        <Servicios />

        <div className="px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ServiciosBicicleta />
            <FotografiaEventos />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <section className="w-full py-16 flex justify-center bg-[var(--color-background-secondary)]">
          <div className="w-full">
            <h2 className="text-[45px] font-bold text-center mb-12 text-[var(--color-titulos)]">
              NUESTROS SERVICIOS
            </h2>

            <div className="space-y-12">
              <ServiceImageCard
                imageSrc="/servicios/reparacion.jpg"
                imageAlt="Reparación y mantenimiento"
                title="REPARACIÓN Y MANTENIMIENTO DE BICICLETAS"
                titleClassName="w-[90%] py-3 text-sm font-semibold"
              />

              <div className="px-6">
                <ServiciosBicicleta />
              </div>

              <ServiceImageCard
                imageSrc="/servicios/fotos.jpg"
                imageAlt="Fotografías deportivas"
                title="FOTOGRAFÍAS DE EVENTOS DEPORTIVOS"
                titleClassName="w-[90%] py-3 text-sm font-semibold"
              />

              <div className="px-6">
                <FotografiaEventos />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
