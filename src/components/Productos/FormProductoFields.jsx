import React from "react";
import { Field, ErrorMessage } from "formik";

const inputBase =
  "w-full px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)] placeholder-[var(--color-placeholder)]";

const FormProductoFields = () => {
  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Marca */}
        <div>
          <label className="block text-sm font-medium mb-1">Marca</label>
          <Field name="marca">
            {({ field, meta }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="Giro"
                  className={`${inputBase} h-10 ${meta.touched && meta.error
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                    }`}
                />
                <ErrorMessage name="marca" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
              </>
            )}
          </Field>
        </div>

        {/* Precio */}
        <div>
          <label className="block text-sm font-medium mb-1">Precio</label>
          <Field name="precio">
            {({ field, meta }) => (
              <>
                <input
                  {...field}
                  type="number"
                  placeholder="$ 0"
                  className={`${inputBase} h-10 ${meta.touched && meta.error
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                    }`}
                />
                <ErrorMessage name="precio" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
              </>
            )}
          </Field>
        </div>

        {/* Categoría */}
        <div>
          <label className="block text-sm font-medium mb-1">Categoría</label>
          <Field name="categoria">
            {({ field, meta }) => (
              <>
                <select
                  {...field}
                  className={`${inputBase} h-10 bg-[var(--color-background)] ${meta.touched && meta.error
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                    }`}
                >
                  <option value="">Seleccionar</option>
                  <option value="running">Running</option>
                  <option value="ciclismo">Ciclismo</option>
                  <option value="natacion">Natación</option>
                </select>
                <ErrorMessage name="categoria" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
              </>
            )}
          </Field>
        </div>

        {/* Talles */}
        <div>
          <label className="block text-sm font-medium mb-1">Talles</label>
          <Field name="talles">
            {({ field, meta }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="S, M, L"
                  className={`${inputBase} h-10 ${meta.touched && meta.error
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                    }`}
                />
                <ErrorMessage name="talles" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
              </>
            )}
          </Field>
        </div>
      </div>

      {/* Descripción */}
      <div>
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <Field name="descripcion">
          {({ field, meta }) => (
            <>
              <textarea
                {...field}
                rows={3}
                placeholder="Descripción del producto..."
                className={`${inputBase} py-2 ${meta.touched && meta.error
                    ? "border-[var(--text-errors)]"
                    : "border-[var(--border-gray-300)]"
                  }`}
              />
              <ErrorMessage name="descripcion" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
            </>
          )}
        </Field>
      </div>

      {/* Imagen */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium mb-1">
          Imagen del producto (URL)
        </label>
        <Field name="foto">
          {({ field, meta }) => (
            <>
              <input
                {...field}
                type="text"
                placeholder="https://misitio.com/producto.jpg"
                className={`${inputBase} h-10 ${meta.touched && meta.error
                    ? "border-[var(--text-errors)]"
                    : "border-[var(--border-gray-300)]"
                  }`}
              />
              <ErrorMessage
                name="foto"
                component="p"
                className="text-[var(--text-errors)] text-sm mt-1"
              />
            </>
          )}
        </Field>
      </div>


      {/* Colores */}
      <div>
        <label className="block text-sm font-medium mb-1">Colores (hex)</label>
        <Field name="colores">
          {({ field, meta }) => (
            <>
              <input
                {...field}
                type="text"
                placeholder="#000000, #ffffff"
                className={`${inputBase} h-10 ${meta.touched && meta.error
                    ? "border-[var(--text-errors)]"
                    : "border-[var(--border-gray-300)]"
                  }`}
              />
              <ErrorMessage name="colores" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
            </>
          )}
        </Field>
        <p className="text-xs text-gray-500 mt-1">Separados por coma</p>
      </div>
    </>
  );
};

export default FormProductoFields;
