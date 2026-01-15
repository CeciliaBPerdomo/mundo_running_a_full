import React from "react";
import Campo from "./Campos"

const ModalEditarUsuario = ({ usuario, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      
      <div className="w-full max-w-lg bg-[var(--color-background)] rounded-xl shadow-xl p-6 relative animate-fade-in border border-[var(--border-gray-300)]">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[var(--color-titulos)]">
            Modificar datos
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form (solo estética) */}
        <div className="space-y-4">

          <Campo label="Nombre" value={usuario.nombre} />
          <Campo label="Email" value={usuario.email} />
          <Campo label="Celular" value={usuario.celular} />
          <Campo label="Ciudad" value={usuario.ciudad} />

        </div>

        {/* Acciones */}
        <div className="flex justify-end gap-3 pt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-[var(--border-gray-300)] text-[var(--p-negro)] hover:bg-[var(--text-gray-500)] hover:text-[var(--p-blanco)] transition"
          >
            Cancelar
          </button>

          <button
            className="px-4 py-2 rounded-md bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)] transition"
          >
            Guardar cambios
          </button>
        </div>

      </div>
    </div>
  );
};



export default ModalEditarUsuario;
