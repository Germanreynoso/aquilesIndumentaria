# Specs — Fase 1: Fundamentos y Conversión

## Contexto de Negocio

Aquiles Indumentaria opera 100% por WhatsApp. Sin precio visible ni selección de talle real, el cliente abandona antes de consultar. Esta fase elimina esa fricción.

**KPIs de éxito:**
- Tasa de apertura del cart sidebar > 40% de visitas
- Tasa de click en "CONSULTAR POR WHATSAPP" > 20% de visitas
- Mensajes de WhatsApp que incluyen talle específico: 100%

---

## Cambios de Datos

### Extender el tipo `Product` en `components/featured-products.tsx`

```typescript
// ANTES
{
  id: number
  name: string
  team: string
  sizes: string       // "S al XXL" — string genérico
  badge: string | null
  image: string
}

// DESPUÉS
{
  id: number
  name: string
  team: string
  availableSizes: string[]   // ["S", "M", "L", "XL", "XXL"]
  price: number              // en pesos argentinos, ej: 15000
  badge: string | null
  image: string
  stock?: Record<string, number>  // { S: 5, M: 3, L: 0, XL: 8 }
}
```

### Extender `CartItem` en `components/cart-context.tsx`

```typescript
// ANTES
export interface CartItem {
  id: number
  name: string
  image: string
  sizes: string       // "S al XXL"
  quantity: number
}

// DESPUÉS
export interface CartItem {
  id: number
  name: string
  image: string
  selectedSize: string   // "M" — talle real elegido por el usuario
  price: number
  quantity: number
}
```

### Agregar `totalPrice` al CartContext

```typescript
const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)
```

---

## Requerimientos Técnicos

### F1-01: Precio y estructura de datos
- Agregar precios reales a los 16 productos en `featured-products.tsx`
- Migrar `sizes: string` → `availableSizes: string[]` en Product
- El campo `sizes` del CartItem pasa a ser `selectedSize: string`
- Actualizar todos los `addItem()` calls en `featured-products.tsx:308` y `featured-products.tsx:341`

### F1-02: Selector de talle
- Añadir UI de selección de talle en la card del producto antes de `addItem()`
- En mobile (botón circular): abrir un bottom sheet (usar `Drawer` de Radix ya instalado)
- En desktop (hover): mostrar selector de talles inline sobre la imagen
- Si el usuario hace click en "AÑADIR" sin elegir talle → shake animation + toast

### F1-03: Mensaje WhatsApp mejorado
- Modificar `handleWhatsAppCheckout` en `components/cart-sidebar.tsx:11`
- El mensaje debe incluir: nombre, talle, precio unitario, subtotal por ítem, TOTAL en pesos
- Formato:
  ```
  Hola Aquiles! Quiero consultar disponibilidad:

  - 2x Camiseta AFA Entrenamiento (Talle M) — $30.000
  - 1x Remera Oversize (Talle L) — $18.000

  TOTAL: $48.000

  ¿Están disponibles? ¡Muchas gracias!
  ```

### F1-04: Modal guía de talles
- Nuevo componente `components/size-guide-modal.tsx`
- Tabla con medidas en cm para camisetas adulto, camisetas infantil, remeras Urban
- Trigger: link "¿Cuál es mi talle?" en la card del producto y en `cart-sidebar.tsx:103`

### F1-05: Stock por talle
- Archivo `lib/products.ts` con los productos y su stock por talle
- Indicador visual en el selector de talle: talle agotado → texto tachado + "Sin stock"
- Badge "ÚLTIMAS UNIDADES" si stock ≤ 3 en algún talle

---

## Objetivos de Negocio

| Objetivo | Métrica |
|---|---|
| El cliente sabe cuánto va a gastar antes de escribir | Precio visible en carrito |
| El cliente elige talle → menos consultas repetidas en WA | Talle en mensaje WA = 100% |
| Reducir abandono de carrito | Tasa WA > 20% visits |
| Crear urgencia sin mentir | Stock real visible |
