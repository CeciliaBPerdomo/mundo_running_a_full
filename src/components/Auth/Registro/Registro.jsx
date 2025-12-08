import React from 'react'
import { Link } from 'react-router'

const Registro = () => {
  return (
   <section className="w-full flex items-center py-12">

  {/* LADO IZQUIERDO: IMAGEN */}
  <div className="hidden md:flex w-1/2 justify-end p-8">
    <img 
      src="/login/register-img.jpg" 
      alt="Registro"
      className="w-[85%] h-[70%] object-cover rounded-xl"
    />
  </div>

  {/* LADO DERECHO: FORM */}
  <div className="w-full md:w-1/2 flex justify-start px-8 mt-10">
    <div className="w-full max-w-md">

      <h2 className="text-3xl font-bold mb-6 text-[var(--color-titulos)] tracking-widest">
        CREAR CUENTA
      </h2>

      <form className="space-y-4">

        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
            Nombre completo
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
            placeholder="Ingresá tu nombre"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
            placeholder="correo@ejemplo.com"
          />
        </div>

        {/* Celular + Ciudad en misma línea */}
        <div className="flex gap-4">

          {/* Celular */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
              Celular
            </label>
            <input
              type="tel"
              className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
              placeholder="099 000 000"
            />
          </div>

          {/* Ciudad (select) */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
              Ciudad
            </label>
            <select
              className="w-full p-3 rounded-md border border-[var(--border-gray-300)] text-[var(--p-negro)] bg-transparent outline-none"
            >
              <option value="">Seleccioná...</option>
              <option>Artigas</option>
              <option>Canelones</option>
              <option>Cerro Largo</option>
              <option>Colonia</option>
              <option>Durazno</option>
              <option>Flores</option>
              <option>Florida</option>
              <option>Lavalleja</option>
              <option>Maldonado</option>
              <option>Montevideo</option>
              <option>Paysandú</option>
              <option>Río Negro</option>
              <option>Rivera</option>
              <option>Rocha</option>
              <option>Salto</option>
              <option>San José</option>
              <option>Soriano</option>
              <option>Tacuarembó</option>
              <option>Treinta y Tres</option>
            </select>
          </div>

        </div>

        {/* Botón */}
        <button
          type="submit"
          className="
            w-full bg-[var(--botones-rojos)] 
            text-white font-semibold py-3 rounded-md
            hover:bg-[var(--botones-rojos-hover)]
            transition-all
          "
        >
          Registrarme
        </button>

      </form>

      {/* Link a login */}
      <p className="text-center mt-6 text-sm text-[var(--p-negro)]">
        ¿Ya tenés cuenta?{" "}
        <Link to="/login" className="text-[var(--color-titulos)] font-semibold hover:underline">
          Iniciá sesión
        </Link>
      </p>
    </div>
  </div>

</section>
  )
}

export default Registro
