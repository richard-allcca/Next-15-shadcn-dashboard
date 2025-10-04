# Next.js 15 Shadcn Dashboard

Dashboard moderno construido con [Next.js 15](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [TanStack Table](https://tanstack.com/table/), [Tailwind CSS](https://tailwindcss.com/), y otras librerías de última generación.

## Características principales

- **Next.js 15** con app router y soporte SSR/SSG.
- **Componentes UI reutilizables** (shadcn/ui, Radix UI).
- **Tabla de datos avanzada** con filtrado, paginación, selección y acciones (TanStack Table).
- **Tailwind CSS** para estilos rápidos y personalizables.
- **Notificaciones** con Sonner.
- **Formularios** con React Hook Form y validación con Zod.
- **Dark mode** y soporte de temas.

## Estructura del proyecto

- `src/app/` — Rutas y páginas principales del dashboard.
- `src/components/ui/` — Componentes UI reutilizables (botón, badge, tabla, etc).
- `src/data/` — Datos de ejemplo (mock) para la tabla de pagos.
- `src/lib/` — Utilidades compartidas.

## Instalación y uso

1. Instala dependencias:

 ```bash
 npm install
 # o
 yarn install
 # o
 pnpm install
 # o
 bun install
 ```

2. Inicia el servidor de desarrollo:

 ```bash
 npm run dev
 ```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización

- Modifica los componentes en `src/components/ui/` para adaptar el diseño.
- Cambia los datos de ejemplo en `src/data/payment.data.ts`.
- Agrega nuevas páginas o rutas en `src/app/dashboard/`.

## Principales dependencias

- `next`, `react`, `tailwindcss`, `@tanstack/react-table`, `@radix-ui/*`, `shadcn/ui`, `sonner`, `zod`, `react-hook-form`, `lucide-react`.

## Recursos útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [TanStack Table](https://tanstack.com/table/latest/docs/guide/column-filtering#filterfns)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

Desarrollado por [richard-allcca](https://github.com/richard-allcca)
[Shadcn UI](https://ui.shadcn.com/docs/installation)
