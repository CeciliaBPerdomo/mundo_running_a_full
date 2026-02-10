import React from "react";

const headers = [
  { key: "usuario", label: "Usuario", className: "px-4 py-3 text-left" },
  { key: "productos", label: "Productos", className: "px-4 py-3 text-center" },
  { key: "envio", label: "Datos de envío", className: "px-4 py-3 text-left" },
  { key: "total", label: "Total", className: "px-4 py-3 text-right" },
  { key: "estado", label: "Estado", className: "px-4 py-3 text-center" },
   { label: "Acciones", align: "center" }, 
];

const ComprasRealizadasHeaders = () => {
  return (
    <thead className="bg-[var(--color-background-third)] text-[var(--p-blanco)]">
      <tr>
        {headers.map((h) => (
          <th key={h.key} className={h.className}>
            {h.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ComprasRealizadasHeaders;
