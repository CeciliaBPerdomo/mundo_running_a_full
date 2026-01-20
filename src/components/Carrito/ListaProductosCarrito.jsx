import React from 'react'
import CardProductos from './CardProductos'

const ListaProductosCarrito = ({ items, total }) => {
  return (
    <div className="bg-white border border-[var(--recuadro)] rounded-2xl shadow-md p-8 space-y-6">
      <h2 className="text-xl font-semibold text-[var(--color-titulos)]">
        Tus productos:
      </h2>

      {items.map((item) => (
        <CardProductos key={item._id} item={item} />
      ))}

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>u$s {total}</span>
      </div>
      
    </div>
  )
}

export default ListaProductosCarrito
