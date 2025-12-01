import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { HeroSection } from '@/components/custom/hero-section'
import { FeatureCard } from '@/components/custom/feature-card'
import { StatsCard } from '@/components/custom/stats-card'
import { Zap, Shield, Rocket, Users, TrendingUp, DollarSign, Heart } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-16">
      <HeroSection
        title="Bienvenido a tu aplicación"
        description="Una plataforma moderna construida con React, TypeScript, TanStack Router y shadcn/ui"
        primaryAction={{
          label: 'Ver Demo',
          onClick: () => navigate({ to: '/demo' }),
        }}
        secondaryAction={{
          label: 'Saber más',
          onClick: () => navigate({ to: '/about' }),
        }}
      />

      <section>
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Características principales</h2>
          <p className="text-muted-foreground">
            Descubre lo que hace especial a esta plataforma
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Zap}
            title="Rendimiento excepcional"
            description="Optimizado para velocidad y eficiencia con las últimas tecnologías web."
            actionLabel="Explorar"
          />
          <FeatureCard
            icon={Shield}
            title="Seguro y confiable"
            description="Seguridad integrada desde el primer día con las mejores prácticas."
            actionLabel="Aprender más"
            variant="highlighted"
          />
          <FeatureCard
            icon={Rocket}
            title="Escalable"
            description="Crece con tu negocio sin límites. Diseñado para escalar."
            actionLabel="Ver detalles"
          />
        </div>
      </section>

      <section>
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Números que hablan</h2>
          <p className="text-muted-foreground">
            Estadísticas que demuestran nuestro éxito
          </p>
        </div>
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

      <section className="rounded-lg border bg-muted/50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">¿Listo para comenzar?</h2>
        <p className="mb-6 text-muted-foreground">
          Explora todos nuestros componentes personalizados en la página de demo
        </p>
        <Link to="/demo">
          <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90">
            Ver Demo Completo
          </button>
        </Link>
      </section>
    </div>
  )
}

