import React from "react";
import { FaPlus } from "react-icons/fa";

import {
  formatFecha,
  truncateMensaje,
} from "../../../helpers/contacto/contacto";

const ESTADOS_MENSAJE = [
  "Sin leer",
  "Leido",
  "Respondido",
  "Pendiente de responder",
  "Archivado",
];

const getEstadoClasses = (estado) => {
  switch (estado) {
    case "Sin leer":
      return "bg-amber-100 text-amber-800";
    case "Leido":
      return "bg-sky-100 text-sky-800";
    case "Respondido":
      return "bg-emerald-100 text-emerald-800";
    case "Pendiente de responder":
      return "bg-violet-100 text-violet-800";
    case "Archivado":
      return "bg-slate-200 text-slate-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const MensajesMobileList = ({
  mensajes,
  updatingId,
  onEstadoChange,
  onOpenMensaje,
}) => {
  if (mensajes.length === 0) {
    return (
      <div className="rounded-2xl border border border-[var(--recuadro)] bg-[var(--color-background)] px-4 py-6 text-center text-[var(--text-gray-500)] shadow md:hidden">
        No hay mensajes para mostrar.
      </div>
    );
  }

  return (
    <div className="space-y-4 md:hidden">
      {mensajes.map((item) => (
        <article
          key={item._id}
          className="rounded-2xl border border-[var(--recuadro)] bg-[var(--color-background)] p-4 shadow"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--text-gray-500)]">
                Fecha
              </p>
              <p className="text-sm font-medium text-[var(--p-negro)]">
                {formatFecha(item.createdAt)}
              </p>
            </div>

            <span
              className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${getEstadoClasses(
                item.estado
              )}`}
            >
              {item.estado}
            </span>
          </div>

          <div className="space-y-3 text-sm text-[var(--p-negro)]">
            <div>
              <p className="text-[var(--text-gray-500)]">Remitente</p>
              <p className="font-medium">
                {item.nombre} {item.apellido}
              </p>
            </div>

            <div>
              <p className="text-[var(--text-gray-500)]">Email</p>
              <p className="break-all">{item.email}</p>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between gap-3">
                <p className="text-[var(--text-gray-500)]">Mensaje</p>
                {item.mensaje?.length > 50 && (
                  <button
                    type="button"
                    onClick={() => onOpenMensaje(item)}
                    className="shrink-0 rounded-md border border-[var(--border-gray-300)] p-2 transition hover:bg-gray-100"
                    title="Ver mensaje completo"
                  >
                    <FaPlus />
                  </button>
                )}
              </div>
              <p className="leading-relaxed">{truncateMensaje(item.mensaje)}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-sm text-[var(--text-gray-500)]">Cambiar estado</p>
            <select
              value={item.estado}
              onChange={(e) => onEstadoChange(item._id, e.target.value)}
              disabled={updatingId === item._id}
              className="h-10 w-full rounded-md border border-[var(--border-gray-300)] bg-[var(--color-background)] px-3 text-[var(--p-negro)] focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)] disabled:opacity-60"
            >
              {ESTADOS_MENSAJE.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
        </article>
      ))}
    </div>
  );
};

export default MensajesMobileList;
