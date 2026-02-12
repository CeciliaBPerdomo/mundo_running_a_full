import React from "react";
import { FaTimes } from "react-icons/fa";

const DetalleCarrito = ({ carrito, onClose }) => {
  if (!carrito) return null;

  const envio = carrito?.envio || {};
  const items = Array.isArray(carrito?.items) ? carrito.items : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-titulos)]">
              Detalle de la compra
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {carrito?.user?.nombre || "Usuario"} — u$s {carrito?.total ?? 0}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md border border-[var(--border-gray-300)] hover:bg-gray-100 transition"
            title="Cerrar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-6">
          {/* Dirección de envío */}
          <div className="bg-[var(--color-background)] border border-[var(--border-gray-300)] rounded-xl p-4">
            <h4 className="text-sm font-semibold text-[var(--color-titulos)] mb-2">
              Datos de envío
            </h4>

            <div className="text-sm text-[var(--p-negro)] space-y-1">
              <p><span className="font-medium">Nombre:</span> {envio?.nombre || "—"}</p>
              <p><span className="font-medium">Teléfono:</span> {envio?.telefono || "—"}</p>
              <p>
                <span className="font-medium">Dirección:</span>{" "}
                {envio?.direccion || "—"}
              </p>
              <p>
                <span className="font-medium">Ciudad:</span> {envio?.ciudad || "—"}{" "}
                <span className="font-medium">· Depto:</span> {envio?.departamento || "—"}
              </p>
              {envio?.codigoPostal && (
                <p><span className="font-medium">CP:</span> {envio.codigoPostal}</p>
              )}
              {envio?.notas && (
                <p className="text-gray-600">
                  <span className="font-medium text-[var(--p-negro)]">Notas:</span> {envio.notas}
                </p>
              )}
            </div>
          </div>

          {/* Productos */}
          <div className="bg-white border border-[var(--border-gray-300)] rounded-xl overflow-hidden">
            <div className="px-4 py-3 bg-[var(--color-background-third)] text-[var(--p-blanco)]">
              <h4 className="text-sm font-semibold">Productos</h4>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left">Producto</th>
                    <th className="px-4 py-3 text-center">Cant.</th>
                    <th className="px-4 py-3 text-right">Precio</th>
                    <th className="px-4 py-3 text-right">Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {items.length === 0 ? (
                    <tr className="border-t">
                      <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                        No hay productos en este carrito.
                      </td>
                    </tr>
                  ) : (
                    items.map((it, idx) => {
                      const p = it?.producto || {};
                      const nombre =
                        p?.nombre || p?.marca || p?.descripcion || "Producto";
                      const cantidad = Number(it?.cantidad ?? 0);
                      const precio = Number(it?.precio ?? 0);
                      const subtotal = cantidad * precio;

                      return (
                        <tr key={it?._id || idx} className="border-t hover:bg-gray-50 transition">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              {p?.imagen && (
                                <img
                                  src={p.imagen}
                                  alt={nombre}
                                  className="w-10 h-10 object-contain rounded border"
                                />
                              )}
                              <div className="leading-tight">
                                <p className="font-medium text-[var(--p-negro)]">{nombre}</p>
                                {p?.categoria && (
                                  <p className="text-xs text-gray-500">{p.categoria}</p>
                                )}
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-3 text-center">{cantidad}</td>
                          <td className="px-4 py-3 text-right">u$s {precio}</td>
                          <td className="px-4 py-3 text-right font-semibold">u$s {subtotal}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>

                <tfoot>
                  <tr className="border-t bg-gray-50">
                    <td className="px-4 py-3 text-right font-semibold" colSpan={3}>
                      Total
                    </td>
                    <td className="px-4 py-3 text-right font-bold">
                      u$s {carrito?.total ?? 0}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-[var(--border-gray-300)] hover:bg-gray-50 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleCarrito;