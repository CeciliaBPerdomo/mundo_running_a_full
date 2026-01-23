export const cantidadProductos = (items = []) =>
  items.reduce((acc, item) => acc + item.cantidad, 0);


export const contarProductosCarrito = (carrito) => {
  if (!carrito || !Array.isArray(carrito.items)) return 0

  return carrito.items.reduce(
    (total, item) => total + (item.cantidad || 0),
    0
  )
}
