import { cn } from "@/lib/utils"

interface TagChipProps {
  tag: string
  /** Whether the tag is currently selected/active (used in filter contexts) */
  active?: boolean
  onClick?: () => void
  className?: string
}

export function TagChip({ tag, active, onClick, className }: TagChipProps) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "rounded-md border px-2.5 py-1 font-mono text-xs transition-all duration-200",
          active
            ? "border-primary/50 bg-primary/10 text-primary"
            : "border-border/60 bg-secondary/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
          className,
        )}
      >
        {tag}
      </button>
    )
  }

  return (
    <span
      className={cn(
        "rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10",
        className,
      )}
    >
      {tag}
    </span>
  )
}
