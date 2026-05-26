import { motion } from 'framer-motion'
import type { Project } from '../../../types'
import { ActionButton } from '../../ui/ActionButton'
import { ProjectMockup } from './ProjectMockup'
import { RepositoryLinks } from './RepositoryLinks'

interface ProjectCardProps {
  project: Project
  index: number
}

const compactedFeaturedLabels = new Set(['Ver código', 'Documentación'])

export function ProjectCard({ project, index }: ProjectCardProps) {
  const visibleLinks = project.featured
    ? project.links.filter((link) => !compactedFeaturedLabels.has(link.label))
    : project.links
  const overlayLinks = visibleLinks.filter((link) => link.href).slice(0, project.featured ? 2 : 1)

  return (
    <motion.article
      className={`group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/48 p-3 shadow-xl shadow-slate-950/25 ring-1 ring-white/5 transition hover:border-teal-300/35 hover:bg-white/8 sm:p-4 ${
        project.featured ? 'border-teal-300/25 bg-slate-950/58 shadow-2xl shadow-slate-950/30 lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 22 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className={project.featured ? 'grid gap-5 lg:grid-cols-[1.08fr_0.92fr]' : 'grid gap-4'}>
        <div className="relative">
          <ProjectMockup project={project} />
          <div className="absolute inset-0 hidden items-end rounded-2xl bg-gradient-to-t from-slate-950/94 via-slate-950/46 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100 md:flex">
            <div>
              <p className="text-lg font-semibold text-white sm:text-xl">{project.name}</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{project.status}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {overlayLinks.map((link, linkIndex) => (
                  <ActionButton
                    key={link.label}
                    {...link}
                    variant={linkIndex === 0 ? 'primary' : 'secondary'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 sm:p-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                {project.status}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[2.15rem]">
                {project.name}
              </h3>
            </div>
            {project.featured ? (
              <span className="rounded-full bg-teal-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_10px_30px_rgba(45,212,191,0.22)]">
                Principal
              </span>
            ) : null}
          </div>
          <p className="mt-4 leading-7 text-slate-300">{project.summary ?? project.description}</p>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            <strong className="text-slate-100">Rol:</strong> {project.role}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, project.featured ? 9 : 6).map((tech) => (
              <span
                className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>

          {project.repoLinks ? <RepositoryLinks repositories={project.repoLinks} /> : null}

          <div className="mt-5 flex flex-wrap gap-3">
            {visibleLinks.map((link, linkIndex) => (
              <ActionButton
                key={link.label}
                {...link}
                variant={linkIndex === 0 && link.href ? 'primary' : 'secondary'}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
