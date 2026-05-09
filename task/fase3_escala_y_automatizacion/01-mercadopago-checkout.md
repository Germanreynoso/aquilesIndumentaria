# F3-01: Integración MercadoPago Checkout Pro

**Prioridad:** 🔴 ALTA (dentro de Fase 3)  
**Estado:** Pendiente  
**Prerequisito:** Cuenta de vendedor MP verificada + credenciales de producción  
**Estimado:** 6-8 horas

## El Problema

Hoy el 100% de las transacciones pasa por WhatsApp → coordinación manual → pago por transferencia. Sin cobro digital:
- El dueño pierde ventas fuera de horario
- No hay historial de transacciones automático
- El ticket promedio es más bajo (sin cuotas)

## Análisis Técnico

### Variables de entorno necesarias

```bash
# .env.local
MERCADOPAGO_ACCESS_TOKEN=APP_USR-...   # Backend
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=APP_USR-...  # Frontend
```

### Flujo completo

```
[Cart Sidebar]
    ↓ Click "PAGAR CON MP"
[POST /api/checkout]
    ↓ Crea preference en MP API
    ↓ Retorna { init_point: "https://mp.com/checkout/..." }
[Redirect a init_point]
    ↓ Usuario paga en MP
[MP redirecta a /gracias?payment_id=...]
[app/gracias/page.tsx]
    ↓ Muestra confirmación + vacía carrito
```

### SDK

```bash
pnpm add mercadopago   # SDK oficial de MP para Node.js
```

## Pasos de Implementación

- [ ] **Crear `app/api/checkout/route.ts`**
  ```typescript
  import MercadoPago from 'mercadopago'
  import { CartItem } from '@/components/cart-context'

  export async function POST(request: Request) {
    const { items }: { items: CartItem[] } = await request.json()
    
    const mp = new MercadoPago({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN! })
    
    const preference = await mp.preferences.create({
      items: items.map(item => ({
        title: `${item.name} (Talle ${item.selectedSize})`,
        quantity: item.quantity,
        unit_price: item.price,
        currency_id: 'ARS',
      })),
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_URL}/gracias`,
        failure: `${process.env.NEXT_PUBLIC_URL}/error-pago`,
        pending: `${process.env.NEXT_PUBLIC_URL}/pago-pendiente`,
      },
      auto_return: 'approved',
      statement_descriptor: 'AQUILES INDUMENTARIA',
    })
    
    return Response.json({ init_point: preference.init_point })
  }
  ```

- [ ] **Actualizar `components/cart-sidebar.tsx`**
  - Agregar botón "PAGAR CON MERCADOPAGO" sobre el botón de WhatsApp
  - Botón MP: fondo azul MP (`#009EE3`)
  - Loading state mientras se crea la preferencia
  - Error handling: si falla la API, mostrar toast y mantener el botón de WA

- [ ] **Crear `app/gracias/page.tsx`**
  - Mostrar: ícono de check, "¡Pago confirmado!", resumen del pedido
  - Limpiar el carrito: llamar a `clearCart()` (nueva función en cart-context)
  - Botón: "SEGUIR COMPRANDO" → volver a inicio

- [ ] **Crear `app/error-pago/page.tsx`** y **`app/pago-pendiente/page.tsx`**
  - Error: "Tu pago no fue procesado. Intentá de nuevo o consultanos por WhatsApp."
  - Pendiente: "Tu pago está siendo procesado. Te notificaremos por email."

- [ ] **Webhooks MP (opcional en MVP)**
  - `app/api/webhooks/mercadopago/route.ts`
  - Verificar firma HMAC de MP
  - Actualizar stock cuando el pago es aprobado

## Checklist de Validación

- [ ] Funciona en modo sandbox con tarjetas de prueba de MP
- [ ] El carrito se vacía después de pago exitoso
- [ ] Los precios en la preferencia de MP coinciden con los del carrito
- [ ] Error handling: si MP cae, el botón de WA sigue funcionando
- [ ] `pnpm build` sin errores
