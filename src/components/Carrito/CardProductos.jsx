import React from "react";

export const CardProductos = ({ carrito }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[var(--color-titulos)]">
        Tus productos:
      </h2>

      {carrito.items.map((item) => (
        <div
          key={item._id}
          className="flex gap-4 items-center pb-4"
        >
          <img
            src={item.producto.foto}
            alt={item.producto.marca}
            className="w-20 h-20 object-contain"
          />

          <div className="flex-1">
            <p className="font-medium">{item.producto.marca}</p>
            <p className="text-sm text-[var(--text-gray-500)]">
              Cantidad: {item.cantidad}
            </p>
          </div>

          <span className="font-semibold">
            u$s {item.precio * item.cantidad}
          </span>
        </div>
      ))}

      <div className="flex justify-between pt-4 text-lg font-bold border-t border-[var(--botones-rojos)]">
        <span>Total:</span>
        <span>u$s {carrito.total}</span>
      </div>
    </div>
  );
};
