import React from "react";

const columns = [
  { label: "Marca", align: "left" },
  { label: "Descripción", align: "left" },
  { label: "Precio", align: "left" },
  { label: "Categoría", align: "left" },
  { label: "Talles", align: "left" },
  { label: "Colores", align: "left" },
  { label: "Acciones", align: "center" },
];

const TablaProductosHeader = () => {
  return (
    <thead className="bg-[var(--color-background-third)] text-[var(--p-blanco)]">
      <tr>
        {columns.map((col) => (
          <th
            key={col.label}
            className={`px-4 py-3 text-${col.align}`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TablaProductosHeader;
