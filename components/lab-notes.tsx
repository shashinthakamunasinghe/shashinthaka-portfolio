"use client"

import { useState } from "react"
import { NoteCard } from "@/components/ui/note-card"
import { labNotes } from "@/lib/data/notes"

export function LabNotes() {
  const [expandedNote, setExpandedNote] = useState<number | null>(null)

  return (
    <section id="notes" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Learning
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technical Skills
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Key technologies and concepts I work with in full-stack development.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {labNotes.map((note, index) => (
            <NoteCard
              key={note.id}
              note={note}
              index={index}
              isExpanded={expandedNote === note.id}
              onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
