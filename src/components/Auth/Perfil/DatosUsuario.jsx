import React from 'react'
import { FaEdit, FaCheckCircle } from "react-icons/fa";

const DatosUsuario = () => {
  const usuario = {
    nombre: "Cecilia Perdomo",
    email: "cecilia@email.com",
    celular: "099 123 456",
    ciudad: "Colonia del Sacramento",
    verified: false,
    newsletter: true,
  };

  return (
    <section className="max-w-3xl mx-auto px-6">

      <h1 className="text-3xl font-semibold text-[var(--color-titulos)] mb-8">
        Mis datos
      </h1>

      <div className="bg-[var(--color-background)] border border-[var(--border-gray-300)] rounded-xl p-6 space-y-6 shadow-sm">

        {/* Dato */}
        <Dato label="Nombre" value={usuario.nombre} />
        <Dato label="Email" value={usuario.email} />
        <Dato label="Celular" value={usuario.celular} />
        <Dato label="Ciudad" value={usuario.ciudad} />

        {/* Estado verificación */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-gray-300)]">
          <div>
            <p className="text-sm text-gray-500">Estado de la cuenta</p>
            <p className={`font-medium ${usuario.verified ? "text-green-600" : "text-yellow-600"}`}>
              {usuario.verified ? "Cuenta verificada" : "Pendiente de verificación"}
            </p>
          </div>

          {!usuario.verified && (
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)] transition">
              <FaCheckCircle />
              Validar código
            </button>
          )}
        </div>

        {/* Acciones */}
        <div className="flex justify-end pt-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border-gray-300)] text-[var(--p-negro)] hover:bg-[var(--border-gray-50)] transition">
            <FaEdit />
            Modificar datos
          </button>
        </div>
      </div>
    </section>
  )
}

const Dato = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="font-medium text-[var(--p-negro)]">{value}</span>
  </div>
);

export default DatosUsuario