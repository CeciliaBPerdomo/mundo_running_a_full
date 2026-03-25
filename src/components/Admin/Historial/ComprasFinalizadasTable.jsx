import React from "react";
import { getEstadoColor } from "../../../helpers/carrito/carritoEstado";
import ComprasFinalizadasHeader from "./ComprasFinalizadasHeaders"
import { onlyDate } from "../../../helpers/dateUtils";

const ComprasFinalizadasTable = ({ carritos = [] }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow border mt-3">
      <table className="min-w-full text-sm">
        <ComprasFinalizadasHeader />

        <tbody>
          {carritos.length === 0 ? (
            <tr className="border-t">
              <td colSpan={4} className="px-4 py-6 text-center text-[var(--text-gray-500)]">
                No hay compras finalizadas o canceladas.
              </td>
            </tr>
          ) : (
            carritos.map((carrito) => {
              const usuario = carrito?.user?.nombre || "—";
              const estado = carrito?.estado || "—";
              const total = carrito?.total ?? 0;
              const modificado = carrito?.modifiedAt ?? 0

              const productos = (carrito?.items || []).reduce(
                (acc, item) => acc + (item?.cantidad || 0),
                0
              );

              return (
                <tr
                  key={carrito._id}
                  className="border border-[var(--recuadro)] bg-[var(--color-background)] hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 text-[var(--p-negro)]">{usuario}</td>
                  <td className="px-4 py-3 text-[var(--p-negro)]">{onlyDate(modificado)}</td>

                  <td className="px-4 py-3 text-center text-[var(--p-negro)]">{productos}</td>

                  <td className="px-4 py-3 text-right font-semibold text-[var(--p-negro)]">
                    u$s {total}
                  </td>

                  <td
                    className={`px-4 py-3 text-center font-semibold ${getEstadoColor(
                      estado
                    )}`}
                  >
                    {estado}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComprasFinalizadasTable;
