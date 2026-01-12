import React from "react";
import { FiSearch } from "react-icons/fi";

const BuscadorProductos = ({ value, onChange, onSubmit }) => {
    return (
        <div className="relative w-full md:w-[60%]">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="¿Qué estás buscando?"
                className="w-full p-3 pr-14 rounded-full border placeholder-[var(--color-placeholder)] border-[var(--border-gray-300)] outline-none text-[18px] text-[var(--p-negro)]"
            />

            <button
                type="button"
                onClick={onSubmit}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[var(--botones-rojos)] text-[var(--p-blanco)] w-10 h-10 rounded-full flex items-center justify-center text-lg"
            >
                <FiSearch />
            </button>
        </div>
    );
};

export default BuscadorProductos;
