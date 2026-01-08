import React from "react";

const columns = [
  { label: "Marca", align: "left", className: "" },
  { label: "Descripción", align: "left", className: "hidden md:table-cell" },
  { label: "Precio", align: "left", className: "" },
  { label: "Categoría", align: "left", className: "hidden lg:table-cell" },
  { label: "Talles", align: "left", className: "hidden lg:table-cell" },
  { label: "Colores", align: "left", className: "hidden lg:table-cell" },
  { label: "Acciones", align: "center", className: "" },
];

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const TablaProductosHeader = () => {
  return (
    <thead className="bg-[var(--color-background-third)] text-[var(--p-blanco)]">
      <tr>
        {columns.map((col) => (
          <th
            key={col.label}
            className={`px-4 py-3 ${alignClasses[col.align]} ${col.className}`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TablaProductosHeader;
