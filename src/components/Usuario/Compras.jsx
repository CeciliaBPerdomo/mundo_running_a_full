import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import { obtenerHistorialCarritos } from "../../axios/carrito-axios";
import { cantidadProductos } from "../../helpers/compras/compras";
import { paginate } from "../../helpers/pagination/paginate";
import Pagination from "../UI/Pagination/Pagination";
import Loader from "../UI/Loader/Loader";
import MisComprasMobileList from "./MisComprasMobileList";

const PAGE_SIZE = 6;

const MisCompras = () => {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const estadoColor = {
    "pendiente de pago": "text-yellow-600",
    pagado: "text-green-600",
    cancelado: "text-red-600",
  };

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const data = await obtenerHistorialCarritos();
        setCompras(data);
        setPage(0);
      } catch (error) {
        console.error("Error al traer compras", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompras();
  }, []);

  const { pageItems: comprasPagina } = paginate(compras, page, PAGE_SIZE);

  useEffect(() => {
    const maxPage = Math.max(Math.ceil(compras.length / PAGE_SIZE) - 1, 0);
    if (page > maxPage) setPage(maxPage);
  }, [compras.length, page]);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {compras.length > 0 ? (
        <div className="w-full min-w-0">
          <h1 className="mb-6 text-center text-3xl font-bold text-[var(--color-titulos)]">
            Tus compras
          </h1>

          <MisComprasMobileList compras={comprasPagina} estadoColor={estadoColor} />

          <div className="hidden overflow-x-auto rounded-2xl border bg-white shadow md:block">
            <table className="min-w-full text-sm">
              <thead className="bg-[var(--color-background-third)] text-[var(--p-blanco)]">
                <tr>
                  <th className="px-4 py-3 text-left">Fecha pedido</th>
                  <th className="px-4 py-3 text-center">Cant. de productos</th>
                  <th className="px-4 py-3 text-left">Dirección de envío</th>
                  <th className="px-4 py-3 text-right">Total</th>
                  <th className="px-4 py-3 text-center">Estado</th>
                </tr>
              </thead>

              <tbody>
                {comprasPagina.map((carrito) => (
                  <tr
                    key={carrito._id}
                    className="border-t transition hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      {new Date(carrito.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-4 py-3 text-center">
                      {cantidadProductos(carrito.items)}
                    </td>

                    <td className="px-4 py-3">
                      {carrito.envio?.direccion || "-"},{" "}
                      {carrito.envio?.ciudad || "-"}
                    </td>

                    <td className="px-4 py-3 text-right font-semibold">
                      u$s {carrito.total}
                    </td>

                    <td
                      className={`px-4 py-3 text-center font-semibold ${estadoColor[carrito.estado]}`}
                    >
                      {carrito.estado}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            page={page}
            pageSize={PAGE_SIZE}
            total={compras.length}
            onPrev={() => setPage((currentPage) => Math.max(currentPage - 1, 0))}
            onNext={() =>
              setPage((currentPage) =>
                (currentPage + 1) * PAGE_SIZE < compras.length
                  ? currentPage + 1
                  : currentPage
              )
            }
            itemLabel="compra"
            itemLabelPlural="compras"
          />
        </div>
      ) : (
        <div>
          <p className="text-center text-[var(--p-negro)]">
            Aún no haz realizado ninguna compra.
          </p>
          <p className="text-center text-[var(--p-negro)]">
            ¿Qué estás esperando?
          </p>
          <div className="mt-5 flex justify-center">
            <Link to="/tienda_deportiva">
              <button className="flex items-center gap-2 rounded-md bg-[var(--botones-rojos)] px-4 py-2 text-[var(--p-blanco)] transition hover:bg-[var(--botones-rojos-hover)]">
                Visitar tienda
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MisCompras;
