# TP Frontend — React desde cero

Resolución de los ejercicios propuestos en **"React desde cero"** (`practica-react.pdf`), hecha con **React + TypeScript + Vite**.

|              |                                                             |
| ------------ | ----------------------------------------------------------- |
| **Alumno**   | Gabriel Salvador Aguirre                                    |
| **Carrera**  | Tecnicatura Universitaria en Programación (T.U.P.)          |
| **Facultad** | Universidad Tecnológica Nacional — Facultad Regional Paraná |
| **Materia**  | Programación IV                                             |
| **Año**      | 2026                                                        |

---

## Requisitos

- **Node.js 22.12 o superior** (22, 24 o 26). npm viene incluido.

Para verificar la versión:

```bash
node -v
```

## Cómo ejecutarlo

```bash
git clone https://github.com/GabiAguirre07/tp-react-desde-cero.git
cd tp-react-desde-cero
npm install
npm run dev
```

Después abrir **http://localhost:5173** en el navegador.

### Otros scripts

| Comando           | Qué hace                                                                      |
| ----------------- | ----------------------------------------------------------------------------- |
| `npm run dev`     | Levanta el servidor de desarrollo con recarga automática                      |
| `npm run build`   | Verifica los tipos de TypeScript y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión generada por `build`                              |
| `npm run lint`    | Analiza el código con Oxlint                                                  |

> **Windows / PowerShell:** si `npm` muestra _"la ejecución de scripts está deshabilitada"_, ejecutar una vez
> `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, o usar la terminal _Command Prompt_.

---

## Ejercicios

| N°  | Ejercicio                | Tema               | Carpeta                                   | Estado    |
| --- | ------------------------ | ------------------ | ----------------------------------------- | --------- |
| 1   | Tarjetas de producto     | Props              | `src/ejercicios/01-tarjetas-producto`     | Pendiente |
| 2   | Contador con límites     | useState           | `src/ejercicios/02-contador`              | Pendiente |
| 3   | Mostrar y ocultar        | Condicionales      | `src/ejercicios/03-mostrar-ocultar`       | Pendiente |
| 4   | Conversor de temperatura | Inputs controlados | `src/ejercicios/04-conversor-temperatura` | Pendiente |
| 5   | Lista de compras         | Listas y estado    | `src/ejercicios/05-lista-compras`         | Pendiente |
| 6   | Buscador                 | Filtrado           | `src/ejercicios/06-buscador`              | Pendiente |
| 7   | Tipar con TypeScript     | TypeScript         | `src/ejercicios/07-producto-typescript`   | Pendiente |

Todos los ejercicios se ven en la misma página: `App.tsx` los muestra en orden, uno debajo del otro.

---

## Estructura del proyecto

```
tp-react-desde-cero/
├── index.html              ← página base donde se monta la aplicación
├── package.json            ← dependencias y scripts
├── vite.config.ts          ← configuración de Vite
├── src/
│   ├── main.tsx            ← punto de entrada: monta <App /> en el #root
│   ├── App.tsx             ← índice que muestra todos los ejercicios
│   ├── index.css           ← estilos globales
│   └── ejercicios/         ← una carpeta por ejercicio
└── public/                 ← archivos estáticos (íconos)
```

### Decisiones de diseño

- **TypeScript desde el primer ejercicio.** El ejercicio 7 lo exige, y con tipos el editor detecta errores en las props mientras se escribe.
- **Una carpeta por ejercicio.** Cada ejercicio es independiente (principio de responsabilidad única) y `App.tsx` solo se encarga de componerlos.

## Tecnologías

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter)
