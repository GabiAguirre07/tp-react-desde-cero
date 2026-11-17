# TP Frontend — React desde cero

Resolución de los 7 ejercicios propuestos en **"React desde cero"** (`practica-react.pdf`), hecha con **React + TypeScript + Vite**.

|              |                                                             |
| ------------ | ----------------------------------------------------------- |
| **Alumno**   | Gabriel Salvador Aguirre                                    |
| **Carrera**  | Tecnicatura Universitaria en Programación (T.U.P.)          |
| **Facultad** | Universidad Tecnológica Nacional — Facultad Regional Paraná |
| **Materia**  | Programación IV                                             |
| **Año**      | 2026                                                        |

---

## Requisitos

- **Node.js 22 LTS o 24 LTS** (mínimo: 20.19 o 22.12). npm viene incluido con Node.
- **Git** (opcional: también se puede descargar el proyecto como ZIP).

No hace falta instalar nada más: las dependencias se descargan con `npm ci`.

Para verificar la versión de Node:

```bash
node -v
```

## Cómo ejecutarlo

Los comandos son **los mismos en Windows (CMD o PowerShell) y en Linux**.

```bash
git clone https://github.com/GabiAguirre07/tp-react-desde-cero.git
cd tp-react-desde-cero
npm ci
npm run dev
```

