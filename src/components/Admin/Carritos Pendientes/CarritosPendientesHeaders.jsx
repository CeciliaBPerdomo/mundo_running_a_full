const CARRITOS_PENDIENTES_HEADERS = [
    { key: "usuario", label: "Usuario", className: "px-4 py-3 text-left" },
    { key: "productos", label: "Productos", className: "px-4 py-3 text-center" },
    { key: "envio", label: "Datos de envío", className: "px-4 py-3 text-left" },
    { key: "total", label: "Total", className: "px-4 py-3 text-right" },
    { key: "estado", label: "Estado", className: "px-4 py-3 text-center" },
];


export const CarritosPendientesHeaders = () => {
    return (
        <thead className="bg-[var(--color-background-third)] text-[var(--p-blanco)]">
            <tr>
                {CARRITOS_PENDIENTES_HEADERS.map((h) => (
                    <th key={h.key} className={h.className}>
                        {h.label}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default CarritosPendientesHeaders