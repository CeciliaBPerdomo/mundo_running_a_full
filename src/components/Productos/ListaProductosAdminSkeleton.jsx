import React from "react";
import TablaProductosHeader from "./TablaProductosHeader";

const ROWS = 6; 

const ListaProductosAdminSkeleton = () => {
  return (
    <table className="w-full border border-[var(--border-gray-300)] border-collapse rounded-lg overflow-hidden animate-pulse">
      <TablaProductosHeader />

      <tbody className="bg-[var(--color-background)] text-[var(--p-negro)]">
        {Array.from({ length: ROWS }).map((_, i) => (
          <tr key={i} className="border-t">
            {/* Marca */}
            <td className="px-4 py-3">
              <div className="h-4 w-28 bg-gray-200 rounded" />
            </td>

            {/* Descripción (md+) */}
            <td className="px-4 py-3 hidden md:table-cell">
              <div className="h-4 w-64 bg-gray-200 rounded" />
            </td>

            {/* Precio */}
            <td className="px-4 py-3 whitespace-nowrap">
              <div className="h-4 w-16 bg-gray-200 rounded" />
            </td>

            {/* Categoría (lg+) */}
            <td className="px-4 py-3 hidden lg:table-cell">
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </td>

            {/* Talles (lg+) */}
            <td className="px-4 py-3 hidden lg:table-cell">
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </td>

            {/* Colores (lg+) */}
            <td className="px-4 py-3 hidden lg:table-cell">
              <div className="flex gap-2">
                <span className="w-4 h-4 rounded-full bg-gray-200 border" />
                <span className="w-4 h-4 rounded-full bg-gray-200 border" />
                <span className="w-4 h-4 rounded-full bg-gray-200 border" />
              </div>
            </td>

            {/* Acciones */}
            <td className="px-4 py-3">
              <div className="flex justify-center gap-4">
                <div className="h-4 w-4 bg-gray-200 rounded" />
                <div className="h-4 w-4 bg-gray-200 rounded" />
                <div className="h-4 w-4 bg-gray-200 rounded" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaProductosAdminSkeleton;
