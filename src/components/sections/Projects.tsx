import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { ActionButton } from '../ui/ActionButton'
import { Section } from '../ui/Section'

export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Evidencia"
      title="Proyectos con rol, alcance, enlaces y estado real"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/8 shadow-xl shadow-slate-950/20 transition hover:border-teal-300/35 hover:bg-white/10"
            initial={{ opacity: 0, y: 22 }}
            key={project.name}
            transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="border-b border-white/10 bg-slate-950/45 p-5">
              <div className="flex min-h-36 items-end justify-between rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.18),rgba(37,99,235,0.12)),linear-gradient(180deg,rgba(15,23,42,0.82),rgba(15,23,42,0.95))] p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
                    Proyecto
                  </p>
                  <p className="mt-2 text-3xl font-bold text-white">{project.mockupLabel}</p>
                </div>
                <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-100">
                  {project.status}
                </span>
              </div>
            </div>

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

              {project.repoLinks ? (
                <div className="mt-5 rounded-lg border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-sm font-semibold text-white">Repositorios del proyecto</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.repoLinks.map((repo) => (
                      <span
                        className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400"
                        key={repo.label}
                        title={repo.status === 'pending' ? repo.url : undefined}
                      >
                        {repo.label}: Repositorio pendiente
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

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
        ))}
      </div>
    </Section>
  )
}
