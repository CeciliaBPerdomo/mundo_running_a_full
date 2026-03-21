export const formatFecha = (fecha) => {
  if (!fecha) return "-";

  const parsedFecha = new Date(fecha);
  if (Number.isNaN(parsedFecha.getTime())) return "-";

  return new Intl.DateTimeFormat("es-UY", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(parsedFecha);
};

export const truncateMensaje = (texto) => {
  if (!texto) return "-";
  return texto.length > 50 ? `${texto.slice(0, 50)}...` : texto;
};
