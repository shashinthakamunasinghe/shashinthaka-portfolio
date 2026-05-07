"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, Calendar } from "lucide-react"
import { TagChip } from "@/components/ui/tag-chip"
import type { Note } from "@/types"

interface NoteCardProps {
  note: Note
  index?: number
  isExpanded?: boolean
  onClick?: () => void
  /** Show tags row (default false — home page doesn't need it) */
  showTags?: boolean
  /** Show read time (default false) */
  showReadTime?: boolean
}

export function NoteCard({
  note,
  index = 0,
  isExpanded = false,
  onClick,
  showTags = false,
  showReadTime = false,
}: NoteCardProps) {
  return (
    <article
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up",
        isExpanded && "border-primary/50 bg-card/70",
      )}
      style={{ animationDelay: `${index * 100 + 200}ms` }}
      onClick={onClick}
    >
      {/* Gradient hover overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          note.color,
        )}
      />

      <div className="relative z-10">
        {/* Meta row */}
        <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
          <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
            {note.category}
          </span>
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            {showReadTime && note.readTime ? (
              <>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {note.date}
                </span>
                <span>{note.readTime}</span>
              </>
            ) : (
              <span>{note.date}</span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
          {note.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">{note.excerpt}</p>

        {/* Tags (optional) */}
        {showTags && note.tags && note.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 sm:opacity-0 sm:translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0">
          <span>{showTags ? "read more" : "learn more"}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
    </article>
  )
}
