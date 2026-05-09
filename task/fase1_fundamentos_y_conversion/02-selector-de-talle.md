# F1-02: Selector de Talle Antes de Añadir al Carrito

**Prioridad:** 🔴 CRÍTICA  
**Estado:** Pendiente  
**Depende de:** F1-01  
**Estimado:** 3-4 horas

## El Problema

Hoy el botón "AÑADIR AL CARRITO" en `components/featured-products.tsx:308` llama directamente a `addItem()` sin preguntar talle. El CartItem recibe `sizes: "S al XXL"` como string. Nadie sabe qué talle quiere el cliente.

## Análisis Técnico

### Componente a crear

`components/size-selector.tsx` — modal/drawer que aparece entre el click de "AÑADIR" y el `addItem()` real.

**Variante Desktop:** Dropdown/popover debajo del botón de añadir (usando `Popover` de Radix, ya instalado).

**Variante Mobile:** Bottom sheet (usando `Drawer` de vaul, ya instalado en `package.json`).

La decisión de qué mostrar: `useIsMobile()` ya existe en `components/ui/use-mobile.tsx`.

### Estado local por producto

```typescript
// En FeaturedProducts, por cada product card:
const [selectedSize, setSelectedSize] = useState<string | null>(null)
const [showSizeError, setShowSizeError] = useState(false)
```

Cuando el usuario hace click en "AÑADIR" sin talle:
1. `showSizeError = true` → shake animation en el botón
2. Toast con "Seleccioná un talle primero" usando `sonner` (ya instalado)

## Pasos de Implementación

- [ ] **Crear `components/size-selector.tsx`**
  - Props: `sizes: string[]`, `onSelect: (size: string) => void`, `selectedSize: string | null`
  - Renderizar botones pill por cada talle disponible
  - Talle seleccionado: fondo celeste, borde celeste
  - Talle sin stock (viene de `stock` en lib/products.ts): borde punteado, texto muted, cursor not-allowed
  - Pequeña etiqueta "Sin stock" debajo de talles agotados

- [ ] **Refactorizar `components/featured-products.tsx`**
  - Extraer la card de producto a un sub-componente interno `ProductCard`
  - `ProductCard` maneja su propio estado `selectedSize`
  - El botón "AÑADIR AL CARRITO" en desktop (línea `308`) → mostrar `SizeSelector` en Popover
  - El botón mobile circular (línea `341`) → abrir Drawer con `SizeSelector` + botón "CONFIRMAR"
  - Solo llamar `addItem()` cuando hay talle seleccionado

- [ ] **Integrar con `addItem()` del cart context**
  - Cambiar el `addItem()` call: `addItem({ id, name, image, selectedSize, price })`
  - Cerrar el popover/drawer después de añadir
  - Abrir el cart sidebar automáticamente (ya lo hace `setIsCartOpen(true)` en `cart-context.tsx:62`)

- [ ] **Feedback visual**
  - Toast de confirmación: "✓ Talle M añadido" usando `toast()` de sonner
  - Si ya hay ese producto+talle en carrito: "Cantidad actualizada (+1)"
  - Si se añade el mismo producto en diferente talle → agregar como ítem separado (cambiar la lógica de `addItem` en `cart-context.tsx:51` para que use id+talle como key única)

## Checklist de Validación

- [ ] No se puede añadir sin talle en desktop ni mobile
- [ ] El drawer mobile se ve bien en iPhone SE (375px)
- [ ] El popover desktop no se corta en cards del borde derecho
- [ ] Dos talles del mismo producto aparecen como ítems separados en el cart
- [ ] TypeScript ok
