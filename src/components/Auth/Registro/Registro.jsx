import React, { useState } from 'react'
import { Link } from 'react-router'
import { useDispatch } from 'react-redux';

// Ciudades de Uruguay 
import ciudades from "../../../data/ciudades.json"

// Formik
import { Formik } from 'formik';
import { Form as FormikForm } from 'formik';
import { ErrorMessage, Field } from 'formik';

import { registerValidationSchema } from "../../../formik/validationSchema"
import { registerInitialValues } from "../../../formik/initialValues"

// Alertas y loader
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Loader from '../../UI/Loader/Loader';

// Redux y axios
import { setUsuarioActual } from "../../../redux/usuario/usuarioSlice"
import { crearUsuario, verificarCodigo } from '../../../axios/registro-axios';
import { loginUsuario } from '../../../axios/login-axios';

import useRedirect from "../../../hooks/useRedirect"

const Registro = () => {
  const [showModal, setShowModal] = useState(false)
  const [codigoAdmin, setCodigoAdmin] = useState("")

  // para codigo de verificacion
  const [emailRegistro, setEmailRegistro] = useState("")
  const [showVerifyModal, setShowVerifyModal] = useState(false)
  const [codigoVerificacion, setCodigoVerificacion] = useState("")
  const [permitirRedirect, setPermitirRedirect] = useState(false)


  const [credenciales, setCredenciales] = useState({
    email: "",
    password: ""
  })

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
    <section className="w-full flex items-center py-12">

      {/* IMAGEN */}
      <div className="hidden md:flex w-1/2 justify-end p-8">
        <img src="/login/register-img.jpg" alt="Registro" className="w-[85%] h-[70%] object-cover rounded-xl" />
      </div>

      {/* FORMULARIO */}
      <div className="w-full md:w-1/2 flex justify-start px-8 mt-10">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-6 text-[var(--color-titulos)] tracking-widest">
            CREAR CUENTA
          </h2>


          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={async (values, actions) => {
              try {
                const user = await crearUsuario(
                  values.nombre,
                  values.email,
                  values.password,
                  values.celular,
                  values.ciudad
                )
                if (user) {
                  mensaje("✔️ Tú usuario ha sido creado con éxito, a la brevedad recibirás un código de verificación")
                  setEmailRegistro(values.email)

                  setCredenciales({
                    email: values.email,
                    password: values.password
                  })
                  setShowVerifyModal(true)
                  // dispatch(setUsuarioActual({ ...user.usuario }))
                } else {
                  mensaje("❌ Error al guardar tú usuario, intentelo más tarde")
                }
                actions.resetForm()
              } catch (error) {
                console.error(error)
              } finally {
                actions.setSubmitting(false);
              }
            }} >

            {({ isSubmitting }) => (
              <FormikForm className="space-y-4">

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
                          className={`w-full p-3 rounded-md border ${errors.nombre && touched.nombre ? "border-[var(--text-errors)]" : "border-[var(--border-gray-300)]"} placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent`} />

                        <ErrorMessage name="nombre" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
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
                          className={`w-full p-3 rounded-md border ${errors.email && touched.email ? "border-[var(--text-errors)]" : "border-[var(--border-gray-300)]"} placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent`} />
                        <ErrorMessage name="email" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
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
                          className={`w-full p-3 rounded-md border ${errors.password && touched.password ? "border-[var(--text-errors)]" : "border-[var(--border-gray-300)]"} placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent`} />
                        <ErrorMessage name="password" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
                      </>
                    )}
                  </Field>
                </div>

                {/* Celular + Ciudad  */}
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
                            className={`w-full p-3 rounded-md border ${errors.celular && touched.celular ? "border-[var(--text-errors)]" : "border-[var(--border-gray-300)]"} placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none bg-transparent`} />
                          <ErrorMessage name="celular" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
                        </>
                      )}
                    </Field>
                  </div>

                  {/* Ciudad (select) */}
                  <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1 text-[var(--p-negro)]">
                      Ciudad
                    </label>
                    <Field name="ciudad">
                      {({ field, form: { errors, touched } }) => (
                        <>
                          <select
                            {...field}
                            className={`w-full p-3 rounded-md border ${errors.ciudad && touched.ciudad ? "border-[var(--text-errors)]" : "border-[var(--border-gray-300)]"} text-[var(--p-negro)] bg-[var(--color-background)] outline-none`} >
                            <option value="">Seleccioná tu ciudad...</option>
                            {ciudades.map((ciudad) => (
                              <option key={ciudad} value={ciudad}>
                                {ciudad}
                              </option>
                            ))}
                          </select>

                          <ErrorMessage name="ciudad" component="p" className="text-[var(--text-errors)] text-sm mt-1" />
                        </>
                      )}
                    </Field>
                  </div>

                </div>

                <p className="text-sm text-[var(--p-negro)] text-right cursor-pointer hover:text-[var(--color-titulos)]" onClick={() => setShowModal(true)} >
                  ¿Tenés código de administrador?
                </p>

                {/* Botón */}
                <button type="submit" className="w-full bg-[var(--botones-rojos)] text-[var(--p-blanco)] font-semibold py-3 rounded-md hover:bg-[var(--botones-rojos-hover)] transition-all ">
                  {isSubmitting ? <Loader /> : "Registrarme"}
                </button>

              </FormikForm>
            )}
          </Formik>
          {/* Link a login */}
          <p className="text-center mt-6 text-sm text-[var(--p-negro)]">
            ¿Ya tenés cuenta?{" "}
            <Link to="/login" className="text-[var(--color-titulos)] font-semibold hover:underline">
              Iniciá sesión
            </Link>
          </p>
        </div>
      </div>

      {/* ----------------- MODAL ----------------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[var(--color-background)] w-full max-w-sm p-6 rounded-lg shadow-xl">

            <h3 className="text-lg font-semibold text-[var(--color-titulos)] mb-3">
              Código de Administrador
            </h3>

            <input
              type="text"
              value={codigoAdmin}
              onChange={(e) => setCodigoAdmin(e.target.value)}
              className="w-full p-3 border rounded-md outline-none border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)]"
              placeholder="Ingresá tu código"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                className="px-4 py-2 bg-[var(--border-gray-300)] rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>

              <button
                className="px-4 py-2 bg-[var(--botones-rojos)] text-[var(--p-blanco)] rounded-md hover:bg-[var(--botones-rojos-hover)]"
                onClick={() => {
                  console.log("Código enviado:", codigoAdmin)
                  setShowModal(false)
                }}
              >
                Aceptar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Modal de verificacion del codigo */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[var(--color-background)] w-full max-w-sm p-6 rounded-lg shadow-xl">

            <h3 className="text-lg font-semibold text-[var(--color-titulos)] mb-2">
              Verificá tu cuenta
            </h3>

            <p className="text-sm text-[var(--p-negro)] mb-4">
              Ingresá el código que te enviamos por email
            </p>

            <input
              type="text"
              value={codigoVerificacion}
              onChange={(e) => setCodigoVerificacion(e.target.value)}
              className="w-full p-3 border rounded-md outline-none border-[var(--border-gray-300)] text-[var(--p-negro)]"
              placeholder="Código de verificación"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                className="px-4 py-2 bg-[var(--border-gray-300)] rounded-md"
                onClick={async () => {
                  try {
                    setShowVerifyModal(false)

                    const data = await loginUsuario(
                      credenciales.email,
                      credenciales.password
                    )

                    dispatch(setUsuarioActual(data.usuario))
                    mensaje("🙌 Sesión iniciada (cuenta sin verificar)")
                    setTimeout(() => {
                      setPermitirRedirect(true)
                    }, 2200)
                  } catch (error) {
                    mensaje("❌ Error al iniciar sesión: " + error)
                  }
                }}

              >
                Cancelar
              </button>

              <button
                className="px-4 py-2 bg-[var(--botones-rojos)] text-[var(--p-blanco)] rounded-md"
                onClick={async () => {
                  try {
                    const data = await verificarCodigo(emailRegistro, codigoVerificacion)

                    mensaje("✅ Cuenta verificada con éxito")
                    setShowVerifyModal(false)
                    await loginUsuario(credenciales.email, credenciales.password)
                    dispatch(setUsuarioActual(data.usuario))

                    setTimeout(() => {
                      setPermitirRedirect(true)
                    }, 2200)
                  } catch (error) {
                    mensaje("❌ Código incorrecto o vencido: " + error)
                  }
                }}
              >
                Verificar
              </button>
            </div>
          </div>
        </div>
      )}


      <ToastContainer />
    </section>
  )
}

export default Registro
