import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import CardProductos from './CardProductos'
import { limpiarCarrito } from "../../redux/carrito/carritoSlice";
import { eliminarCarritoActual } from "../../axios/carrito-axios";
import { mensaje } from "../UI/Toast/mensaje";
import { ToastContainer } from "react-toastify";

const ListaProductosCarrito = ({ items, total }) => {
  const dispatch = useDispatch();
  const [eliminando, setEliminando] = useState(false);

  const handleEliminarCarrito = async () => {
    try {
      setEliminando(true);
      await eliminarCarritoActual();
      dispatch(limpiarCarrito());
      mensaje("Carrito eliminado");
    } catch (error) {
      console.error(error);
      mensaje("No se pudo eliminar el carrito");
    } finally {
      setEliminando(false);
    }
  };

  return (
    <div className="bg-[var(--color-background)] border border-[var(--recuadro)] rounded-2xl shadow-md p-8 space-y-6">
      <h2 className="text-xl font-semibold text-[var(--color-titulos)]">
        Tus productos:
      </h2>

      {items.map((item) => (
        <CardProductos
          key={item._id}
          item={item}
        />
      ))}

      <div className="flex justify-between text-lg font-semibold border-t border-[var(--botones-rojos)] py-3">
        <span className='text-[var(--p-negro)]'>Total:</span>
        <span className='text-[var(--color-titulos)]'>u$s {total}</span>
      </div>

      <button
        type="button"
        onClick={handleEliminarCarrito}
        disabled={eliminando}
        className="w-full rounded-xl border border-[var(--botones-rojos)] px-4 py-3 text-sm font-semibold text-[var(--botones-rojos)] transition hover:bg-[var(--botones-rojos)] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {eliminando ? "Eliminando..." : "Eliminar carrito"}
      </button>

      <ToastContainer />
    </div>
  )
}

export default ListaProductosCarrito
