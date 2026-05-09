# F3-03: Admin Panel Básico

**Prioridad:** 🟡 MEDIA  
**Estado:** Pendiente  
**Estimado:** 8-10 horas

## El Problema

Hoy para actualizar un precio o marcar un producto como agotado, hay que editar el código fuente. Eso no escala y excluye a cualquier persona no técnica del equipo.

## Análisis Técnico

### Estrategia de auth (sin Clerk/Auth.js en MVP)

Secret token en cookie httpOnly. Simple y seguro para un panel de uso interno.

```bash
# .env.local
ADMIN_SECRET_TOKEN=aquiles_admin_2026_secret
```

### Persistencia de datos

En MVP: los productos se guardan en `lib/products.ts` (archivo estático). Las ediciones del admin modifican un archivo JSON `data/products.json` que se lee en runtime.

**Evolución futura:** SQLite con Drizzle ORM o Supabase.

### Estructura de rutas

```
app/
  admin/
    layout.tsx         ← auth guard
    page.tsx           ← dashboard
    login/page.tsx     ← formulario de login
    productos/page.tsx ← lista + edición de productos
    reviews/page.tsx   ← moderación de reviews
```

## Pasos de Implementación

- [ ] **Crear `app/admin/login/page.tsx`**
  - Formulario: campo de contraseña
  - Submit → POST `/api/admin/login` → si token correcto, set cookie `admin_token` (httpOnly, sameSite strict)
  - Redirect a `/admin`

- [ ] **Crear `app/admin/layout.tsx`** con auth guard
  - Lee cookie `admin_token`
  - Si no coincide con `ADMIN_SECRET_TOKEN` → redirect a `/admin/login`
  - Navbar de admin: Dashboard | Productos | Reviews | Cerrar sesión

- [ ] **Crear `app/admin/page.tsx`** (Dashboard)
  - Cards de stats: Total productos, Total reviews, Suscriptores newsletter
  - Suscriptores: GET a Resend API con `RESEND_API_KEY` (ya configurada)
  - Reviews: count desde `data/reviews.json`

- [ ] **Crear `app/admin/productos/page.tsx`**
  - Tabla con: imagen, nombre, precio, stock por talle, badge
  - Click en fila → formulario inline para editar precio y stock
  - Submit → POST `/api/admin/productos/[id]` → actualiza `data/products.json`
  - Cambios se reflejan en el sitio en el próximo request (no necesita redeploy)

- [ ] **Crear `app/admin/reviews/page.tsx`**
  - Lista de reviews pendientes de aprobación
  - Botones: Aprobar / Rechazar
  - Reviews aprobadas → `verified: true` en `data/reviews.json`

- [ ] **Crear routes de API admin**
  ```
  app/api/admin/
    login/route.ts
    productos/[id]/route.ts
    reviews/[id]/route.ts
  ```
  Todas verifican el token antes de proceder.

## Checklist de Validación

- [ ] `/admin` redirige a login si no está autenticado
- [ ] Después de login, el cookie persiste 7 días
- [ ] Editar precio de un producto se refleja en el sitio sin redeploy
- [ ] El panel es funcional en mobile (el dueño puede usarlo desde el celular)
- [ ] Las rutas de API validan el token en cada request (no solo en el layout)
