"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { MapPin, Calendar, GraduationCap, Briefcase, Download, ChevronRight } from "lucide-react"
import { personalInfo, education, experience, certifications } from "@/lib/data/about"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"about" | "education" | "certifications">("about")

  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            {"<"} About Me {"/>"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Get to Know Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left column - Profile card */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="sticky top-32 space-y-6">
              {/* Profile image placeholder */}
              <div className="relative group">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border border-border/50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                        <span className="text-4xl font-bold text-primary">SM</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{personalInfo.name}</h3>
                        <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
                      </div>
                    </div>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-xl" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-xl" />
              </div>

              {/* Quick info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span>Open to opportunities</span>
                </div>
              </div>

              {/* Resume download button */}
              <a
                href="/resume/Shashinthaka_Munasinghe_CV.pdf"
                download
                className="group flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-mono text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
                data-cursor-hover
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in-up stagger-1">
            {/* Tab navigation */}
            <div className="flex gap-2 p-1.5 bg-secondary/30 rounded-xl border border-border/50">
              {(["about", "education", "certifications"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "flex-1 py-2.5 px-4 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300",
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                  data-cursor-hover
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[400px]">
              {activeTab === "about" && (
                <div className="space-y-6 animate-fade-in">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {personalInfo.summary}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-primary" />
                      Key Projects & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {personalInfo.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-mono text-primary">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {experience.map((exp, index) => (
                    <div key={index} className="p-5 rounded-xl bg-card/50 border border-border/50 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground">{exp.role}</h4>
                          <p className="text-sm text-primary">{exp.type}</p>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="p-6 rounded-xl bg-card/50 border border-border/50 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                        <GraduationCap className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{education.degree}</h4>
                        <p className="text-sm text-primary">{education.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {education.period}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs">
                        GPA: {education.gpa}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-secondary/30 border border-border/30">
                    <h4 className="font-semibold text-foreground mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground border border-border/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "certifications" && (
                <div className="space-y-4 animate-fade-in">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-mono text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {index + 1}
                      </div>
                      <span className="flex-1 text-muted-foreground group-hover:text-foreground transition-colors">
                        {cert}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
