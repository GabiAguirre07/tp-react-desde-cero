import { ListaCompras } from "./ListaCompras";
import "./styles.css";

/**
 * Ejercicio 5: Lista de compras (listas y estado).
 *
 * Presenta el componente `ListaCompras`: un input y un botón "Agregar" que
 * suman productos a una lista, cada uno con su botón "Eliminar". No admite
 * ítems vacíos y, si la lista está vacía, muestra "No hay nada para comprar".
 */
export function Ejercicio5() {
  return (
    <section>
      <h2>Ejercicio 5: Lista de compras</h2>
      <ListaCompras />
    </section>
  );
}
