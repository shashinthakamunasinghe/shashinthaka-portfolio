import type { TechCategory, StatItem } from "@/types"

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    color: "from-cyan-500 to-blue-500",
    glowColor: "cyan",
    technologies: [
      { name: "React", icon: "⚛️", level: 90, description: "Component-based UI" },
      { name: "Next.js", icon: "▲", level: 85, description: "Full-stack framework" },
      { name: "Tailwind CSS", icon: "🎨", level: 95, description: "Utility-first CSS" },
      { name: "TypeScript", icon: "📘", level: 80, description: "Type-safe JavaScript" },
    ],
  },
  {
    name: "Backend",
    color: "from-green-500 to-emerald-500",
    glowColor: "green",
    technologies: [
      { name: "Spring Boot", icon: "🍃", level: 85, description: "Java framework" },
      { name: "Node.js", icon: "🟢", level: 80, description: "JavaScript runtime" },
      { name: "Firebase", icon: "🔥", level: 85, description: "Backend as a service" },
    ],
  },
  {
    name: "Database",
    color: "from-purple-500 to-pink-500",
    glowColor: "purple",
    technologies: [
      { name: "MySQL", icon: "🐬", level: 85, description: "Relational database" },
      { name: "PostgreSQL", icon: "🐘", level: 80, description: "Advanced RDBMS" },
      { name: "Firestore", icon: "🔥", level: 80, description: "NoSQL cloud database" },
    ],
  },
  {
    name: "DevOps",
    color: "from-orange-500 to-red-500",
    glowColor: "orange",
    technologies: [
      { name: "Docker", icon: "🐳", level: 75, description: "Containerization" },
      { name: "Azure", icon: "☁️", level: 70, description: "Cloud platform" },
      { name: "GitHub Actions", icon: "⚡", level: 80, description: "CI/CD automation" },
    ],
  },
]

export const statsData: StatItem[] = [
  { label: "Technologies", value: "12+", icon: "🛠️" },
  { label: "Projects Built", value: "10+", icon: "🚀" },
  { label: "Years Learning", value: "3+", icon: "📚" },
  { label: "Certifications", value: "5+", icon: "🏆" },
]
