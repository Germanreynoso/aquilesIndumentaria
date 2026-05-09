# F2-04: SEO Técnico — Páginas de Categoría y Metadata Dinámica

**Prioridad:** 🟡 MEDIA  
**Estado:** Pendiente  
**Estimado:** 3 horas

## El Problema

Hoy el sitio tiene una sola página indexable (`/`). Los usuarios que buscan "camiseta Maradona retro Argentina" en Google no llegan a Aquiles porque no hay páginas con esas keywords en el título y H1. Todo el catálogo vive detrás de hashbang URLs (no indexadas por Google).

## Análisis Técnico

### Estado actual

- `app/page.tsx`: tiene JSON-LD básico como `ClothingStore` ✓
- `app/sitemap.ts`: existe pero solo incluye `/`, `/nosotros`, `/ayuda`
- `app/robots.ts`: existe ✓
- `app/layout.tsx`: metadata genérica

### Arquitectura nueva

```
app/
  categoria/
    [slug]/
      page.tsx        ← página estática por categoría (generateStaticParams)
  layout.tsx          ← agregar generateMetadata con OG dinámico
```

Slugs válidos: `seleccion-argentina`, `retro`, `futbol-argentino`, `urban`

## Pasos de Implementación

- [ ] **Actualizar `app/layout.tsx` metadata**
  - Título: `"Aquiles Indumentaria | Camisetas de Fútbol Argentina"`
  - Description: `"Camisetas de fútbol premium: Selección Argentina, Retro, Boca, River. Envíos a todo el país."`
  - OG image: `/og-image.jpg` (crear imagen estática 1200x630)
  - Canonical URL: `https://aquilesindumentaria.com.ar`
  - Twitter card: `summary_large_image`

- [ ] **Crear `app/categoria/[slug]/page.tsx`**
  - `generateStaticParams()`: retorna los 4 slugs de categoría
  - `generateMetadata({ params })`: title y description por categoría
    ```typescript
    const categoryMeta = {
      'seleccion-argentina': {
        title: 'Camisetas Selección Argentina | Aquiles Indumentaria',
        description: 'Camisetas oficiales de la Selección Argentina. AFA, 2026, Dibu, infantil. Envíos a todo el país.'
      },
      'retro': {
        title: 'Camisetas Retro Fútbol | Aquiles Indumentaria',
        description: 'Camisetas retro de Maradona, River, Boca. Ediciones históricas del fútbol argentino.'
      },
      // ...
    }
    ```
  - Contenido: H1 con nombre de categoría, lista de productos filtrada, breadcrumb

- [ ] **Crear `components/breadcrumb-nav.tsx`**
  - Inicio > Categoría
  - Schema JSON-LD de BreadcrumbList
  - Usar `Breadcrumb` de `components/ui/breadcrumb.tsx` (ya existe)

- [ ] **Actualizar `app/sitemap.ts`**
  - Incluir `/categoria/seleccion-argentina`, `/categoria/retro`, etc.
  - `changeFrequency: 'weekly'`, `priority: 0.8`

- [ ] **Internal linking**
  - En `components/categories.tsx`: cambiar links de hash `#seleccion-argentina` a `/categoria/seleccion-argentina`
  - En `components/navbar.tsx`: los navLinks ahora pueden apuntar a rutas reales
  - Mantener scroll-to-section en home, rutas en páginas de categoría

## Checklist de Validación

- [ ] `https://aquilesindumentaria.com.ar/categoria/retro` devuelve 200 con metadata correcta
- [ ] Google Search Console no muestra errores de crawl
- [ ] Sitemap actualizado incluye las 4 páginas de categoría
- [ ] JSON-LD válido (testear con schema.org validator)
- [ ] `pnpm build` completa sin errores
