import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "error" | "info"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        {
          "bg-primary/10 text-primary": variant === "default",
          "bg-green-500/10 text-green-600 dark:text-green-400":
            variant === "success",
          "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400":
            variant === "warning",
          "bg-red-500/10 text-red-600 dark:text-red-400": variant === "error",
          "bg-blue-500/10 text-blue-600 dark:text-blue-400": variant === "info",
        },
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-2.5 py-1 text-sm": size === "md",
          "px-3 py-1.5 text-base": size === "lg",
        },
        className
      )}
    >
      {children}
    </span>
  )
}




