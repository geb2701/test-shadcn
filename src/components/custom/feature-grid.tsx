import { FeatureCard } from "@/components/custom/feature-card"
import { type ComponentType, type LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"

interface Feature {
  icon: ComponentType<LucideProps>
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureGrid({
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        {
          "grid-cols-1 md:grid-cols-2": columns === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": columns === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": columns === 4,
        },
        className
      )}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  )
}

