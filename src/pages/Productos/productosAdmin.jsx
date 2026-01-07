import React, { useEffect, useState } from "react";
import ListaProductosAdmin from "../../components/Productos/ListaProductosAdmin";
import { getProductos } from "../../axios/productos-axios";


const ProductosAdmin = () => {
    const [productosMock, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const cargarProductos = async () => {
        try {
            const data = await getProductos();
            setProductos(data.productos || data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarProductos()
    }, [])

    if (loading) {
        return (
            <p className="text-center text-gray-500">
                Cargando productos…
            </p>
        );
    }

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
                        className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md focus:outline-none focus:ring-2 placeholder-[var(--color-placeholder)] focus:ring-[var(--color-background-third)]" />
                </div>

                <div className="w-full md:w-1/4">
                    <select
                        className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)]  focus:outline-none focus:ring-2 text-[var(--p-negro)] focus:ring-[var(--color-background-third)]" >
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
                    Mostrando <strong>1</strong> de <strong>{productosMock.length}</strong> productos
                </span>

                <button className="text-[var(--p-blanco)] px-4 py-2 border border-[var(--bordes-botones-blanco)] rounded-md hover:bg-[var(--botones-rojos-hover)] transition bg-[var(--botones-rojos)]">
                    Siguiente →
                </button>
            </div>
        </div>
    );
};

export default ProductosAdmin;
