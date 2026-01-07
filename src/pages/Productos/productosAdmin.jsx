import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ListaProductosAdmin from "../../components/Productos/ListaProductosAdmin";

const productosMock = [
    {
        id: 1,
        marca: "Nike",
        descripcion: "Remera deportiva Dry-Fit",
        precio: 2500,
        categoria: "Running",
        talles: ["S", "M", "L"],
        colores: ["Negro", "Blanco"]
    },
    {
        id: 2,
        marca: "Adidas",
        descripcion: "Calza training mujer",
        precio: 3200,
        categoria: "Ciclismo",
        talles: ["M", "L"],
        colores: ["Azul", "Gris"]
    },
    {
        id: 3,
        marca: "Puma",
        descripcion: "Zapatillas Urban Flex",
        precio: 6800,
        categoria: "Running",
        talles: ["40", "41", "42"],
        colores: ["Rojo", "Negro"]
    },
    {
        id: 1,
        marca: "Nike",
        descripcion: "Remera deportiva Dry-Fit",
        precio: 2500,
        categoria: "Running",
        talles: ["S", "M", "L"],
        colores: ["Negro", "Blanco"]
    },
    {
        id: 2,
        marca: "Adidas",
        descripcion: "Calza training mujer",
        precio: 3200,
        categoria: "Ciclismo",
        talles: ["M", "L"],
        colores: ["Azul", "Gris"]
    },

];

const ProductosAdmin = () => {
  return (
    <div className="overflow-x-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-[var(--color-titulos)]">
          Gestión de productos 📦
        </h2>

        <button className="px-4 py-2 bg-[var(--botones-rojos)] text-[var(--p-blanco)] rounded-md hover:opacity-90 transition">
          + Agregar producto
        </button>
      </div>

      {/* Buscador + filtro */}
      <div className="flex items-center justify-between gap-4 mb-6 pr-2">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full h-10 px-4 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 placeholder-[var(--color-placeholder)]
            focus:ring-[var(--color-background-third)]"
          />
        </div>

        <div className="w-full md:w-1/4">
          <select
            className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)]
            focus:outline-none focus:ring-2 text-[var(--p-negro)]
            focus:ring-[var(--color-background-third)]"
          >
            <option>Todas las categorías</option>
            <option>Running</option>
            <option>Ciclismo</option>
            <option>Natación</option>
          </select>
        </div>
      </div>

      {/* Tabla */}
      <ListaProductosAdmin productos={productosMock} />

      {/* Paginación */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button className="text-[var(--p-blanco)] px-4 py-2 border border-[var(--bordes-botones-blanco)] rounded-md hover:bg-[var(--botones-rojos-hover)] transition bg-[var(--botones-rojos)]">
          ← Anterior
        </button>

        <span className="text-sm text-gray-600">
          Mostrando <strong>5</strong> de <strong>1000</strong> productos
        </span>

        <button className="text-[var(--p-blanco)] px-4 py-2 border border-[var(--bordes-botones-blanco)] rounded-md hover:bg-[var(--botones-rojos-hover)] transition bg-[var(--botones-rojos)]">
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default ProductosAdmin;
