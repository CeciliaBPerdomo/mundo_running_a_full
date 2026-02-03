import React, { useEffect, useState } from 'react'
import { carritosPendientesPago } from '../../../axios/carrito-axios'
import CarritosPendientesHeaders from './CarritosPendientesHeaders';
import CarritosPendientesTable from './CarritosPendientesTable';
import Pagination from "../../UI/Pagination/Pagination"
import CarritosPendientesSkeleton from './CarritosPendientesSkeleton';

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

    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const carritosPagina = carritos.slice(start, end);

    return (
        <div>
            <h1 className="text-3xl font-bold text-[var(--color-titulos)] mb-6 text-center">
                Hola, {nombre?.split(" ")[0]} ✨
            </h1>

            <h2 className="text-xl font-semibold text-[var(--color-titulos)] mb-4">Carritos Pendientes de pago</h2>

            <div className="overflow-x-auto bg-white rounded-2xl shadow border">
                {loading ? <CarritosPendientesSkeleton /> :
                    <table className="min-w-full text-sm">
                        <CarritosPendientesHeaders />
                        <CarritosPendientesTable carritos={carritosPagina} />
                    </table>
                }
            </div>

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