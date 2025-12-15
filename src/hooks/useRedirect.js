import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useRedirect = (redirectTo, enabled = true) => {
  const navigate = useNavigate()
  const { usuarioActual } = useSelector(state => state.usuario)

  useEffect(() => {
    if (
      enabled &&
      usuarioActual &&
      Object.keys(usuarioActual).length > 0
    ) {
      navigate(redirectTo)
    }
  }, [usuarioActual, navigate, redirectTo, enabled])
}

export default useRedirect
