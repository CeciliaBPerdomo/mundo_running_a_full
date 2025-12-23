// redux > usuario > usuarioSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initial_state = {
    usuarioActual: null,
    hiddenMenu: true,
}

export const usuarioSlice = createSlice({
    name: "usuario",
    initialState: initial_state,
    reducers: {
        setUsuarioActual: (state, action) => {
            return {
                ...state,
                usuarioActual: action.payload,
            }
        },

        logout: (state) => {
            state.usuarioActual = null
            state.hiddenMenu = true
            localStorage.removeItem("token")
            localStorage.removeItem("usuario")
            localStorage.removeItem("expirationTime")
        },

        toggleHiddenMenu: (state) => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            }
        },
    }
})

export const {
    setUsuarioActual,
    logout,
    toggleHiddenMenu
} = usuarioSlice.actions

export default usuarioSlice.reducer