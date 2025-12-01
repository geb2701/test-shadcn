# Cómo usar el Registry desde otro repositorio (GitHub)

Esta guía te explica cómo publicar tu registry en GitHub y usarlo desde cualquier otra aplicación.

## Paso 1: Preparar el Registry para GitHub

### Opción A: Repositorio dedicado solo para el registry (Recomendado)

1. **Crear un nuevo repositorio en GitHub**
   - Nombre: `mi-component-library` (o el que prefieras)
   - Descripción: "Registry de componentes personalizados basados en shadcn/ui"
   - Público o privado (según necesites)

2. **Subir solo la carpeta `registry/`**
   ```bash
   # En tu proyecto actual
   cd registry
   git init
   git add .
   git commit -m "Initial commit: Registry de componentes"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/mi-component-library.git
   git push -u origin main
   ```

### Opción B: Subdirectorio en el mismo repositorio

Si quieres mantener el registry en el mismo repo del proyecto:

1. **Estructura del repositorio:**
   ```
   tu-repo/
   ├── registry/          # El registry
   ├── src/               # Código del proyecto
   └── ...
   ```

2. **En la otra app, usar la ruta al subdirectorio:**
   ```json
   {
     "registry": "https://github.com/tu-usuario/tu-repo/tree/main/registry"
   }
   ```

## Paso 2: Configurar en la Nueva Aplicación

### 1. Inicializar shadcn/ui en la nueva app

```bash
cd mi-nueva-app
npx shadcn@latest init
```

### 2. Editar `components.json`

Abre `components.json` y agrega la propiedad `registry`:

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

**Nota:** Si el registry está en un subdirectorio:
```json
{
  "registry": "https://github.com/tu-usuario/tu-repo/tree/main/registry"
}
```

### 3. Instalar componentes base necesarios

```bash
npx shadcn@latest add button card
```

### 4. Instalar componentes personalizados

Ahora puedes instalar los componentes directamente sin especificar `--registry`:

```bash
# Instalar un componente
npx shadcn@latest add hero-section

# O instalar varios
npx shadcn@latest add hero-section feature-card stats-card
```

El CLI automáticamente usará el registry configurado en `components.json`.

## Paso 3: Usar los Componentes

Una vez instalados, úsalos normalmente:

```tsx
import { HeroSection } from '@/components/custom/hero-section'
import { FeatureCard } from '@/components/custom/feature-card'
import { Zap } from 'lucide-react'

function App() {
  return (
    <div>
      <HeroSection
        title="Mi App"
        description="Usando componentes del registry remoto"
        primaryAction={{
          label: "Comenzar",
          onClick: () => console.log("Click!")
        }}
      />
      
      <FeatureCard
        icon={Zap}
        title="Rápido"
        description="Componente desde GitHub"
      />
    </div>
  )
}
```

## Actualizar Componentes desde el Registry

Cuando actualices el registry en GitHub:

1. **Hacer commit y push de los cambios:**
   ```bash
   cd registry
   git add .
   git commit -m "Actualizar componentes"
   git push
   ```

2. **En la app que usa el registry, reinstalar:**
   ```bash
   npx shadcn@latest add hero-section --overwrite
   ```

   O eliminar y reinstalar:
   ```bash
   rm -rf src/components/custom/hero-section.tsx
   npx shadcn@latest add hero-section
   ```

## Versiones y Tags (Opcional)

Para mantener versiones del registry:

### 1. Crear tags en GitHub

```bash
cd registry
git tag -a v1.0.0 -m "Versión 1.0.0"
git push origin v1.0.0
```

### 2. Usar una versión específica

En `components.json`:

```json
{
  "registry": "https://github.com/tu-usuario/mi-component-library@v1.0.0"
}
```

O usar una rama específica:

```json
{
  "registry": "https://github.com/tu-usuario/mi-component-library@develop"
}
```

## Repositorio Privado

Si tu registry está en un repositorio privado:

### Opción 1: Usar token de acceso personal

1. Crear un token en GitHub (Settings > Developer settings > Personal access tokens)
2. Usar en la URL:
   ```json
   {
     "registry": "https://tu-token@github.com/tu-usuario/mi-component-library"
   }
   ```

### Opción 2: Configurar SSH

```json
{
  "registry": "git@github.com:tu-usuario/mi-component-library.git"
}
```

## Estructura Recomendada del Repo Registry

```
mi-component-library/
├── README.md
├── registry.json
└── components/
    └── custom/
        ├── hero-section.json
        ├── feature-card.json
        ├── stats-card.json
        ├── testimonial-card.json
        ├── pricing-card.json
        └── badge.json
```

## Ejemplo Completo

### 1. Crear repo en GitHub
```bash
# En tu proyecto actual
cd registry
git init
echo "# Mi Component Library" > README.md
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/mi-component-library.git
git push -u origin main
```

### 2. En la nueva app
```bash
# Inicializar shadcn
npx shadcn@latest init

# Editar components.json y agregar:
# "registry": "https://github.com/tu-usuario/mi-component-library"

# Instalar componentes
npx shadcn@latest add button card
npx shadcn@latest add hero-section
```

## Troubleshooting

### Error: "Cannot find registry"
- Verifica que la URL del registry sea correcta
- Asegúrate de que el repositorio sea público (o tengas acceso)
- Verifica que la estructura del repo sea correcta

### Error: "Component not found"
- Verifica que el componente exista en el registry
- Revisa el nombre del componente (debe coincidir exactamente)

### Error: "Dependencies not found"
- Asegúrate de instalar primero los componentes base (button, card)
- Verifica que `registryDependencies` en el JSON del componente sea correcto

## Ventajas de usar un Registry Remoto

✅ **Centralizado:** Un solo lugar para todos tus componentes  
✅ **Versionado:** Control de versiones con Git  
✅ **Colaborativo:** Múltiples proyectos pueden usar los mismos componentes  
✅ **Actualizable:** Fácil de mantener y actualizar  
✅ **Reutilizable:** Usa los mismos componentes en múltiples proyectos  

---

¿Necesitas ayuda con algún paso específico?

