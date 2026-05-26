import { Database, Globe2, Network, Server, ShieldCheck } from 'lucide-react'
import { rematePos } from '../../data/rematepos'
import { ActionButton } from '../ui/ActionButton'
import { Section } from '../ui/Section'
import { StatusBadge } from '../ui/StatusBadge'
import { TechnicalAccordion } from '../ui/TechnicalAccordion'

const iconByArchitectureTitle = {
  'Frontend React': Globe2,
  'API Gateway': Network,
  'Microservicios Spring Boot': Server,
  'Configuración y descubrimiento': ShieldCheck,
  'Datos y documentación': Database,
}

const buttonVariantByIndex = ['primary', 'secondary', 'outline', 'outline', 'outline'] as const

const flowNodeByTitle = {
  'Frontend React': {
    eyebrow: 'Demostración pública',
    caption: 'Interfaz web pública para reclutadores y validación funcional.',
  },
  'API Gateway': {
    eyebrow: 'Entrada central',
    caption: 'Comunica frontend con el backend y concentra las rutas expuestas.',
  },
  'Microservicios Spring Boot': {
    eyebrow: 'Servicios de negocio',
    caption: 'Auth, productos, compras, facturación, clientes y analítica.',
  },
  'Configuración y descubrimiento': {
    eyebrow: 'Soporte distribuido',
    caption: 'Config Server y Discovery Server para el ecosistema cloud.',
  },
  'Datos y documentación': {
    eyebrow: 'Persistencia y evidencia',
    caption: 'SQL/NoSQL, scripts y documentación técnica centralizada.',
  },
} as const

export function RemateposCaseStudy() {
  return (
    <Section
      id="caso-rematepos"
      eyebrow="Caso de estudio"
      title="RematePOS como evidencia real de backend, arquitectura y despliegue"
    >
      <div className="space-y-6">
        <article className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.9),rgba(15,23,42,0.96)),radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_32%)] p-5 shadow-2xl shadow-slate-950/25 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(17rem,0.7fr)] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <StatusBadge label={rematePos.status} tone="accent" />
                <StatusBadge label="Arquitectura por servicios" tone="muted" />
                <StatusBadge label="Render demo" tone="muted" />
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                {rematePos.title}
              </h3>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
                {rematePos.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {rematePos.mainLinks.map((link, index) => (
                  <ActionButton
                    key={link.label}
                    {...link}
                    variant={buttonVariantByIndex[index] ?? 'secondary'}
                  />
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {rematePos.technologies.map((technology) => (
                  <StatusBadge key={technology} label={technology} tone="neutral" />
                ))}
              </div>
            </div>

            <aside className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">Rol</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{rematePos.role}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Alcance
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{rematePos.summary}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Estado
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Demo técnica en Render y repositorios públicos organizados para revisión.</p>
              </div>
            </aside>
          </div>
        </article>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(22rem,0.8fr)] xl:items-start">
          <section className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 shadow-xl shadow-slate-950/20 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                  Arquitectura cloud de demostración
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 text-balance">
                  Vista compacta tipo pipeline para entender el flujo técnico en segundos.
                </p>
              </div>
              <StatusBadge label="Flujo técnico" tone="muted" />
            </div>

            <div className="mt-5 grid gap-3">
              {rematePos.architectureBlocks.map((block, index) => {
                const Icon = iconByArchitectureTitle[block.title as keyof typeof iconByArchitectureTitle] ?? Globe2
                const flowMeta = flowNodeByTitle[block.title as keyof typeof flowNodeByTitle]
                const isLast = index === rematePos.architectureBlocks.length - 1

                return (
                  <div key={block.title} className="grid gap-3 md:grid-cols-[minmax(0,1.25fr)_auto] md:items-center">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-4 transition hover:border-teal-300/25 hover:bg-slate-950/80">
                      <div className="flex items-start gap-3">
                        <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/6 text-teal-200">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                              {flowMeta.eyebrow}
                            </span>
                            <StatusBadge label={block.state} tone="accent" />
                          </div>
                          <h4 className="mt-2 text-sm font-semibold text-white sm:text-base">
                            {block.title}
                          </h4>
                          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300 text-balance">
                            {flowMeta.caption}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 md:justify-end">
                      {!isLast ? (
                        <div className="hidden h-px flex-1 bg-gradient-to-r from-teal-300/35 via-white/10 to-transparent md:block" />
                      ) : null}
                      {block.href && block.ctaLabel ? (
                        <ActionButton
                          className="min-w-[11rem] justify-center"
                          href={block.href}
                          label={block.ctaLabel}
                          newTab={!block.href.startsWith('#')}
                          variant={block.title === 'Frontend React' ? 'primary' : 'secondary'}
                        />
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="mt-5 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm leading-7 text-slate-300">
              {rematePos.note}
            </p>
          </section>

          <aside className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 shadow-xl shadow-slate-950/20 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                  Acciones principales
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400 text-balance">
                  Resumen rápido para abrir la demo y revisar el repositorio correcto sin saturar la vista.
                </p>
              </div>
              <StatusBadge label="Main links" tone="muted" />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {rematePos.mainLinks.map((link, index) => (
                <ActionButton
                  className="w-full justify-center"
                  key={link.label}
                  {...link}
                  variant={buttonVariantByIndex[index] ?? 'secondary'}
                />
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/55 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                Tecnologías
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {rematePos.technologies.map((technology) => (
                  <StatusBadge key={technology} label={technology} tone="neutral" />
                ))}
              </div>
            </div>
          </aside>
        </div>

        <TechnicalAccordion groups={rematePos.technicalGroups} />
      </div>
    </Section>
  )
}
