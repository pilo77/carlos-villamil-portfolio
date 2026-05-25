import { motion } from 'framer-motion'
import type { Project } from '../../../types'
import { ActionButton } from '../../ui/ActionButton'
import { ProjectMockup } from './ProjectMockup'
import { RepositoryLinks } from './RepositoryLinks'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-xl border border-white/10 bg-white/8 shadow-xl shadow-slate-950/20 transition hover:border-teal-300/35 hover:bg-white/10"
      initial={{ opacity: 0, y: 22 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <ProjectMockup label={project.mockupLabel} status={project.status} />

      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
          {project.featured ? (
            <span className="rounded-full bg-teal-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-950">
              Principal
            </span>
          ) : null}
        </div>
        <p className="mt-5 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
          <p>
            <strong className="text-slate-100">Problema:</strong> {project.problem}
          </p>
          <p>
            <strong className="text-slate-100">Rol:</strong> {project.role}
          </p>
          <p>
            <strong className="text-slate-100">Aprendizaje:</strong> {project.learning}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              className="rounded-md bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.repoLinks ? <RepositoryLinks repositories={project.repoLinks} /> : null}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link, linkIndex) => (
            <ActionButton
              key={link.label}
              {...link}
              variant={linkIndex === 0 && link.href ? 'primary' : 'secondary'}
            />
          ))}
        </div>
      </div>
    </motion.article>
  )
}
