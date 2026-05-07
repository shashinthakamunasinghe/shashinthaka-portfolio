import type { Project } from "@/types"

/**
 * All projects — used by both the home page grid and the /projects page.
 * These are Shashinthaka's actual projects.
 */
export const projects: Project[] = [
  {
    id: 0,
    title: "CampusAura",
    description:
      "A containerized full-stack campus event management platform with microservices architecture. Features JWT authentication, RBAC using Spring Security, responsive dashboards, and cloud deployment on Azure Container Apps.",
    tags: ["Java 17", "Spring Boot", "React 19", "Firebase", "Docker", "Azure"],
    status: "in-progress",
    year: "2025",
    url: "https://github.com/sandaluruba/CampusAura-backend",
    homepage: "https://github.com/sandaluruba/CampusAura-frontend",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "EcoCycle Hub",
    description:
      "A full-stack waste management and recycling web application with role-based authentication for Admin, Collector, Industry User, and Customer. Features live GPS tracking with Google Maps API and Stripe payment integration.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Google Maps API", "Stripe"],
    status: "shipped",
    year: "2025",
    url: "https://github.com/shashinthakamunasinghe/eco-cycle-hub",
    featured: true,
  },
  {
    id: 2,
    title: "Happy Tails UWU",
    description:
      "An animal welfare management system with RESTful APIs for stray reporting, adoption management, and vet clinic directory. Built with Spring Boot REST APIs using DTOs, validation, and Swagger/OpenAPI documentation.",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "MySQL", "Swagger"],
    status: "in-progress",
    year: "2025",
    url: "https://github.com/LashenDEV/happy-tails-uwu-api",
    featured: true,
  },
  {
    id: 3,
    title: "Healthcare System JavaFX",
    description:
      "A JavaFX desktop application that streamlines healthcare workflows, including managing doctors, patients, and appointments, with CSV-based data storage and a modern, user-friendly interface.",
    tags: ["Java", "JavaFX", "OOP", "Desktop App"],
    status: "shipped",
    year: "2025",
    url: "https://github.com/shashinthakamunasinghe/healthcare-system-javafx",
    featured: false,
  },
]

/** Status filter options for project grids */
export const projectFilters = ["all", "shipped", "in-progress"] as const
