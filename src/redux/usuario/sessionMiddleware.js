// redux > usuario > sessionMiddleware.js
import { logout, setUsuarioActual } from "./usuarioSlice"

let logoutTimer = null

export const sessionMiddleware = store => next => action => {
  // Dejamos pasar la acción primero
  const result = next(action)

  // Si se loguea un usuario
  if (action.type === setUsuarioActual.type) {
    const { expirationTime } = action.payload || {}

    if (expirationTime) {
      // Limpiamos timer anterior si existía
      if (logoutTimer) clearTimeout(logoutTimer)

      const tiempoRestante = expirationTime - Date.now()

      if (tiempoRestante > 0) {
        logoutTimer = setTimeout(() => {
          store.dispatch(logout())
        }, tiempoRestante)
      } else {
        store.dispatch(logout())
      }
    }
  }

  // Si se hace logout manual
  if (action.type === logout.type) {
    if (logoutTimer) clearTimeout(logoutTimer)
    localStorage.removeItem("token")
    localStorage.removeItem("expirationTime")
    localStorage.removeItem("usuario")
  }

  return result
}
