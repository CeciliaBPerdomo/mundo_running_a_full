import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Redux
import { Provider } from 'react-redux';
import { persistor, store } from "./redux/store.js"
import { PersistGate } from 'redux-persist/integration/react';

// Estilos 
import ThemeProvider from "./redux/theme/ThemeProvider.js"
import { GlobalStyles } from "./styles/GlobalStyles.js"

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
             <GlobalStyles />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
)
