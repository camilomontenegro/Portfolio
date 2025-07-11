import { LucideIcon } from 'lucide-react'

export interface Project {
  id: number
  title: string
  preview: string
  description: string
  url: string
  tech: string[]
}

export interface SocialLink {
  icon: LucideIcon
  url: string
  color: string
}

export interface WindowPosition {
  x: number
  y: number
}

export interface WindowPositions {
  [key: number]: WindowPosition
}