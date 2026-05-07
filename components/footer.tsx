import { Heart, MapPin, Download, ArrowUpRight, Code2 } from "lucide-react"
import Link from "next/link"
import { socialLinks, quickLinks } from "@/lib/data/navigation"

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        {/* Main footer content */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
          {/* Brand & CTA - Larger column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 font-mono text-lg text-primary transition-all duration-400 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="font-bold">SM</span>
              </div>
              <div>
                <span className="font-mono text-lg tracking-tight block font-semibold">
                  <span className="text-primary">SHASHIN</span>
                  <span className="text-foreground">THAKA</span>
                </span>
                <span className="text-xs text-muted-foreground">Full Stack Developer</span>
              </div>
            </Link>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Seeking an entry-level Software Engineer / Web Developer role to contribute technical skills and grow in a professional environment.
            </p>

            {/* Location */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Kurunegala, Sri Lanka</span>
            </div>

            {/* Resume Download */}
            <a
              href="/resume/Shashinthaka_Munasinghe_CV.pdf"
              download
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-mono text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    {">"}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                  rel={link.label !== "Email" && link.label !== "Phone" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-secondary/50 border border-transparent hover:border-border/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{link.label}</p>
                    <p className="text-xs text-muted-foreground truncate">{link.handle}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="font-mono text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Shashinthaka Munasinghe
          </p>
        </div>
      </div>
    </footer>
  )
}
