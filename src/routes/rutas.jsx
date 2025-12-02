import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import InicioSesion from '../components/Auth/InicioSesion/InicioSesion';
import Registro from "../components/Auth/Registro/Registro"
import Somos from '../pages/Somos/QuienesSomos';
import MasInfo from '../pages/Contacto/MasInfo';

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<InicioSesion />} />
            <Route path='/signup' element={<Registro /> } />
            <Route path='/quienes_somos' element={<Somos />} />
            <Route path='/contacto' element={<MasInfo />} />
        </Routes>
    )
}

export default Rutas;