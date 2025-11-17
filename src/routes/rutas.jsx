import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Rutas;