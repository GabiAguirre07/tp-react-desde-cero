import { useId, useState } from "react";
import { filtrarPorTexto, formatearCantidadResultados } from "./busqueda";

/** Texto de ayuda del input mientras está vacío. */
const PLACEHOLDER_BUSQUEDA = "Ej: java";

/** Props de {@link BuscadorLenguajes}. */
interface BuscadorLenguajesProps {
  /** Lenguajes entre los que se busca; cada nombre debe ser único (se usa como `key`). */
  lenguajes: readonly string[];
}

/**
 * Buscador que filtra una lista de lenguajes mientras se escribe.
 *
 * Guarda un único estado (`busqueda`) como texto, tal como lo escribe el
 * usuario. Todo lo demás es derivado y se recalcula en cada render:
 * - `resultados`: los lenguajes que contienen la búsqueda, sin distinguir
 *   mayúsculas de minúsculas (ver `filtrarPorTexto` en `busqueda.ts`).
 * - `hayResultados`: hay al menos un lenguaje que coincide.
 * - `textoCantidad`: la cantidad de resultados en texto ("2 resultados").
 *
 * La lista llega por props, así que el componente no depende de un conjunto
 * de datos fijo. La cantidad se anuncia a los lectores de pantalla con
 * `aria-live` y la lista solo se renderiza si hay resultados.
 *
 * @param props - {@link BuscadorLenguajesProps}.
 * @returns Un contenedor con el input de búsqueda, la cantidad de resultados
 *   y la lista filtrada.
 */
export function BuscadorLenguajes({ lenguajes }: BuscadorLenguajesProps) {
  const [busqueda, setBusqueda] = useState("");
  const idInput = useId();

  const resultados = filtrarPorTexto(lenguajes, busqueda);
  const hayResultados = resultados.length > 0;
  const textoCantidad = formatearCantidadResultados(resultados.length);

  /**
   * Sincroniza el estado `busqueda` con lo escrito en el input.
   *
   * No usa la forma funcional del setter porque el valor nuevo proviene del
   * input y no depende del valor anterior del estado.
   *
   * @param evento - Evento de cambio del input de búsqueda.
   */
  function handleCambioBusqueda(evento: React.ChangeEvent<HTMLInputElement>) {
    setBusqueda(evento.target.value);
  }

  return (
    <div className="buscador">
      <div className="buscador-campo" role="search">
        <label className="buscador-etiqueta" htmlFor={idInput}>
          Buscar lenguaje
        </label>
        <input
          className="buscador-input"
          id={idInput}
          type="search"
          placeholder={PLACEHOLDER_BUSQUEDA}
          value={busqueda}
          onChange={handleCambioBusqueda}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
      <p
        className={`buscador-contador ${hayResultados ? "" : "buscador-contador-vacio"}`}
        aria-live="polite"
      >
        {textoCantidad}
      </p>
      {hayResultados && (
        <ul className="buscador-resultados">
          {resultados.map((lenguaje) => (
            <li className="buscador-item" key={lenguaje}>
              {lenguaje}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
