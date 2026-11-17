/**
 * Indica si un producto está agotado.
 *
 * Función pura: es la única definición de "sin stock" del ejercicio. La usan
 * tanto el texto del stock como la clase modificadora de la tarjeta, así la
 * regla no se repite en dos lugares.
 *
 * @param stock - Unidades disponibles.
 * @returns `true` si no quedan unidades (`stock === 0`); si no, `false`.
 */
export function estaSinStock(stock: number): boolean {
  return stock === 0;
}

/**
 * Arma el texto que informa el stock de un producto.
 *
 * @param stock - Unidades disponibles.
 * @returns "Sin stock" si el producto está agotado; si no, "Stock: `stock`".
 */
export function formatearStock(stock: number): string {
  return estaSinStock(stock) ? "Sin stock" : `Stock: ${stock}`;
}
