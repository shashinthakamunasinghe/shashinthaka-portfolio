import type React from "react"

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  /** Short display handle (shown in footer) */
  handle?: string
  icon: React.ComponentType<{ className?: string }>
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectStatus = "shipped" | "in-progress" | "archived"

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  status: ProjectStatus
  year: string
  url: string
  homepage?: string
  featured: boolean
  highlight?: boolean
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────

export interface Technology {
  name: string
  icon: string
  level: number
  description: string
}

export interface TechCategory {
  name: string
  /** Tailwind gradient class e.g. "from-cyan-500 to-blue-500" */
  color: string
  glowColor: string
  technologies: Technology[]
}

export interface StatItem {
  label: string
  value: string
  icon: string
}

// ─── Notes ────────────────────────────────────────────────────────────────────

export interface Note {
  id: number
  title: string
  excerpt: string
  /** Full body content (used on notes page) */
  content?: string
  date: string
  category: string
  tags?: string[]
  /** Tailwind gradient classes for the hover bg overlay */
  color: string
  readTime?: string
}

// ─── About / Personal ─────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  summary: string
  highlights: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  gpa: string
  coursework: string[]
}

export interface Experience {
  role: string
  type: string
  period: string
  description: string
}
