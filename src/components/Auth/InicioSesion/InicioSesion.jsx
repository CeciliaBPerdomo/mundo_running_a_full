import React, { useState } from 'react'
import { Link } from 'react-router'
// import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

// Formik
import { Formik } from 'formik';
import { Form as FormikForm } from 'formik';
import { ErrorMessage, Field } from 'formik';

import { loginValidationSchema } from "../../../formik/validationSchema"
import { loginInitialValues } from "../../../formik/initialValues"

// Redux y axios
import { setUsuarioActual } from "../../../redux/usuario/usuarioSlice"
import { loginUsuario } from '../../../axios/login-axios';

import useRedirect from "../../../hooks/useRedirect"

// Alertas y loader
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../UI/Loader/Loader';

const InicioSesion = () => {

  const [permitirRedirect, setPermitirRedirect] = useState(false)

  // const navigate = useNavigate()
  const dispatch = useDispatch()

  function mensaje(mensaje) {
    toast(mensaje, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      enter: 'zoomIn',
      exit: 'zoomOut',
      appendPosition: true
    });
  }

  useRedirect("/", permitirRedirect)

  return (
    <section className="mt-10 w-full min-h-screen flex">

      {/* IMAGEN */}
      <div className="hidden md:flex w-1/2 justify-end pr-10">
        <img
          src="/login/login-img.png"
          alt="Login"
          className="w-[90%] h-full object-cover rounded-lg"
        />
      </div>

      {/* FORMULARIO */}
      <div className="w-full md:w-1/2 flex items-center p-8">
        <div className="w-full max-w-md ml-10">

          <h2 className="text-3xl font-bold mb-6 text-[var(--color-titulos)] tracking-widest">
            INICIAR SESIÓN
          </h2>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async (values, actions) => {
              try {
                const user = await loginUsuario(
                  values.email,
                  values.password
                )
                if (user) {
                  mensaje("✅ Sesión iniciada")
                  dispatch(setUsuarioActual(user))
                  setTimeout(() => {
                    setPermitirRedirect(true)
                  }, 3200)
                } else {
                  mensaje("❌ Error al ingresar con tu usuario")
                }
              } catch (error) {
                console.error(error)
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >

            {({ isSubmitting }) => (
              <FormikForm className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Ingresá tu email"
                    className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
                  />
                  <ErrorMessage name="email" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                    Contraseña
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent"
                  />
                  <ErrorMessage name="password" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
                </div>

                <button type="submit" className="w-full bg-[var(--botones-rojos)]  text-[var(--p-blanco)] font-semibold py-3 rounded-md hover:bg-[var(--botones-rojos-hover)] transition-all" >
                  {isSubmitting ? <Loader /> : " Iniciar sesión"}
                </button>
              </FormikForm>
            )}
          </Formik>

          {/* Registrarse */}
          <p className="text-center mt-6 text-sm text-[var(--p-negro)]">
            ¿No tenés cuenta?{" "}
            <Link to="/signup" className="text-[var(--color-titulos)] font-semibold hover:underline">
              Registrate
            </Link>
          </p>

        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default InicioSesion
