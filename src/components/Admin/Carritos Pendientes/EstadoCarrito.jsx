import React, { useEffect, useState } from "react";
import ModalBase from "../../UI/ModalEstado/ModalBase";

const EstadoCarrito = ({
  carrito,
  onClose,
  onConfirm,
  estadosDisponibles = [
    { value: "pendiente de envio", label: "Pendiente de envío" },
    { value: "cancelado", label: "Cancelado" },
  ],
  defaultEstado = "pendiente de envio",
}) => {
  const [estado, setEstado] = useState(defaultEstado);

  useEffect(() => {
    if (carrito) setEstado(defaultEstado);
  }, [carrito, defaultEstado]);

  const subtitle = carrito
    ? `${carrito?.user?.nombre || "Usuario"} — u$s ${carrito?.total ?? 0}`
    : "";

  return (
    <ModalBase
      open={!!carrito}
      title="Cambiar estado del carrito"
      subtitle={subtitle}
      onClose={onClose}
      footer={
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onClose}
            className="text-[var(--p-negro)] w-full sm:w-auto px-4 py-2 rounded-md border border-[var(--border-gray-300)] hover:bg-gray-50 transition"
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
      }
    >
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Nuevo estado
        </label>

        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)]"
        >
          {estadosDisponibles.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </div>
    </ModalBase>
  );
};

export default EstadoCarrito;
