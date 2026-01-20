import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { obtenerCarrito } from "../../axios/carrito-axios"

export const fetchCarrito = createAsyncThunk(
  "carrito/fetchCarrito",
  async (_, thunkAPI) => {
    try {
      return await obtenerCarrito()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data)
    }
  }
)

const carritoSlice = createSlice({
  name: "carrito",
  initialState: {
    carritoActual: null,
    loading: false,
    error: null
  },
  reducers: {
    limpiarCarrito: (state) => {
      state.carritoActual = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarrito.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCarrito.fulfilled, (state, action) => {
        state.carritoActual = action.payload
        state.loading = false
      })
      .addCase(fetchCarrito.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { limpiarCarrito } = carritoSlice.actions
export default carritoSlice.reducer
