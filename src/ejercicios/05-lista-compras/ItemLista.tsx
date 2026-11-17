/** Props de {@link ItemLista}. */
interface ItemListaProps {
  /** Nombre del producto que se muestra en el ítem. */
  nombre: string;
  /** Se invoca al pulsar "Eliminar"; el padre decide cómo se elimina. */
  onEliminar: () => void;
}

/**
 * Ítem de la lista de compras: nombre del producto y botón para eliminarlo.
 *
 * Componente presentacional: no tiene estado ni conoce el modelo de datos;
 * solo muestra el `nombre` y avisa al padre mediante `onEliminar`. Renderiza
 * un `li`, por lo que debe usarse dentro de un `ul` u `ol`. El `aria-label`
 * del botón incluye el nombre para que los lectores de pantalla distingan
 * cada botón "Eliminar".
 *
 * @param props - {@link ItemListaProps}.
 * @returns Un elemento `li` con el nombre y el botón "Eliminar".
 */
export function ItemLista({ nombre, onEliminar }: ItemListaProps) {
  return (
    <li className="lista-item">
      {nombre}
      <button
        className="lista-boton lista-boton-eliminar"
        type="button"
        onClick={onEliminar}
        aria-label={`Eliminar ${nombre}`}
      >
        Eliminar
      </button>
    </li>
  );
}
