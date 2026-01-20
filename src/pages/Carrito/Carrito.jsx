import React from 'react'
import ListaProductosCarrito from '../../components/Carrito/ListaProductosCarrito'
import DatosEnvio from '../../components/Carrito/DatosEnvio'
import { useSelector } from 'react-redux'


export const Carrito = ({margen = 20}) => {
    const usuarioActual = useSelector((state) => state.usuario.usuarioActual)
    const nombre = usuarioActual?.nombre

    return (
        <div className={`py-${margen} px-4 max-w-7xl mx-auto`}>
            <h1 className="text-3xl font-bold mb-10 text-[var(--color-titulos)]">
                {nombre?.split(" ")[0]}: tu carrito 🛒 te está esperando!
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Productos */}
                <ListaProductosCarrito />

                {/* Datos de envío */}
                <DatosEnvio />
            </div>
        </div>
    )
}
