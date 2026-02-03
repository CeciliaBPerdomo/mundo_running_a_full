import React from "react";

const pluralize = (n, one, many = `${one}s`) => (n === 1 ? one : many);

const Pagination = ({
  page,
  pageSize,
  total,
  onPrev,
  onNext,
  itemLabel = "item",        // "producto", "carrito", "usuario"
  itemLabelPlural,           // opcional: "carritos pendientes"
  showRange = true,          // por si querés ocultar el rango
}) => {
  const hasItems = total > 0;

  const start = hasItems ? page * pageSize + 1 : 0;
  const end = hasItems ? Math.min((page + 1) * pageSize, total) : 0;

  const label = itemLabelPlural
    ? (total === 1 ? itemLabel : itemLabelPlural)
    : pluralize(total, itemLabel);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-center">
      <button
        onClick={onPrev}
        disabled={page === 0 || !hasItems}
        className="w-full sm:w-auto text-[var(--p-blanco)] px-4 py-2 border border-[var(--bordes-botones-blanco)] rounded-md bg-[var(--botones-rojos)] hover:bg-[var(--botones-rojos-hover)] transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ← Anterior
      </button>

      <span className="text-sm text-gray-600">
        {showRange ? (
          <>
            Mostrando <strong>{start}</strong>–<strong>{end}</strong> de{" "}
            <strong>{total}</strong> {label}
          </>
        ) : (
          <>
            Total: <strong>{total}</strong> {label}
          </>
        )}
      </span>

      <button
        onClick={onNext}
        disabled={end >= total || !hasItems}
        className="w-full sm:w-auto text-[var(--p-blanco)] px-4 py-2 border border-[var(--bordes-botones-blanco)] rounded-md bg-[var(--botones-rojos)] hover:bg-[var(--botones-rojos-hover)] transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Siguiente →
      </button>
    </div>
  );
};

export default Pagination;
