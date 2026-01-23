import React from "react";
import { FiX } from "react-icons/fi";

const ProductoInfoModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative overflow-hidden">
        
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black transition"
        >
          <FiX />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          
          {/* Imagen */}
          <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
            <img
              src="https://via.placeholder.com/400"
              alt="Producto"
              className="object-contain max-h-80"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[var(--color-titulos)]">
              Marca del producto
            </h2>

            <p className="text-gray-600">
              Descripción larga del producto. Acá después metemos todo lo que venga de la base.
            </p>

            <span className="text-3xl font-bold text-black">
              u$s 99
            </span>

            {/* Acciones */}
            <div className="mt-auto flex gap-3">
              <button className="flex-1 py-3 rounded-full bg-[var(--botones-rojos)] text-white hover:bg-[var(--botones-rojos-hover)] transition">
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
    </div>
  );
};

export default ProductoInfoModal;
