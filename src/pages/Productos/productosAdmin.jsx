import React, { useEffect, useState } from "react";
import ListaProductosAdmin from "../../components/Productos/ListaProductosAdmin";
import { getProductos } from "../../axios/productos-axios";
import ModalProducto from "../../components/Productos/ModalProducto";
import { mensaje } from "../../components/UI/Toast/mensaje";
import { ToastContainer } from "react-toastify";
import BuscadorProductos from "../../components/UI/Buscador/BuscadorProductos";
import Pagination from "../../components/UI/Pagination/Pagination"

const PAGE_SIZE = 10;

const ProductosAdmin = () => {
    const [productosMock, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)  // Modal de agregar / modificar productos
    const [busqueda, setBusqueda] = useState("")
    const [categoria, setCategoria] = useState("todas")
    const [productosOriginales, setProductosOriginales] = useState([])
    const [page, setPage] = useState(0)

    const cargarProductos = async () => {
        try {
            const data = await getProductos();
            const productos = data.productos || data
            setProductosOriginales(productos)
            setProductos(productos)
            setPage(0)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarProductos()
    }, [])

    const productosFiltrados = productosMock.filter((producto) =>
        producto.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    );

    const productosFiltradosCategorias = (categoriaSeleccionada) => {
        setCategoria(categoriaSeleccionada)
        setPage(0)

        if (categoriaSeleccionada === "todas") {
            setProductos(productosOriginales)
            return
        }

        const filtrados = productosOriginales.filter(
            (p) => p.categoria?.toLowerCase() === categoriaSeleccionada
        );

        setProductos(filtrados)
    }

    // paginación
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const productosPaginados = productosMock.slice(start, end)

    if (loading) {
        return (
            <p className="text-center text-gray-500">
                Cargando productos…
            </p>
        );
    }

    return (
        <div className="w-full">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-semibold text-[var(--color-titulos)] text-center sm:text-left">
                    Gestión de productos 📦
                </h2>


                <button className="w-full sm:w-auto px-4 py-3 sm:py-2 bg-[var(--botones-rojos)] text-[var(--p-blanco)] rounded-md hover:opacity-90 transition" onClick={() => setOpenModal(true)}>
                    + Agregar producto
                </button>
            </div>

            {/* Buscador + filtro */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/2 ml-0">

                    <BuscadorProductos
                        value={busqueda}
                        onChange={(val) => {
                            setBusqueda(val);
                            setPage(0)
                        }}
                        onSubmit={() => {
                            if (busqueda === "") cargarProductos();
                            setProductos(productosFiltrados);
                            setPage(0)
                        }}
                    />
                </div>

                <div className="w-full md:w-1/4 md:ml-auto">
                    <select
                        value={categoria}
                        onChange={(e) => productosFiltradosCategorias(e.target.value)}
                        className="w-full h-10 px-4 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)] focus:outline-none focus:ring-2 text-[var(--p-negro)] focus:ring-[var(--color-background-third)]"
                    >
                        <option value="todas">Todas las categorías</option>
                        <option value="running">Running</option>
                        <option value="ciclismo">Ciclismo</option>
                        <option value="natacion">Natación</option>
                    </select>
                </div>
            </div>

            {openModal && (
                <ModalProducto
                    onClose={() => setOpenModal(false)}
                    titulo="Agregar producto"
                    onSuccess={() => {
                        mensaje("✔️ Tú producto ha sido guardado con éxito total");
                        setOpenModal(false);
                        cargarProductos();
                    }}
                />
            )}

            {/* Tabla */}
            <div className="w-full overflow-x-auto">
                <ListaProductosAdmin productos={productosPaginados} cargarProductos={cargarProductos} />
            </div>

            {/* Paginación */}
            <Pagination
                page={page}
                pageSize={PAGE_SIZE}
                total={productosMock.length}
                onPrev={() => setPage((p) => Math.max(p - 1, 0))}
                onNext={() =>
                    setPage((p) =>
                        (p + 1) * PAGE_SIZE < productosMock.length ? p + 1 : p
                    )
                }
                itemLabel="producto"
            />
            <ToastContainer />
        </div>
    );
};

export default ProductosAdmin;
