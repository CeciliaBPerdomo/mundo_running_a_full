import React from "react"

const CardProductos = ({ item }) => {
  const { producto, cantidad, precio } = item

  return (
    <div className="flex gap-4 pb-4">
      <img
        src={producto.foto}
        alt={producto.marca}
        className="w-20 h-20 object-contain rounded-2xl"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-[var(--p-negro)]">{producto.marca}</h3>
        <p className="text-sm text-[var(--text-gray-500)]">{producto.descripcion}</p>

        <div className="flex justify-between mt-2">
          <span className="text-[var(--p-negro)]">Cantidad: {cantidad}</span>
          <span className="font-semibold">
            u$s {precio * cantidad}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardProductos
