// components > Auth > InicioSesion > InicioSesion.jsx
import React, { useState } from 'react'
import { Link } from 'react-router'
import { useDispatch } from 'react-redux';

// Formik
import { Formik } from 'formik';
import { Form as FormikForm } from 'formik';
import LoginFields from "./LoginFields";

import { loginValidationSchema } from "../../../formik/validationSchema"
import { loginInitialValues } from "../../../formik/initialValues"

// Redux y axios
import { setUsuarioActual } from "../../../redux/usuario/usuarioSlice"
import { loginUsuario } from '../../../axios/login-axios';

import useRedirect from "../../../hooks/useRedirect"

// Alertas y loader
import { ToastContainer } from 'react-toastify';
import { mensaje } from '../../UI/Toast/mensaje';
import SubmitButton from "../../UI/Form/BotonSubmit";
import FormFooterLink from "../../UI/Form/FormFooterLink";

// Expiración del token
import { jwtDecode } from "jwt-decode"


const InicioSesion = () => {

  const [permitirRedirect, setPermitirRedirect] = useState(false)
  const dispatch = useDispatch()

  useRedirect("/", permitirRedirect)

  const handleLogin = async (values, actions) => {
    try {
      const user = await loginUsuario(values.email, values.password)
      if (!user) {
        mensaje("❌ Error al ingresar con tu usuario")
        return
      }

      const { usuario, token } = user
      const decoded = jwtDecode(token)
      const expirationTime = decoded.exp * 1000
      const usuarioConSesion = {
        ...usuario,
        token,
        expirationTime
      }

      // persistencia en localStorage
      localStorage.setItem("token", token)
      localStorage.setItem("expirationTime", expirationTime)
      localStorage.setItem("usuario", JSON.stringify(usuarioConSesion))

      dispatch(setUsuarioActual(usuarioConSesion))

      mensaje("✅ Sesión iniciada correctamente")
      setTimeout(() => setPermitirRedirect(true), 2000)
    } catch (error) {
      console.error(error)
    } finally {
      actions.setSubmitting(false);
    }
  }

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
            onSubmit={handleLogin} >

            {({ isSubmitting }) => (
              <FormikForm className="space-y-4">
                <LoginFields />

                <SubmitButton loading={isSubmitting}>
                  Iniciar sesión
                </SubmitButton>
              </FormikForm>

            )}
          </Formik>

          {/* Registrarse */}
          <FormFooterLink text="¿No tenés cuenta?" linkText="Registrate" to="/signup" />

        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default InicioSesion
