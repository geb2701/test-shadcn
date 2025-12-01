# Cómo usar estos componentes en otra aplicación

Hay varias formas de usar estos componentes personalizados en otra aplicación. Te explico las opciones:

## Opción 1: Copiar el Registry Localmente (Más Simple)

### Paso 1: Copiar la carpeta `registry`
Copia la carpeta `registry/` completa a tu nuevo proyecto.

```
tu-nueva-app/
├── registry/
│   ├── registry.json
│   └── components/
│       └── custom/
│           ├── hero-section.json
│           ├── feature-card.json
│           └── ...
```

### Paso 2: Configurar `components.json`
En tu nueva app, asegúrate de tener `components.json` configurado. Si no lo tienes, créalo:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### Paso 3: Instalar componentes con el CLI
```bash
# Instalar un componente específico
npx shadcn@latest add hero-section --registry ./registry

# O instalar todos los componentes
npx shadcn@latest add hero-section feature-card stats-card testimonial-card pricing-card badge --registry ./registry
```

---

## Opción 2: Publicar en GitHub (Recomendado para Compartir)

### Paso 1: Crear un repositorio para el registry
1. Crea un nuevo repositorio en GitHub (ej: `mi-component-library`)
2. Sube solo la carpeta `registry/` al repositorio

### Paso 2: Configurar en la nueva app
En tu nueva aplicación, actualiza `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registry": "https://github.com/tu-usuario/mi-component-library"
}
```

### Paso 3: Instalar componentes
```bash
npx shadcn@latest add hero-section
```

El CLI usará automáticamente el registry configurado en `components.json`.

---

## Opción 3: Publicar como paquete npm

### Paso 1: Preparar el paquete
Crea un `package.json` en la carpeta `registry/`:

```json
{
  "name": "@tu-org/mi-component-library",
  "version": "1.0.0",
  "description": "Componentes personalizados basados en shadcn/ui",
  "main": "registry.json",
  "files": [
    "registry.json",
    "components"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/tu-usuario/mi-component-library"
  }
}
```

### Paso 2: Publicar en npm
```bash
cd registry
npm publish --access public
```

### Paso 3: Usar en otra app
En `components.json`:

```json
{
  "registry": "npm:@tu-org/mi-component-library"
}
```

Luego instalar:
```bash
npx shadcn@latest add hero-section
```

---

## Opción 4: Copiar Componentes Manualmente (Sin Registry)

Si prefieres no usar el sistema de registry, puedes copiar los componentes directamente:

### Paso 1: Copiar archivos
Copia los archivos de `src/components/custom/` a tu nueva app:

```
tu-nueva-app/
└── src/
    └── components/
        └── custom/
            ├── hero-section.tsx
            ├── feature-card.tsx
            ├── stats-card.tsx
            ├── testimonial-card.tsx
            ├── pricing-card.tsx
            └── badge.tsx
```

### Paso 2: Asegurar dependencias
Asegúrate de tener instaladas las dependencias necesarias:

```bash
pnpm add lucide-react class-variance-authority clsx tailwind-merge
pnpm add -D @types/react
```

Y los componentes base de shadcn/ui que necesitas:
```bash
npx shadcn@latest add button card
```

### Paso 3: Importar y usar
```tsx
import { HeroSection } from '@/components/custom/hero-section'
import { FeatureCard } from '@/components/custom/feature-card'
// etc...
```

---

## Requisitos Previos en la Nueva App

Cualquiera sea el método que elijas, tu nueva aplicación necesita:

### 1. shadcn/ui configurado
```bash
npx shadcn@latest init
```

### 2. Dependencias base instaladas
```bash
pnpm add lucide-react class-variance-authority clsx tailwind-merge
```

### 3. Componentes base de shadcn/ui
Los componentes personalizados dependen de:
- `button` (para HeroSection, FeatureCard, PricingCard)
- `card` (para FeatureCard, StatsCard, TestimonialCard, PricingCard)

Instálalos con:
```bash
npx shadcn@latest add button card
```

### 4. Configuración de Tailwind
Asegúrate de tener las variables CSS configuradas en `src/index.css` (similar a este proyecto).

---

## Ejemplo Completo: Usar en una Nueva App

```bash
# 1. Crear nueva app
npm create vite@latest mi-nueva-app -- --template react-ts
cd mi-nueva-app

# 2. Instalar dependencias
pnpm install

# 3. Configurar shadcn/ui
npx shadcn@latest init

# 4. Instalar componentes base necesarios
npx shadcn@latest add button card

# 5. Copiar registry (Opción 1) o configurar GitHub (Opción 2)
# Si Opción 1:
cp -r ../test-shadcn/registry ./

# 6. Instalar componentes personalizados
npx shadcn@latest add hero-section --registry ./registry

# 7. Usar en tu código
```

```tsx
// src/App.tsx
import { HeroSection } from '@/components/custom/hero-section'
import { Zap } from 'lucide-react'

function App() {
  return (
    <HeroSection
      title="Mi Nueva App"
      description="Usando componentes personalizados"
      primaryAction={{
        label: "Comenzar",
        onClick: () => console.log("Click!")
      }}
    />
  )
}
```

---

## Ventajas de cada método

| Método | Ventajas | Cuándo usar |
|--------|----------|-------------|
| **Copia local** | Simple, rápido | Desarrollo local, proyectos privados |
| **GitHub** | Fácil de compartir, versionado | Equipos, proyectos open source |
| **npm** | Instalación simple, versionado semántico | Librerías públicas, distribución amplia |
| **Copia manual** | Control total, sin dependencias | Proyectos únicos, modificaciones frecuentes |

---

## Troubleshooting

### Error: "Cannot find module '@/lib/utils'"
Asegúrate de tener `src/lib/utils.ts` con la función `cn`:
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Error: "Component not found"
Verifica que los componentes base (button, card) estén instalados.

### Error: "Type errors"
Asegúrate de tener las mismas versiones de TypeScript y React que este proyecto.

---

¿Necesitas ayuda con algún método específico?

