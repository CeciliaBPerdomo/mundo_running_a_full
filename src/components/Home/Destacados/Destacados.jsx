import React from 'react'

import data from "../../../data/destacados.json"
import CardProducto from './CardProducto'

const Destacados = () => {
  return (
     <section className="w-full py-12">
      <h2 className="text-[45px] font-bold text-center mb-12 text-[var(--color-titulos)]">
        DESTACADOS
      </h2>

 {/* GRID DE CARDS */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-4 justify-items-center">
        {data?.map((producto) => (
          <CardProducto
            key={producto.id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            colores={producto.colores}
          />
        ))}
      </div>
      </section>
  )
}

export default Destacados