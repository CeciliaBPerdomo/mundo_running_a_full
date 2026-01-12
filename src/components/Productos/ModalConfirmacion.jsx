const ModalConfirmacion = ({ titulo, descripcion, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[var(--color-background)] rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-2">{titulo}</h2>
        <p className="text-sm text-gray-600 mb-6">{descripcion}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md border border-[var(--border-gray-300)]"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-[var(-p--blanco)]"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;
