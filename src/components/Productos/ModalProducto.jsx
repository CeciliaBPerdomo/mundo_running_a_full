import React from "react";
import FormProducto from "./FormProducto";

const ModalProducto = ({ onClose, titulo }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      
      <div className="w-full max-w-xl bg-[var(--color-background)] rounded-lg shadow-lg p-6 relative animate-fade-in border border-[var(--p-negro)]">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-[var(--color-titulos)]">
            {titulo}
          </h3>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <FormProducto onClose={onClose}/>

      </div>
    </div>
  );
};

export default ModalProducto;
