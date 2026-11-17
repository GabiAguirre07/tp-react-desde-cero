/**
 * Convierte una temperatura de grados Celsius a grados Fahrenheit.
 * Función pura: no depende de React ni de ningún estado y devuelve siempre
 * el mismo resultado para la misma entrada. No redondea ni formatea; el
 * formato es responsabilidad de quien la muestra.
 *
 * @param celsius - Temperatura en grados Celsius.
 * @returns La temperatura equivalente en grados Fahrenheit (F = C × 9/5 + 32).
 */
export function celsiusAFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}
