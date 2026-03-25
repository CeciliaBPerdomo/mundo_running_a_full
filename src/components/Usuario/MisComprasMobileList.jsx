import React from "react";
import { cantidadProductos } from "../../helpers/compras/compras";

const MisComprasMobileList = ({ compras, estadoColor }) => {
  if (compras.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 md:hidden">
      {compras.map((carrito) => (
        <article
          key={carrito._id}
          className="rounded-2xl border border-[var(--recuadro)] bg-[var(--color-background)] p-4 shadow"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--text-gray-500)]">
                Fecha pedido
              </p>
              <p className="text-sm font-medium text-[var(--p-negro)]">
                {new Date(carrito.createdAt).toLocaleDateString()}
              </p>
            </div>

            <span
              className={`text-sm font-semibold ${estadoColor[carrito.estado]}`}
            >
              {carrito.estado}
            </span>
          </div>

          <div className="space-y-3 text-sm text-[var(--p-negro)]">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[var(--text-gray-500)]">Productos</span>
              <span className="font-medium">
                {cantidadProductos(carrito.items)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-[var(--text-gray-500)]">Total</span>
              <span className="font-semibold">u$s {carrito.total}</span>
            </div>

            <div>
              <p className="mb-1 text-[var(--text-gray-500)]">Envío</p>
              <p className="leading-relaxed">
                {carrito.envio?.direccion || "-"}, {carrito.envio?.ciudad || "-"}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default MisComprasMobileList;
