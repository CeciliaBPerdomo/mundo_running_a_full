import React from "react";

const FotografiaEventos = () => {
  return (
    <section className="space-y-6 text-[var(--p-negro)] max-w-4xl mx-auto px-12">

      <h2 className="text-2xl font-bold">
        📸 Fotografía de eventos deportivos
      </h2>

      <p className="text-base leading-relaxed">
        Capturamos <strong>el esfuerzo, la emoción y el momento exacto</strong> en el que pasa todo.
        No solo fotos lindas: <strong>historias reales en movimiento</strong>.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-2">Qué hacemos</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cobertura completa de carreras, entrenamientos y eventos</li>
          <li>Fotos de acción, llegada a meta y momentos espontáneos</li>
          <li>Retratos de atletas y equipos</li>
          <li>Contenido ideal para redes, prensa y sponsors</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Nuestro enfoque</h3>
        <ul className="space-y-1">
          <li>📷 Disparos en el momento justo</li>
          <li>🔥 Emoción real, sin poses forzadas</li>
          <li>⚡ Entrega rápida (porque nadie quiere esperar meses)</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Ideal para</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Carreras y competencias</li>
          <li>Equipos deportivos</li>
          <li>Marcas y organizadores</li>
          <li>Atletas que quieren contenido de nivel</li>
        </ul>
      </div>

      <p className="italic text-sm opacity-80">
        👉 Vos corrés, competís u organizás.  
        Nosotros nos encargamos de que <strong>ese día quede inmortalizado</strong>.
      </p>

    </section>
  );
};

export default FotografiaEventos;
