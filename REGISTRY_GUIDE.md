# Guía: Cómo usar el Registry Personalizado

Este proyecto incluye un **registry personalizado** de componentes siguiendo el sistema de [shadcn/ui Registry](https://ui.shadcn.com/docs/registry).

## ¿Qué es un Registry?

Un registry es un sistema de distribución de código que te permite compartir componentes, hooks, páginas y otros archivos entre proyectos. shadcn/ui permite crear tu propio registry para distribuir componentes personalizados.

## Estructura del Registry

```
registry/
├── registry.json              # Configuración principal
├── components/
│   └── custom/                # Componentes personalizados
│       ├── hero-section.json
│       ├── feature-card.json
│       ├── stats-card.json
│       ├── testimonial-card.json
│       ├── pricing-card.json
│       └── badge.json
└── README.md
```

## Componentes Disponibles

### 1. **HeroSection**
Banner hero con título, descripción y botones de acción.

```bash
npx shadcn@latest add hero-section --registry ./registry
```

### 2. **FeatureCard**
Tarjeta de características con iconos.

```bash
npx shadcn@latest add feature-card --registry ./registry
```

### 3. **StatsCard**
Tarjeta para mostrar estadísticas con tendencias.

```bash
npx shadcn@latest add stats-card --registry ./registry
```

### 4. **TestimonialCard**
Tarjeta de testimonios con sistema de estrellas.

```bash
npx shadcn@latest add testimonial-card --registry ./registry
```

### 5. **PricingCard**
Tarjeta de precios con lista de características.

```bash
npx shadcn@latest add pricing-card --registry ./registry
```

### 6. **Badge**
Componente badge con múltiples variantes.

```bash
npx shadcn@latest add badge --registry ./registry
```

## Configuración para Usar el Registry

### Opción 1: Registry Local (Actual)

Los componentes ya están en `src/components/custom/` y puedes importarlos directamente:

```tsx
import { HeroSection } from '@/components/custom/hero-section'
```

### Opción 2: Usar el Registry con CLI

Para usar el registry con el CLI de shadcn, puedes configurar `components.json`:

```json
{
  "registry": "file:./registry"
}
```

Luego instalar componentes:

```bash
npx shadcn@latest add hero-section --registry ./registry
```

### Opción 3: Publicar el Registry

Si quieres compartir tu registry, puedes:

1. **Publicarlo en GitHub:**
   ```json
   {
     "registry": "https://github.com/tu-usuario/tu-registry"
   }
   ```

2. **Publicarlo en npm:**
   ```json
   {
     "registry": "npm:@tu-org/registry"
   }
   ```

3. **Hostearlo en un servidor:**
   ```json
   {
     "registry": "https://tu-dominio.com/registry"
   }
   ```

## Agregar Nuevos Componentes al Registry

1. Crea el componente en `src/components/custom/`
2. Crea el archivo JSON en `registry/components/custom/`
3. Actualiza `registry/registry.json` con la nueva entrada

Ejemplo de estructura JSON:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "name": "mi-componente",
  "type": "components:custom",
  "registryDependencies": ["card", "button"],
  "files": [
    {
      "path": "components/custom/mi-componente.tsx",
      "content": "// código del componente..."
    }
  ]
}
```

## Recursos

- [Documentación oficial de shadcn/ui Registry](https://ui.shadcn.com/docs/registry)
- [Getting Started con Registry](https://ui.shadcn.com/docs/registry/getting-started)
- [Schema de registry.json](https://ui.shadcn.com/docs/registry/registry-json)
- [Schema de registry-item.json](https://ui.shadcn.com/docs/registry/registry-item-json)

## Notas

- El registry funciona con cualquier tipo de proyecto (React, Vue, etc.)
- No está limitado solo a componentes, puedes distribuir hooks, páginas, configuraciones, etc.
- Los componentes se copian directamente a tu proyecto (no son dependencias npm)
- Puedes modificar los componentes después de instalarlos

