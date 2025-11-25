import React from "react";

const CardProducto = ({ imagen, nombre, descripcion, colores }) => {
  return (
    <div
      className="rounded-xl p-4 flex flex-col items-center"
      style={{
        backgroundColor: "var(--fondo-cards)",
        width: "290px",
        height: "410px",
      }}
    >
      {/* Imagen */}
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Nombre */}
      <h3 className="text-[var(--color-titulos)] text-xl font-bold text-center tracking-wide mb-2">
        {nombre}
      </h3>

      {/* Descripción */}
      <p className="text-[var(--p-negro)] text-sm text-center mb-4">
        {descripcion}
      </p>

      {/* Colores */}
      <div className="flex gap-2 mt-auto">
        {colores?.map((color, idx) => (
          <span
            key={idx}
            className="w-5 h-5 rounded-full border border-white"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardProducto;
