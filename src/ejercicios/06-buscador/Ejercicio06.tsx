import { BuscadorLenguajes } from "./BuscadorLenguajes";
import "./styles.css";

/** Lenguajes de programación disponibles en el buscador (nombres únicos). */
const LENGUAJES: readonly string[] = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
  "Go",
  "Rust",
  "Kotlin",
  "PHP",
  "Ruby",
];

/**
 * Ejercicio 6: Buscador (filtrado).
 *
 * Presenta el componente `BuscadorLenguajes` con la lista {@link LENGUAJES}:
 * un input de búsqueda que filtra la lista mientras se escribe, sin distinguir
 * mayúsculas de minúsculas, y muestra cuántos resultados hay.
 */
export function Ejercicio6() {
  return (
    <section>
      <h2>Ejercicio 6: Buscador</h2>
      <BuscadorLenguajes lenguajes={LENGUAJES} />
    </section>
  );
}
