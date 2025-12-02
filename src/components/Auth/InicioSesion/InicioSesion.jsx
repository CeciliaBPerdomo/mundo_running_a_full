import React from 'react'
import { Link } from 'react-router'

const InicioSesion = () => {
  return (
    <section className="mt-10 w-full min-h-screen flex">
      
      {/* LADO IZQUIERDO: IMAGEN */}
        <div className="hidden md:flex w-1/2 justify-end pr-10">
        <img 
          src="/login/login-img.png" 
          alt="Login" 
          className="w-[90%] h-full object-cover rounded-lg"
        />
      </div>

      {/* LADO DERECHO: FORM */}
      <div className="w-full md:w-1/2 flex items-center p-8">
        <div className="w-full max-w-md ml-10"> 
          
          <h2 className="text-3xl font-bold mb-6 text-[var(--color-titulos)] tracking-widest">
            INICIAR SESIÓN
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                Email
              </label>
              <input 
                type="email"
                className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
                placeholder="Ingresá tu email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                Contraseña
              </label>
              <input 
                type="password"
                className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="
                w-full bg-[var(--botones-rojos)] 
                text-white font-semibold py-3 rounded-md
                hover:bg-[var(--botones-rojos-hover)]
                transition-all
              "
            >
              Iniciar sesión
            </button>
          </form>

          {/* Registrarse */}
          <p className="text-center mt-6 text-sm text-[var(--p-negro)]">
            ¿No tenés cuenta?{" "}
            <Link to="/signup" className="text-[var(--color-titulos)] font-semibold hover:underline">
              Registrate
            </Link>
          </p>

        </div>
      </div>

    </section>
  )
}

export default InicioSesion
