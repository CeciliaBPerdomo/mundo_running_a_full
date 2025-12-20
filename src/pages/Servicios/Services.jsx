import React from 'react'
import Servicios from "../../components/Home/Servicios/Servicios"
import ServiciosBicicleta from "../../components/Home/Servicios/ServiciosBicicleta"
import FotografiaEventos from "../../components/Home/Servicios/FotografiaEventos"

const Services = () => {
  return (
    <div className="py-4 bg-[var(--color-background-secondary)] pb-8">
      <Servicios />

     <div className="px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <ServiciosBicicleta />
          <FotografiaEventos />

        </div>
      </div>
    </div>
  )
}

export default Services
