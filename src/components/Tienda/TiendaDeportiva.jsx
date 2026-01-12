import React, { useEffect, useState } from 'react'
import CardProducto from "./CardProducto";
import { getProductos } from '../../axios/productos-axios';
import { FiSearch } from "react-icons/fi";
import BuscadorProductos from '../UI/Buscador/BuscadorProductos';

const TiendaDeportiva = () => {
    const [productosMock, setProductos] = useState([])
    const [loading, setLoading] = useState(true);
    const [busqueda, setBusqueda] = useState("")

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

    const productosFiltrados = productosMock.filter((producto) =>
        producto.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (loading) {
        return (
            <p className="text-center text-gray-500 py-20">
                Cargando productos…
            </p>
        );
    }

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">

            <h2 className="text-2xl font-semibold text-[var(--color-titulos)] text-center mb-6 tracking-wide">
                TIENDA DEPORTIVA
            </h2>

            <div className="flex justify-center mb-8">
                <BuscadorProductos
                    value={busqueda}
                    onChange={setBusqueda}

                    onSubmit={() => {
                        if (busqueda === "") cargarProductos()
                        setProductos(productosFiltrados)
                    }}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productosMock.map((producto) => (
                    <CardProducto key={producto._id} producto={producto} />
                ))}
            </div>
        </div>
    )
}

export default TiendaDeportiva