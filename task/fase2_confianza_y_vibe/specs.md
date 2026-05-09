# Specs — Fase 2: Confianza y Vibe

## Contexto de Negocio

La confianza es el segundo motor de conversión en e-commerce. Un cliente que ve que otros compraron (reviews), que sabe cuándo llega su pedido (envíos) y que puede encontrar lo que busca rápido (buscador), convierte 3x más.

**KPIs de éxito:**
- Reviews promedio visible en ≥ 80% de productos
- Tiempo promedio de búsqueda de producto < 5 segundos
- Organic traffic +30% en 90 días (SEO)

---

## Requerimientos Técnicos

### F2-01: Sistema de Reviews

**Estrategia:** localStorage en primera iteración → API route en segunda.

Nuevo tipo:
```typescript
interface ProductReview {
  id: string            // uuid generado en cliente
  productId: number
  author: string
  rating: number        // 1-5
  comment: string
  date: string          // ISO 8601
}
```

- Nuevo componente `components/product-reviews.tsx`
- Almacenamiento: `localStorage.setItem('aquiles-reviews', JSON.stringify(reviews))`
- Mostrar rating promedio en card de producto con estrellas (ya existe `Star` de lucide en `featured-products.tsx:6`)
- Formulario de review: nombre, rating (stars clickeables), comentario
- Validación con Zod + React Hook Form (ya instalados en `package.json`)

### F2-02: Instagram Feed

- `components/social-section.tsx` ya existe — descomentar en `app/page.tsx:41`
- Revisar y mejorar el componente (actualmente el contenido está oculto)
- Añadir título de sección, grid de 6 imágenes recientes vía Instagram embed o imágenes estáticas
- CTA: "SEGUINOS @aquiles.indumentaria"

### F2-03: Buscador Inteligente

**Problema actual:** El buscador en `components/navbar.tsx:101` es hash-based y redirige a `featured-products.tsx`. No hay debounce ni sugerencias.

**Solución:**
- Instalar `fuse.js` (lightweight fuzzy search, ~24kb)
- Mover array `products` a `lib/products.ts` (shared entre componentes)
- En navbar: al escribir, mostrar dropdown con máx 5 resultados en tiempo real
- Debounce de 200ms para no disparar en cada tecla
- Al seleccionar resultado: scroll a la sección + highlight del producto con borde celeste temporal

### F2-04: SEO Técnico

**Estado actual:** `app/page.tsx` tiene JSON-LD básico. `app/sitemap.ts` y `app/robots.ts` ya existen.

**Mejoras:**
- Agregar `generateMetadata()` en `app/layout.tsx` con OG images dinámicas
- Crear páginas de categoría: `app/categoria/[slug]/page.tsx` (seleccion-argentina, retro, etc.)
- Cada página de categoría tiene su propia metadata, H1, y lista de productos de esa categoría
- Actualizar `app/sitemap.ts` para incluir las URLs de categorías

### F2-05: Info de Envíos en Checkout

- En `components/cart-sidebar.tsx:101` ya hay un aviso de guía de tallas
- Ampliar para mostrar: "Envíos a todo el país. Entrega 3-7 días hábiles."
- Añadir icono de camión (Truck de lucide-react)
- Link a `/ayuda#envios` (ya existe la página)

---

## Cambios en Base de Datos / Arquitectura

### Extracción de productos a `lib/products.ts`

Hoy los productos están hardcodeados en `components/featured-products.tsx:9`. Para compartirlos con el buscador y las páginas de categoría, deben moverse a un archivo central:

```
lib/
  products.ts     ← array de productos (source of truth)
  reviews.ts      ← helpers de localStorage para reviews
```

---

## Objetivos de Negocio

| Objetivo | Métrica |
|---|---|
| Prueba social visible | Reviews con rating en cada producto |
| Reducir "¿tienen en mi talle?" en WA | Buscador rápido + stock visible |
| Atraer tráfico orgánico | Páginas de categoría indexables |
| Transparencia sobre envíos | Info de envío antes de confirmar pedido |
