import React, { useState } from 'react'
import { useSelector } from "react-redux";

// Navbar segun perfil
import PerfilUserSidebar from './Menus/PerfilUserSideBar'
import PerfilAdminSidebar from './Menus/PerfilAdminSidebar'


import Problemas from '../../../pages/Problemas/Problemas';
import ProductosAdmin from '../../../pages/Productos/productosAdmin';
import DatosUsuario from './DatosUsuario';

const PerfilUsuario = () => {
  const [vista, setVista] = useState("datos");
  const usuarioActual = useSelector((state) => state.usuario.usuarioActual)

  const rol = usuarioActual?.rol
  const nombre = usuarioActual?.nombre

  return (
    <div className="min-h-screen pt-[60px] flex">

      {/* Sidebar según rol */}
      {rol === "admin" ?
        <PerfilAdminSidebar setVista={setVista} vista={vista} /> :
        <PerfilUserSidebar setVista={setVista} vista={vista} />
      }

      <main className="flex-1 ml-8 px-10 py-8 relative">
        <h1 className="text-3xl font-bold text-[var(--color-titulos)] mb-6 text-center">
          Hola, {nombre?.split(" ")[0]} ✨
        </h1>

        { vista === "datos" && <DatosUsuario /> }
        { vista === "productos" && <ProductosAdmin /> }
        { vista === "problemas" && <Problemas /> }
      </main>

    </div>
  )
}

export default PerfilUsuario