# F3-04: Sugerencias de Outfit con Claude API

**Prioridad:** 🟢 BAJA  
**Estado:** Pendiente  
**Estimado:** 4 horas

## El Problema

No hay upsell. Un cliente que compra una camiseta de la Selección no sabe que también hay una pupera que la combina. El cross-sell inteligente puede aumentar el ticket promedio 15-20%.

## Análisis Técnico

### Stack

- Claude API con `claude-haiku-4-5-20251001` (rápido y económico)
- `@anthropic-ai/sdk` (instalar)
- Respuesta cacheada por producto en `lib/outfit-cache.ts` (evitar llamadas repetidas)

```bash
pnpm add @anthropic-ai/sdk
```

```bash
# .env.local
ANTHROPIC_API_KEY=sk-ant-...
```

### Arquitectura

```
app/api/outfit/route.ts    ← POST endpoint
lib/outfit-cache.ts        ← cache en memoria (por process)
components/outfit-suggestions.tsx  ← UI "COMPLETÁ EL LOOK"
```

### Prompt de Claude

```typescript
const prompt = `
Sos un experto en moda deportiva argentina. 
Dado el siguiente producto: "${product.name}" de la categoría "${product.team}",
sugerí 2-3 productos complementarios de esta lista que harían un buen outfit:

${otherProducts.map(p => `- ID ${p.id}: ${p.name} (${p.team})`).join('\n')}

Responder SOLO con un JSON: { "suggestions": [id1, id2], "reasoning": "..." }
`
```

## Pasos de Implementación

- [ ] **Instalar `@anthropic-ai/sdk`**
  ```bash
  pnpm add @anthropic-ai/sdk
  ```

- [ ] **Crear `app/api/outfit/route.ts`**
  - POST con `{ productId: number }`
  - Verificar cache antes de llamar a Claude
  - Llamar a Claude con el prompt de sugerencias
  - Parsear JSON de respuesta
  - Guardar en cache
  - Retornar: `{ suggestions: Product[], reasoning: string }`

- [ ] **Crear `lib/outfit-cache.ts`**
  - Map en memoria: `productId → { suggestions, cachedAt }`
  - TTL: 1 hora (en un serverless environment, el cache se resetea por cold start; aceptable)

- [ ] **Crear `components/outfit-suggestions.tsx`**
  - Props: `productId: number`
  - Fetch a `/api/outfit` al montar
  - Loading: skeleton cards
  - UI: sección "COMPLETÁ EL LOOK" con 2-3 mini-cards horizontales
  - Cada mini-card: imagen, nombre, botón "AÑADIR"
  - Mostrar debajo de la info del producto en la card hover (desktop)

- [ ] **Integrar en `components/featured-products.tsx`**
  - En el hover overlay de desktop, debajo del botón "AÑADIR AL CARRITO"
  - Lazy: solo cargar cuando el usuario hace hover por más de 500ms
  - Mobile: no mostrar en el estado actual (demasiado complejo para la card pequeña)

## Checklist de Validación

- [ ] Las sugerencias tienen sentido (camiseta Argentina → sugiere pupera Argentina, no remera waffle)
- [ ] El cache evita llamadas repetidas a Claude
- [ ] Si la API de Claude falla, el componente no muestra nada (no rompe la página)
- [ ] El costo estimado de Claude está dentro de presupuesto (haiku: ~$0.001 por request)
- [ ] `pnpm build` sin errores
