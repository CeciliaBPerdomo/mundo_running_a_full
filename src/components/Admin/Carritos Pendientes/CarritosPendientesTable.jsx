import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EstadoCarrito from "./EstadoCarrito";
import { getEstadoColor } from "../../../helpers/carrito/carritoEstado";

const CarritosPendientesTable = ({ carritos, onChangeEstado }) => {
    const [carritoSeleccionado, setCarritoSeleccionado] = useState(null);

    return (
        <>
            <tbody>
                {carritos.length === 0 ? (
                    <tr className="border-t">
                        <td className="px-4 py-6 text-center text-[var(--text-gray-500)]" colSpan={5}>
                            No hay carritos pendientes de pago.
                        </td>
                    </tr>
                ) : (
                    carritos.map((carrito) => {
                        const usuario = carrito?.user?.nombre || "—";

                        // productos = suma de cantidades
                        const productos = (carrito?.items || []).reduce(
                            (acc, item) => acc + (item?.cantidad || 0),
                            0
                        );

                        const envio = carrito?.envio || {};
                        const envioText = `${envio?.nombre}: ${envio?.direccion || "—"}, ${envio?.ciudad || "—"}`;

                        const estado = carrito?.estado || "—";
                        const total = carrito?.total ?? 0;

                        return (
                            <tr key={carrito._id} className="border border-[var(--recuadro)] bg-[var(--color-background)] hover:bg-gray-50 transition">
                                <td className="px-4 py-3 text-[var(--p-negro)]">{usuario}</td>
                                <td className="px-4 py-3 text-[var(--p-negro)] text-center">{productos}</td>
                                <td className="px-4 py-3 text-[var(--p-negro)]">{envioText}</td>
                                <td className="px-4 py-3 text-right font-semibold text-[var(--p-negro)]"> u$s {total} </td>
                                <td className={`px-4 py-3 text-center font-semibold ${getEstadoColor(estado)}`}> {estado}</td>
                                <td className="px-4 py-3 text-center">
                                    <button
                                        onClick={() => setCarritoSeleccionado(carrito)}
                                        className="p-2 text-[var(--p-negro)] rounded-md border border-[var(--border-gray-300)] hover:bg-gray-100 transition"
                                    >
                                        <FaEdit />
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                )}

            </tbody>
            <EstadoCarrito
                carrito={carritoSeleccionado}
                onClose={() => setCarritoSeleccionado(null)}
                onConfirm={(nuevoEstado) => {
                    if (!carritoSeleccionado) return;
                    onChangeEstado(carritoSeleccionado._id, nuevoEstado);
                    setCarritoSeleccionado(null);
                }}
            />
        </>
    )
}

export default CarritosPendientesTable
