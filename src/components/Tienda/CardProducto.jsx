import React, { useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

// Axios 
import { agregarAlCarrito } from "../../axios/carrito-axios";

// UI
import { mensaje } from "../../components/UI/Toast/mensaje"
import { ToastContainer } from "react-toastify";

// Modal
import ProductoInfoModal from "./ProductoInfoModal";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCarrito } from "../../redux/carrito/carritoSlice";
import {
    addFavorito,
    removeFavorito
} from "../../redux/favorito/favoritosSlice";

const CardProducto = ({ producto }) => {
    const [openInfo, setOpenInfo] = useState(false);
    const [loadingFav, setLoadingFav] = useState(false);

    const dispatch = useDispatch();

    const favoritosIds = useSelector(state => state.favoritos.ids);
    const esFavorito = favoritosIds.includes(producto._id);

    const handleAgregarCarrito = async () => {
        try {
            await agregarAlCarrito({
                producto: producto._id,
                cantidad: 1,
                precio: producto.precio
            });
            mensaje("Producto agregado al carrito")
            dispatch(fetchCarrito());
        } catch (error) {
            mensaje("Error al agregar al carrito, probá más tarde.")
            console.error("Error al agregar al carrito", error);
        }
    };

    const handleFavorito = async () => {
        if (loadingFav) return;
        try {
            setLoadingFav(true);
            if (esFavorito) {
                dispatch(removeFavorito(producto._id));
            } else {
                dispatch(addFavorito(producto._id));
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoadingFav(false);
        }
    };

    return (
        <div className="relative bg-white p-1 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-[var(--recuadro)]">

            {/* ICONOS */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button
                    onClick={handleFavorito}
                    className="p-1 hover:scale-110 transition"
                >
                    {esFavorito ? (
                        <FaHeart className="text-red-600 text-xl animate-pulse" />
                    ) : (
                        <FiHeart className="text-[var(--botones-rojos)] text-xl" />
                    )}
                </button>
                <button className="p-1 hover:scale-110 transition">
                    <FiShoppingCart onClick={handleAgregarCarrito} className="text-[var(--botones-rojos)] text-xl" />
                </button>
            </div>

            {/* Imagen */}
            <div className="h-56 overflow-hidden">
                <img
                    src={producto.foto}
                    alt={producto.marca}
                    className="w-full h-full object-contain hover:scale-105 transition"
                />
            </div>

            {/* Info */}
            <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg text-[var(--color-titulos)]">
                    {producto.marca}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-2">
                    {producto.descripcion}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-black">
                        u$s {producto.precio}
                    </span>

                    <button onClick={() => setOpenInfo(true)} className="px-4 py-2 text-sm rounded-full bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)] transition">
                        + info
                    </button>
                </div>
            </div>

            {openInfo && (<ProductoInfoModal producto={producto} onClose={() => setOpenInfo(false)} />)}

            <ToastContainer />
        </div>
    );
};

export default CardProducto;
