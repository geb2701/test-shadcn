# Script PowerShell para configurar los componentes personalizados en una nueva app
# Uso: .\SETUP_OTRA_APP.ps1

Write-Host "🚀 Configurando componentes personalizados en nueva app..." -ForegroundColor Cyan
Write-Host ""

# Verificar que estamos en un proyecto con shadcn/ui
if (-not (Test-Path "components.json")) {
    Write-Host "❌ Error: No se encontró components.json" -ForegroundColor Red
    Write-Host "   Asegúrate de haber ejecutado: npx shadcn@latest init" -ForegroundColor Yellow
    exit 1
}

# Verificar que existe la carpeta registry
if (-not (Test-Path "..\test-shadcn\registry")) {
    Write-Host "❌ Error: No se encontró la carpeta registry" -ForegroundColor Red
    Write-Host "   Asegúrate de que la carpeta registry existe en el proyecto test-shadcn" -ForegroundColor Yellow
    exit 1
}

# Copiar registry
Write-Host "📦 Copiando registry..." -ForegroundColor Green
Copy-Item -Path "..\test-shadcn\registry" -Destination "." -Recurse -Force

# Instalar componentes base necesarios
Write-Host "📦 Instalando componentes base de shadcn/ui..." -ForegroundColor Green
npx shadcn@latest add button card

# Instalar dependencias necesarias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Green
pnpm add lucide-react class-variance-authority clsx tailwind-merge

# Instalar componentes personalizados
Write-Host "📦 Instalando componentes personalizados..." -ForegroundColor Green
npx shadcn@latest add hero-section --registry ./registry
npx shadcn@latest add feature-card --registry ./registry
npx shadcn@latest add stats-card --registry ./registry
npx shadcn@latest add testimonial-card --registry ./registry
npx shadcn@latest add pricing-card --registry ./registry
npx shadcn@latest add badge --registry ./registry

Write-Host ""
Write-Host "✅ ¡Configuración completada!" -ForegroundColor Green
Write-Host ""
Write-Host "Ahora puedes usar los componentes:" -ForegroundColor Cyan
Write-Host "  import { HeroSection } from '@/components/custom/hero-section'"
Write-Host "  import { FeatureCard } from '@/components/custom/feature-card'"
Write-Host "  // etc..."

