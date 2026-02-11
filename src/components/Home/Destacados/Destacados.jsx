import React, { useEffect, useState } from "react";
import CardProducto from "../../Tienda/CardProducto";
import { getProductosDestacados } from "../../../axios/productos-axios";
import CardProductoSkeleton from "./CardProductoSkeleton";

const Destacados = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestacados = async () => {
      try {
        const data = await getProductosDestacados();
        setProductos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestacados();
  }, []);

  return (
    <section className="w-full py-12">
      <h2 className="text-[45px] font-bold text-center text-[var(--color-titulos)]">
        DESTACADOS
      </h2>

      <p className="text-center mb-4 text-[var(--p-gris-claro)]">Nuestros últimos ingresos</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 justify-items-center">
        {loading ? <CardProductoSkeleton /> :
          productos.map((producto) => (
            <div key={producto._id} className="w-[290px] h-[365px] [&>div]:h-full [&>div]:flex [&>div]:flex-col">
              <CardProducto producto={producto} />
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Destacados;
