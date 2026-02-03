import React from 'react'

const CarritosPendientesTable = ({ carritos }) => {
    const estadoColor = {
        "pendiente de pago": "text-yellow-600",
        pagado: "text-green-600",
        cancelado: "text-red-600",
    };

    return (
        <tbody>
            {carritos.length === 0 ? (
                <tr className="border-t">
                    <td className="px-4 py-6 text-center text-gray-500" colSpan={5}>
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
                        <tr key={carrito._id} className="border-t hover:bg-gray-50 transition">
                            <td className="px-4 py-3">{usuario}</td>
                            <td className="px-4 py-3 text-center">{productos}</td>
                            <td className="px-4 py-3">{envioText}</td>
                            <td className="px-4 py-3 text-right font-semibold"> u$s {total} </td>
                            <td className={`px-4 py-3 text-center font-semibold ${estadoColor[estado] || "text-gray-600"}`}> {estado} </td>
                        </tr>
                    );
                })
            )}
        </tbody>
    )
}

export default CarritosPendientesTable