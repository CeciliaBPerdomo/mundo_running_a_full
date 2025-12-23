import React from "react";

const ConfirmModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div
        className="
          relative
          bg-[var(--color-background-black)]
          text-[var(--p-blanco)]
          rounded-xl
          p-6
          w-[90%]
          max-w-sm
          animate-fadeInUp
        "
      >
        <h3 className="text-lg font-semibold mb-2">
          ¿Seguro que querés salir?
        </h3>

        <p className="text-sm opacity-80 mb-6">
          Vas a cerrar tu sesión actual.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md hover:bg-white/10 transition"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-[var(--botones-rojos)] hover:bg-[var(--botones-rojos-hover)] transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
