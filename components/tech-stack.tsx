"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { TechCard } from "@/components/ui/tech-card"
import { FilterBar } from "@/components/ui/filter-bar"
import { SectionHeader } from "@/components/ui/section-header"
import { techCategories, statsData } from "@/lib/data/tech-stack"

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categoryOptions = ["All", ...techCategories.map((c) => c.name)] as const

  const filteredCategories = activeCategory
    ? techCategories.filter((cat) => cat.name === activeCategory)
    : techCategories

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          label="< Tech Stack />"
          title="Skills & Technologies"
          description="A curated collection of technologies I work with to build modern, scalable, and performant applications."
        />

        {/* Category filters */}
        <div className="flex justify-center mb-12 animate-fade-in-up stagger-1">
          <FilterBar
            options={categoryOptions}
            active={activeCategory ?? "All"}
            onChange={(val) => setActiveCategory(val === "All" ? null : val)}
            variant="pill"
          />
        </div>

        {/* Tech grid */}
        <div className="space-y-16">
          {filteredCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={cn("w-3 h-3 rounded-full bg-gradient-to-r", category.color)} />
                <h3
                  className={cn(
                    "text-xl font-semibold bg-gradient-to-r bg-clip-text text-transparent",
                    category.color,
                  )}
                >
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-secondary/30">
                  {category.technologies.length} skills
                </span>
              </div>

              {/* Tech cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <TechCard
                    key={tech.name}
                    tech={tech}
                    category={category}
                    index={techIndex + catIndex * 4}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up stagger-3">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="group text-center p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/5"
              data-cursor-hover
            >
              <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
