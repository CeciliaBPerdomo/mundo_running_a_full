import React, { useEffect, useState } from "react";
import { carritosPendientesEnvio, actualizarEstadoCarrito } from "../../../axios/carrito-axios";
import ComprasRealizadasHeaders from "./ComprasRealizadasHeaders";
import ComprasRealizadasTable from "./ComprasRealizadasTable";
import ComprasRealizadasSkeleton from "./ComprasRealizadasSkeleton"

import { mensaje } from "../../UI/Toast/mensaje";
import { ToastContainer } from "react-toastify";

const ComprasRealizadas = () => {
  const [carritos, setCarritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendientesEnvio = async () => {
      try {
        const resp = await carritosPendientesEnvio();
        setCarritos(resp?.carritos || []);
      } catch (e) {
        setCarritos([]);
        console.error(e)
      } finally {
        setLoading(false);
      }
    };

    fetchPendientesEnvio();
  }, []);

   const onChangeEstado = async (carritoId, nuevoEstado) => {
    const prev = carritos;
    setCarritos((list) => list.filter((c) => c._id !== carritoId));

    try {
      await actualizarEstadoCarrito(carritoId, nuevoEstado);
      mensaje("✅ Estado actualizado");
    } catch (e) {
      console.error(e);
      setCarritos(prev); 
      mensaje("❌ No se pudo actualizar el estado");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-[var(--color-titulos)] mb-4">
        Compras realizadas
      </h2>

      <p className="text-sm text-gray-600 mb-3">Pendientes de envío</p>

      <div className="overflow-x-auto bg-white rounded-2xl shadow border">
        {loading ? (
          <ComprasRealizadasSkeleton />
        ) : (
          <table className="min-w-full text-sm">
            <ComprasRealizadasHeaders />
            <ComprasRealizadasTable carritos={carritos} onChangeEstado={onChangeEstado} />
          </table>
        )}
      </div>
    </div>
  );
};

export default ComprasRealizadas;
