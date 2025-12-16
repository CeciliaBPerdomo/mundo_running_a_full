import Footer from "./components/Footer/Footer"
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import Rutas from "./routes/rutas"

// 👇 Toast
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Layout>
        <Navbar />
        <Rutas />
        <Footer />
      </Layout>
    </>
  )
}

export default App
