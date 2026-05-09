# F1-05: Sistema de Stock por Talle

**Prioridad:** 🟡 MEDIA  
**Estado:** Pendiente  
**Depende de:** F1-01, F1-02  
**Estimado:** 2-3 horas

## El Problema

Hoy no hay ninguna indicación de stock. El cliente puede añadir al carrito un producto que ya no existe, escribir por WhatsApp y recibir "no hay más en ese talle". Experiencia terrible.

## Análisis Técnico

### Estrategia de datos (sin backend en MVP)

Stock guardado en `lib/products.ts` como `Record<string, number>`:

```typescript
stock: { S: 10, M: 5, L: 0, XL: 8, XXL: 3 }
```

La actualización del stock en producción se hace manualmente editando este archivo hasta que haya un Admin Panel (F3-03).

**No hay real-time en esta iteración.** El stock que ve el cliente es el que tenía cuando cargó la página. Aceptable para el volumen actual del negocio.

### Reglas de negocio

- `stock = 0`: talle agotado → no se puede seleccionar
- `stock <= 3`: mostrar badge "ÚLTIMAS UNIDADES" en la card
- `stock > 3`: normal, sin indicador

## Pasos de Implementación

- [ ] **Agregar `stock` a cada producto en `lib/products.ts`**
  - Formato: `stock: { S: 10, M: 5, L: 0, XL: 8, XXL: 3 }`
  - Para lanzamiento inicial: valores realistas pero conservadores (no poner 0 en todo)

- [ ] **Actualizar `components/size-selector.tsx`** (creado en F1-02)
  - Recibir prop `stock: Record<string, number>`
  - Talle con `stock[size] === 0`: 
    - `opacity-50 cursor-not-allowed line-through`
    - No dispara `onSelect()`
    - Tooltip: "Sin stock"
  - Talle con `stock[size] <= 3 && stock[size] > 0`:
    - Pequeño punto rojo pulsante
    - Texto debajo: `Quedan ${stock[size]}`

- [ ] **Badge "ÚLTIMAS UNIDADES" en `components/featured-products.tsx`**
  - Evaluar si algún talle del producto tiene `stock <= 3`
  - Si el badge ya existe (ej: "NUEVO"), no reemplazar — agregar badge secundario
  - Calcular en `lib/products.ts`: `export function hasLowStock(product: Product): boolean`

- [ ] **Agregar `lib/products.ts` helper functions**
  ```typescript
  export function isOutOfStock(product: Product, size: string): boolean
  export function hasLowStock(product: Product): boolean
  export function getTotalStock(product: Product): number
  ```

## Checklist de Validación

- [ ] No se puede añadir al carrito un talle agotado
- [ ] El badge "ÚLTIMAS UNIDADES" aparece en productos con stock bajo
- [ ] El `pnpm build` no falla
- [ ] El stock de infantil (talles 6-16) también se muestra correctamente
