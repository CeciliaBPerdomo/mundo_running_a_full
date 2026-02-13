import React, { useEffect, useState } from "react";
import { obtenerHistorialCarritos } from "../../axios/carrito-axios";
import { cantidadProductos } from "../../helpers/compras/compras";
import { Link } from "react-router";


const MisCompras = () => {
    const [compras, setCompras] = useState([])
    const [loading, setLoading] = useState(true);

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
            } catch (error) {
                console.error("Error al traer compras", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompras();
    }, []);

    if (loading) {
        return <p className="text-center py-10">
            Cargando compras…
        </p>;
    }

    return (
        <>
            {compras.length > 0 ?
                <div>
                    <h1 className="text-3xl font-bold text-[var(--color-titulos)] mb-6 text-center">
                        Tus compras
                    </h1>
                    <div className="overflow-x-auto bg-white rounded-2xl shadow border">
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
                                {compras.map((carrito) => (
                                    <tr
                                        key={carrito._id}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="px-4 py-3">
                                            {new Date(carrito.createdAt).toLocaleDateString()}
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            {cantidadProductos(carrito.items)}
                                        </td>


                                        <td className="px-4 py-3">
                                            {carrito.envio?.direccion || "—"}, {carrito.envio?.ciudad || "—"}
                                        </td>

                                        <td className="px-4 py-3 text-right font-semibold">
                                            u$s {carrito.total}
                                        </td>

                                        <td className={`px-4 py-3 text-center font-semibold ${estadoColor[carrito.estado]}`}>
                                            {carrito.estado}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                :
                <div>
                    <p className="text-center">Aún no haz realizado ninguna compra.</p>
                    <p className="text-center">¿Qué estás esperando?</p>
                    <div className="flex justify-center mt-5">
                        <Link to="/tienda_deportiva">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--botones-rojos)] text-[var(--p-blanco)] hover:bg-[var(--botones-rojos-hover)] transition">Visitar tienda</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
};

export default MisCompras;
