"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { navItems, navbarSocialLinks as socialLinks } from "@/lib/data/navigation"

export function GlassNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeSection === href.slice(1)
    }
    if (href === "/") return pathname === "/" && !activeSection
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Track active section
      const sections = ["about", "skills", "projects", "contact"]
      let matched = false
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 80) {
            setActiveSection(section)
            matched = true
            return
          }
        }
      }
      if (!matched && window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveSection("")
    } else if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl",
        isScrolled ? "top-3" : "top-4"
      )}
    >
      <nav
        className={cn(
          "relative rounded-2xl border transition-all duration-500",
          isScrolled
            ? "bg-background/60 backdrop-blur-2xl border-border/50 shadow-lg shadow-black/5 dark:shadow-black/20"
            : "bg-background/40 backdrop-blur-xl border-border/30"
        )}
      >
        {/* Glassmorphism glow effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/5 via-transparent to-transparent rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3" data-cursor-hover>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 font-mono text-sm text-primary transition-all duration-400 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25">
                <span className="font-bold">SM</span>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-xl border border-primary/50 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
              </div>
              <div className="hidden sm:block">
                <span className="font-mono text-sm tracking-tight font-semibold">
                  <span className="text-primary">SHASHIN</span>
                  <span className="text-foreground">THAKA</span>
                </span>
                <p className="text-[10px] text-muted-foreground font-mono tracking-wide">Full Stack Developer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-secondary/30 rounded-xl px-1.5 py-1.5">
              {navItems.map((item, index) => {
                const active = isActive(item.href)
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 rounded-lg",
                      active
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    data-cursor-hover
                  >
                    {/* Active/Hover background */}
                    <span
                      className={cn(
                        "absolute inset-0 rounded-lg transition-all duration-300",
                        active
                          ? "bg-primary shadow-lg shadow-primary/25"
                          : hoveredIndex === index
                          ? "bg-secondary"
                          : "bg-transparent"
                      )}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              {/* Social Links - Desktop */}
              <div className="hidden lg:flex items-center gap-1 mr-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
                    data-cursor-hover
                  >
                    <link.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden lg:block h-6 w-px bg-border/50" />

              {/* Theme controls */}
              <div className="flex items-center gap-1">
                <ThemeToggle />
              </div>

              {/* Status badge */}
              <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted-foreground px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Available</span>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 md:hidden transition-all duration-300 hover:bg-secondary hover:border-border"
                aria-label="Toggle menu"
                data-cursor-hover
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-400",
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pb-4 pt-2 border-t border-border/30">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-200",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className={cn(
                    "text-xs transition-colors",
                    isActive(item.href) ? "text-primary-foreground/70" : "text-primary"
                  )}>
                    0{index + 1}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary hover:bg-primary/10"
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground px-3 py-2 rounded-full bg-secondary/30 border border-border/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Available</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
