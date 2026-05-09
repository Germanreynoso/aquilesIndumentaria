# F2-05: Info de Envíos Integrada en el Cart Sidebar

**Prioridad:** 🟢 BAJA  
**Estado:** Pendiente  
**Estimado:** 1 hora

## El Problema

La info de envíos existe en `/ayuda#envios` pero el cliente tiene que salir del carrito para verla. En mobile esto suele romper el flujo de compra. La información de "cuándo llega" es un factor de conversión clave.

## Análisis Técnico

En `components/cart-sidebar.tsx:101` ya hay un aviso pequeño que linkea a `/ayuda#tallas` y `/ayuda#envios`. Ampliar esa sección sin hacerla pesada.

## Pasos de Implementación

- [ ] **Actualizar la sección de aviso en `components/cart-sidebar.tsx:101`**
  - Agregar fila con ícono `Truck` de lucide-react
  - Texto: "📦 Envíos a todo el país — 3 a 7 días hábiles"
  - Segunda línea: "Gratis en compras mayores a $X" (definir con el dueño)
  - Tercer línea: link a `/ayuda#envios` → "Ver más info de envíos"

- [ ] **Añadir Accordion para expandir detalles (opcional)**
  - Usar `Accordion` de `components/ui/accordion.tsx` (ya instalado)
  - Collapsed: "Envíos a todo el país →"
  - Expanded: métodos de envío, plazos, costos

- [ ] **Consistencia con `/ayuda#envios`**
  - La info mostrada en el sidebar debe coincidir exactamente con la de la página de ayuda
  - Si la info cambia, actualizar ambos lugares (o extraer a una constante en `lib/config.ts`)

## Checklist de Validación

- [ ] El ícono de camión se ve en el sidebar
- [ ] El texto es consistente con `/ayuda#envios`
- [ ] No agrega más de 60px de altura al sidebar (no empuja el botón de WA fuera del viewport)
