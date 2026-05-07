import { Github, Linkedin, Mail, Phone } from "lucide-react"
import type { NavItem, SocialLink } from "@/types"

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

/** Full social link list (used by footer — includes handle text and Phone) */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/shashinthakamunasinghe",
    handle: "@shashinthakamunasinghe",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shashinthaka-munasinghe",
    handle: "/in/shashinthaka-munasinghe",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:nipunshashinthaka@gmail.com",
    handle: "nipunshashinthaka@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+94761002457",
    handle: "+94-761002457",
    icon: Phone,
  },
]

/** Subset shown in navbar (no Phone, no handle text needed) */
export const navbarSocialLinks = socialLinks.slice(0, 3)

export const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]
