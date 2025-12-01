import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type LucideProps } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type ComponentType } from 'react'

interface FeatureCardProps {
  icon: ComponentType<LucideProps>
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
  variant?: 'default' | 'highlighted'
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  variant = 'default',
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        'group transition-all hover:shadow-lg',
        variant === 'highlighted' && 'border-primary bg-primary/5',
        className
      )}
    >
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {actionLabel && (
        <CardContent>
          <Button variant="outline" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </CardContent>
      )}
    </Card>
  )
}

