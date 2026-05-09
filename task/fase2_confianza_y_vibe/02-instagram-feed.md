# F2-02: Activar y Mejorar Instagram Feed

**Prioridad:** 🟡 MEDIA  
**Estado:** Pendiente  
**Estimado:** 2 horas

## El Problema

`components/social-section.tsx` existe pero está comentada en `app/page.tsx:41`. El feed de Instagram es prueba social inmediata y gratuita — no activarlo es dejar dinero sobre la mesa.

## Análisis Técnico

### Estado actual

```tsx
// app/page.tsx:41
{/* <SocialSection /> */}
```

La razón por la que está comentada no está documentada. Posiblemente el componente no está terminado o tiene bugs visuales.

### Opciones de implementación del feed

**Opción A — Embeds manuales (recomendada):**
- Usar `<blockquote class="instagram-media">` con los últimos 6 posts
- Ventaja: sin API, sin tokens que expiran
- Desventaja: actualización manual cada vez que se sube contenido

**Opción B — API de Instagram Graph:**
- Requiere Facebook App + token de larga duración (60 días)
- Ventaja: feed automático
- Desventaja: complejidad de setup y tokens que expiran

**Decisión:** Opción A para MVP. El feed no cambia tan seguido como para necesitar automatización.

## Pasos de Implementación

- [ ] **Leer `components/social-section.tsx`** para entender qué hay actualmente

- [ ] **Revisar y mejorar `components/social-section.tsx`**
  - Estructura: título de sección + grid 3x2 de posts + CTA
  - Grid responsive: 3 cols en desktop, 2 en tablet, 1 en mobile
  - Cada post: imagen cuadrada con hover overlay mostrando íconos de like y comentario
  - CTA final: botón "SEGUINOS EN INSTAGRAM @aquiles.indumentaria"
  - Usar imágenes de `/public/images/products/` como placeholder si no hay screenshots de IG

- [ ] **Descomentar en `app/page.tsx:41`**
  - Ubicar entre `<CinematicBanner />` y `<Newsletter />` (posición actual)
  - Alternativa: mover después de `<FeaturedProducts />` para prueba social más cerca del catálogo

- [ ] **Añadir script de embed de Instagram**
  - En `app/layout.tsx`: agregar `<Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />`
  - Solo si se usan embeds oficiales (Opción A)

## Checklist de Validación

- [ ] El feed se ve sin errores en desktop y mobile
- [ ] Las imágenes cargan sin afectar el LCP de la página
- [ ] El link al perfil de Instagram abre en nueva pestaña
- [ ] No hay errores en consola del browser
