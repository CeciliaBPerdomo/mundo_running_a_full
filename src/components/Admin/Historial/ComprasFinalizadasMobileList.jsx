import React from "react";
import { getEstadoColor } from "../../../helpers/carrito/carritoEstado";
import { onlyDate } from "../../../helpers/dateUtils";

const ComprasFinalizadasMobileList = ({ carritos = [] }) => {
  if (carritos.length === 0) {
    return (
      <div className="rounded-2xl border  px-4 py-6 text-center text-[var(--text-gray-500)] shadow md:hidden">
        No hay compras finalizadas o canceladas.
      </div>
    );
  }

  return (
    <div className="space-y-4 md:hidden">
      {carritos.map((carrito) => {
        const usuario = carrito?.user?.nombre || "-";
        const estado = carrito?.estado || "-";
        const total = carrito?.total ?? 0;
        const modificado = carrito?.modifiedAt ?? 0;
        const productos = (carrito?.items || []).reduce(
          (acc, item) => acc + (item?.cantidad || 0),
          0
        );

        return (
          <article
            key={carrito._id}
            className="rounded-2xl border border border-[var(--recuadro)] bg-[var(--color-background)]e p-4 shadow"
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
                <span className="text-[var(--text-gray-500)]">Último movimiento</span>
                <span className="font-medium">{onlyDate(modificado)}</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-[var(--text-gray-500)]">Productos</span>
                <span className="font-medium">{productos}</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-[var(--text-gray-500)]">Total</span>
                <span className="font-semibold">u$s {total}</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ComprasFinalizadasMobileList;
