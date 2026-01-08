import React from "react";

const FormProducto = ({ onClose }) => {
    return (
        <form className="space-y-6">

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Marca */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                        Marca
                    </label>
                    <input
                        type="text"
                        placeholder="Giro"
                        className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)] placeholder-[var(--color-placeholder)]"
                    />
                </div>

                {/* Precio */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                        Precio
                    </label>
                    <input
                        type="number"
                        placeholder="$ 0"
                        className="placeholder-[var(--color-placeholder)] w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)]"
                    />
                </div>

                {/* Categoría */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                        Categoría
                    </label>
                    <select
                        className="text-[var(--p-negro)] placeholder-[var(--color-placeholder)] w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)]"
                    >
                        <option>Seleccionar</option>
                        <option>Running</option>
                        <option>Ciclismo</option>
                        <option>Natación</option>
                    </select>
                </div>

                {/* Talles */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                        Talles
                    </label>
                    <input
                        type="text"
                        placeholder="S, M, L"
                        className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md focus:outline-none focus:ring-2 placeholder-[var(--color-placeholder)] focus:ring-[var(--color-background-third)]"
                    />
                </div>
            </div>

            {/* Descripción */}
            <div>
                <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                    Descripción
                </label>
                <textarea
                    rows={3}
                    placeholder="Descripción del producto..."
                    className="w-full px-4 py-2 border border-[var(--border-gray-300)] rounded-md resize-none focus:outline-none focus:ring-2 placeholder-[var(--color-placeholder)] focus:ring-[var(--color-background-third)]"
                />
            </div>

            {/* Colores */}
            <div>
                <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                    Colores (hex)
                </label>
                <input
                    type="text"
                    placeholder="#000000, #ffffff"
                    className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md focus:outline-none focus:ring-2 placeholder-[var(--color-placeholder)] focus:ring-[var(--color-background-third)]"
                />
                <p className="text-xs text-gray-500 mt-1">
                    Separados por coma
                </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4">

                <button
                    type="button"
                    className="text-[var(--p-negro)] w-full sm:w-auto px-4 py-2 border border-[var(--border-gray-300)] rounded-md hover:bg-[var(--border-gray-50)] transition"
                    onClick={onClose}
                >
                    Cancelar
                </button>

                <button
                    type="button"
                    className="w-full sm:w-auto px-6 py-2 bg-[var(--botones-rojos)] text-[var(--p-blanco)] rounded-md hover:opacity-90 transition"
                >
                    Guardar producto
                </button>

            </div>
        </form>
    );
};

export default FormProducto;
