import { Field, ErrorMessage } from "formik"

const EnvioFields = () => {
  return (
    <>
      <div>
        <Field
          name="nombre"
          type="text"
          placeholder="Nombre completo"
          className="w-full border rounded-lg px-4 py-2"
        />
        <ErrorMessage
          name="nombre"
          component="p"
          className="text-sm text-[var(--text-errors)]"
        />
      </div>

      <div>
        <Field
          name="celular"
          type="tel"
          placeholder="Teléfono"
          className="w-full border rounded-lg px-4 py-2"
        />
        <ErrorMessage
          name="celular"
          component="p"
          className="text-sm text-[var(--text-errors)]"
        />
      </div>

      <div>
        <Field
          name="direccion"
          type="text"
          placeholder="Dirección"
          className="w-full border rounded-lg px-4 py-2"
        />
        <ErrorMessage
          name="direccion"
          component="p"
          className="text-sm text-[var(--text-errors)]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Field
            name="ciudad"
            type="text"
            placeholder="Ciudad"
            className="w-full border rounded-lg px-4 py-2"
          />
          <ErrorMessage
            name="ciudad"
            component="p"
            className="text-sm text-[var(--text-errors)]"
          />
        </div>

        <div>
          <Field
            name="departamento"
            type="text"
            placeholder="Departamento"
            className="w-full border rounded-lg px-4 py-2"
          />
          <ErrorMessage
            name="departamento"
            component="p"
            className="text-sm text-[var(--text-errors)]"
          />
        </div>
      </div>

      <div>
        <Field
          as="textarea"
          name="notas"
          placeholder="Notas (opcional)"
          className="w-full border rounded-lg px-4 py-2"
          rows={3}
        />
      </div>
    </>
  )
}

export default EnvioFields
