import React from "react";

const Dato = ({ label, value }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
            <span className="text-sm text-[var(--text-gray-500)]">
                {label}
            </span>
            <span className="font-medium text-[var(--p-negro)]">
                {value}
            </span>
        </div>
    );
};

export default Dato;
