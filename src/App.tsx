import { Ejercicio1 } from "./ejercicios/01-tarjetas-producto/Ejercicio01";
import { Ejercicio2 } from "./ejercicios/02-contador/Ejercicio02";
import { Ejercicio3 } from "./ejercicios/03-mostrar-ocultar/Ejercicio03";
import { Ejercicio4 } from "./ejercicios/04-conversor-temperatura/Ejercicio04";

export default function App() {
  return (
    <main>
      <h1>React desde cero — Ejercicios</h1>
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
      <Ejercicio4 />
    </main>
  );
}
