import React from "react";
import { FaTimes } from "react-icons/fa";

const DetalleCarrito = ({ carrito, onClose }) => {
  if (!carrito) return null;

  const envio = carrito?.envio || {};
  const items = Array.isArray(carrito?.items) ? carrito.items : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-[var(--color-background)] border border-[var(--recuadro)] w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden">
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
            className="p-2 rounded-md border border-[var(--border-gray-300)] text-[var(--p-negro)] hover:bg-gray-100 transition"
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
                <p className="text-[var(--p-negro)]">
                  <span className="font-medium">Notas:</span> {envio.notas}
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
                <thead className="bg-[var(--color-background)] border border-[var(--border-gray-300)] ">
                  <tr>
                    <th className="px-4 py-3 text-left text-[var(--p-negro)]">Producto</th>
                    <th className="px-4 py-3 text-center text-[var(--p-negro)]">Cant.</th>
                    <th className="px-4 py-3 text-right text-[var(--p-negro)]">Precio</th>
                    <th className="px-4 py-3 text-right text-[var(--p-negro)]">Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {items.length === 0 ? (
                    <tr className="bg-[var(--color-background)] border border-[var(--border-gray-300)] ">
                      <td colSpan={4} className="px-4 py-6 text-center text-[var(--text-gray-500)]">
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
                        <tr key={it?._id || idx} className="bg-[var(--color-background)] border border-[var(--border-gray-300)] transition">
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
                                  <p className="text-xs text-[var(--text-gray-500)]">{p.categoria}</p>
                                )}
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-3 text-center text-[var(--p-negro)]">{cantidad}</td>
                          <td className="px-4 py-3 text-right text-[var(--p-negro)]">u$s {precio}</td>
                          <td className="px-4 py-3 text-right font-semibold text-[var(--p-negro)]">u$s {subtotal}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>

                <tfoot>
                  <tr className="bg-[var(--color-background)] border border-[var(--border-gray-300)]">
                    <td className="px-4 py-3 text-right font-semibold text-[var(--p-negro)]" colSpan={3}>
                      Total
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-[var(--p-negro)]">
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
              className="text-[var(--p-negro)] px-4 py-2 rounded-md border border-[var(--border-gray-300)] hover:bg-gray-50 transition"
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
