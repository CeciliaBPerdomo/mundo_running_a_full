const AdminCodeModal = ({
  show,
  onClose,
  codigoAdmin,
  setCodigoAdmin,
  onConfirm,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[var(--color-background)] w-full max-w-sm p-6 rounded-lg shadow-xl">

        <h3 className="text-lg font-semibold text-[var(--color-titulos)] mb-3">
          Código de Administrador
        </h3>

        <input
          type="text"
          value={codigoAdmin}
          onChange={(e) => setCodigoAdmin(e.target.value)}
          className="w-full p-3 border rounded-md outline-none border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
          placeholder="Ingresá tu código"
        />

        <div className="flex justify-end gap-3 mt-5">
          <button
            className="px-4 py-2 bg-[var(--border-gray-300)] rounded-md"
            onClick={onClose}
          >
            Cancelar
          </button>

          <button
            className="px-4 py-2 bg-[var(--botones-rojos)] text-[var(--p-blanco)] rounded-md hover:bg-[var(--botones-rojos-hover)]"
            onClick={onConfirm}
          >
            Aceptar
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminCodeModal;
