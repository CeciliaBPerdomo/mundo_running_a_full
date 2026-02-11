import React, { useState } from 'react'
import { useSelector } from "react-redux";

// Navbar segun perfil
import PerfilUserSidebar from './Menus/PerfilUserSideBar'
import PerfilAdminSidebar from './Menus/PerfilAdminSidebar'

import Problemas from '../../../pages/Problemas/Problemas';
import ProductosAdmin from '../../../pages/Productos/productosAdmin';
import DatosUsuario from './DatosUsuario';
import { Carrito } from '../../../pages/Carrito/Carrito';
import Compras from '../../Usuario/Compras';
import CarritosPendientes from '../../Admin/Carritos Pendientes/CarritosPendientes';
import ComprasRealizadas from '../../Admin/Compras/ComprasRealizadas';
import HistorialCompras from '../../Admin/Historial/HistorialCompras';

// token
import { useAutoLogoutOnTokenExpiry } from "../../../hooks/useAutoLogoutOnTokenExpiry";

const PerfilUsuario = () => {
  const [vista, setVista] = useState("datos");
  const [openSidebar, setOpenSidebar] = useState(false);
  const usuarioActual = useSelector((state) => state.usuario.usuarioActual)

  const rol = usuarioActual?.rol
  const nombre = usuarioActual?.nombre

  useAutoLogoutOnTokenExpiry(30_000)

  return (
    <div className="min-h-screen pt-[60px] flex">

      {rol === "admin" ? (
        <PerfilAdminSidebar vista={vista} setVista={setVista} open={openSidebar} setOpen={setOpenSidebar} />
      ) : (
        <PerfilUserSidebar vista={vista} setVista={setVista} open={openSidebar} setOpen={setOpenSidebar} />
      )}

      <main className="flex-1 px-4 py-6 sm:px-10 sm:py-8 sm:ml-8 relative">
        <button className="md:hidden fixed top-[70px] left-4 z-50 p-2 rounded-md border border-[var(--border-gray-300)] text-[var(--p-negro)] bg-[var(--color-background)]" onClick={() => setOpenSidebar(!openSidebar)} >
          ☰
        </button>

        {vista !== "carrito" && (
          <h1 className="text-3xl font-bold text-[var(--color-titulos)] mb-6 text-center">
            Hola, {nombre?.split(" ")[0]} ✨
          </h1>
        )}

        {vista === "datos" && <DatosUsuario />}
        {vista === "productos" && <ProductosAdmin />}
        {vista === "problemas" && <Problemas />}

        {vista === "carrito" && (
          rol === "admin"
            ? <CarritosPendientes nombre={nombre} />
            : <Carrito margen={5} />
        )}
        {vista === "favoritos" && <div>Favoritos (estamos trabajando para usted)</div>}

        {vista === "compras" && (
          rol === "admin"
            ? <ComprasRealizadas />
            : <Compras />
        )}

        {vista === "historial" && (<HistorialCompras />)}
      </main>

    </div>
  )
}

export default PerfilUsuario