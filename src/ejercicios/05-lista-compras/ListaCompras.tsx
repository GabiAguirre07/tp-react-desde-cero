import { useState, useId } from "react";
import { type ItemCompra, agregarItem, eliminarItem } from "./lista";
import { ItemLista } from "./ItemLista";

/** Texto de ayuda del input mientras está vacío. */
const PLACEHOLDER_PRODUCTO = "Ej: yerba";

/** Mensaje que se muestra cuando la lista no tiene ítems. */
const MENSAJE_LISTA_VACIA = "No hay nada para comprar";

/**
 * Lista de compras: permite agregar y eliminar productos.
 *
 * Guarda dos estados:
 * - `items`: los productos agregados.
 * - `texto`: lo escrito en el input, tal como lo escribe el usuario.
 * Todo lo demás es derivado y se recalcula en cada render:
 * - `textoLimpio`: `texto` sin espacios en los extremos.
 * - `puedeAgregar`: hay texto no vacío; habilita el botón "Agregar".
 * - `estaVacia`: no hay ítems; muestra {@link MENSAJE_LISTA_VACIA}.
 *
 * El alta se hace con un formulario, por lo que también funciona con Enter.
 * La lista nunca se modifica en el lugar: se usan las funciones puras de
 * `lista.ts`, que devuelven arrays nuevos. Cada ítem se renderiza con
 * {@link ItemLista} y se identifica con su `id` como `key`.
 *
 * @returns Un contenedor con el formulario y la lista (o el mensaje de lista vacía).
 */
export function ListaCompras() {
  const [items, setItems] = useState<ItemCompra[]>([]);
  const [texto, setTexto] = useState("");
  const idInput = useId();

  const textoLimpio = texto.trim();
  const puedeAgregar = textoLimpio !== "";
  const estaVacia = items.length === 0;

  /**
   * Sincroniza el estado `texto` con lo escrito en el input.
   *
   * No usa la forma funcional del setter porque el valor nuevo proviene del
   * input y no depende del valor anterior del estado.
   *
   * @param evento - Evento de cambio del input de producto.
   */
  function handleCambioTexto(evento: React.ChangeEvent<HTMLInputElement>) {
    setTexto(evento.target.value);
  }

  /**
   * Agrega a la lista el producto escrito y limpia el input.
   *
   * Cancela el envío nativo del formulario (que recargaría la página) y no
   * hace nada si el texto está vacío o solo tiene espacios. El `id` se genera
   * con `Date.now()` fuera del setter para que la función del setter siga
   * siendo pura. Usa la forma funcional de `setItems` porque la lista nueva
   * depende de la anterior.
   *
   * @param evento - Evento de envío del formulario.
   */
  function handleAgregar(evento: React.SubmitEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (!puedeAgregar) return;
    const nuevoItem: ItemCompra = { id: Date.now(), nombre: textoLimpio };
    setItems((anterior) => agregarItem(anterior, nuevoItem));
    setTexto("");
  }

  /**
   * Elimina de la lista el ítem con el `id` indicado.
   *
   * Usa la forma funcional de `setItems` porque la lista nueva depende de la
   * anterior.
   *
   * @param id - Identificador del ítem a eliminar.
   */
  function handleEliminar(id: number) {
    setItems((anterior) => eliminarItem(anterior, id));
  }

  return (
    <div className="lista">
      <form className="lista-formulario" onSubmit={handleAgregar}>
        <label className="lista-etiqueta" htmlFor={idInput}>
          Producto
        </label>
        <div className="lista-fila">
          <input
            className="lista-input"
            id={idInput}
            type="text"
            placeholder={PLACEHOLDER_PRODUCTO}
            value={texto}
            onChange={handleCambioTexto}
            autoComplete="off"
          />
          <button
            className="lista-boton"
            type="submit"
            disabled={!puedeAgregar}
          >
            Agregar
          </button>
        </div>
      </form>
      {estaVacia ? (
        <p className="lista-vacia">{MENSAJE_LISTA_VACIA}</p>
      ) : (
        <ul className="lista-items">
          {items.map((item) => (
            <ItemLista
              key={item.id}
              nombre={item.nombre}
              onEliminar={() => handleEliminar(item.id)}
            ></ItemLista>
          ))}
        </ul>
      )}
    </div>
  );
}
