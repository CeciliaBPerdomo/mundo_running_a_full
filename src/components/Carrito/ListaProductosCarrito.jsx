import React, { useState, useEffect } from 'react'
import { obtenerCarrito } from '../../axios/carrito-axios';
import { CardProductos } from './CardProductos';

const ListaProductosCarrito = () => {
    const [carrito, setCarrito] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarrito = async () => {
            try {
                const data = await obtenerCarrito();
                setCarrito(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarrito();
    }, []);

    if (loading) {
        return <div className="py-20 text-center">
            Cargando carrito...
        </div>;
    }


    return (
        <div className="bg-white border border-[var(--recuadro)] rounded-2xl shadow-md p-8 space-y-6">
            {!carrito ? (
                <p>No tenés productos en el carrito</p>
            ) : (
                <CardProductos carrito={carrito} />
            )}
        </div>
    )
}

export default ListaProductosCarrito