import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useRedirect = (redirectTo) => {
    const navigate = useNavigate()
    const { usuarioActual } = useSelector(state => state.usuario)

    useEffect(() => {
        if (usuarioActual) {
            navigate(redirectTo)
        }
    }, [usuarioActual, navigate, redirectTo])
}

export default useRedirect