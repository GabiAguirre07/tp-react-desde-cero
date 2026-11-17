import { TarjetaPregunta } from "./TarjetaPregunta";
import "./styles.css";

/**
 * Ejercicio 3: Mostrar y ocultar (renderizado condicional).
 *
 * Presenta una instancia del componente reutilizable `TarjetaPregunta`
 * con la pregunta "¿Qué es JSX?". La respuesta arranca oculta y se
 * alterna con un botón cuyo texto cambia según el estado.
 */
export function Ejercicio3() {
  return (
    <section>
      <h2>Ejercicio 3: Mostrar y ocultar</h2>
      <TarjetaPregunta
        pregunta="¿Qué es JSX?"
        respuesta="Una sintaxis que permite escribir estructura parecida a HTML dentro de JavaScript. Se transforma en llamadas a funciones de React."
      />
    </section>
  );
}
