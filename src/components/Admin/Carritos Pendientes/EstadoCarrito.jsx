import React, { useState } from "react";

const EstadoCarrito = ({ carrito, onClose, onConfirm }) => {
  const [estado, setEstado] = useState("pendiente de envio");

  if (!carrito) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b">
          <h3 className="text-lg font-semibold text-[var(--color-titulos)]">
            Cambiar estado del carrito
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {carrito?.user?.nombre || "Usuario"} — u$s {carrito?.total ?? 0}
          </p>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Nuevo estado
          </label>

          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)]"
          >
            <option value="pendiente de envio">Pendiente de envío</option>
            <option value="cancelado">Cancelado</option>
          </select>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-md border border-[var(--border-gray-300)] hover:bg-gray-50 transition"
            >
              Cancelar
            </button>

            <button
              onClick={() => onConfirm(estado)}
              className="w-full sm:w-auto px-4 py-2 rounded-md bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)] transition"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstadoCarrito;
