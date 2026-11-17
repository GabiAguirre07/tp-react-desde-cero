import { Contador } from "./Contador";
import "./styles.css";

/**
 * Ejercicio 2: Contador con límites (useState).
 *
 * Renderiza el componente reutilizable `Contador` con su rango por defecto
 * (0 a 10), que no puede salir de ese rango y deshabilita cada botón al
 * llegar a su límite.
 */
export function Ejercicio2() {
  return (
    <section>
      <h2>Ejercicio 2: Contador con límites</h2>
      <Contador />
    </section>
  );
}
