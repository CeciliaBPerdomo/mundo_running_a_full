import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { mensaje } from '../../../components/UI/Toast/mensaje'

const ProtectedRoute = ({ children, redirectTo }) => {
    const { usuarioActual } = useSelector(state => state.usuario)

    useEffect(() => {
        if (!usuarioActual) {
            mensaje("Tenés que iniciar sesión para poder continuar 🔐")
        }
    }, [usuarioActual])

    return usuarioActual ? children : <Navigate to={redirectTo} />
}

export default ProtectedRoute