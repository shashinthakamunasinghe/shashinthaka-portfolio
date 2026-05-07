import { cn } from "@/lib/utils"
import { Github, ExternalLink, Sparkles } from "lucide-react"
import { StatusBadge } from "@/components/ui/status-badge"
import { TagChip } from "@/components/ui/tag-chip"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
        project.highlight
          ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
          : "border-border/60",
        project.featured && !project.highlight && "sm:col-span-2 lg:col-span-1",
      )}
      style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
    >
      {/* Featured badge */}
      {project.highlight && (
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
            Featured
          </span>
        </div>
      )}

      {/* Status */}
      <StatusBadge
        status={project.status}
        className="absolute right-5 top-5"
      />

      {/* Year */}
      <div
        className={cn(
          "mb-5 font-mono text-xs text-muted-foreground",
          project.highlight && "mt-10",
        )}
      >
        {project.year}
      </div>

      {/* Title */}
      <h3
        className={cn(
          "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
          project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
        )}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "mb-5 text-sm leading-relaxed text-muted-foreground",
          project.highlight ? "line-clamp-3" : "line-clamp-2",
        )}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagChip key={tag} tag={tag} />
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {project.repos && project.repos.length > 0 ? (
          project.repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
              <span className="underline-animate">{repo.label}</span>
            </a>
          ))
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
            <span className="underline-animate">source</span>
          </a>
        )}
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
            <span className="underline-animate">live demo</span>
          </a>
        )}
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
    </article>
  )
}
