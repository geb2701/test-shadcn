import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  role: string
  company?: string
  content: string
  rating?: number
  avatar?: string
  className?: string
}

export function TestimonialCard({
  name,
  role,
  company,
  content,
  rating = 5,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn('h-full', className)}>
      <CardContent className="p-6">
        <div className="mb-4 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-muted text-muted'
              )}
            />
          ))}
        </div>
        <p className="mb-4 text-sm text-muted-foreground">"{content}"</p>
        <div className="flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-semibold text-primary">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">
              {role}
              {company && ` • ${company}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

