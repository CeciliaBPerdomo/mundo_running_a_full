import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';


// Formik
import { Formik } from 'formik';
import { Form as FormikForm } from 'formik';
import RegistroFields from "./RegistroFields";

import { registerValidationSchema } from "../../../formik/validationSchema"
import { registerInitialValues } from "../../../formik/initialValues"

// Alertas y loader
import { mensaje } from '../../UI/Toast/mensaje';
import { ToastContainer } from "react-toastify"
import Loader from '../../UI/Loader/Loader';

// Boton
import SubmitButton from "../../../components/UI/Form/BotonSubmit";


// Redux y axios
import { setUsuarioActual } from "../../../redux/usuario/usuarioSlice"
import { crearUsuario } from '../../../axios/registro-axios';

import useRedirect from "../../../hooks/useRedirect"
import AdminCodeModal from "./AdminCodeModal";

const Registro = () => {
  const [showModal, setShowModal] = useState(false)
  const [permitirRedirect, setPermitirRedirect] = useState(false)

  // para verificar si es administrador 
  const [codigoAdmin, setCodigoAdmin] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useRedirect("/", permitirRedirect)

  const handleRegister = async (values, actions) => {
    try {
      const user = await crearUsuario(values.nombre, values.email, values.password, values.celular, values.ciudad, codigoAdmin);

      if (!user) {
        mensaje("❌ Error al guardar tu usuario, intentá más tarde");
        return;
      }

      mensaje("✔️ Tú usuario ha sido creado con éxito, a la brevedad recibirás un código de verificación");

      dispatch(setUsuarioActual({ ...user.usuario, token: user.token }));

      setTimeout(() => setPermitirRedirect(true), 3000);
      actions.resetForm();

    } catch (error) {
      if (error.status === 400) {
        mensaje(`⚠️ ${error.message}. Te redirigimos al login`);
        setTimeout(() => navigate("/login"), 3500);
      } else {
        mensaje("❌ Ocurrió un error inesperado. Intentá más tarde.");
      }
    } finally {
      actions.setSubmitting(false);
    }
  };


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
            onSubmit={handleRegister}
          >
            {({ isSubmitting }) => (
              <FormikForm className="space-y-4">
                <RegistroFields setShowModal={setShowModal} />

                <SubmitButton loading={isSubmitting}>
                  Registrarme
                </SubmitButton>

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

      <AdminCodeModal
        show={showModal}
        onClose={() => setShowModal(false)}
        codigoAdmin={codigoAdmin}
        setCodigoAdmin={setCodigoAdmin}
        onConfirm={() => { setShowModal(false) }}
      />

      <ToastContainer />
    </section>
  )
}

export default Registro