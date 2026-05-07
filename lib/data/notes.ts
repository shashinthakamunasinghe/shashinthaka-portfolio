import type { Note } from "@/types"

/**
 * Concise skill-highlight notes shown on the home page (LabNotes / "Technical Skills" section).
 * Simpler shape — no tags/readTime needed.
 */
export const labNotes: Note[] = [
  {
    id: 1,
    title: "Building Microservices with Spring Boot",
    excerpt:
      "Designing containerized applications with Docker Compose, multi-stage builds, and efficient cloud deployment strategies.",
    date: "Oct 2025",
    category: "backend",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "JWT Authentication & RBAC",
    excerpt:
      "Implementing secure REST APIs with Firebase JWT authentication and Role-Based Access Control using Spring Security.",
    date: "Sep 2025",
    category: "security",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Next.js + Firebase Integration",
    excerpt:
      "Building full-stack applications with Next.js, Firebase Auth, Firestore, and real-time data synchronization.",
    date: "Apr 2025",
    category: "frontend",
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "API Documentation with Swagger",
    excerpt:
      "Creating comprehensive API documentation using Swagger/OpenAPI for maintainable and developer-friendly endpoints.",
    date: "Sep 2025",
    category: "backend",
    color: "from-orange-500/20 to-amber-500/20",
  },
]

/**
 * Full notes shown on the /notes page — richer shape with tags & readTime.
 */
export const allNotes: Note[] = [
  {
    id: 1,
    title: "Building a Linux distro from scratch",
    excerpt:
      "Learnings from compiling the kernel, configuring BusyBox, and creating bootable ISOs with Syslinux. A deep dive into the foundations of operating systems.",
    content:
      "Full walkthrough of building a minimal Linux distribution including kernel compilation, initramfs setup, and bootloader configuration...",
    date: "Nov 2025",
    category: "systems",
    tags: ["Linux", "Shell", "Docker"],
    color: "from-blue-500/20 to-cyan-500/20",
    readTime: "12 min",
  },
  {
    id: 2,
    title: "MCP protocol in LLM apps",
    excerpt:
      "Implementing Model Context Protocol for seamless AI model interactions with vector databases in RAG apps. Exploring the future of AI agent communication.",
    content: "Deep dive into MCP protocol implementation...",
    date: "Apr 2025",
    category: "ai",
    tags: ["AI", "MCP", "RAG", "LangChain"],
    color: "from-purple-500/20 to-pink-500/20",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "Next.js 16 + Tailwind v4",
    excerpt:
      "Exploring the new features in Next.js 16 and migrating to Tailwind CSS v4's new configuration system. Performance improvements and developer experience.",
    content: "Migration guide and new features overview...",
    date: "Dec 2024",
    category: "frontend",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    color: "from-primary/20 to-emerald-500/20",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Self-hosting LLMs with FastAPI",
    excerpt:
      "Running Llama2 locally and building a personal chatbot API for natural language tasks. Complete setup guide with Docker containerization.",
    content: "Step-by-step guide to self-hosting LLMs...",
    date: "Oct 2023",
    category: "ai",
    tags: ["Python", "FastAPI", "Llama2", "Docker"],
    color: "from-orange-500/20 to-amber-500/20",
    readTime: "10 min",
  },
  {
    id: 5,
    title: "Docker multi-stage builds for Next.js",
    excerpt:
      "Optimizing container sizes and build times with multi-stage Docker builds. Production-ready configurations for Next.js applications.",
    content: "Docker optimization techniques...",
    date: "Sep 2023",
    category: "devops",
    tags: ["Docker", "Next.js", "CI/CD"],
    color: "from-cyan-500/20 to-blue-500/20",
    readTime: "7 min",
  },
  {
    id: 6,
    title: "React Server Components deep dive",
    excerpt:
      "Understanding the paradigm shift with RSC. How server components change data fetching patterns and improve performance.",
    content: "Complete guide to React Server Components...",
    date: "Aug 2023",
    category: "frontend",
    tags: ["React", "RSC", "Next.js"],
    color: "from-indigo-500/20 to-purple-500/20",
    readTime: "9 min",
  },
]

export const noteCategories = ["all", "frontend", "ai", "systems", "devops"] as const
