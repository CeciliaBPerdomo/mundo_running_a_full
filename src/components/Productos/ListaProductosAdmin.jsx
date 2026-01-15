import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import TablaProductosHeader from "./TablaProductosHeader";
import { mensaje } from "../UI/Toast/mensaje";
import { deleteProducto } from "../../axios/productos-axios";
import ModalConfirmacion from "./ModalConfirmacion"
import ModalProducto from "./ModalProducto";
import { isTokenExpired } from "../../helpers/auth/TokenValido";
import { useNavigate } from "react-router";

const ListaProductosAdmin = ({ productos, cargarProductos }) => {
  const [productoAbierto, setProductoAbierto] = useState(null);
  const [productoABorrar, setProductoABorrar] = useState(null); // Modal para borrar
  const [productoAEditar, setProductoAEditar] = useState(null);
  const navigate = useNavigate()

  return (
    <>
      <table className="w-full border border-[var(--border-gray-300)] border-collapse rounded-lg overflow-hidden">

        <TablaProductosHeader />

        <tbody className="bg-[var(--color-background)] text-[var(--p-negro)]">
          {productos.map((producto) => (
            <tr key={producto._id} className="border-t hover:bg-[var(--border-gray-50)] hover:text-[var(--p-blanco)] transition" >
              <td className="px-4 py-3">{producto.marca}</td>
              <td className="px-4 py-3 hidden md:table-cell">{producto.descripcion}</td>
              <td className="px-4 py-3 whitespace-nowrap">$ {producto.precio}</td>
              <td className="px-4 py-3 hidden lg:table-cell">{producto.categoria}</td>
              <td className="px-4 py-3 hidden lg:table-cell">{producto.talles.join(", ")}</td>

              <td className="px-4 py-3 hidden lg:table-cell">
                <div className="flex gap-2">
                  {producto.colores.map((color, index) => (
                    <span key={index} className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex justify-center gap-4">
                  <button className="md:hidden text-gray-600 hover:text-gray-800 transition" title="Ver más info"
                    onClick={() => setProductoAbierto(productoAbierto === producto._id ? null : producto._id)}>
                    <FaEye />
                  </button>

                  <button className="text-blue-600 hover:text-blue-800 transition" title="Editar producto" onClick={() => setProductoAEditar(producto)}>
                    <FaEdit />
                  </button>

                  <button
                    className="text-red-600 hover:text-red-800 transition"
                    title="Eliminar producto"
                    onClick={() => setProductoABorrar(producto)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {productoABorrar && (
        <ModalConfirmacion
          titulo="Eliminar producto"
          descripcion={`¿Seguro que querés borrar "${productoABorrar.marca}"?`}
          onCancel={() => setProductoABorrar(null)}
          onConfirm={async () => {
            if (isTokenExpired()) {
              mensaje("⏳ Tu sesión venció. Volvé a iniciar sesión.")
              localStorage.removeItem("token")

              setTimeout(() => {
                navigate("/login");
              }, 1500)

              return
            }

            await deleteProducto(productoABorrar._id);
            mensaje("🗑️ Producto eliminado");
            setProductoABorrar(null);
            cargarProductos();
          }}
        />
      )}

      {productoAEditar && (
        <ModalProducto
          titulo="Editar producto"
          producto={productoAEditar}
          onClose={() => setProductoAEditar(null)}
          onSuccess={() => {
            mensaje("✏️ Producto actualizado correctamente");
            setProductoAEditar(null);
            cargarProductos();
          }}
        />
      )}

    </>
  );
};

export default ListaProductosAdmin;
