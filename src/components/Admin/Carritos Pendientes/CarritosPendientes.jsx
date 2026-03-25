import React, { useEffect, useState } from 'react'
import { actualizarEstadoCarrito, carritosPendientesPago } from '../../../axios/carrito-axios'
import CarritosPendientesHeaders from './CarritosPendientesHeaders';
import CarritosPendientesTable from './CarritosPendientesTable';
import CarritosPendientesMobileList from './CarritosPendientesMobileList';
import Pagination from "../../UI/Pagination/Pagination"
import CarritosPendientesSkeleton from './CarritosPendientesSkeleton';
import { mensaje } from "../../UI/Toast/mensaje";
import { paginate } from "../../../helpers/pagination/paginate";

const PAGE_SIZE = 10

const CarritosPendientes = ({ nombre }) => {
    const [carritos, setCarritos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0)

    useEffect(() => {
        const carritosPendientesDePago = async () => {
            try {
                const resp = await carritosPendientesPago()
                setCarritos(resp?.carritos || []);
                console.log(resp)
            } catch (error) {
                console.log(error)
                setCarritos([]);
            } finally {
                setLoading(false);
            }
        }
        carritosPendientesDePago()
    }, [])

    const cambiarEstado = async (carritoId, nuevoEstado) => {
        const prev = carritos;

        setCarritos((list) =>
            list.map((c) =>
                c._id === carritoId ? { ...c, estado: nuevoEstado } : c
            )
        );

        try {
            await actualizarEstadoCarrito(carritoId, nuevoEstado);
            mensaje("✅ Estado actualizado");
        } catch (error) {
            setCarritos(prev); // rollback
            mensaje("❌ No se pudo actualizar el estado");
            console.error(error)
        }
    };

    const { pageItems: carritosPagina } = paginate(carritos, page, PAGE_SIZE);

    useEffect(() => {
        const maxPage = Math.max(Math.ceil(carritos.length / PAGE_SIZE) - 1, 0);
        if (page > maxPage) setPage(maxPage);
    }, [carritos.length, page]);


    return (
        <div className="w-full min-w-0">
            <h1 className="text-3xl font-bold text-[var(--color-titulos)] mb-6 text-center">
                Hola, {nombre?.split(" ")[0]} ✨
            </h1>

            <h2 className="text-xl font-semibold text-[var(--color-titulos)] mb-4">Carritos Pendientes de pago</h2>

            {loading ? (
                <CarritosPendientesSkeleton />
            ) : (
                <>
                    <CarritosPendientesMobileList
                        carritos={carritosPagina}
                        onChangeEstado={cambiarEstado}
                    />

                    <div className="hidden md:block w-full overflow-x-auto bg-white rounded-2xl shadow border">
                        <table className="w-full min-w-[760px] text-sm">
                            <CarritosPendientesHeaders />
                            <CarritosPendientesTable
                                carritos={carritosPagina}
                                onChangeEstado={cambiarEstado}
                            />
                        </table>
                    </div>
                </>
            )}

            {/* Paginación  */}
            {!loading && (
                <Pagination
                    page={page}
                    pageSize={PAGE_SIZE}
                    total={carritos.length}
                    onPrev={() => setPage(p => Math.max(p - 1, 0))}
                    onNext={() => setPage(p => ((p + 1) * PAGE_SIZE < carritos.length ? p + 1 : p))}
                    itemLabel="carrito"
                    itemLabelPlural="carritos pendientes"
                />
            )}
        </div>
    )
}

export default CarritosPendientes
