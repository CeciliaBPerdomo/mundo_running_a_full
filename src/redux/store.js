import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Persistencia
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/lib/persistStore";


// Importa tu reducer
import themeReducer from "./theme/themeSlice"

const reducers = combineReducers({
    theme: themeReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["theme"] // Lo que realmente quiero peristir
}


// Persiste la info, le paso la configuración y que quiero que persista.
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    // para interactuar con la api externa
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // redux no guardaba bien los datos serializable
    })
})


export const persistor = persistStore(store)