import { Card, CardContent } from "@/components/ui/card"
import { type LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"
import { type ComponentType } from "react"

interface StatsCardProps {
  icon: ComponentType<LucideProps>
  value: string | number
  label: string
  trend?: {
    value: string
    isPositive: boolean
  }
  className?: string
}

export function StatsCard({
  icon: Icon,
  value,
  label,
  trend,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn("border-l-4 border-l-primary", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="text-3xl font-bold">{value}</p>
            {trend && (
              <p
                className={cn(
                  "text-sm font-medium",
                  trend.isPositive ? "text-green-600" : "text-red-600"
                )}
              >
                {trend.isPositive ? "↑" : "↓"} {trend.value}
              </p>
            )}
          </div>
          <div className="rounded-full bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

