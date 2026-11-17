import { ConversorTemperatura } from "./ConversorTemperatura";
import "./styles.css";

/**
 * Ejercicio 4: Conversor de temperatura (inputs controlados).
 *
 * Presenta el componente `ConversorTemperatura`: un input de grados Celsius
 * que muestra el equivalente en Fahrenheit mientras se escribe y, si supera
 * los 30 °C, el aviso "Hace calor".
 */
export function Ejercicio4() {
  return (
    <section>
      <h2>Ejercicio 4: Conversor de temperatura</h2>
      <ConversorTemperatura />
    </section>
  );
}
