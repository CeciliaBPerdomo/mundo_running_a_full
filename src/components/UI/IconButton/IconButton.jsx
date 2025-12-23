import React from "react";

const IconButton = ({ onClick, children, ariaLabel, className = "" }) => {
    return (
        <button onClick={onClick} aria-label={ariaLabel} className={`flex items-center px-2.5 py-2 bg-[var(--color-background-black)] hover:bg-[var(--color-titulos)] transition ${className}`}>
            {children}
        </button>
    );
};

export default IconButton;
