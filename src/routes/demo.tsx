import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/custom/hero-section'
import { FeatureCard } from '@/components/custom/feature-card'
import { StatsCard } from '@/components/custom/stats-card'
import { TestimonialCard } from '@/components/custom/testimonial-card'
import { PricingCard } from '@/components/custom/pricing-card'
import { Badge } from '@/components/custom/badge'
import {
  Zap,
  Shield,
  Rocket,
  Users,
  TrendingUp,
  DollarSign,
  Heart,
} from 'lucide-react'

export const Route = createFileRoute('/demo')({
  component: DemoPage,
})

function DemoPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Hero Section</h2>
        <HeroSection
          title="Construye algo increíble"
          description="Una plataforma moderna para crear aplicaciones web excepcionales con las mejores herramientas y tecnologías."
          primaryAction={{
            label: 'Comenzar ahora',
            onClick: () => console.log('Primary action clicked'),
          }}
          secondaryAction={{
            label: 'Saber más',
            onClick: () => console.log('Secondary action clicked'),
          }}
        />
      </section>

      {/* Feature Cards */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Feature Cards</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Zap}
            title="Rápido y Eficiente"
            description="Optimizado para máximo rendimiento con las últimas tecnologías."
            actionLabel="Explorar"
            onAction={() => console.log('Feature 1 clicked')}
          />
          <FeatureCard
            icon={Shield}
            title="Seguro por Defecto"
            description="Seguridad integrada desde el primer día de desarrollo."
            actionLabel="Aprender más"
            onAction={() => console.log('Feature 2 clicked')}
            variant="highlighted"
          />
          <FeatureCard
            icon={Rocket}
            title="Escalable"
            description="Crece con tu negocio sin límites ni restricciones."
            actionLabel="Ver detalles"
            onAction={() => console.log('Feature 3 clicked')}
          />
        </div>
      </section>

      {/* Stats Cards */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Stats Cards</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            icon={Users}
            value="10K+"
            label="Usuarios Activos"
            trend={{ value: '+12% este mes', isPositive: true }}
          />
          <StatsCard
            icon={TrendingUp}
            value="98%"
            label="Satisfacción"
            trend={{ value: '+2% este mes', isPositive: true }}
          />
          <StatsCard
            icon={DollarSign}
            value="$50K"
            label="Ingresos Mensuales"
            trend={{ value: '+8% este mes', isPositive: true }}
          />
          <StatsCard
            icon={Heart}
            value="4.9/5"
            label="Valoración"
            trend={{ value: 'Estable', isPositive: true }}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Testimonios</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="María García"
            role="CEO"
            company="TechStart"
            content="Esta plataforma ha transformado completamente nuestra forma de trabajar. La velocidad y confiabilidad son impresionantes."
            rating={5}
          />
          <TestimonialCard
            name="Juan Pérez"
            role="Desarrollador Senior"
            company="InnovateLab"
            content="Los componentes son increíblemente fáciles de usar y personalizar. Ahorra horas de desarrollo."
            rating={5}
          />
          <TestimonialCard
            name="Ana Martínez"
            role="Diseñadora UX"
            company="Creative Studio"
            content="El diseño es moderno y la experiencia de usuario es excepcional. Definitivamente lo recomiendo."
            rating={4}
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Planes de Precio</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            name="Básico"
            price="$9"
            description="Perfecto para empezar"
            features={[
              { text: 'Hasta 5 proyectos', included: true },
              { text: '10GB de almacenamiento', included: true },
              { text: 'Soporte por email', included: true },
              { text: 'API access', included: false },
              { text: 'Soporte prioritario', included: false },
            ]}
            actionLabel="Empezar gratis"
            onAction={() => console.log('Basic plan clicked')}
          />
          <PricingCard
            name="Profesional"
            price="$29"
            description="Para equipos en crecimiento"
            features={[
              { text: 'Proyectos ilimitados', included: true },
              { text: '100GB de almacenamiento', included: true },
              { text: 'Soporte prioritario', included: true },
              { text: 'API access', included: true },
              { text: 'Análisis avanzados', included: true },
            ]}
            isPopular
            actionLabel="Comenzar ahora"
            onAction={() => console.log('Pro plan clicked')}
          />
          <PricingCard
            name="Empresarial"
            price="$99"
            description="Para grandes organizaciones"
            features={[
              { text: 'Todo en Profesional', included: true },
              { text: 'Almacenamiento ilimitado', included: true },
              { text: 'Soporte 24/7', included: true },
              { text: 'API avanzada', included: true },
              { text: 'Gestión de equipos', included: true },
            ]}
            actionLabel="Contactar ventas"
            onAction={() => console.log('Enterprise plan clicked')}
          />
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="default" size="sm">
            Small
          </Badge>
          <Badge variant="default" size="md">
            Medium
          </Badge>
          <Badge variant="default" size="lg">
            Large
          </Badge>
        </div>
      </section>
    </div>
  )
}
