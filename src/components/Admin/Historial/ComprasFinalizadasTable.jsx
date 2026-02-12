import React from "react";
import { getEstadoColor } from "../../../helpers/carrito/carritoEstado"; 

const ComprasFinalizadasTable = ({ carritos = [] }) => {
  return (
    <tbody>
      {carritos.length === 0 ? (
        <tr className="border-t">
          <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
            No hay compras finalizadas.
          </td>
        </tr>
      ) : (
        carritos.map((carrito) => {
          const usuario = carrito?.user?.nombre || "—";
          const estado = carrito?.estado || "—";
          const total = carrito?.total ?? 0;

          // cantidad de productos = suma de cantidades
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

              <td className="px-4 py-3 text-center">{productos}</td>

              <td className="px-4 py-3 text-right font-semibold">
                u$s {total}
              </td>

              <td className={`px-4 py-3 text-center font-semibold ${getEstadoColor(estado)}`}>
                {estado}
              </td>
            </tr>
          );
        })
      )}
    </tbody>
  );
};

export default ComprasFinalizadasTable;
