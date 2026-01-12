import React from "react";

const CardProducto = ({ producto }) => {
    return (
        <div className="bg-white p-1 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-[var(--p-gris-claro)]">

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
                <h3 className="font-semibold text-lg text-[var(--color-titulos)]">{producto.marca}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                    {producto.descripcion}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-black">
                        u$s {producto.precio}
                    </span>

                    <button className="px-4 py-2 text-sm rounded-full bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)] transition">
                        + info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProducto;
