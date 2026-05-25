import type { LucideIcon } from 'lucide-react'

export type LinkStatus = 'available' | 'disabled' | 'pending'

export interface ActionLink {
  label: string
  href?: string
  status?: LinkStatus
  note?: string
  newTab?: boolean
}

export interface Profile {
  name: string
  role: string
  location: string
  summary: string
  about: string
}

export type ContactIconName = 'github' | 'linkedin' | 'mail' | 'whatsapp' | 'file'

export interface ContactLink extends ActionLink {
  icon: ContactIconName
}

export interface Project {
  name: string
  featured?: boolean
  status: string
  mockupLabel: string
  description: string
  problem: string
  role: string
  learning: string
  technologies: string[]
  links: ActionLink[]
  repoLinks?: RepositoryLink[]
}

interface AvailableRepositoryLink {
  label: string
  status: 'available'
  url: string
}

interface PendingRepositoryLink {
  label: string
  status: 'pending'
  note?: string
}

export type RepositoryLink = AvailableRepositoryLink | PendingRepositoryLink

export interface ServiceLink {
  name: string
  url: string
  description: string
  status: string
  linkStatus: LinkStatus
}

export interface SkillGroup {
  category: string
  icon: LucideIcon
  items: string[]
}

export interface CertificationGroup {
  organization: string
  topics: string[]
}

export interface TimelineItem {
  period: string
  title: string
  description: string
  tags: string[]
}
