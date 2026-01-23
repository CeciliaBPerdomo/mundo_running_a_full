import React from "react";
import { FiX } from "react-icons/fi";

// Redux

import { fetchCarrito } from "../../redux/carrito/carritoSlice";
import { useDispatch } from "react-redux";
import { agregarAlCarrito } from "../../axios/carrito-axios";
import { mensaje } from "../UI/Toast/mensaje";
import { ToastContainer } from "react-toastify";


const ProductoInfoModal = ({ producto, onClose }) => {
    const dispatch = useDispatch();
    if (!producto) return null;

    const handleAddToCart = async () => {
        try {
            await agregarAlCarrito({
                producto: producto._id,
                cantidad: 1,
                precio: producto.precio
            });
            mensaje("Producto agregado al carrito")
            dispatch(fetchCarrito())
            onClose()
        } catch (error) {
            mensaje("Error al agregar al carrito, probá más tarde.")
            console.error("Error al agregar al carrito", error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative overflow-hidden">

                {/* Cerrar */}
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black transition">
                    <FiX />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Imagen */}
                    <div className="flex items-center justify-center rounded-xl p-4">
                        <img
                            src={producto.foto}
                            alt={producto.marca}
                            className="object-contain max-h-80"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-5 p-6 rounded-xl bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-[var(--color-titulos)]">
                            {producto.marca}
                        </h2>

                        <p className="text-gray-600">
                            {producto.descripcion}
                        </p>



                        {/* Colores */}
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-gray-700">Color:</span>

                            {producto.colores?.length > 0 && (
                                <div className="flex gap-2">
                                    {producto.colores.map((color, i) => (
                                        <span
                                            key={i}
                                            className="w-6 h-6 rounded-full border border-gray-300"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Talles */}
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-gray-700">Talles:</span>

                            {producto.talles?.length > 0 ? (
                                <div className="flex gap-2 flex-wrap">
                                    {producto.talles.map((talle, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full border text-sm text-gray-700 bg-gray-50"
                                        >
                                            {talle}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <span className="text-sm text-gray-400">Sin stock</span>
                            )}
                        </div>


                        <span className="text-3xl font-bold text-black text-right">
                            u$s {producto.precio}
                        </span>

                        {/* Acciones */}
                        <div className="mt-auto flex gap-3">
                            <button onClick={handleAddToCart} className="flex-1 py-3 rounded-full bg-[var(--botones-rojos)] text-white hover:bg-[var(--botones-rojos-hover)] transition">
                                Agregar al carrito
                            </button>

                            <button
                                onClick={onClose}
                                className="flex-1 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductoInfoModal;
