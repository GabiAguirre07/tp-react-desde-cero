import { estaSinStock, formatearStock } from "./stock";

/** Props de {@link Producto}. */
interface ProductoProps {
  /** Nombre del producto; se muestra como título de la tarjeta. */
  nombre: string;
  /** Precio en pesos, como número sin formato. */
  precio: number;
  /** Unidades disponibles; 0 significa "Sin stock". */
  stock: number;
  /** Si es `true`, muestra el aviso "¡Oferta!". Opcional: si se omite, vale `false`. */
  oferta?: boolean;
}

/**
 * Tarjeta de producto tipada con TypeScript.
 *
 * Muestra el nombre, el aviso "¡Oferta!" (solo si `oferta` es `true`), el
 * precio y el stock. Si el stock es 0, en lugar de la cantidad se muestra
 * "Sin stock" con un estilo atenuado.
 *
 * `oferta` es opcional en {@link ProductoProps}, por lo que su tipo es
 * `boolean | undefined`. El valor por defecto `false` en la desestructuración
 * la convierte en `boolean` dentro del componente: quien lo usa puede omitirla
 * y el componente nunca trabaja con `undefined`.
 *
 * @param props - {@link ProductoProps}.
 * @returns Un `article` con los datos del producto.
 */
export function Producto({
  nombre,
  precio,
  stock,
  oferta = false,
}: ProductoProps) {
  const sinStock = estaSinStock(stock);
  const textoStock = formatearStock(stock);

  return (
    <article className="tipado-tarjeta">
      <h3 className="tipado-nombre">{nombre}</h3>
      {oferta && <p className="tipado-oferta">¡Oferta!</p>}
      <p className="tipado-precio">${precio}</p>
      <p className={`tipado-stock ${sinStock ? "tipado-stock-agotado" : ""}`}>
        {textoStock}
      </p>
    </article>
  );
}
