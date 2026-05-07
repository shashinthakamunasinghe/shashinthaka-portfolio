import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  /** Small mono label above the title e.g. "< Portfolio />" */
  label: string
  title: string
  description?: string
  className?: string
  /** Use h1 instead of h2 (for page-level headings) */
  asH1?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  asH1 = false,
}: SectionHeaderProps) {
  const Heading = asH1 ? "h1" : "h2"

  return (
    <div className={cn("text-center mb-16 animate-fade-in-up", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">{label}</p>
      <Heading className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4">
        {title}
      </Heading>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  )
}
