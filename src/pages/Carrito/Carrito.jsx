import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarrito } from '../../redux/carrito/carritoSlice'
import ListaProductosCarrito from '../../components/Carrito/ListaProductosCarrito'
import DatosEnvio from '../../components/Carrito/DatosEnvio'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'

export const Carrito = ({ margen = 20 }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const usuarioActual = useSelector((state) => state.usuario.usuarioActual)
    const { carritoActual, loading } = useSelector((state) => state.carrito)

    const nombre = usuarioActual?.nombre
    const items = carritoActual?.items ?? []
    const total = carritoActual?.total || 0

    useEffect(() => {
        dispatch(fetchCarrito())
    }, [dispatch])

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <Loader />
            </div>
        )
    }

    return (
        <div className={`py-${margen} px-4 max-w-7xl mx-auto`}>
            <h1 className="text-3xl font-bold mb-10 text-[var(--color-titulos)]">
                {nombre?.split(" ")[0]}: tu carrito 🛒 te está esperando!
            </h1>

            {items.length === 0 ? (
                <div className="text-center bg-[var(--color-background)] border border-[var(--recuadro)] p-10 rounded-2xl shadow-md space-y-4">
                    <p className="text-[var(--p-negro)] text-lg">Tu carrito está vacío 🧺</p>
                    <p className="text-[var(--p-negro)] text-lg">Aprovechá nuestros excelentes precios, ¡Dios proveerá!</p>

                    <button
                        onClick={() => navigate("/")}
                        className="px-6 py-3 rounded-full bg-[var(--botones-rojos)] text-white hover:opacity-90 transition"
                    >
                        Ir a la tienda
                    </button>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <ListaProductosCarrito items={items} total={total}/>
                        <DatosEnvio envio={carritoActual?.envio} />
                    </div>
                </>
            )}
        </div>
    )
}
