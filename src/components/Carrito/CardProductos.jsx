import React from "react"

const CardProductos = ({ item, mostrarCantidad = true, onEliminar = null, bot = 4 }) => {
  const { producto, cantidad = 1, precio } = item

  return (
    <div className={`flex gap-4 pb-${bot}`}>
      <img
        src={producto.foto}
        alt={producto.marca}
        className="w-20 h-20 object-contain rounded-2xl"
      />

      <div className="flex-1">
        <h3 className="font-bold text-[var(--text-gray-500)]">{producto.marca}</h3>
        <p className="text-sm text-[var(--text-gray-500)]">{producto.descripcion}</p>

        <div className="flex justify-between mt-2">
          {mostrarCantidad && (
            <span className="text-[var(--p-negro)]">
              Cantidad: {cantidad}
            </span>
          )}
          <span className="font-semibold text-[var(--p-negro)]">
            u$s {precio * cantidad}
          </span>
        </div>

        <div className="flex justify-end">
          {onEliminar && (
            <button
              onClick={() => onEliminar(item)}
              className="text-2xl p-1 rounded-xl hover:bg-red-50 transition flex-shrink-0">
              🗑️
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardProductos
