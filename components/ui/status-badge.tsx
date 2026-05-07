import { cn } from "@/lib/utils"
import type { ProjectStatus } from "@/types"

interface StatusBadgeProps {
  status: ProjectStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
          status === "shipped" && "bg-primary shadow-sm shadow-primary/50",
          status === "in-progress" && "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
          status === "archived" && "bg-muted-foreground",
        )}
      />
      <span className="font-mono text-xs text-muted-foreground">{status}</span>
    </div>
  )
}
