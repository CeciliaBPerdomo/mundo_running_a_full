import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import TablaProductosHeader from "./TablaProductosHeader";

const ListaProductosAdmin = ({ productos }) => {
  return (
    <table className="min-w-full border border-[var(--border-gray-300)] border-collapse rounded-lg overflow-hidden">

      <TablaProductosHeader />

      <tbody className="bg-[var(--color-background)] text-[var(--p-negro)]">
        {productos.map((producto, id) => (
          <tr
            key={id}
            className="border-t hover:bg-[var(--border-gray-50)] transition"
          >
            <td className="px-4 py-3">{producto.marca}</td>
            <td className="px-4 py-3">{producto.descripcion}</td>
            <td className="px-4 py-3 font-medium">
              $ {producto.precio}
            </td>
            <td className="px-4 py-3">{producto.categoria}</td>
            <td className="px-4 py-3">
              {producto.talles.join(", ")}
            </td>
            <td className="px-4 py-3">
              <div className="flex gap-2">
                {producto.colores.map((color, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 rounded-full border border-[var(--border-gray-300)]"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex justify-center gap-4">
                <button
                  className="text-blue-600 hover:text-blue-800 transition"
                  title="Editar producto"
                >
                  <FaEdit />
                </button>

                <button
                  className="text-red-600 hover:text-red-800 transition"
                  title="Eliminar producto"
                >
                  <FaTrash />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaProductosAdmin;
