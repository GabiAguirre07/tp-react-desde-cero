import { useState } from "react";

interface ContadorProps {
  minimo?: number;
  maximo?: number;
  valorInicial?: number;
}

/**
 * Contador con límites.
 *
 * Mantiene un valor numérico que se puede incrementar, decrementar y
 * reiniciar sin salir nunca del rango [minimo, maximo]. Los botones de
 * sumar y restar se deshabilitan al llegar a su límite y se muestra un
 * mensaje informativo.
 *
 * @param props.minimo Límite inferior del rango (por defecto 0).
 * @param props.maximo Límite superior del rango (por defecto 10).
 * @param props.valorInicial Valor con el que arranca y al que vuelve al
 *   reiniciar (por defecto, igual a `minimo`).
 */
export function Contador({
  minimo = 0,
  maximo = 10,
  valorInicial = minimo,
}: ContadorProps) {
  const [valor, setValor] = useState(valorInicial);

  const enMaximo = valor === maximo;
  const enMinimo = valor === minimo;

  function handleSumar() {
    setValor((anterior) => (anterior < maximo ? anterior + 1 : anterior));
  }

  function handleRestar() {
    setValor((anterior) => (anterior > minimo ? anterior - 1 : anterior));
  }

  function handleReiniciar() {
    setValor(valorInicial);
  }

  return (
    <div className="contador">
      <p
        className={`contador-valor ${enMaximo || enMinimo ? "contador-valor-limite" : ""}`}
      >
        {valor}
      </p>

      <div className="contador-botones">
        <button
          className="contador-boton"
          type="button"
          onClick={handleRestar}
          disabled={enMinimo}
          aria-label="Restar"
        >
          −
        </button>

        <button
          className="contador-boton"
          type="button"
          onClick={handleSumar}
          disabled={enMaximo}
          aria-label="Sumar"
        >
          +
        </button>

        <button
          className="contador-boton"
          type="button"
          onClick={handleReiniciar}
        >
          Reiniciar
        </button>
      </div>

      {enMaximo && <p className="contador-mensaje">Llegaste al máximo</p>}
      {enMinimo && <p className="contador-mensaje">Llegaste al mínimo</p>}
    </div>
  );
}
