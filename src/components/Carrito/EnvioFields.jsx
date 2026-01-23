import { Field, ErrorMessage } from "formik"
import departamentos from "../../data/ciudades.json";

const EnvioFields = () => {
  return (
    <>
      {/* Nombre completo */}
      <div>
        <Field
          name="nombre"
          type="text"
          placeholder="Nombre completo"
          className="w-full border border-[var(--recuadro)] rounded-lg px-4 py-2 placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
        />
        <ErrorMessage
          name="nombre"
          component="p"
          className="text-sm text-[var(--text-errors)]"
        />
      </div>

      {/* Telefono */}
      <div>
        <Field
          name="celular"
          type="tel"
          placeholder="Teléfono"
          className="w-full border border-[var(--recuadro)] rounded-lg px-4 py-2 placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
        />
        <ErrorMessage
          name="celular"
          component="p"
          className="text-sm text-[var(--text-errors)]"
        />
      </div>

      {/* Dirección */}
      <div>
        <Field
          name="direccion"
          type="text"
          placeholder="Dirección"
          className="w-full border border-[var(--recuadro)] rounded-lg px-4 py-2 placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
        />
        <ErrorMessage
          name="direccion"
          component="p"
          className="text-sm text-[var(--text-errors)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ciudad */}
        <div>
          <Field
            name="ciudad"
            type="text"
            placeholder="Ciudad"
            className="w-full border border-[var(--recuadro)] rounded-lg px-4 py-2 placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
          />
          <ErrorMessage
            name="ciudad"
            component="p"
            className="text-sm text-[var(--text-errors)]"
          />
        </div>

        {/* Departamento */}
        <div>
          <Field
            as="select"
            name="departamento"
            className="w-full border border-[var(--recuadro)] rounded-lg px-4 py-2 bg-[var(--color-background)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
          >
            <option value="">Seleccioná un departamento</option>

            {departamentos.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </Field>

          <ErrorMessage name="departamento" component="p" className="text-sm text-[var(--text-errors)]" />
        </div>

      </div>

      {/* Notas: opcional */}
      <div>
        <Field
          as="textarea"
          name="notas"
          placeholder="Notas (opcional)"
          className="w-full border border-[var(--recuadro)] rounded-lg px-4 py-2 placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
          rows={3}
        />
      </div>
    </>
  )
}

export default EnvioFields
