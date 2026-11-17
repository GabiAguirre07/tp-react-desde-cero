import { useId, useState } from "react";
import { celsiusAFahrenheit } from "./conversion";

/** Temperatura en °C a partir de la cual se muestra el aviso "Hace calor" (se debe superar, no igualar). */
const UMBRAL_CALOR_CELSIUS = 30;

/**
 * Conversor de temperatura de Celsius a Fahrenheit con input controlado.
 *
 * Guarda un único estado (`celsius`) como texto, tal como lo escribe el
 * usuario, para conservar estados intermedios como el campo vacío o "-".
 * Todo lo demás es derivado y se recalcula en cada render:
 * - `celsiusNumero`: el texto convertido a número.
 * - `esValido`: hay texto y es un número válido.
 * - `fahrenheit`: resultado de la conversión.
 * - `haceCalor`: el valor es válido y supera {@link UMBRAL_CALOR_CELSIUS}.
 *
 * El resultado y el aviso se renderizan de forma condicional. El label se
 * vincula al input con `useId`, por lo que el componente es reutilizable.
 *
 * @returns Un contenedor con el input, el resultado en °F y el aviso de calor.
 */
export function ConversorTemperatura() {
  const [celsius, setCelsius] = useState("");
  const idInput = useId();

  const celsiusNumero = Number(celsius);
  const esValido = celsius.trim() !== "" && !Number.isNaN(celsiusNumero);
  const fahrenheit = celsiusAFahrenheit(celsiusNumero);
  const haceCalor = esValido && celsiusNumero > UMBRAL_CALOR_CELSIUS;

  /**
   * Sincroniza el estado con lo escrito en el input.
   *
   * No usa la forma funcional del setter porque el valor nuevo proviene del
   * input y no depende del valor anterior del estado.
   *
   * @param evento - Evento de cambio del input de grados Celsius.
   */
  function handleCambioCelsius(evento: React.ChangeEvent<HTMLInputElement>) {
    setCelsius(evento.target.value);
  }

  return (
    <div className="conversor">
      <label className="conversor-etiqueta" htmlFor={idInput}>
        Grados Celsius
      </label>
      <input
        className="conversor-input"
        id={idInput}
        type="number"
        step="any"
        inputMode="decimal"
        placeholder="°C"
        value={celsius}
        onChange={handleCambioCelsius}
      />
      {esValido && (
        <output
          className={`conversor-resultado ${haceCalor ? "conversor-resultado-calor" : ""}`}
          htmlFor={idInput}
        >
          {fahrenheit.toFixed(1)} °F
        </output>
      )}
      {haceCalor && <p className="conversor-aviso">Hace calor</p>}
    </div>
  );
}
