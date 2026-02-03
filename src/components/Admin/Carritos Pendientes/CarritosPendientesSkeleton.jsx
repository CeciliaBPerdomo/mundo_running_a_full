import React from "react";
import TablaProductosHeader from "../../Productos/TablaProductosHeader";

const ROWS = 5

const CarritosPendientesSkeleton = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow border animate-pulse">
      <table className="min-w-full text-sm">
        <TablaProductosHeader />

        <tbody>
          {Array.from({ length: ROWS }).map((_, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-3">
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </td>

              <td className="px-4 py-3 text-center">
                <div className="h-4 w-8 bg-gray-200 rounded mx-auto" />
              </td>

              <td className="px-4 py-3">
                <div className="h-4 w-48 bg-gray-200 rounded" />
              </td>

              <td className="px-4 py-3 text-right">
                <div className="h-4 w-16 bg-gray-200 rounded ml-auto" />
              </td>

              <td className="px-4 py-3 text-center">
                <div className="h-4 w-24 bg-gray-200 rounded mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarritosPendientesSkeleton;
