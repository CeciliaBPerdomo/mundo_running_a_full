import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background-secondary)] text-center px-6">

      <FiAlertTriangle size={64} className="text-[var(--color-titulos)] mb-6" />

      <h1 className="text-5xl font-bold mb-4 text-[var(--p-negro)]">
        404
      </h1>

      <h2 className="text-xl font-semibold mb-2 text-[var(--p-negro)]">
        Ups… esta página no existe!
      </h2>

      <p className="text-sm opacity-80 mb-1 max-w-md text-[var(--p-negro)]">
        Capaz escribiste mal la URL, capaz esta página ya no está.
      </p>
      <p className="text-sm opacity-80 mb-8 max-w-md text-[var(--p-negro)]">
        Capaz el programador web salió a probar la nueva bici que compró aquí 😌
      </p>

      <button
        onClick={() => navigate("/")}
        className=" flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-titulos)] text-[var(--p-blanco)] font-medium hover:scale-105 transition-transform ">
        <FiArrowLeft />
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;
