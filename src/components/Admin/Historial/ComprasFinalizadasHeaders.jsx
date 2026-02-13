import React from "react";

const ComprasFinalizadasHeaders = () => {
  return (
    <thead className="bg-[var(--color-background-third)] text-[var(--p-blanco)]">
      <tr>
        <th className="px-4 py-3 text-left">Cliente</th>
        <th className="px-4 py-3 text-left">Último movimiento</th>
        <th className="px-4 py-3 text-center">Cantidad de productos</th>
        <th className="px-4 py-3 text-right">Total</th>
        <th className="px-4 py-3 text-center">Estado</th>
      </tr>
    </thead>
  );
};

export default ComprasFinalizadasHeaders;
