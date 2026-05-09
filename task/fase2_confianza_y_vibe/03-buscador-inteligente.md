# F2-03: Buscador en Tiempo Real con Sugerencias

**Prioridad:** 🟡 MEDIA  
**Estado:** Pendiente  
**Depende de:** F1-01 (necesita `lib/products.ts`)  
**Estimado:** 3 horas

## El Problema

El buscador actual en `components/navbar.tsx:101` funciona así:
1. Usuario escribe "marado"
2. Presiona Enter
3. La URL cambia a `#search=marado`
4. `featured-products.tsx` escucha el hashchange y filtra
5. La página hace scroll a `#productos`

Problemas: sin debounce, sin sugerencias, sin feedback inmediato, no funciona si el usuario está en otra página.

## Análisis Técnico

### Stack elegido

`fuse.js` — fuzzy search en cliente, ~24kb gzipped. No requiere servidor.

```bash
pnpm add fuse.js
```

### Arquitectura nueva

```
components/
  navbar.tsx          ← trigger del buscador (botón lupa)
  search-modal.tsx    ← nuevo: modal con input + resultados en vivo
lib/
  products.ts         ← array de productos (source of truth, creado en F1-01)
  search.ts           ← instancia de Fuse.js
```

El buscador pasa de inline en el navbar a un **modal** (Dialog de Radix, ya instalado). Patrón estándar: Command+K en desktop.

## Pasos de Implementación

- [ ] **Instalar Fuse.js**
  ```bash
  pnpm add fuse.js
  ```

- [ ] **Crear `lib/search.ts`**
  ```typescript
  import Fuse from 'fuse.js'
  import { products } from './products'
  
  export const fuse = new Fuse(products, {
    keys: ['name', 'team'],
    threshold: 0.3,         // 0=exact, 1=anything
    includeScore: true,
  })
  
  export function searchProducts(query: string) {
    if (!query.trim()) return products.slice(0, 6)
    return fuse.search(query).map(r => r.item).slice(0, 6)
  }
  ```

- [ ] **Crear `components/search-modal.tsx`**
  - Dialog con input autoFocus
  - `onChange` con debounce 150ms usando `useCallback` + `useRef` (sin librería extra)
  - Resultados: lista de hasta 6 productos con imagen thumbnail (40x40), nombre y equipo
  - Click en resultado: cerrar modal + scroll a `#productos` + aplicar filtro de categoría
  - Empty state: "No encontramos resultados para 'X'. Probá con otro término."
  - Atajo de teclado: `Cmd+K` / `Ctrl+K` para abrir

- [ ] **Actualizar `components/navbar.tsx`**
  - Reemplazar el input inline (líneas `101-127`) por: `<SearchModal />`
  - El botón lupa (línea `129`) abre el modal en lugar de expandir el input
  - Simplifica mucho el código del navbar

- [ ] **Agregar atajo de teclado global**
  ```typescript
  // En search-modal.tsx
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
  ```

## Checklist de Validación

- [ ] La búsqueda "marrado" encuentra "Maradona" (fuzzy)
- [ ] La búsqueda "boca" muestra todos los productos de Boca
- [ ] Debounce: no se busca en cada tecla, sino 150ms después de parar
- [ ] Cmd+K / Ctrl+K abre el modal
- [ ] Funciona desde cualquier página del sitio
- [ ] Sin `fuse.js` crash en SSR (usar `'use client'` en el componente)
