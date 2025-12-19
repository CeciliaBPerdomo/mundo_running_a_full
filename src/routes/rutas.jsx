import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import InicioSesion from '../components/Auth/InicioSesion/InicioSesion';
import Registro from "../components/Auth/Registro/Registro"
import Somos from '../pages/Somos/QuienesSomos';
import MasInfo from '../pages/Contacto/MasInfo';
import Verificacion from '../components/Auth/VerificacionCodigo/Verificacion';

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<InicioSesion />} />
            <Route path='/signup' element={<Registro /> } />
            <Route path='verify-code' element={<Verificacion />} />
            <Route path='/quienes_somos' element={<Somos />} />
            <Route path='/contacto' element={<MasInfo />} />
        </Routes>
    )
}

export default Rutas;