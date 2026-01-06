import React from "react";
import { Field, ErrorMessage } from "formik";

const IssueFields = () => {
  return (
    <>
      {/* TÍTULO */}
      <div>
        <label className="block mb-1 font-medium text-[var(--p-negro)]">
          Título
        </label>
        <Field name="titulo">
          {({ field, form: { errors, touched } }) => (
            <div>
              <input
                type="text"
                {...field}
                placeholder="Ej: Error al cargar productos"
                className={`w-full px-3 py-2 rounded-md border
                  ${
                    errors.titulo && touched.titulo
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                  }
                  placeholder-[var(--color-placeholder)]
                  text-[var(--p-negro)]
                  outline-none bg-transparent`}
              />
              <ErrorMessage
                name="titulo"
                component="p"
                className="text-[var(--text-errors)] text-sm mt-1"
              />
            </div>
          )}
        </Field>
      </div>

      {/* DESCRIPCIÓN */}
      <div>
        <label className="block mb-1 font-medium text-[var(--p-negro)]">
          Descripción
        </label>
        <Field name="descripcion">
          {({ field, form: { errors, touched } }) => (
            <>
              <textarea
                {...field}
                rows="4"
                placeholder="Contanos qué pasó, sin miedo 😅"
                className={`w-full px-3 py-2 rounded-md border resize-none
                  ${
                    errors.descripcion && touched.descripcion
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                  }
                  placeholder-[var(--color-placeholder)]
                  text-[var(--p-negro)]
                  outline-none bg-transparent`}
              />
              <ErrorMessage
                name="descripcion"
                component="p"
                className="text-[var(--text-errors)] text-sm mt-1"
              />
            </>
          )}
        </Field>
      </div>

      {/* PRIORIDAD */}
      <div>
        <label className="block mb-1 font-medium text-[var(--p-negro)]">
          Prioridad
        </label>
        <Field name="prioridad">
          {({ field, form: { errors, touched } }) => (
            <>
              <select
                {...field}
                className={`w-full px-3 py-2 rounded-md border
                  ${
                    errors.prioridad && touched.prioridad
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                  }
                  text-[var(--p-negro)]
                  outline-none bg-transparent`}
              >
                <option value="1">Baja</option>
                <option value="2">Media</option>
                <option value="3">Alta</option>
              </select>
              <ErrorMessage
                name="prioridad"
                component="p"
                className="text-[var(--text-errors)] text-sm mt-1"
              />
            </>
          )}
        </Field>
      </div>
    </>
  );
};

export default IssueFields;
