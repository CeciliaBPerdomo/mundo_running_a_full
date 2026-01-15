import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductosPorCategoria } from "../../axios/productos-axios";
import CardProducto from "../../components/Tienda/CardProducto"

const TiendaCategoria = () => {
    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargar = async () => {
            try {
                const data = await getProductosPorCategoria(categoria);
                setProductos(data.productos);
            } catch (error) {
                console.error(error);
                setProductos([]);
            } finally {
                setLoading(false);
            }
        };
        cargar();
    }, [categoria]);


    if (loading) {
        return <p className="text-center py-20">
            Cargando productos…
            </p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-2xl font-semibold text-center mb-8 capitalize text-[var(--color-titulos)]">
                {categoria}
            </h2>

            {productos.length === 0 ? (
                <p className="text-center text-gray-500">
                    No hay productos para esta categoría
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productos.map((producto) => (
                        <CardProducto key={producto._id} producto={producto} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default TiendaCategoria;