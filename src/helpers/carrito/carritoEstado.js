export const ESTADO_COLOR = {
    "pendiente de pago": "text-yellow-600",
    "pendiente de envio": "text-orange-600",
    enviado: "text-green-600",
    cancelado: "text-red-600",
};


export const getEstadoColor = (estado) => {
  return ESTADO_COLOR[estado] || "text-gray-600";
};
