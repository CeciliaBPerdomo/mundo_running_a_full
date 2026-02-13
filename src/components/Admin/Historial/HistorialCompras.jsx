import React, { useEffect, useState } from 'react'
import { obtenerComprasFinalizadasAdmin } from '../../../axios/carrito-axios'
import ComprasFinalizadasTable from "./ComprasFinalizadasTable"
import ComprasFinalizadasTableSkeleton from "./ComprasFinalizadasTableSkeleton"

const HistorialCompras = () => {
  const [carritos, setCarritos] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCarritos = async () => {
    setLoading(true);
    setError("");
    try {
      const resp = await obtenerComprasFinalizadasAdmin()
      setCarritos(Array.isArray(resp) ? resp : []);
    } catch (error) {
      console.log(error)
      setError("No pudimos cargar el historial. Probá de nuevo.");
      setCarritos([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCarritos()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold text-[var(--color-titulos)] mb-4">Historial de compras</h2>
      <p>Compras finalizadas, clientes felices</p>

      {loading
        ? <ComprasFinalizadasTableSkeleton rows={6} />
        : <ComprasFinalizadasTable carritos={carritos} />
      }
    </div>
  )
}

export default HistorialCompras