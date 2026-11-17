/**
 * Producto de la lista de compras.
 */
export interface ItemCompra {
  /** Identificador único del ítem; se usa como `key` al renderizar y para eliminarlo. */
  id: number;
  /** Nombre del producto tal como se muestra en la lista. */
  nombre: string;
}

/**
 * Agrega un ítem al final de la lista sin modificar la original.
 *
 * Función pura: no depende de React y devuelve un array nuevo (spread), lo
 * que cambia la referencia y permite que React detecte la actualización del
 * estado. El ítem llega ya armado (con su `id`); esta función no lo genera.
 *
 * @param lista - Lista actual (solo lectura).
 * @param nuevo - Ítem a agregar.
 * @returns Una lista nueva con los ítems originales y `nuevo` al final.
 */
export function agregarItem(
  lista: readonly ItemCompra[],
  nuevo: ItemCompra,
): ItemCompra[] {
  return [...lista, nuevo];
}

/**
 * Quita de la lista el ítem con el `id` indicado sin modificar la original.
 *
 * Función pura: usa `filter`, que siempre devuelve un array nuevo. Si ningún
 * ítem tiene ese `id`, devuelve una copia con los mismos elementos.
 *
 * @param lista - Lista actual (solo lectura).
 * @param id - Identificador del ítem a eliminar.
 * @returns Una lista nueva sin el ítem con ese `id`.
 */
export function eliminarItem(
  lista: readonly ItemCompra[],
  id: number,
): ItemCompra[] {
  return lista.filter((i) => i.id !== id);
}
