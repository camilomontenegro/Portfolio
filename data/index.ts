import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Project, SocialLink } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    preview: "🛒",
    description: "React + Node.js shopping site",
    url: "https://ecommerce-demo.vercel.app",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Weather Dashboard", 
    preview: "🌤️",
    description: "Real-time weather tracking",
    url: "https://weather-app.vercel.app",
    tech: ["Vue.js", "API Integration"]
  },
  {
    id: 3,
    title: "Chat Application",
    preview: "💬", 
    description: "WebSocket real-time chat",
    url: "https://chat-app.vercel.app",
    tech: ["Socket.io", "Express"]
  },
  {
    id: 4,
    title: "Game Portfolio",
    preview: "🎮",
    description: "Mini games collection", 
    url: "https://games.vercel.app",
    tech: ["Canvas", "WebGL"]
  }
]

export const socialLinks: SocialLink[] = [
  { icon: Github, url: "https://github.com/yourusername", color: "#333" },
  { icon: Twitter, url: "https://twitter.com/yourusername", color: "#1DA1F2" },
  { icon: Linkedin, url: "https://linkedin.com/in/yourusername", color: "#0A66C2" },
  { icon: Mail, url: "mailto:your@email.com", color: "#EA4335" }
]

export const musicTracks: string[] = [
  "Synthwave Dreams",
  "Digital Nostalgia", 
  "Neon Nights",
  "Retro Future"
]