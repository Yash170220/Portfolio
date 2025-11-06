// Shared TypeScript types and interfaces

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  accent: string
  size: 'small' | 'medium' | 'large'
  techStack: string[]
  achievements: Array<{ icon: string; text: string }>
  buttons: Array<{ label: string; type: 'primary' | 'secondary'; url: string }>
  description: string
  architecture: string
  metrics: Record<string, string>
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  id: string
  title: string
  icon: React.ComponentType
  color: string
  highlight?: boolean
  skills: Skill[]
}

export interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export interface SocialLink {
  icon: React.ComponentType
  href: string
  label: string
  ariaLabel: string
}

export interface NavItem {
  name: string
  href: string
}

export interface Metric {
  label: string
  value: string | number
  unit?: string
  trend?: 'up' | 'down' | 'stable'
}


