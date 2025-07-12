import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Project, SocialLink } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: "Resilienza Real Estate",
    preview: "🏠",
    description: "Modern real estate platform",
    url: "https://resilienza-real-state.vercel.app/",
    tech: ["React", "Next.js", "Tailwind"]
  },
  {
    id: 2,
    title: "Dashboard",
    preview: "📊",
    description: "Business analytics",
    url: "https://resilienza-dashboard.vercel.app/",
    tech: ["React", "Next.js", "Tailwind"]
  },
  {
    id: 3,
    title: "H&M",
    preview: "👚",
    description: "Clothing store website",
    url: "https://h-m-mockup.vercel.app/",
    tech: ["Javascript", "Html", "Css", "Supabase"]
  }
]

export const socialLinks: SocialLink[] = [
  { icon: Github, url: "https://github.com/camilomontenegro", color: "#333" },
  { icon: Twitter, url: "https://twitter.com/yourusername", color: "#1DA1F2" },
  { icon: Linkedin, url: "www.linkedin.com/in/camilo-montenegro", color: "#0A66C2" },
  { icon: Mail, url: "mailto:your@email.com", color: "#EA4335" }
]

export const musicTracks: string[] = [
  "Synthwave Dreams",
  "Digital Nostalgia", 
  "Neon Nights",
  "Retro Future"
]