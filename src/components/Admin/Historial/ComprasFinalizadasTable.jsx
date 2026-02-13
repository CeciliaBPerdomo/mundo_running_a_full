import React from "react";
import { getEstadoColor } from "../../../helpers/carrito/carritoEstado";
import ComprasFinalizadasHeader from "./ComprasFinalizadasHeaders"
import { onlyDate } from "../../../helpers/dateUtils";

const ComprasFinalizadasTable = ({ carritos = [] }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow border mt-3">
      {/* Header “tipo card” como la otra tabla */}
      {/* <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="font-semibold text-base">Compras finalizadas</h3>
        <div className="text-sm text-gray-500">{carritos.length} compras</div>
      </div> */}

      <table className="min-w-full text-sm">
        <ComprasFinalizadasHeader />

        <tbody>
          {carritos.length === 0 ? (
            <tr className="border-t">
              <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
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
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{usuario}</td>
                  <td className="px-4 py-3">{onlyDate(modificado)}</td>

                  <td className="px-4 py-3 text-center">{productos}</td>

                  <td className="px-4 py-3 text-right font-semibold">
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
