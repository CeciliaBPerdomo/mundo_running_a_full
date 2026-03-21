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

const MensajesTable = ({
  mensajes,
  updatingId,
  onEstadoChange,
  onOpenMensaje,
}) => {
  return (
    <table className="min-w-full table-auto text-sm">
      <thead className="bg-[var(--color-background-third)] text-white">
        <tr>
          <th className="px-4 py-3 text-left font-semibold">Fecha</th>
          <th className="px-4 py-3 text-left font-semibold">Nombre</th>
          <th className="px-4 py-3 text-left font-semibold">Email</th>
          <th className="px-4 py-3 text-left font-semibold">Mensaje</th>
          <th className="px-4 py-3 text-center font-semibold">Estado</th>
          <th className="px-4 py-3 text-center font-semibold"></th>
        </tr>
      </thead>

      <tbody>
        {mensajes.length === 0 ? (
          <tr className="border-t">
            <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
              No hay mensajes para mostrar.
            </td>
          </tr>
        ) : (
          mensajes.map((item) => (
            <tr key={item._id} className="border-t hover:bg-gray-50 transition">
              <td className="px-4 py-4 whitespace-nowrap">
                {formatFecha(item.createdAt)}
              </td>

              <td className="px-4 py-4 min-w-[160px]">
                <div className="font-medium text-[var(--p-negro)]">
                  {item.nombre} {item.apellido}
                </div>
              </td>

              <td className="px-4 py-4 min-w-[190px] text-[var(--p-negro)] break-all">
                {item.email}
              </td>

              <td className="px-4 py-4 min-w-[220px] text-[var(--p-negro)]">
                <div className="flex min-w-0 items-center justify-between gap-3">
                  <span className="block min-w-0 flex-1 truncate">
                    {truncateMensaje(item.mensaje)}
                  </span>
                  {item.mensaje?.length > 50 && (
                    <button
                      type="button"
                      onClick={() => onOpenMensaje(item)}
                      className="shrink-0 p-2 rounded-md border border-[var(--border-gray-300)] hover:bg-gray-100 transition"
                      title="Ver mensaje completo"
                    >
                      <FaPlus />
                    </button>
                  )}
                </div>
              </td>

              <td className="px-4 py-4 text-center">
                <span
                  className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${getEstadoClasses(
                    item.estado
                  )}`}
                >
                  {item.estado}
                </span>
              </td>

              <td className="px-4 py-4 text-center min-w-[150px]">
                <select
                  value={item.estado}
                  onChange={(e) => onEstadoChange(item._id, e.target.value)}
                  disabled={updatingId === item._id}
                  className="w-full min-w-0 h-10 px-3 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)] text-[var(--p-negro)] focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)] disabled:opacity-60"
                >
                  {ESTADOS_MENSAJE.map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default MensajesTable;
