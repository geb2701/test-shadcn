#!/bin/bash

# Script para configurar los componentes personalizados en una nueva app
# Uso: ./SETUP_OTRA_APP.sh

echo "🚀 Configurando componentes personalizados en nueva app..."
echo ""

# Verificar que estamos en un proyecto con shadcn/ui
if [ ! -f "components.json" ]; then
    echo "❌ Error: No se encontró components.json"
    echo "   Asegúrate de haber ejecutado: npx shadcn@latest init"
    exit 1
fi

# Verificar que existe la carpeta registry
if [ ! -d "../test-shadcn/registry" ]; then
    echo "❌ Error: No se encontró la carpeta registry"
    echo "   Asegúrate de que la carpeta registry existe en el proyecto test-shadcn"
    exit 1
fi

# Copiar registry
echo "📦 Copiando registry..."
cp -r ../test-shadcn/registry ./

# Instalar componentes base necesarios
echo "📦 Instalando componentes base de shadcn/ui..."
npx shadcn@latest add button card

# Instalar dependencias necesarias
echo "📦 Instalando dependencias..."
pnpm add lucide-react class-variance-authority clsx tailwind-merge

# Instalar componentes personalizados
echo "📦 Instalando componentes personalizados..."
npx shadcn@latest add hero-section --registry ./registry
npx shadcn@latest add feature-card --registry ./registry
npx shadcn@latest add stats-card --registry ./registry
npx shadcn@latest add testimonial-card --registry ./registry
npx shadcn@latest add pricing-card --registry ./registry
npx shadcn@latest add badge --registry ./registry

echo ""
echo "✅ ¡Configuración completada!"
echo ""
echo "Ahora puedes usar los componentes:"
echo "  import { HeroSection } from '@/components/custom/hero-section'"
echo "  import { FeatureCard } from '@/components/custom/feature-card'"
echo "  // etc..."

