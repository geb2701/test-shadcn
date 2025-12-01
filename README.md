# Test shadcn - Registry de Componentes Personalizados

Proyecto con **registry personalizado** de componentes siguiendo la [documentación oficial de shadcn/ui](https://ui.shadcn.com/docs/registry/getting-started).

## 🚀 Características

- **React 19** + **TypeScript** + **Vite**
- **TanStack Router** para routing
- **shadcn/ui** con componentes base
- **Registry personalizado** configurado correctamente
- **6 componentes personalizados** listos para usar

## 📦 Componentes Disponibles

1. **HeroSection** - Banner hero con call-to-action
2. **FeatureCard** - Tarjeta de características con iconos
3. **StatsCard** - Tarjeta de estadísticas con tendencias
4. **TestimonialCard** - Tarjeta de testimonios con sistema de estrellas
5. **PricingCard** - Tarjeta de precios con lista de características
6. **Badge** - Badge con múltiples variantes

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Construir registry (genera archivos en public/r/)
pnpm registry:build
```

## 📄 Páginas

- `/` - Página de inicio con componentes
- `/about` - Página "Acerca de"
- `/contact` - Página de contacto
- `/demo` - Demostración de todos los componentes

## 📚 Estructura del Registry

```
src/components/custom/     # Componentes fuente (para uso interno)
├── hero-section.tsx
├── feature-card.tsx
└── ...

registry.json              # Configuración del registry (raíz)
public/r/                 # Archivos JSON para compartir (IMPORTANTE)
├── hero-section.json
├── feature-card.json
├── registry.json
└── ...
```

## 🔧 Compartir el Registry

### Los archivos en `public/r/` son los que se comparten

Cuando alguien usa tu registry, accede a los archivos JSON en `public/r/`:

- `public/r/registry.json` - Índice de todos los componentes
- `public/r/hero-section.json` - Componente individual
- `public/r/feature-card.json` - Componente individual
- etc.

**⚠️ IMPORTANTE:** Estos archivos deben estar en el repositorio para que otros puedan usarlos.

### Construir el Registry

```bash
pnpm registry:build
```

Esto genera/actualiza los archivos JSON en `public/r/` automáticamente.

### Usar en Otra Aplicación

#### Opción 1: Desde GitHub

1. Publica este proyecto en GitHub
2. En la otra app, configura `components.json`:

```json
{
  "registry": "https://github.com/tu-usuario/test-shadcn"
}
```

3. Instala componentes:

```bash
npx shadcn@latest add hero-section
```

El CLI buscará los archivos en:
- `https://github.com/tu-usuario/test-shadcn/r/hero-section.json`
- `https://github.com/tu-usuario/test-shadcn/r/registry.json`

#### Opción 2: Desde URL Local (desarrollo)

Si estás sirviendo el proyecto localmente:

```bash
npx shadcn@latest add http://localhost:3000/r/hero-section.json
```

#### Opción 3: Múltiples Registries (Namespaces)

```json
{
  "registry": "https://ui.shadcn.com/r",
  "registries": {
    "@custom": "https://github.com/tu-usuario/test-shadcn"
  }
}
```

Luego instala:

```bash
npx shadcn@latest add button              # Del registry oficial
npx shadcn@latest add @custom/hero-section  # De tu registry
```

## 🎨 Usar Componentes en el Proyecto

Los componentes están disponibles en `src/components/custom/`:

```tsx
import { HeroSection } from '@/components/custom/hero-section'
import { FeatureCard } from '@/components/custom/feature-card'
import { Zap } from 'lucide-react'

function App() {
  return (
    <HeroSection
      title="Mi App"
      description="Usando componentes personalizados"
      primaryAction={{
        label: "Comenzar",
        onClick: () => console.log("Click!")
      }}
    />
  )
}
```

## 📝 Flujo de Trabajo

1. **Editar componentes** en `src/components/custom/`
2. **Construir registry**: `pnpm registry:build`
3. **Los archivos en `public/r/` se actualizan automáticamente**
4. **Commit y push** - Los archivos en `public/r/` se comparten
5. **Otros pueden usar** tu registry desde GitHub

## ⚠️ Notas Importantes

- Los archivos en `public/r/` **DEBEN estar en el repositorio** para compartir
- Ejecuta `pnpm registry:build` después de modificar componentes
- El `registry.json` en la raíz apunta a los componentes en `src/components/custom/`
- Los archivos JSON en `public/r/` contienen el código completo del componente

## 📖 Documentación

- [Documentación oficial de shadcn/ui Registry](https://ui.shadcn.com/docs/registry/getting-started)
- [Schema de registry.json](https://ui.shadcn.com/docs/registry/registry-json)
- [Namespaces](https://ui.shadcn.com/docs/registry/namespace)

---

Construido con ❤️ usando shadcn/ui
