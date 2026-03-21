import React from "react";

const MensajesSkeleton = () => (
  <div className="w-full max-w-full overflow-x-auto rounded-2xl border bg-white shadow animate-pulse">
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
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-4">
              <div className="h-4 w-20 rounded bg-gray-200" />
            </td>
            <td className="px-4 py-4">
              <div className="h-4 w-36 rounded bg-gray-200" />
            </td>
            <td className="px-4 py-4">
              <div className="h-4 w-44 rounded bg-gray-200" />
            </td>
            <td className="px-4 py-4">
              <div className="h-4 w-52 rounded bg-gray-200" />
            </td>
            <td className="px-4 py-4">
              <div className="h-7 w-28 rounded-full bg-gray-200 mx-auto" />
            </td>
            <td className="px-4 py-4">
              <div className="h-10 w-40 rounded bg-gray-200 mx-auto" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MensajesSkeleton;
