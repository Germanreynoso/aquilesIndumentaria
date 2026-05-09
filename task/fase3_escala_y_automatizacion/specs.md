# Specs — Fase 3: Escala y Automatización

## Contexto de Negocio

Con la base de conversión y confianza consolidada (Fases 1 y 2), esta fase habilita el crecimiento sostenible: pagos digitales, marketing automatizado y herramientas de gestión para el equipo.

**Prerequisitos:** Fase 1 y Fase 2 deben estar completas antes de iniciar esta fase.

---

## Requerimientos Técnicos

### F3-01: MercadoPago Checkout Pro

**Prerequisitos:** Cuenta de vendedor MercadoPago verificada + credenciales de producción.

Variables de entorno requeridas:
```
MERCADOPAGO_ACCESS_TOKEN=APP_USR-...
MERCADOPAGO_PUBLIC_KEY=APP_USR-...
```

Nueva API route: `app/api/checkout/route.ts`
```typescript
// POST /api/checkout
// Body: { items: CartItem[] }
// Returns: { init_point: string }  ← URL de pago de MP
```

Flujo:
1. `cart-sidebar.tsx` muestra dos botones: "WHATSAPP" (existente) + "PAGAR CON MERCADOPAGO" (nuevo)
2. Click en MP → POST `/api/checkout` → redirect a `init_point`
3. MP redirige a `/gracias?payment_id=...` o `/error-pago`
4. Nueva página `app/gracias/page.tsx` con mensaje de confirmación

Dependencia npm: `@mercadopago/sdk-js` (frontend) + `mercadopago` (backend SDK oficial)

### F3-02: Sistema de Drops

Componente `components/drop-countdown.tsx`:
- Fecha de lanzamiento configurable desde `lib/drops.ts`
- Countdown en tiempo real (días, horas, minutos, segundos)
- Formulario de notificación: email → POST `/api/subscribe` (ya existe con Resend)
- Badge "DROP AGOTADO" / "DROP ACTIVO" / "PRÓXIMAMENTE"
- Mostrar en Hero section si hay un drop activo

```typescript
// lib/drops.ts
export const upcomingDrop = {
  name: "Colección Paso Corto '26",
  releaseDate: "2026-06-01T10:00:00-03:00",
  previewImage: "/images/drops/paso-corto-preview.jpg",
  active: true,
}
```

### F3-03: Admin Panel

**Estrategia:** Route handler protegido por secret token → no necesita auth completo en MVP.

```
app/admin/
  page.tsx           ← Dashboard: total productos, reviews, suscriptores
  productos/page.tsx ← CRUD de productos (modifica lib/products.ts via API)
  layout.tsx         ← Middleware de auth básico con ADMIN_SECRET_TOKEN
```

Protección:
```typescript
// app/admin/layout.tsx
const token = request.cookies.get('admin_token')
if (token?.value !== process.env.ADMIN_SECRET_TOKEN) redirect('/admin/login')
```

Funcionalidades MVP:
- Ver lista de productos con stock actual
- Editar precio de un producto
- Ver reviews y moderar (aprobar/rechazar)
- Ver suscriptores al newsletter (count desde Resend API)

### F3-04: IA Outfits con Claude API

Nueva route: `app/api/outfit/route.ts`

```typescript
// POST /api/outfit
// Body: { productId: number, category: string }
// Returns: { suggestions: Product[], reasoning: string }
```

Usa Claude API (modelo `claude-haiku-4-5-20251001` para velocidad/costo):
- Recibe el producto actual y la categoría
- Retorna IDs de 2-3 productos complementarios
- Muestra en la card del producto: "COMPLETÁ EL LOOK" con mini-cards

Variables de entorno: `ANTHROPIC_API_KEY`

---

## Objetivos de Negocio

| Objetivo | Métrica |
|---|---|
| Habilitar cobro digital sin WhatsApp | % ventas por MP |
| Crear FOMO y urgencia real con Drops | Lista de notificación pre-drop |
| Reducir tiempo de gestión del equipo | Admin: 30min/día vs 2h/día actual |
| Aumentar ticket promedio | Upsell outfits +15% ticket |
