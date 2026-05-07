"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { TechCategory, Technology } from "@/types"

interface TechCardProps {
  tech: Technology
  category: TechCategory
  index?: number
}

export function TechCard({ tech, category, index = 0 }: TechCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative p-5 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500",
        "hover:border-primary/50 hover:bg-card/60 hover:shadow-xl hover:shadow-primary/5",
        "animate-fade-in-up",
      )}
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: "backwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor-hover
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 blur-xl -z-10",
          isHovered && "opacity-60",
        )}
        style={{
          background: `linear-gradient(135deg, var(--${category.glowColor}-glow, var(--primary)) 0%, transparent 70%)`,
          filter: "blur(25px)",
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
            "bg-gradient-to-br",
            category.color,
            "text-white text-2xl shadow-lg",
            isHovered && "scale-110 rotate-3",
          )}
        >
          {tech.icon}
        </div>
        <span
          className={cn(
            "text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-300",
            isHovered
              ? "bg-primary text-primary-foreground"
              : "bg-secondary/50 text-muted-foreground",
          )}
        >
          {tech.level}%
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg text-foreground transition-colors duration-300 group-hover:text-primary">
          {tech.name}
        </h3>
        <p className="text-sm text-muted-foreground">{tech.description}</p>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1.5 bg-secondary/50 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-700",
            category.color,
          )}
          style={{
            width: isHovered ? `${tech.level}%` : "0%",
            transitionDelay: "150ms",
          }}
        />
      </div>

      {/* Hover indicator */}
      <div
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full transition-all duration-300",
          "bg-gradient-to-r",
          category.color,
          isHovered ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  )
}
