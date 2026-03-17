import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  obtenerFavoritos,
  agregarFavorito,
  eliminarFavorito
} from "../../axios/favoritos-axios";

/* =========================
   GET FAVORITOS
========================= */
export const fetchFavoritos = createAsyncThunk(
  "favoritos/fetchFavoritos",
  async (_, thunkAPI) => {
    try {
      return await obtenerFavoritos();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

/* =========================
   ADD FAVORITO
========================= */
export const addFavorito = createAsyncThunk(
  "favoritos/addFavorito",
  async (productoId, thunkAPI) => {
    try {
      await agregarFavorito(productoId);
      return productoId; // devolvemos id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

/* =========================
   REMOVE FAVORITO
========================= */
export const removeFavorito = createAsyncThunk(
  "favoritos/removeFavorito",
  async (productoId, thunkAPI) => {
    try {
      await eliminarFavorito(productoId);
      return productoId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const favoritosSlice = createSlice({
  name: "favoritos",
  initialState: {
    ids: [], 
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      /* GET */
      .addCase(fetchFavoritos.fulfilled, (state, action) => {
        state.ids = action.payload.map(
          fav => fav.productoId._id
        );
      })

      /* ADD */
      .addCase(addFavorito.fulfilled, (state, action) => {
        if (!state.ids.includes(action.payload)) {
          state.ids.push(action.payload);
        }
      })

      /* REMOVE */
      .addCase(removeFavorito.fulfilled, (state, action) => {
        state.ids = state.ids.filter(
          id => id !== action.payload
        );
      });
  }
});

export default favoritosSlice.reducer;