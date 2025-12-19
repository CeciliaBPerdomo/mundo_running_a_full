import React from "react";

const ServiciosBicicleta = () => {
  return (
    <section className=" space-y-10 text-[var(--p-negro)]">

      {/* MANTENIMIENTO */}

      <h2 className="text-2xl font-bold mb-6">
        🚲 Servicios de mantenimiento
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Service Básico */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Service Básico</h3>
          <ul className="space-y-2">
            <li>Limpieza general</li>
            <li>Ajuste de frenos y cambios</li>
            <li>Lubricación básica</li>
          </ul>
          <p className="mt-2 text-sm italic">👉 Ideal para uso urbano</p>
        </div>

        {/* Service Completo */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Service Completo</h3>
          <ul className="space-y-2">
            <li>Limpieza profunda de transmisión</li>
            <li>Regulación fina de frenos y cambios</li>
            <li>Revisión de rodamientos</li>
            <li>Chequeo de tornillería</li>
          </ul>
          <p className="mt-2 text-sm italic">👉 Para entrenar sin sorpresas</p>
        </div>

      </div>

      {/* Service Premium */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Service Premium</h3>

        <ul className="list-disc pl-5 space-y-1">
          <li>Desarme parcial</li>
          <li>Limpieza técnica</li>
          <li>Engrase y lubricación profesional</li>
          <li>Ajuste milimétrico</li>
        </ul>
        <p className="mt-2 text-sm italic">
          👉 Para maniáticos del detalle
        </p>
      </div>


      {/* REPARACIONES */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          ⚙️ Reparaciones específicas
        </h2>
        <p className="mb-4 text-sm opacity-80">
          Para el que sabe lo que le duele a la bici:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Cambio de cadena, piñón y plato</li>
          <li>Reparación o reemplazo de frenos </li>
          <li>Purgado de frenos hidráulicos</li>
          <li>Cambio de cables y fundas</li>
          <li>Armado y ajuste de ruedas</li>
          <li>Reparación de pinchaduras express</li>
        </ul>
      </div>

      {/* EXTRAS */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          🏁 Servicios extra
        </h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>Puesta a punto pre-carrera</li>
          <li>Chequeo post-competencia</li>
          <li>Asesoramiento en componentes</li>
          <li>Ajuste de posición básica (fit inicial)</li>
          <li>Diagnóstico técnico</li>
        </ul>
      </div>

      {/* DETALLES */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          🌱 Detalles que suman puntos
        </h2>

        <ul className="list-disc pl-5 space-y-1">
          <li>Uso de lubricantes biodegradables</li>
          <li>Cuidado y limpieza responsable</li>
          <li>Atención personalizada</li>
          <li>Turnos programados (menos espera, más felicidad)</li>
        </ul>
      </div>
</div>
    </section>
  );
};

export default ServiciosBicicleta;
