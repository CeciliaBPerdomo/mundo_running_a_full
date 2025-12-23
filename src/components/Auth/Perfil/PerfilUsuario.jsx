import React from 'react'
import { useSelector } from "react-redux";

// Navbar segun perfil
import PerfilUserSidebar from './Menus/PerfilUserSideBar'
import PerfilAdminSidebar from './Menus/PerfilAdminSidebar'

const PerfilUsuario = () => {
   const usuarioActual = useSelector((state) => state.usuario.usuarioActual)

  const rol = usuarioActual?.rol
   const nombre = usuarioActual?.nombre

  return (
    <div className="min-h-screen pt-[60px] flex">

      {/* Sidebar según rol */}
      {rol === "admin" ? <PerfilAdminSidebar /> : <PerfilUserSidebar />}

      <main className="flex-1 ml-64 px-10 py-16 relative">
        <h1 className="text-3xl font-bold text-[var(--color-titulos)] mb-6">
          Hola, {nombre?.split(" ")[0]} ✨
        </h1>

        <p className="text-[var(--p-negro)]">
          Acá van mis datos 👀 👀 (modo zen por ahora)
        </p>

      </main>

    </div>
  )
}

export default PerfilUsuario