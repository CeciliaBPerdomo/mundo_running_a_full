import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EstadoCarrito from "./EstadoCarrito";
import { getEstadoColor } from "../../../helpers/carrito/carritoEstado";

const CarritosPendientesMobileList = ({ carritos, onChangeEstado }) => {
  const [carritoSeleccionado, setCarritoSeleccionado] = useState(null);

  if (carritos.length === 0) {
    return (
      <div className="rounded-2xl border bg-white px-4 py-6 text-center text-[var(--text-gray-500)] shadow md:hidden">
        No hay carritos pendientes de pago.
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4 md:hidden">
        {carritos.map((carrito) => {
          const usuario = carrito?.user?.nombre || "-";
          const productos = (carrito?.items || []).reduce(
            (acc, item) => acc + (item?.cantidad || 0),
            0
          );
          const envio = carrito?.envio || {};
          const estado = carrito?.estado || "-";
          const total = carrito?.total ?? 0;

          return (
            <article
              key={carrito._id}
              className="rounded-2xl border border-[var(--recuadro)] bg-[var(--color-background)] p-4 shadow"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--text-gray-500)]">
                    Cliente
                  </p>
                  <h3 className="text-base font-semibold text-[var(--p-negro)]">
                    {usuario}
                  </h3>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getEstadoColor(
                    estado
                  )}`}
                >
                  {estado}
                </span>
              </div>

              <div className="space-y-3 text-sm text-[var(--p-negro)]">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[var(--text-gray-500)]">Productos</span>
                  <span className="font-medium">{productos}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[var(--text-gray-500)]">Total</span>
                  <span className="font-semibold">u$s {total}</span>
                </div>

                <div>
                  <p className="mb-1 text-[var(--text-gray-500)]">Envio</p>
                  <p className="leading-relaxed">
                    {envio?.nombre || "-"}: {envio?.direccion || "-"},{" "}
                    {envio?.ciudad || "-"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setCarritoSeleccionado(carrito)}
                className="text-[var(--p-negro)] mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-[var(--border-gray-300)] px-4 py-2 transition hover:bg-gray-100"
              >
                <FaEdit />
                Cambiar estado
              </button>
            </article>
          );
        })}
      </div>

      <EstadoCarrito
        carrito={carritoSeleccionado}
        onClose={() => setCarritoSeleccionado(null)}
        onConfirm={(nuevoEstado) => {
          if (!carritoSeleccionado) return;
          onChangeEstado(carritoSeleccionado._id, nuevoEstado);
          setCarritoSeleccionado(null);
        }}
      />
    </>
  );
};

export default CarritosPendientesMobileList;
