import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, redirectTo }) => {
    const { usuarioActual } = useSelector(state => state.usuario)
    return usuarioActual ? children : <Navigate to={redirectTo} />
}

export default ProtectedRoute