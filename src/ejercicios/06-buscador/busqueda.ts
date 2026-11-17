/**
 * Filtra los textos que contienen la búsqueda, sin distinguir mayúsculas de
 * minúsculas.
 *
 * Función pura: no depende de React y devuelve un array nuevo (`filter`), sin
 * modificar el original. La búsqueda se normaliza una sola vez (sin espacios
 * en los extremos y en minúsculas) antes de recorrer la lista; cada texto se
 * pasa a minúsculas solo para comparar, por lo que el resultado conserva la
 * escritura original. Una búsqueda vacía coincide con todos los textos.
 *
 * @param textos - Lista de textos donde buscar (solo lectura).
 * @param busqueda - Texto ingresado por el usuario, tal como lo escribió.
 * @returns Una lista nueva con los textos que contienen la búsqueda, en el
 *   mismo orden que la original.
 */
export function filtrarPorTexto(
  textos: readonly string[],
  busqueda: string,
): string[] {
  const criterio = busqueda.trim().toLowerCase();
  return textos.filter((texto) => texto.toLowerCase().includes(criterio));
}

/**
 * Arma el texto que informa cuántos resultados hay, con singular y plural.
 *
 * @param cantidad - Cantidad de resultados encontrados.
 * @returns "1 resultado" si `cantidad` es 1; si no, "`cantidad` resultados".
 */
export function formatearCantidadResultados(cantidad: number): string {
  return cantidad === 1 ? "1 resultado" : `${cantidad} resultados`;
}
