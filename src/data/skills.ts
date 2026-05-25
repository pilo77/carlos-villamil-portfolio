import { Braces, Cloud, Database, GitBranch, Layers3, ShieldCheck } from 'lucide-react'
import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    category: 'Backend',
    icon: Layers3,
    items: ['Java', 'Spring Boot', 'APIs REST', 'JWT', 'Arquitectura por capas'],
  },
  {
    category: 'Frontend',
    icon: Braces,
    items: ['React', 'JavaScript', 'TypeScript básico', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Bases de datos',
    icon: Database,
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL', 'NoSQL'],
  },
  {
    category: 'DevOps y herramientas',
    icon: Cloud,
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'Render básico'],
  },
  {
    category: 'Redes y seguridad',
    icon: ShieldCheck,
    items: ['CCNA básico', 'Redes LAN/WAN', 'Ciberseguridad básica'],
  },
  {
    category: 'Metodologías',
    icon: GitBranch,
    items: ['Scrum', 'Git Flow', 'Documentación técnica'],
  },
]
