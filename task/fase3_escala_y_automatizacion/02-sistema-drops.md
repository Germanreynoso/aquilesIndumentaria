# F3-02: Sistema de Drops con Countdown

**Prioridad:** 🟡 MEDIA  
**Estado:** Pendiente  
**Estimado:** 4 horas

## El Problema

Los drops (lanzamientos de edición limitada) son el mecanismo de FOMO más potente para una marca de indumentaria. Sin un countdown visible, los clientes no tienen urgencia de volver al sitio.

## Análisis Técnico

### Configuración de drops

```typescript
// lib/drops.ts
export interface Drop {
  id: string
  name: string
  releaseDate: string      // ISO 8601 con timezone
  previewImage?: string
  description: string
  active: boolean          // false = no mostrar nada
  status: 'upcoming' | 'live' | 'sold_out'
}

export const drops: Drop[] = [
  {
    id: 'paso-corto-26',
    name: "Colección Paso Corto '26",
    releaseDate: '2026-06-01T10:00:00-03:00',
    previewImage: '/images/drops/paso-corto.jpg',
    description: 'La nueva colección llega con todo.',
    active: true,
    status: 'upcoming',
  }
]

export function getActiveDrop(): Drop | null
export function getDropStatus(drop: Drop): 'upcoming' | 'live' | 'sold_out'
```

### Integración en Hero

Si hay un drop activo (próximo o en vivo), reemplazar el badge "COLECCIÓN EDICIÓN MULETA 2025" en `components/hero.tsx:85` por el badge del drop con countdown.

## Pasos de Implementación

- [ ] **Crear `lib/drops.ts`** con tipos y helpers

- [ ] **Crear `components/drop-countdown.tsx`**
  - Props: `releaseDate: string`
  - Hook `useCountdown(releaseDate)` — calcula días/horas/minutos/segundos con `setInterval`
  - UI: cuatro bloques con número grande + label (DÍAS / HS / MIN / SEG)
  - Animación: flip card cuando el número cambia (CSS animation)
  - Si llegó la fecha: mostrar "DISPONIBLE AHORA" en verde pulsante

- [ ] **Crear `components/drop-banner.tsx`**
  - Banner full-width para drops en vivo: fondo rojo con texto "DISPONIBLE AHORA — HASTA AGOTAR STOCK"
  - Se muestra debajo del `<Navbar />` en `app/layout.tsx` si hay drop activo

- [ ] **Integrar en `components/hero.tsx`**
  - Si hay drop próximo: mostrar `<DropCountdown />` debajo del badge
  - Formulario de notificación: email → POST `/api/subscribe` (ya existe en Resend)
  - Texto: "Avisame cuando salga" → reutilizar el componente `<Newsletter />`

- [ ] **Integrar en `app/layout.tsx`**
  - `<DropBanner />` debajo del Navbar si `getActiveDrop()?.status === 'live'`

## Checklist de Validación

- [ ] El countdown muestra días/horas/minutos/segundos en tiempo real
- [ ] Al llegar a 0, cambia a "DISPONIBLE AHORA"
- [ ] El formulario de notificación usa la ruta `/api/subscribe` existente
- [ ] Funciona correctamente con timezone de Argentina (UTC-3)
- [ ] Si no hay drop activo, no se muestra nada (sin cambios visuales)
