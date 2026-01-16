import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { FaEdit, FaCheckCircle } from "react-icons/fa"

import Dato from "../../Usuario/Datos"
import ModalEditarUsuario from '../../Usuario/ModalEditarUsuario'
import { mensaje } from "../../UI/Toast/mensaje"
import { ToastContainer } from 'react-toastify'
import ModalVerificarCodigo from '../../Usuario/ModalVerificarCodigo'

const DatosUsuario = () => {
  const usuario = useSelector((state) => state.usuario.usuarioActual)
  const [openModal, setOpenModal] = useState(false)
  const [openVerifyModal, setOpenVerifyModal] = useState(false)
  
  if (!usuario) {
    return (
      <p className="text-center py-20 text-gray-500">
        Cargando datos del usuario…
      </p>
    )
  }

  const handleEditClick = () => {
    if (!usuario.verified) {
      mensaje("Tenés que verificar tu cuenta para poder modificar tus datos")
      return
    }
    setOpenModal(true)
  }

  return (
    <section className="max-w-3xl mx-auto px-6">

      <h1 className="text-3xl font-semibold text-[var(--color-titulos)] mb-8">
        Mis datos
      </h1>

      <div className="bg-[var(--color-background)] border border-[var(--border-gray-300)] rounded-xl p-6 space-y-6 shadow-sm">

        {/* Dato */}
        <Dato label="Nombre" value={usuario.nombre} />
        <Dato label="Email" value={usuario.email} />
        <Dato label="Celular" value={usuario.celular} />
        <Dato label="Ciudad" value={usuario.ciudad} />

        {/* Acciones */}
        <div className="flex justify-end pt-4">
          <button onClick={handleEditClick} className="flex items-center gap-2 px-4 py-2 rounded-md border bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)]  transition">
            <FaEdit />
            Modificar datos
          </button>
        </div>

        {/* Estado verificación */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-gray-300)]">
          <div>
            <p className="text-sm text-[var(--text-gray-500)]">Estado de la cuenta</p>
            <p className={`font-medium ${usuario.verified ? "text-green-600" : "text-yellow-600"}`}>
              {usuario.verified ? "Cuenta verificada" : "Pendiente de verificación"}
            </p>
          </div>

          {!usuario.verified && (
            <button onClick={() => setOpenVerifyModal(true)} className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)] transition">
              <FaCheckCircle />
              Validar código
            </button>
          )}
        </div>
      </div>

      {openModal && (<ModalEditarUsuario usuario={usuario} onClose={() => setOpenModal(false)} /> )}
      {openVerifyModal && (<ModalVerificarCodigo onClose={() => setOpenVerifyModal(false)} /> )}

      <ToastContainer />
    </section>
  )
}
export default DatosUsuario