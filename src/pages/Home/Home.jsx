import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { isTokenExpired } from "../../helpers/auth/TokenValido";
import { logout } from "../../redux/usuario/usuarioSlice";

// Secciones
import Hero from '../../components/Home/Hero/Hero'
import Productos from '../../components/Home/NuestrosProductos/Productos'
import Destacados from '../../components/Home/Destacados/Destacados'
import Servicios from "../../components/Home/Servicios/Servicios"
import Novedades from '../../components/Home/Novedades/Novedades'
import QuienesSomos from '../../components/Home/Somos/QuienesSomos'
import Clientes from '../../components/Home/Clientes/Clientes'
import Redes from '../../components/Home/Redes/Redes'
import Contacto from '../../components/Home/Contacto/Contacto'

// mensaje
import { mensaje } from "../../components/UI/Toast/mensaje"
import { ToastContainer } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && isTokenExpired(token)) {
      mensaje("⏳ Tu sesión expiró. Volvé a iniciar sesión.")
      dispatch(logout())
    }
  }, [dispatch]);

  return (
    <div>

      <Hero />
      <Productos />
      <Destacados />
      <Servicios />
      <Novedades />
      <QuienesSomos />
      <Clientes />
      <Redes />
      <Contacto />

      <ToastContainer />
    </div>
  )
}

export default Home