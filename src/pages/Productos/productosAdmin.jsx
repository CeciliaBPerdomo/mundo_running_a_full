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
        <div className="w-full">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-semibold text-[var(--color-titulos)] text-center sm:text-left">
                    Gestión de productos 📦
                </h2>


                <button className="w-full sm:w-auto px-4 py-3 sm:py-2 bg-[var(--botones-rojos)] text-[var(--p-blanco)] rounded-md hover:opacity-90 transition" >
                    + Agregar producto
                </button>
            </div>

            {/* Buscador + filtro */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md focus:outline-none focus:ring-2 placeholder-[var(--color-placeholder)] focus:ring-[var(--color-background-third)]"
                    />
                </div>
                <div className="w-full md:w-1/4 md:ml-auto">
                    <select className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)] focus:outline-none focus:ring-2 text-[var(--p-negro)] focus:ring-[var(--color-background-third)]">
                        <option>Todas las categorías</option>
                        <option>Running</option>
                        <option>Ciclismo</option>
                        <option>Natación</option>
                    </select>
                </div>


            </div>


            {/* Tabla */}
            <div className="w-full overflow-x-auto">
                <ListaProductosAdmin productos={productosMock} />
            </div>

            {/* Paginación */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-center">
                <button className="w-full sm:w-auto text-[var(--p-blanco)] px-4 py-2 border border-[var(--bordes-botones-blanco)] rounded-md hover:bg-[var(--botones-rojos-hover)] transition bg-[var(--botones-rojos)]">
                    ← Anterior
                </button>

                <span className="text-sm text-gray-600">
                    Mostrando <strong>1</strong> de <strong>{productosMock.length}</strong> productos
                </span>

                <button className="w-full sm:w-auto text-[var(--p-blanco)] px-4 py-2 border border-[var(--bordes-botones-blanco)] rounded-md hover:bg-[var(--botones-rojos-hover)] transition bg-[var(--botones-rojos)]">
                    Siguiente →
                </button>
            </div>
        </div>
    );
};

export default ProductosAdmin;
