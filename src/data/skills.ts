import { Braces, Cloud, Database, GitBranch, Layers3, ShieldCheck } from 'lucide-react'
import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    category: 'Backend',
    icon: Layers3,
    items: [
      { name: 'Java', level: 'Intermedio' },
      { name: 'Spring Boot', level: 'En práctica' },
      { name: 'Spring Security', level: 'En práctica' },
      { name: 'JWT', level: 'Proyecto académico' },
      { name: 'APIs REST', level: 'Intermedio' },
      { name: 'Arquitectura por capas', level: 'Proyecto académico' },
      { name: 'Microservicios', level: 'En práctica' },
    ],
  },
  {
    category: 'Frontend',
    icon: Braces,
    items: [
      { name: 'React', level: 'En práctica' },
      { name: 'JavaScript', level: 'Intermedio' },
      { name: 'TypeScript', level: 'En práctica' },
      { name: 'HTML', level: 'Intermedio' },
      { name: 'CSS', level: 'Intermedio' },
      { name: 'Tailwind CSS', level: 'En práctica' },
    ],
  },
  {
    category: 'Bases de datos',
    icon: Database,
    items: [
      { name: 'MySQL', level: 'Intermedio' },
      { name: 'PostgreSQL', level: 'En práctica' },
      { name: 'MongoDB', level: 'En práctica' },
      { name: 'SQL', level: 'Intermedio' },
      { name: 'NoSQL', level: 'Fundamentos' },
    ],
  },
  {
    category: 'Herramientas',
    icon: Cloud,
    items: [
      { name: 'Git', level: 'Intermedio' },
      { name: 'GitHub', level: 'Intermedio' },
      { name: 'Docker', level: 'En práctica' },
      { name: 'Postman', level: 'Intermedio' },
      { name: 'Vercel', level: 'En práctica' },
      { name: 'Render', level: 'Proyecto académico' },
    ],
  },
  {
    category: 'Seguridad y redes',
    icon: ShieldCheck,
    items: [
      { name: 'Fundamentos CCNA', level: 'Fundamentos' },
      { name: 'Redes LAN/WAN', level: 'Fundamentos' },
      { name: 'Ciberseguridad básica', level: 'Fundamentos' },
      { name: 'Control de acceso', level: 'Proyecto académico' },
    ],
  },
  {
    category: 'Metodologías',
    icon: GitBranch,
    items: [
      { name: 'Scrum', level: 'Fundamentos' },
      { name: 'Git Flow', level: 'En práctica' },
      { name: 'Conventional Commits', level: 'En práctica' },
      { name: 'Documentación técnica', level: 'Proyecto académico' },
    ],
  },
]
