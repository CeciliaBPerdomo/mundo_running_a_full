import React, { useEffect, useState } from "react";
import { carritosPendientesEnvio, actualizarEstadoCarrito } from "../../../axios/carrito-axios";

// Tabla
import ComprasRealizadasHeaders from "./ComprasRealizadasHeaders";
import ComprasRealizadasTable from "./ComprasRealizadasTable";
import ComprasRealizadasSkeleton from "./ComprasRealizadasSkeleton"
import ComprasRealizadasMobileList from "./ComprasRealizadasMobileList";

//  ui
import { mensaje } from "../../UI/Toast/mensaje";
import { ToastContainer } from "react-toastify";
import Pagination from "../../UI/Pagination/Pagination";
import Loader from "../../UI/Loader/Loader";
import { paginate } from "../../../helpers/pagination/paginate";

const PAGE_SIZE = 6;

const ComprasRealizadas = () => {
  const [carritos, setCarritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPendientesEnvio = async () => {
      try {
        const resp = await carritosPendientesEnvio();
        setCarritos(resp?.carritos || []);
        setPage(0);
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

  const { pageItems: carritosPagina } = paginate(carritos, page, PAGE_SIZE);

  useEffect(() => {
    const maxPage = Math.max(Math.ceil(carritos.length / PAGE_SIZE) - 1, 0);
    if (page > maxPage) setPage(maxPage);
  }, [carritos.length, page]);

  return (
    <div className="w-full min-w-0">
      <h2 className="text-xl font-semibold text-[var(--color-titulos)] mb-4">
        Compras realizadas
      </h2>

      <p className="text-sm text-gray-600 mb-3">Pendientes de envío</p>

      {loading ? (
        <>
          <div className="hidden md:block">
            <ComprasRealizadasSkeleton />
          </div>

          <div className="flex justify-center py-8 md:hidden">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <ComprasRealizadasMobileList
            carritos={carritosPagina}
            onChangeEstado={onChangeEstado}
          />

          <div className="hidden md:block w-full overflow-x-auto bg-white rounded-2xl shadow border">
            <table className="w-full min-w-[760px] text-sm">
              <ComprasRealizadasHeaders />
              <ComprasRealizadasTable
                carritos={carritosPagina}
                onChangeEstado={onChangeEstado}
              />
            </table>
          </div>
        </>
      )}

      {!loading && (
        <Pagination
          page={page}
          pageSize={PAGE_SIZE}
          total={carritos.length}
          onPrev={() => setPage(p => Math.max(p - 1, 0))}
          onNext={() =>
            setPage(p =>
              (p + 1) * PAGE_SIZE < carritos.length ? p + 1 : p
            )
          }
          itemLabel="compra"
          itemLabelPlural="compras pendientes"
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default ComprasRealizadas;
