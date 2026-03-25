import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import {
  actualizarEstadoMensaje,
  getMensajes,
  getMensajesPorEstado,
} from "../../../axios/mensaje-axios";
import { paginate } from "../../../helpers/pagination/paginate";
import MensajesSkeleton from "./MensajesSkeleton";
import MensajesTable from "./MensajesTable";
import MensajesMobileList from "./MensajesMobileList";
import ModalBase from "../../UI/ModalEstado/ModalBase";
import Pagination from "../../UI/Pagination/Pagination";
import Loader from "../../UI/Loader/Loader";
import { mensaje } from "../../UI/Toast/mensaje";

const FILTROS_ESTADO = [
  "Todos",
  "Sin leer",
  "Leido",
  "Respondido",
  "Pendiente de responder",
  "Archivado",
];

const PAGE_SIZE = 6;

const Mensajes = () => {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [mensajeSeleccionado, setMensajeSeleccionado] = useState(null);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("Sin leer");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchMensajes = async () => {
      setLoading(true);

      try {
        const response =
          estadoSeleccionado === "Todos"
            ? await getMensajes()
            : await getMensajesPorEstado(estadoSeleccionado);

        setMensajes(response?.mensajes || []);
        setPage(0);
      } catch (error) {
        console.error(error);
        setMensajes([]);
        setPage(0);
        mensaje(error.message || "No se pudieron cargar los mensajes.");
      } finally {
        setLoading(false);
      }
    };

    fetchMensajes();
  }, [estadoSeleccionado]);

  const handleEstadoChange = async (mensajeId, nuevoEstado) => {
    const mensajesPrevios = mensajes;

    setUpdatingId(mensajeId);
    setMensajes((currentMensajes) =>
      currentMensajes.map((item) =>
        item._id === mensajeId ? { ...item, estado: nuevoEstado } : item
      )
    );

    try {
      await actualizarEstadoMensaje(mensajeId, nuevoEstado);

      if (estadoSeleccionado !== "Todos" && estadoSeleccionado !== nuevoEstado) {
        setMensajes((currentMensajes) =>
          currentMensajes.filter((item) => item._id !== mensajeId)
        );
      }

      mensaje("Estado del mensaje actualizado correctamente.");
    } catch (error) {
      console.error(error);
      setMensajes(mensajesPrevios);
      mensaje(error.message || "No se pudo actualizar el estado.");
    } finally {
      setUpdatingId(null);
    }
  };

  const { pageItems: mensajesPagina } = paginate(mensajes, page, PAGE_SIZE);

  useEffect(() => {
    const maxPage = Math.max(Math.ceil(mensajes.length / PAGE_SIZE) - 1, 0);
    if (page > maxPage) setPage(maxPage);
  }, [mensajes.length, page]);

  return (
    <div className="w-full min-w-0">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-[var(--color-titulos)] mb-2">
          Mensajes recibidos
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            Administra los mensajes enviados desde el formulario de contacto.
          </p>

          <select
            value={estadoSeleccionado}
            onChange={(e) => setEstadoSeleccionado(e.target.value)}
            className="w-full sm:w-[240px] h-10 px-3 border border-[var(--border-gray-300)] rounded-md bg-[var(--color-background)] text-[var(--p-negro)] focus:outline-none focus:ring-2 focus:ring-[var(--color-background-third)]"
          >
            {FILTROS_ESTADO.map((estado) => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <>
          <div className="md:hidden flex justify-center py-8">
            <Loader />
          </div>

          <div className="hidden md:block">
            <MensajesSkeleton />
          </div>
        </>
      ) : (
        <>
          <MensajesMobileList
            mensajes={mensajesPagina}
            updatingId={updatingId}
            onEstadoChange={handleEstadoChange}
            onOpenMensaje={setMensajeSeleccionado}
          />

          <div className="hidden md:block w-full max-w-full overflow-x-auto rounded-2xl border bg-white shadow">
            <MensajesTable
              mensajes={mensajesPagina}
              updatingId={updatingId}
              onEstadoChange={handleEstadoChange}
              onOpenMensaje={setMensajeSeleccionado}
            />
          </div>
        </>
      )}

      {!loading && (
        <Pagination
          page={page}
          pageSize={PAGE_SIZE}
          total={mensajes.length}
          onPrev={() => setPage((currentPage) => Math.max(currentPage - 1, 0))}
          onNext={() =>
            setPage((currentPage) =>
              (currentPage + 1) * PAGE_SIZE < mensajes.length
                ? currentPage + 1
                : currentPage
            )
          }
          itemLabel="mensaje"
          itemLabelPlural="mensajes"
        />
      )}

      <ModalBase
        open={!!mensajeSeleccionado}
        title="Mensaje completo"
        subtitle={
          mensajeSeleccionado
            ? `${mensajeSeleccionado.nombre} ${mensajeSeleccionado.apellido} · ${mensajeSeleccionado.email}`
            : ""
        }
        onClose={() => setMensajeSeleccionado(null)}
        footer={
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMensajeSeleccionado(null)}
              className="px-4 py-2 rounded-md bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)] transition"
            >
              Cerrar
            </button>
          </div>
        }
      >
        <p className="text-sm leading-7 text-[var(--p-negro)] whitespace-pre-wrap">
          {mensajeSeleccionado?.mensaje || ""}
        </p>
      </ModalBase>

      <ToastContainer />
    </div>
  );
};

export default Mensajes;
