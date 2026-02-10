import React, { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { getEstadoColor } from "../../../helpers/carrito/carritoEstado";
import EstadoCarrito from "../Carritos Pendientes/EstadoCarrito";
// import DetalleCarrito from "./DetalleCarrito"; 

const ComprasRealizadasTable = ({ carritos, onChangeEstado }) => {
  const [carritoEstado, setCarritoEstado] = useState(null);
  const [carritoDetalle, setCarritoDetalle] = useState(null);

  return (
    <>
      <tbody>
        {carritos.length === 0 ? (
          <tr className="border-t">
            <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
              No hay compras pendientes de envío.
            </td>
          </tr>
        ) : (
          carritos.map((carrito) => {
            const productos = carrito.items.reduce(
              (acc, item) => acc + item.cantidad,
              0
            );

            const envio = carrito.envio || {};
            const envioText = `${envio.nombre || "—"} · ${envio.ciudad || "—"}`;
            const estado = carrito.estado;

            return (
              <tr
                key={carrito._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{carrito.user?.nombre}</td>

                <td className="px-4 py-3 text-center">{productos}</td>

                <td className="px-4 py-3">{envioText}</td>

                <td className="px-4 py-3 text-right font-semibold">
                  u$s {carrito.total}
                </td>

                <td className={`px-4 py-3 text-center font-semibold ${getEstadoColor(estado)}`}>
                  {estado}
                </td>


                {/* ACCIONES */}
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-3">
                    {/* Ver más */}
                    <button
                      onClick={() => setCarritoDetalle(carrito)}
                      className="p-2 rounded-md border border-[var(--border-gray-300)] hover:bg-gray-100 transition"
                      title="Ver detalle"
                    >
                      <FaPlus />
                    </button>

                    {/* Editar estado */}
                    <button
                      onClick={() => setCarritoEstado(carrito)}
                      className="p-2 rounded-md border border-[var(--border-gray-300)] hover:bg-gray-100 transition"
                      title="Cambiar estado"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })
        )}
      </tbody>

      {/* Modal detalle */}
      {/* {carritoDetalle && (
        <DetalleCarrito
          carrito={carritoDetalle}
          onClose={() => setCarritoDetalle(null)}
        />
      )} */}

      {/* Modal estado */}
      <EstadoCarrito
        carrito={carritoEstado}
        onClose={() => setCarritoEstado(null)}
        estadosDisponibles={[
          { value: "enviado", label: "Enviado" },
          { value: "cancelado", label: "Cancelado" },
        ]}
        defaultEstado="enviado"
        onConfirm={(nuevoEstado) => {
          if (!carritoEstado) return;
          onChangeEstado(carritoEstado._id, nuevoEstado);
          setCarritoEstado(null);
        }}
      />
    </>
  );
};

export default ComprasRealizadasTable;
