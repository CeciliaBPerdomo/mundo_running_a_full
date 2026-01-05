import React, { useState } from "react";

const Problemas = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "2",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Incidencia enviada:", form);
  };

  return (
    <div className="flex justify-center">

      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Reportar problema 🛠️
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* TÍTULO */}
          <div>
            <label className="block mb-1 font-medium">Título</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
               placeholder="Ej: Error al cargar productos"
              className="w-full px-3 py-2 rounded-md border"
              required
            />
          </div>

          {/* DESCRIPCIÓN */}
          <div>
            <label className="block mb-1 font-medium">Descripción</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 rounded-md border resize-none"
              placeholder="Contanos qué pasó, sin miedo 😅"
              required
            />
          </div>

          {/* PRIORIDAD */}
          <div>
            <label className="block mb-1 font-medium">Prioridad</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border"
            >
              <option value="1">Baja</option>
              <option value="2">Media</option>
              <option value="3">Alta</option>
            </select>
          </div>

          <button
            type="submit"
            className="
              mt-4
              bg-[var(--color-titulos)]
              text-[var(--p-blanco)]
              py-2
              rounded-md
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Enviar incidencia
          </button>

        </form>
      </div>

    </div>
  );
};

export default Problemas;
