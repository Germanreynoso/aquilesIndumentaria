# F1-04: Modal de Guía de Talles

**Prioridad:** 🟡 MEDIA  
**Estado:** Pendiente  
**Estimado:** 2 horas

## El Problema

La guía de talles existe en `/ayuda#tallas` pero es una página separada. Cuando el usuario está en el carrito o mirando un producto, tiene que abrir otra pestaña para ver las medidas. Fricción = abandono.

En `components/cart-sidebar.tsx:103` ya hay un link a `/ayuda#tallas` — ese es el trigger natural para el modal.

## Análisis Técnico

### Componente a crear

`components/size-guide-modal.tsx` — Dialog de Radix UI (ya instalado) con tabla de medidas.

### Triggers

1. Link "Guía de Tallas" en `components/cart-sidebar.tsx:103`
2. Link "¿Cuál es mi talle?" junto al selector de talles en `components/size-selector.tsx` (F1-02)

## Pasos de Implementación

- [ ] **Crear `components/size-guide-modal.tsx`**
  - Usar `Dialog` de `components/ui/dialog.tsx`
  - Contenido: dos tablas — adultos e infantil
  - Tabla Adultos:

    | Talle | Contorno Pecho | Largo Espalda | Hombros |
    |-------|---------------|---------------|---------|
    | S     | 88-92 cm      | 68 cm         | 42 cm   |
    | M     | 92-96 cm      | 70 cm         | 44 cm   |
    | L     | 96-102 cm     | 72 cm         | 46 cm   |
    | XL    | 102-108 cm    | 74 cm         | 48 cm   |
    | XXL   | 108-116 cm    | 76 cm         | 50 cm   |

  - Tabla Infantil: talles 6 al 16 con medidas en cm
  - Consejo al pie: "Si dudás entre dos talles, elegí el más grande"

- [ ] **Exportar como trigger component**
  ```tsx
  export function SizeGuideModal({ trigger }: { trigger: React.ReactNode }) {
    return (
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>...</DialogContent>
      </Dialog>
    )
  }
  ```

- [ ] **Integrar en `components/cart-sidebar.tsx:103`**
  - Reemplazar `<a href="/ayuda#tallas">Guía de Tallas</a>` con `<SizeGuideModal trigger={<button>Guía de Tallas</button>} />`

- [ ] **Integrar en `components/size-selector.tsx`** (cuando exista)
  - Añadir link "¿No sabés tu talle?" debajo de los botones de talle

## Checklist de Validación

- [ ] Modal abre sin navegar a otra página
- [ ] Tabla se ve bien en mobile (scroll horizontal si necesario)
- [ ] No bloquea el foco del cart sidebar
