import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ListaProductosAdmin = ({ productos }) => {
  return (
    <table className="min-w-full border border-[var(--border-gray-300)] border-collapse rounded-lg overflow-hidden">
      <thead className="bg-[var(--color-background-third)] text-[var(--p-blanco)]">
        <tr>
          <th className="px-4 py-3 text-left">Marca</th>
          <th className="px-4 py-3 text-left">Descripción</th>
          <th className="px-4 py-3 text-left">Precio</th>
          <th className="px-4 py-3 text-left">Categoría</th>
          <th className="px-4 py-3 text-left">Talles</th>
          <th className="px-4 py-3 text-left">Colores</th>
          <th className="px-4 py-3 text-center">Acciones</th>
        </tr>
      </thead>

      <tbody className="bg-[var(--color-background)] text-[var(--p-negro)]">
        {productos.map((producto) => (
          <tr
            key={producto.id}
            className="border-t hover:bg-[var(--border-gray-50)] transition"
          >
            <td className="px-4 py-3">{producto.marca}</td>
            <td className="px-4 py-3">{producto.descripcion}</td>
            <td className="px-4 py-3 font-medium">
              ${producto.precio}
            </td>
            <td className="px-4 py-3">{producto.categoria}</td>
            <td className="px-4 py-3">
              {producto.talles.join(", ")}
            </td>
            <td className="px-4 py-3">
              {producto.colores.join(", ")}
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
