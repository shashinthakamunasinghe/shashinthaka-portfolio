"use client"

import { cn } from "@/lib/utils"

interface FilterBarProps {
  options: readonly string[]
  active: string
  onChange: (value: string) => void
  /** "pill" = rounded-full (tech stack style), "button" = rounded-lg border (projects style) */
  variant?: "pill" | "button"
  /** "horizontal" = flex-row (default), "vertical" = flex-col */
  orientation?: "horizontal" | "vertical"
  className?: string
}

export function FilterBar({
  options,
  active,
  onChange,
  variant = "pill",
  orientation = "horizontal",
  className,
}: FilterBarProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-2",
        orientation === "vertical" && "flex-col",
        className,
      )}
    >
      {options.map((option) =>
        variant === "pill" ? (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300",
              active === option
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50",
            )}
            data-cursor-hover
          >
            {option}
          </button>
        ) : (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "rounded-lg border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
              active === option
                ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
            )}
            data-cursor-hover
          >
            {option}
          </button>
        ),
      )}
    </div>
  )
}
