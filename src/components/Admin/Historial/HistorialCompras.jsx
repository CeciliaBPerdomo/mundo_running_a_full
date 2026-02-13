import React, { useEffect, useState } from 'react'
import { obtenerComprasFinalizadasAdmin } from '../../../axios/carrito-axios'
import ComprasFinalizadasTable from "./ComprasFinalizadasTable"
import ComprasFinalizadasTableSkeleton from "./ComprasFinalizadasTableSkeleton"
import Pagination from "../../UI/Pagination/Pagination";
import { paginate, prevPage, nextPage } from "../../../helpers/pagination/paginate";

const HistorialCompras = () => {
  const [carritos, setCarritos] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(0);
  const pageSize = 6;

  const fetchCarritos = async () => {
    setLoading(true);
    setError("");
    try {
      const resp = await obtenerComprasFinalizadasAdmin()
      setCarritos(Array.isArray(resp) ? resp : []);
      setPage(0);
    } catch (error) {
      console.log(error)
      setError("No pudimos cargar el historial. Probá de nuevo.");
      setCarritos([]);
    } finally {
      setLoading(false);
    }
  }

  const { pageItems } = paginate(carritos, page, pageSize);
  const onPrev = () => setPage((p) => prevPage(p));
  const onNext = () => setPage((p) => nextPage(p, carritos.length, pageSize));

  useEffect(() => {
    fetchCarritos()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold text-[var(--color-titulos)] mb-4">Historial de compras</h2>
      <p>Compras finalizadas, clientes felices</p>

      {loading
        ? <ComprasFinalizadasTableSkeleton rows={6} />
        : <ComprasFinalizadasTable carritos={pageItems} />
      }

      <Pagination
        page={page}
        pageSize={pageSize}
        total={carritos.length}
        onPrev={onPrev}
        onNext={onNext}
        itemLabel="carrito"
        itemLabelPlural="carritos"
      />
    </div>
  )
}

export default HistorialCompras