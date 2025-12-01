import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import InicioSesion from '../components/Auth/InicioSesion/InicioSesion';
import Registro from "../components/Auth/Registro/Registro"

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<InicioSesion />} />
            <Route path='/signup' element={<Registro /> } />
        </Routes>
    )
}

export default Rutas;