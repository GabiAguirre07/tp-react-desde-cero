import { Producto } from "./Producto";
import "./styles.css";

/**
 * Ejercicio 7: Tipar con TypeScript.
 *
 * Presenta el componente `Producto` tipado con la interface `ProductoProps`:
 * el teclado con la prop opcional `oferta` activada y el mouse sin ella (y
 * sin stock), como en la imagen de la consigna.
 */
export function Ejercicio7() {
  return (
    <section>
      <h2>Ejercicio 7: Tipar con TypeScript</h2>
      <div className="tipado-contenedor">
        <Producto nombre="Teclado" precio={45000} stock={12} oferta />
        <Producto nombre="Mouse" precio={18000} stock={0} />
      </div>
    </section>
  );
}