Después abrir en el navegador la dirección que muestra la terminal (normalmente **http://localhost:5173**). Si ese puerto está ocupado, Vite usa el siguiente libre y lo indica en la terminal.

Para detener el servidor: `Ctrl + C` en la terminal.

> **¿Por qué `npm ci` y no `npm install`?** `npm ci` instala exactamente las versiones registradas en `package-lock.json`, sin modificarlo. Así el proyecto se ejecuta con las mismas versiones con las que fue desarrollado y verificado.

**Sin Git:** en GitHub, botón **Code → Download ZIP**, descomprimir, abrir una terminal dentro de la carpeta `tp-react-desde-cero` y ejecutar `npm ci` y `npm run dev`.

> **Windows / PowerShell:** si `npm` muestra _"la ejecución de scripts está deshabilitada en este sistema"_, usar la terminal **CMD** (Símbolo del sistema), o habilitarlo solo para la ventana actual con:
> `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

### Scripts disponibles

| Comando           | Qué hace                                                                      |
| ----------------- | ----------------------------------------------------------------------------- |
| `npm run dev`     | Levanta el servidor de desarrollo con recarga automática                      |
| `npm run build`   | Verifica los tipos de TypeScript y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión generada por `build` (http://localhost:4173)      |
| `npm run lint`    | Analiza el código con Oxlint                                                  |

---

## Ejercicios

Todos los ejercicios se ven en la misma página: `App.tsx` los muestra en orden, uno debajo del otro.

| N°  | Ejercicio                | Tema               | Carpeta                                   | Estado      |
| --- | ------------------------ | ------------------ | ----------------------------------------- | ----------- |
| 1   | Tarjetas de producto     | Props              | `src/ejercicios/01-tarjetas-producto`     | ✅ Resuelto |
| 2   | Contador con límites     | useState           | `src/ejercicios/02-contador`              | ✅ Resuelto |
| 3   | Mostrar y ocultar        | Condicionales      | `src/ejercicios/03-mostrar-ocultar`       | ✅ Resuelto |
| 4   | Conversor de temperatura | Inputs controlados | `src/ejercicios/04-conversor-temperatura` | ✅ Resuelto |
| 5   | Lista de compras         | Listas y estado    | `src/ejercicios/05-lista-compras`         | ✅ Resuelto |
| 6   | Buscador                 | Filtrado           | `src/ejercicios/06-buscador`              | ✅ Resuelto |
| 7   | Tipar con TypeScript     | TypeScript         | `src/ejercicios/07-tipar-typescript`      | ✅ Resuelto |

### Cómo verificar cada ejercicio

Pasos para reproducir la imagen de "Así debería quedar" de cada consigna:

| N°  | Qué hacer                                        | Resultado esperado                                                                                              |
| --- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| 1   | Solo mirar                                       | Tres tarjetas (Teclado, Mouse, Monitor); el Mouse dice "Sin stock"                                              |
| 2   | Presionar **+** hasta llegar a 10                | El **+** queda deshabilitado y aparece "Llegaste al máximo". En 0 se deshabilita **−**                          |
| 3   | Presionar **Mostrar respuesta**                  | Aparece la respuesta y el botón pasa a decir "Ocultar respuesta"                                                |
| 4   | Escribir `35`                                    | Muestra **95.0 °F** y "Hace calor" (solo por encima de 30 °C)                                                   |
| 5   | Agregar `Yerba`, `Pan` y `Leche` (botón o Enter) | Tres ítems con su botón "Eliminar". Vacía muestra "No hay nada para comprar"; no se pueden agregar ítems vacíos |
| 6   | Escribir `ja` (o `JA`)                           | "2 resultados": JavaScript y Java                                                                               |
| 7   | Solo mirar                                       | El Teclado muestra "¡Oferta!" (prop `oferta` activada); el Mouse no                                             |

---

## Estructura del proyecto

```
tp-react-desde-cero/
├── index.html                  ← página base donde se monta la aplicación
├── package.json                ← dependencias y scripts
├── package-lock.json           ← versiones exactas de las dependencias (usado por npm ci)
├── vite.config.ts              ← configuración de Vite
├── .oxlintrc.json              ← reglas del linter
├── public/                     ← archivos estáticos (íconos)
└── src/
    ├── main.tsx                ← punto de entrada: monta <App /> en el #root
    ├── App.tsx                 ← índice que muestra todos los ejercicios
    ├── index.css               ← estilos globales
    └── ejercicios/             ← una carpeta por ejercicio
        ├── 01-tarjetas-producto/      Ejercicio01.tsx, Producto.tsx, styles.css
        ├── 02-contador/               Ejercicio02.tsx, Contador.tsx, styles.css
        ├── 03-mostrar-ocultar/        Ejercicio03.tsx, TarjetaPregunta.tsx, styles.css
        ├── 04-conversor-temperatura/  Ejercicio04.tsx, ConversorTemperatura.tsx, conversion.ts, styles.css
        ├── 05-lista-compras/          Ejercicio05.tsx, ListaCompras.tsx, ItemLista.tsx, lista.ts, styles.css
        ├── 06-buscador/               Ejercicio06.tsx, BuscadorLenguajes.tsx, busqueda.ts, styles.css
        └── 07-tipar-typescript/       Ejercicio07.tsx, Producto.tsx, stock.ts, styles.css
```

Cada carpeta sigue el mismo esquema:

- **`EjercicioNN.tsx`**: presenta el ejercicio (título y datos de ejemplo).
- **Componente reutilizable** (`Producto`, `Contador`, etc.): recibe sus datos por props y no depende de valores fijos.
- **`.ts` con funciones puras** (cuando hay lógica de cálculo): conversión, filtrado, armado de textos. No dependen de React.
- **`styles.css`**: estilos del ejercicio, con clases prefijadas (`producto-…`, `contador-…`) para que no choquen entre sí.

## Decisiones de diseño

- **TypeScript desde el primer ejercicio.** El ejercicio 7 lo exige y, con tipos, el editor detecta errores en las props mientras se escribe. Las props se declaran con `interface`.
- **Una carpeta por ejercicio.** Cada ejercicio es independiente (responsabilidad única) y `App.tsx` solo se encarga de componerlos. Por eso el ejercicio 7 tiene su propia versión de `Producto`: el ejercicio 1 queda tal como lo pide su consigna.
- **Estado mínimo, valores derivados.** Solo se guarda en estado lo que escribe o hace el usuario; lo demás (Fahrenheit, cantidad de resultados, si un botón está deshabilitado) se calcula en cada renderizado.
- **Lógica fuera de los componentes.** Los cálculos están en funciones puras en archivos `.ts`, separados de la interfaz: se pueden leer y probar sin React.
- **Arrays inmutables.** La lista de compras nunca se modifica con `push`: se crean arrays nuevos con spread (`[...items, nuevo]`) y `filter`.
- **Accesibilidad básica.** `label` vinculado a cada `input` con `useId`, `aria-label` en botones de solo símbolo y `aria-live` en el contador de resultados.

## Tecnologías

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter)
