import type { Project, PersonalInfo, Education, Experience } from "@/types"

export const roles = [
  "building web apps",
  "crafting APIs",
  "exploring systems",
  "solving problems",
  "shipping code",
]

export const personalInfo: PersonalInfo = {
  name: "Shashinthaka Munasinghe",
  title: "Full Stack Developer",
  location: "Kurunegala, Sri Lanka",
  email: "nipunshashinthaka@gmail.com",
  summary:
    "Driven ICT undergraduate at Uva Wellassa University with hands-on experience in full-stack web development. Skilled in React, Next.js, Spring Boot, and Firebase. I build responsive, secure, and scalable web systems with a focus on clean code and user experience.",
  highlights: [
    "Campus Event Management System (CampusAura)",
    "Waste Management Platform (EcoCycle Hub)",
    "Animal Welfare System (Happy Tails UWU)",
    "Healthcare Management System (JavaFX)",
  ],
}

export const education: Education = {
  degree: "BSc in Information & Communication Technology",
  institution: "Uva Wellassa University of Sri Lanka",
  period: "2022 - Present",
  gpa: "3.2/4.0",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Database Systems",
    "Web Development",
    "Software Engineering",
    "Cloud Computing",
  ],
}

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    type: "Academic Projects",
    period: "2022 - Present",
    description:
      "Built multiple web applications using React, Next.js, Spring Boot, and Firebase with focus on responsive design and secure authentication.",
  },
]

export const certifications: string[] = [
  "Azure AI Engineer Associate (Microsoft)",
  "API Development on AWS (Coursera)",
  "Web Security Fundamentals (Google)",
  "JavaScript ES6 Certification",
  "Python for Data Science",
]
