# F1-01: Agregar Precio y Talle Real a Productos

**Prioridad:** 🔴 CRÍTICA — Bloquea F1-02 y F1-03  
**Estado:** Pendiente  
**Estimado:** 2-3 horas

## El Problema

El array `products` en `components/featured-products.tsx:9` no tiene precio. El tipo `CartItem` en `components/cart-context.tsx:5` usa `sizes: string` ("S al XXL") como placeholder, no como el talle elegido por el usuario.

**Consecuencia directa:** El mensaje de WhatsApp dice "1x Camiseta AFA" sin talle ni precio. El vendedor tiene que preguntar "¿en qué talle?" manualmente → fricción que mata la conversión.

## Análisis Técnico

### Archivos a modificar

| Archivo | Cambio |
|---|---|
| `components/featured-products.tsx` | Extender tipo Product, agregar precios y talles reales |
| `components/cart-context.tsx` | Cambiar `sizes: string` → `selectedSize: string`, agregar `price: number`, calcular `totalPrice` |
| `components/cart-sidebar.tsx` | Mostrar precio unitario, subtotal, total en el sidebar |

### Migrar productos a `lib/products.ts`

Los productos deben salir de `featured-products.tsx` para poder ser compartidos con el buscador (F2-03) y las páginas de categoría (F2-04). Crear:

```
lib/
  products.ts   ← source of truth para productos
```

## Pasos de Implementación

- [ ] **Crear `lib/products.ts`** con el tipo extendido y los 16 productos con precios y talles reales
  - Tipo `Product`: agregar `price: number`, `availableSizes: string[]`, eliminar `sizes: string`
  - Precios de referencia (ajustar con el dueño): camisetas $15.000-$18.000, urban $12.000-$14.000
  - Talles adulto: `["S", "M", "L", "XL", "XXL"]`
  - Talles infantil: `["6", "8", "10", "12", "14", "16"]`
  - Producto "del Dibu" (id:3): ambas categorías con talles combinados

- [ ] **Actualizar `components/cart-context.tsx`**
  - Cambiar interfaz `CartItem`: reemplazar `sizes: string` → `selectedSize: string`, agregar `price: number`
  - Agregar `totalPrice` al contexto: `items.reduce((acc, item) => acc + item.price * item.quantity, 0)`
  - Exportar `totalPrice` en el Provider y en `CartContextType`
  - La clave de `localStorage` ya es `'aquiles-cart'` — no cambiar para no romper carts existentes (limpiar gracefully si el formato no matchea)

- [ ] **Actualizar `components/featured-products.tsx`**
  - Importar productos desde `lib/products.ts`
  - Los dos `addItem()` calls (líneas `308` y `341`) deben esperar a que el usuario elija talle (ver F1-02)
  - Por ahora: si no hay selector de talle aún, pasar el primer talle disponible como placeholder hasta F1-02

- [ ] **Actualizar `components/cart-sidebar.tsx`**
  - Línea `65`: mostrar `item.selectedSize` en lugar de `item.sizes`
  - Después del nombre del producto: mostrar precio unitario formateado `$15.000`
  - En el footer del sidebar (línea `100`): mostrar total antes del botón de WhatsApp
  - Formato total: `TOTAL: $48.000`

## Checklist de Validación

- [ ] El carrito muestra precio por ítem y total
- [ ] `localStorage('aquiles-cart')` persiste con el nuevo formato
- [ ] Si hay un cart viejo (sin price), no crashea
- [ ] TypeScript no tiene errores (`pnpm build`)
