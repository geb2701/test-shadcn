import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title: string
  description: string
  primaryAction?: {
    label: string
    onClick?: () => void
    href?: string
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
    href?: string
  }
  className?: string
}

export function HeroSection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-lg border bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 md:p-12',
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-primary/10 p-3">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          {description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {primaryAction && (
            <Button size="lg" className="group" onClick={primaryAction.onClick}>
              {primaryAction.label}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
          {secondaryAction && (
            <Button
              size="lg"
              variant="outline"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
      <div className="absolute inset-0 -z-0 bg-grid-pattern opacity-5" />
    </section>
  )
}

