# F2-01: Sistema de Reviews de Productos

**Prioridad:** 🔴 ALTA  
**Estado:** Pendiente  
**Estimado:** 4-5 horas

## El Problema

No hay prueba social. Un cliente nuevo no sabe si otros compraron y quedaron satisfechos. Las reviews son el elemento #1 de confianza en e-commerce según múltiples estudios.

## Análisis Técnico

### Estrategia de persistencia (sin backend)

**Iteración 1:** localStorage — rápido, sin servidor, suficiente para el volumen actual.

**Iteración 2 (futura):** API route → archivo JSON o base de datos simple.

```typescript
// lib/reviews.ts
export interface ProductReview {
  id: string
  productId: number
  author: string       // nombre visible (no email)
  rating: number       // 1-5
  comment: string
  date: string         // ISO 8601
  verified: boolean    // false en localStorage, true si compró via MP (F3-01)
}

const STORAGE_KEY = 'aquiles-reviews'

export function getReviews(productId?: number): ProductReview[]
export function addReview(review: Omit<ProductReview, 'id' | 'date'>): void
export function getAverageRating(productId: number): number
export function getReviewCount(productId: number): number
```

### Integración en la UI

**En card de producto (`featured-products.tsx`):**
- Rating promedio con estrellas (★★★★☆) debajo del nombre
- Número de reviews: "(12 reseñas)"
- Ícono `Star` ya importado en `featured-products.tsx:6`

**En card expandida / futura página de producto:**
- Lista de reviews con nombre, fecha, rating y comentario
- Formulario para dejar review

## Pasos de Implementación

- [ ] **Crear `lib/reviews.ts`** con el tipo `ProductReview` y helpers de localStorage

- [ ] **Crear `components/star-rating.tsx`**
  - Props: `rating: number`, `interactive?: boolean`, `onRate?: (rating: number) => void`
  - Non-interactive: muestra estrellas rellenas/vacías según rating
  - Interactive: estrellas clickeables con hover effect
  - Usar `Star` de lucide-react (ya importado en featured-products)

- [ ] **Crear `components/product-reviews.tsx`**
  - Lista scrolleable de reviews con nombre, fecha, rating, comentario
  - Badge "Compra verificada" si `verified: true`
  - Formulario con: nombre (input), rating (StarRating interactivo), comentario (textarea)
  - Validación con Zod: nombre min 2 chars, rating required, comentario min 10 chars
  - Submit → `addReview()` + resetear form + toast "Gracias por tu reseña"

- [ ] **Integrar rating en `components/featured-products.tsx`**
  - En la sección "Product info" (línea `323`): agregar `<StarRating rating={averageRating} />` + "(N reseñas)"
  - Datos: `getAverageRating(product.id)` y `getReviewCount(product.id)` desde `lib/reviews.ts`
  - Si 0 reviews: mostrar "Sé el primero en reseñar"

- [ ] **Sembrar datos iniciales (seed)**
  - Crear `lib/review-seeds.ts` con 3-5 reviews reales por producto popular
  - Solo se muestran si no hay reviews en localStorage (primera visita)
  - Esto asegura que un nuevo visitante no vea el sitio vacío

## Checklist de Validación

- [ ] Las estrellas se muestran en la card de cada producto
- [ ] Se puede dejar una review sin crear cuenta
- [ ] Las reviews persisten entre sesiones (localStorage)
- [ ] El formulario valida correctamente (Zod)
- [ ] Las seeds se cargan en primera visita
