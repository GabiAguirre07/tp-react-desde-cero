import { useId, useState } from "react";

/**
 * Props de {@link TarjetaPregunta}.
 */
interface TarjetaPreguntaProps {
  /** Texto de la pregunta, se muestra como título de la tarjeta. */
  pregunta: string;
  /** Texto de la respuesta, visible solo cuando la tarjeta está abierta. */
  respuesta: string;
}

/**
 * Tarjeta de pregunta y respuesta con la respuesta oculta por defecto.
 *
 * Maneja un único estado booleano (`visible`). El texto del botón y la
 * clase modificadora de la tarjeta se derivan de ese estado, por lo que
 * no necesitan estado propio. El vínculo accesible entre el botón y la
 * respuesta usa `useId`, así cada instancia tiene un id único.
 *
 * @param props - Pregunta y respuesta a mostrar.
 * @returns Un `article` con el título, el botón y la respuesta condicional.
 */
export function TarjetaPregunta({ pregunta, respuesta }: TarjetaPreguntaProps) {
  const [visible, setVisible] = useState(false);
  const idRespuesta = useId();
  const textoBoton = visible ? "Ocultar respuesta" : "Mostrar respuesta";

  /** Invierte la visibilidad de la respuesta usando el valor previo del estado. */
  function handleAlternar() {
    setVisible((anterior) => !anterior);
  }

  return (
    <article
      className={`pregunta-tarjeta ${visible ? "pregunta-tarjeta-abierta" : ""}`}
    >
      <h3 className="pregunta-titulo">{pregunta}</h3>

      <button
        className="pregunta-boton"
        type="button"
        onClick={handleAlternar}
        aria-expanded={visible}
        aria-controls={idRespuesta}
      >
        {textoBoton}
      </button>

      {visible && (
        <p className="pregunta-respuesta" id={idRespuesta}>
          {respuesta}
        </p>
      )}
    </article>
  );
}
