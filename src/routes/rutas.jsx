import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import InicioSesion from '../components/Auth/InicioSesion/InicioSesion';
import Registro from "../components/Auth/Registro/Registro"
import Somos from '../pages/Somos/QuienesSomos';
import MasInfo from '../pages/Contacto/MasInfo';
import Services from '../pages/Servicios/Services';
import TiendaDeportiva from '../components/Tienda/TiendaDeportiva';
import PerfilUsuario from "../components/Auth/Perfil/PerfilUsuario"

// Ruta protegida
import ProtectedRoute from "../components/Auth/ProtectedRoutes/ProtectedRoute"
import NotFound from '../pages/NotFound/NotFound';
import TiendaCategoria from '../pages/Productos/TiendaCategoria';
import { Carrito } from '../pages/Carrito/Carrito';

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* Rutas de usuario  */}
            <Route path='/login' element={<InicioSesion />} />
            <Route path='/signup' element={<Registro />} />

            {/* Si esta logueado */}
            <Route
                path='/perfil'
                element={
                    <ProtectedRoute redirectTo={'/login'}>
                        <PerfilUsuario />
                    </ProtectedRoute>
                } />

            <Route path='/carrito'
                element={
                    <ProtectedRoute redirectTo={'/login'}>
                        <Carrito />
                    </ProtectedRoute>
                } />

            {/* Rutas de info */}
            <Route path='/quienes_somos' element={<Somos />} />
            <Route path='/contacto' element={<MasInfo />} />
            <Route path='/servicios' element={<Services />} />

            {/* Rutas de productos */}
            <Route path='/tienda_deportiva' element={<TiendaDeportiva />} />
            <Route path="/tienda/:categoria" element={<TiendaCategoria />} />

            {/* Pagina no encontrada */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Rutas;