import { Producto } from "./Producto";
import "./styles.css";

/**
 * Ejercicio 1: Tarjetas de producto (props).
 *
 * Renderiza el componente reutilizable `Producto` tres veces con datos
 * distintos, uno de ellos sin stock.
 */
export function Ejericio1() {
  return (
    <section>
      <h2>Ejercicio 1: Tarjetas de Producto</h2>
      <div className="producto-contenedor">
        <Producto nombre="Teclado" precio={45000} stock={12} />
        <Producto nombre="Mouse" precio={18000} stock={0} />
        <Producto nombre="Monitor" precio={320000} stock={3} />
      </div>
    </section>
  );
}
