import React from "react";

const ModalBase = ({ open, title, subtitle, children, footer, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="rounded-2xl border border-[var(--recuadro)] bg-[var(--color-background)] w-full max-w-md rounded-2xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b">
          <h3 className="text-lg font-semibold text-[var(--color-titulos)]">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>

        {/* Body */}
        <div className="p-5 text-[var(--p-negro)]">{children}</div>

        {/* Footer */}
        {footer && <div className="p-5 pt-0">{footer}</div>}
      </div>
    </div>
  );
};

export default ModalBase;
