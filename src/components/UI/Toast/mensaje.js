// components - UI - Toast - mensaje.js

import { toast } from 'react-toastify';

export function mensaje(mensaje) {
    toast(mensaje, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        enter: 'zoomIn',
        exit: 'zoomOut',
        appendPosition: true
    });
}
