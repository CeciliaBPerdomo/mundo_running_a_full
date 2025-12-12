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
    toggleHiddenMenu
} = usuarioSlice.actions

export default usuarioSlice.reducer