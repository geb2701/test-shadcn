# Test shadcn - Proyecto con Registry Personalizado

Este proyecto incluye:
- **React 19** + **TypeScript** + **Vite**
- **TanStack Router** para routing
- **shadcn/ui** con componentes base
- **Registry personalizado** de componentes
- **Componentes personalizados** listos para usar

## 🚀 Características

### Componentes Personalizados

El proyecto incluye 6 componentes personalizados listos para usar:

1. **HeroSection** - Banner hero con call-to-action
2. **FeatureCard** - Tarjeta de características con iconos
3. **StatsCard** - Tarjeta de estadísticas con tendencias
4. **TestimonialCard** - Tarjeta de testimonios con sistema de estrellas
5. **PricingCard** - Tarjeta de precios con lista de características
6. **Badge** - Badge con múltiples variantes

### Registry Personalizado

El proyecto incluye un **registry personalizado** siguiendo el sistema de [shadcn/ui Registry](https://ui.shadcn.com/docs/registry) que permite distribuir estos componentes a otros proyectos.

📖 Ver [REGISTRY_GUIDE.md](./REGISTRY_GUIDE.md) para más información sobre cómo usar el registry.

## 📦 Instalación

```bash
pnpm install
```

## 🛠️ Desarrollo

```bash
pnpm dev
```

## 📄 Páginas Disponibles

- `/` - Página de inicio con componentes personalizados
- `/about` - Página "Acerca de"
- `/contact` - Página de contacto
- `/demo` - Página de demostración con todos los componentes

## 🎨 Componentes

Los componentes personalizados están en `src/components/custom/` y pueden importarse así:

```tsx
import { HeroSection } from '@/components/custom/hero-section'
import { FeatureCard } from '@/components/custom/feature-card'
// ... etc
```

## 📚 Registry

El registry está en `registry/` y puede usarse en otros proyectos. Ver [REGISTRY_GUIDE.md](./REGISTRY_GUIDE.md) para más detalles.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
