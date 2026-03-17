// redux > store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Persistencia
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/lib/persistStore";

// Reducers
// Dark o light
import themeReducer from "./theme/themeSlice"
// Usuarios
import usuarioReducer from "./usuario/usuarioSlice"
import { sessionMiddleware } from "./usuario/sessionMiddleware" //token
import carritoReducer from "./carrito/carritoSlice"
import favoritosReducer from "./favorito/favoritosSlice";

const reducers = combineReducers({
    theme: themeReducer,
    usuario: usuarioReducer,
    carrito: carritoReducer,
    favoritos: favoritosReducer
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["usuario", "theme", "carrito", "favoritos"] // Lo que realmente quiero peristir
}


// Persiste la info, le paso la configuración y que quiero que persista.
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    // para interactuar con la api externa
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // redux no guardaba bien los datos serializable
    }).concat(sessionMiddleware),
})


export const persistor = persistStore(store)