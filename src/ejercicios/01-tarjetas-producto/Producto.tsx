interface ProductoProps {
  nombre: string;
  precio: number;
  stock: number;
}

/**
 * Tarjeta de producto.
 *
 * Muestra el nombre, el precio y el stock de un producto. Si el stock es 0,
 * en lugar de la cantidad se muestra "Sin stock" y se aplica un estilo atenuado.
 *
 * @param props.nombre Nombre del producto.
 * @param props.precio Precio en pesos (número, sin formato).
 * @param props.stock Unidades disponibles.
 */
export function Producto({ nombre, precio, stock }: ProductoProps) {
  const sinStock = stock === 0;
  return (
    <article className="producto-tarjeta">
      <h3 className="producto-nombre">{nombre}</h3>
      <p className="producto-precio">${precio}</p>
      <p
        className={`producto-stock ${sinStock ? "producto-stock-agotado" : ""}`}
      >
        {sinStock ? "Sin stock" : `Stock: ${stock} unidades`}
      </p>
    </article>
  );
}
