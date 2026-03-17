import React, { useEffect, useState } from "react";
import { eliminarFavorito, obtenerFavoritos } from "../../axios/favoritos-axios";
import CardProductos from "../Carrito/CardProductos";

const MisFavoritos = ({ top = 80 }) => {

    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarFavoritos();
    }, []);

    const cargarFavoritos = async () => {
        try {
            const data = await obtenerFavoritos();

            const favoritosMapeados = data.map(fav => ({
                producto: fav.productoId,
                cantidad: 1,
                precio: fav.productoId.precio,
                favoritoId: fav._id
            }));

            setFavoritos(favoritosMapeados);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className={`mt-${top} text-center`}>
                Cargando favoritos...
            </div>
        );
    }

    const handleEliminarFavorito = async (item) => {
        await eliminarFavorito(item.producto._id)
        cargarFavoritos()
    }

    return (
       <div style={{ marginTop: `${top}px` }} className="mb-20 px-4 flex justify-center">

            {/* contenedor centrado */}
            <div className="w-full max-w-5xl">

                <h1 className="text-3xl font-bold text-[var(--color-titulos)] mb-8 text-center">
                    ✨ Mis favoritos
                </h1>

                {favoritos.length === 0 ? (
                    <p className="text-center text-gray-500">
                        Todavía no agregaste favoritos 👀
                    </p>
                ) : (
                    <div className={`grid gap-6 ${favoritos.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-1 md:grid-cols-2"}`}>
                        {favoritos.map((producto, index) => {
                            const esUltimoSolo = favoritos.length % 2 !== 0 && index === favoritos.length - 1;
                            return (
                                <div key={producto.favoritoId} className={`flex justify-center ${esUltimoSolo ? "md:col-span-2  " : ""}`}>
                                    <div className="w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 ">
                                        <CardProductos
                                            item={producto}
                                            mostrarCantidad={false}
                                            onEliminar={handleEliminarFavorito}
                                            bot={0}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                )}

            </div>
        </div>
    );
};

export default MisFavoritos;