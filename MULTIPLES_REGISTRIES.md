# Configurar Múltiples Registries en shadcn/ui

Sí, puedes tener **múltiples registries** usando **namespaces**. Esto te permite usar componentes de diferentes fuentes en el mismo proyecto.

## ¿Qué son los Namespaces?

Los namespaces son prefijos que identifican de qué registry viene cada componente. Por ejemplo:
- `@mi-empresa/button` - viene del registry de tu empresa
- `@shadcn/button` - viene del registry oficial de shadcn/ui
- `@acme-ui/card` - viene del registry de Acme

## Configuración Básica

### Opción 1: Múltiples Registries con Namespaces

Edita tu `components.json` para usar `registries` (plural) en lugar de `registry` (singular):

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
  "registries": {
    "@shadcn": "https://ui.shadcn.com/r",
    "@mi-empresa": "https://github.com/tu-usuario/mi-component-library",
    "@custom": "./registry"
  }
}
```

### Opción 2: Registry por Defecto + Namespaces

También puedes tener un registry por defecto y agregar namespaces adicionales:

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
  "registry": "https://ui.shadcn.com/r",
  "registries": {
    "@mi-empresa": "https://github.com/tu-usuario/mi-component-library",
    "@custom": "./registry",
    "@team": "https://github.com/mi-empresa/team-components"
  }
}
```

## Ejemplos de Uso

### Instalar desde diferentes registries

```bash
# Instalar del registry por defecto (shadcn oficial)
npx shadcn@latest add button

# Instalar desde tu registry personalizado
npx shadcn@latest add @custom/hero-section

# Instalar desde el registry de tu empresa
npx shadcn@latest add @mi-empresa/feature-card

# Instalar desde otro namespace
npx shadcn@latest add @team/stats-card
```

## Ejemplo Completo: Configuración con 3 Registries

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
  "registry": "https://ui.shadcn.com/r",
  "registries": {
    "@custom": "./registry",
    "@company": "https://github.com/mi-empresa/component-library",
    "@team": {
      "url": "https://github.com/mi-empresa/team-components",
      "headers": {
        "Authorization": "Bearer ${TEAM_TOKEN}"
      }
    }
  }
}
```

## Casos de Uso Comunes

### 1. Registry Oficial + Registry Personal

```json
{
  "registry": "https://ui.shadcn.com/r",
  "registries": {
    "@custom": "./registry"
  }
}
```

**Uso:**
```bash
npx shadcn@latest add button          # Del registry oficial
npx shadcn@latest add @custom/hero-section  # Del registry personal
```

### 2. Registry de Empresa + Registry de Equipo

```json
{
  "registry": "https://ui.shadcn.com/r",
  "registries": {
    "@company": "https://github.com/mi-empresa/components",
    "@team": "https://github.com/mi-empresa/team-ui"
  }
}
```

**Uso:**
```bash
npx shadcn@latest add button
npx shadcn@latest add @company/brand-button
npx shadcn@latest add @team/internal-card
```

### 3. Registry Local + Registry Remoto

```json
{
  "registry": "https://ui.shadcn.com/r",
  "registries": {
    "@local": "./registry",
    "@github": "https://github.com/tu-usuario/components",
    "@npm": "npm:@mi-org/components"
  }
}
```

## Registries con Autenticación

Para registries privados que requieren autenticación:

```json
{
  "registries": {
    "@private": {
      "url": "https://github.com/mi-empresa/private-components",
      "headers": {
        "Authorization": "Bearer ${GITHUB_TOKEN}"
      }
    },
    "@internal": {
      "url": "https://internal.acme.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${INTERNAL_TOKEN}",
        "X-API-Key": "${API_KEY}"
      }
    }
  }
}
```

## Estructura de Directorios con Múltiples Registries

Cuando instalas componentes de diferentes registries, puedes organizarlos así:

```
src/
└── components/
    ├── ui/              # Componentes del registry oficial (shadcn)
    │   ├── button.tsx
    │   └── card.tsx
    ├── custom/          # Componentes de @custom
    │   ├── hero-section.tsx
    │   └── feature-card.tsx
    ├── company/         # Componentes de @company
    │   └── brand-button.tsx
    └── team/            # Componentes de @team
        └── internal-card.tsx
```

O mantener todo en `ui/` y usar nombres descriptivos:

```
src/
└── components/
    └── ui/
        ├── button.tsx           # Del registry oficial
        ├── hero-section.tsx      # De @custom
        ├── brand-button.tsx     # De @company
        └── internal-card.tsx    # De @team
```

## Configuración Avanzada: Variables de Entorno

Puedes usar variables de entorno para tokens:

```json
{
  "registries": {
    "@private": {
      "url": "https://github.com/mi-empresa/private-components",
      "headers": {
        "Authorization": "Bearer ${GITHUB_TOKEN}"
      }
    }
  }
}
```

Luego en tu `.env`:
```
GITHUB_TOKEN=ghp_tu_token_aqui
```

## Ejemplo Real: Proyecto con 3 Fuentes

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
  "registry": "https://ui.shadcn.com/r",
  "registries": {
    "@custom": "./registry",
    "@company": "https://github.com/mi-empresa/company-components",
    "@team": {
      "url": "https://github.com/mi-empresa/team-ui",
      "headers": {
        "Authorization": "Bearer ${GITHUB_TOKEN}"
      }
    }
  }
}
```

**Instalación:**
```bash
# Del registry oficial (por defecto)
npx shadcn@latest add button card

# De tu registry local
npx shadcn@latest add @custom/hero-section

# Del registry de la empresa
npx shadcn@latest add @company/brand-header

# Del registry del equipo (requiere token)
npx shadcn@latest add @team/internal-dashboard
```

## Ventajas de Múltiples Registries

✅ **Organización:** Separa componentes por origen (oficial, empresa, equipo)  
✅ **Flexibilidad:** Usa lo mejor de cada registry  
✅ **Colaboración:** Diferentes equipos pueden mantener sus propios registries  
✅ **Versionado:** Cada registry puede tener su propio ciclo de versiones  
✅ **Privacidad:** Registries privados para componentes internos  

## Mejores Prácticas

1. **Usa nombres descriptivos** para los namespaces:
   - `@company` en lugar de `@c`
   - `@team-ui` en lugar de `@t`

2. **Mantén un registry por defecto** para componentes comunes:
   ```json
   {
     "registry": "https://ui.shadcn.com/r"
   }
   ```

3. **Documenta tus registries** en el README del proyecto

4. **Usa variables de entorno** para tokens y credenciales

5. **Organiza los componentes** en carpetas lógicas según su origen

## Troubleshooting

### Error: "Namespace not found"
- Verifica que el namespace esté definido en `registries`
- Revisa la sintaxis del namespace (debe empezar con `@`)

### Error: "Cannot access private registry"
- Verifica que el token de autenticación sea válido
- Revisa los headers en la configuración

### Error: "Component not found in registry"
- Verifica que el componente exista en ese registry específico
- Revisa la URL del registry

---

¿Necesitas ayuda configurando múltiples registries en tu proyecto?

