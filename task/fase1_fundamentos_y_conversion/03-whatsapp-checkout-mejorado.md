# F1-03: Mensaje WhatsApp con Precio, Talle y Total

**Prioridad:** 🔴 ALTA  
**Estado:** Pendiente  
**Depende de:** F1-01, F1-02  
**Estimado:** 1 hora

## El Problema

La función `handleWhatsAppCheckout` en `components/cart-sidebar.tsx:11` genera un mensaje básico sin precio ni talles específicos:

```
Hola! Quisiera consultar por los siguientes productos:
- 1x Camiseta AFA Entrenamiento
```

El vendedor recibe esto y tiene que responder "¿en qué talle?" y "¿cuánto pagás?". Son dos idas y vueltas extra que reducen conversión.

## Análisis Técnico

### Archivo único a modificar

`components/cart-sidebar.tsx` — función `handleWhatsAppCheckout` (línea 11).

El contexto ya proveerá `totalPrice` después de F1-01.

## Pasos de Implementación

- [ ] **Actualizar `handleWhatsAppCheckout` en `components/cart-sidebar.tsx:11`**

Nuevo formato del mensaje:
```
Hola Aquiles! Quiero consultar disponibilidad para lo siguiente 👇

🛒 MI PEDIDO:
• 2x Camiseta AFA Entrenamiento | Talle: M | $30.000
• 1x Remera Oversize Estampada | Talle: L | $14.000

💰 TOTAL: $44.000

¿Tienen disponibilidad? Muchas gracias!
```

- [ ] **Formatear precios en pesos argentinos**
  - Usar `Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })`
  - Resultado: `$44.000` (sin decimales para claridad)

- [ ] **Importar `totalPrice` del CartContext**
  - En `components/cart-sidebar.tsx:9`: agregar `totalPrice` al destructuring de `useCart()`
  - Mostrar `totalPrice` en el footer del sidebar (línea `100`) antes del botón

- [ ] **Añadir número de WhatsApp en `.env.local`**
  - Actualmente hardcodeado en línea `15`: `"5493816464923"`
  - Mover a variable de entorno o constante en `lib/config.ts`

## Checklist de Validación

- [ ] El mensaje incluye talle, precio unitario y total
- [ ] Los precios están formateados como `$15.000` (sin decimales)
- [ ] El link de WhatsApp abre correctamente en mobile y desktop
- [ ] El total en el sidebar coincide con el total en el mensaje
