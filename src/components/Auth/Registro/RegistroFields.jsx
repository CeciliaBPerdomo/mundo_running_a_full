import { Field, ErrorMessage } from "formik";
import ciudades from "../../../data/ciudades.json";

const RegistroFields = ({ setShowModal }) => {
  return (
    <>
      {/* Nombre */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
          Nombre completo
        </label>
        <Field name="nombre">
          {({ field, form: { errors, touched } }) => (
            <div>
              <input
                type="text"
                {...field}
                placeholder="Ingresá tu nombre"
                className={`w-full p-3 rounded-md border ${
                  errors.nombre && touched.nombre
                    ? "border-[var(--text-errors)]"
                    : "border-[var(--border-gray-300)]"
                } placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent`}
              />
              <ErrorMessage
                name="nombre"
                component="p"
                className="text-[var(--text-errors)] text-sm mt-1"
              />
            </div>
          )}
        </Field>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
          Email
        </label>
        <Field name="email">
          {({ field, form: { errors, touched } }) => (
            <>
              <input
                {...field}
                type="email"
                placeholder="correo@ejemplo.com"
                className={`w-full p-3 rounded-md border ${
                  errors.email && touched.email
                    ? "border-[var(--text-errors)]"
                    : "border-[var(--border-gray-300)]"
                } placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent`}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-[var(--text-errors)] text-sm mt-1"
              />
            </>
          )}
        </Field>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
          Contraseña
        </label>
        <Field name="password">
          {({ field, form: { errors, touched } }) => (
            <>
              <input
                {...field}
                type="password"
                placeholder="Ingresá una contraseña"
                className={`w-full p-3 rounded-md border ${
                  errors.password && touched.password
                    ? "border-[var(--text-errors)]"
                    : "border-[var(--border-gray-300)]"
                } placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent`}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-[var(--text-errors)] text-sm mt-1"
              />
            </>
          )}
        </Field>
      </div>

      {/* Celular + Ciudad */}
      <div className="flex gap-4">
        {/* Celular */}
        <div className="w-1/2">
          <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
            Celular
          </label>
          <Field name="celular">
            {({ field, form: { errors, touched } }) => (
              <>
                <input
                  {...field}
                  type="tel"
                  placeholder="099 000 000"
                  className={`w-full p-3 rounded-md border ${
                    errors.celular && touched.celular
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                  } placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent`}
                />
                <ErrorMessage
                  name="celular"
                  component="p"
                  className="text-[var(--text-errors)] text-sm mt-1"
                />
              </>
            )}
          </Field>
        </div>

        {/* Ciudad */}
        <div className="w-1/2">
          <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
            Ciudad
          </label>
          <Field name="ciudad">
            {({ field, form: { errors, touched } }) => (
              <>
                <select
                  {...field}
                  className={`w-full p-3 rounded-md border ${
                    errors.ciudad && touched.ciudad
                      ? "border-[var(--text-errors)]"
                      : "border-[var(--border-gray-300)]"
                  } text-[var(--p-negro)] bg-[var(--color-background)] outline-none`}
                >
                  <option value="">Seleccioná tu ciudad...</option>
                  {ciudades.map((ciudad) => (
                    <option key={ciudad} value={ciudad}>
                      {ciudad}
                    </option>
                  ))}
                </select>
                <ErrorMessage
                  name="ciudad"
                  component="p"
                  className="text-[var(--text-errors)] text-sm mt-1"
                />
              </>
            )}
          </Field>
        </div>
      </div>

      <p
        className="text-sm text-[var(--p-negro)] text-right cursor-pointer hover:text-[var(--color-titulos)]"
        onClick={() => setShowModal(true)}
      >
        ¿Tenés código de administrador?
      </p>
    </>
  );
};

export default RegistroFields;
