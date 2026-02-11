import React from "react";

const CardProductoSkeleton = () => {
  return (
    <div
      className="relative rounded-xl p-4 flex flex-col animate-pulse"
      style={{
        backgroundColor: "var(--fondo-cards)",
        width: "290px",
        height: "365px",
      }}
    >
      {/* Iconos fake */}
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <div className="w-6 h-6 bg-gray-300 rounded-full" />
        <div className="w-6 h-6 bg-gray-300 rounded-full" />
      </div>

      {/* Imagen */}
      <div className="w-full h-40 bg-gray-300 rounded mb-4" />

      {/* Nombre */}
      <div className="h-[60px] flex items-center justify-center mb-2">
        <div className="h-6 w-3/4 bg-gray-300 rounded" />
      </div>

      {/* Descripción + colores */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-5 w-2/3 bg-gray-300 rounded" />

        <div className="flex gap-2">
          <div className="w-5 h-5 bg-gray-300 rounded-full" />
          <div className="w-5 h-5 bg-gray-300 rounded-full" />
          <div className="w-5 h-5 bg-gray-300 rounded-full" />
        </div>
      </div>

      {/* Botón */}
      <div className="h-10 bg-gray-300 rounded mt-auto" />
    </div>
  );
};

export default CardProductoSkeleton;
