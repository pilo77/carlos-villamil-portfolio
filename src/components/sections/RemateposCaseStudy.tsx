import { Database, Globe2, Network, Server, ShieldCheck } from 'lucide-react'
import { rematePos } from '../../data/rematepos'
import { ActionButton } from '../ui/ActionButton'
import { ArchitectureCard } from '../ui/ArchitectureCard'
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

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
              Arquitectura cloud de demostración
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              Vista resumida pensada para reclutadores: cinco bloques homogéneos y una acción clara por bloque.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {rematePos.architectureBlocks.map((block) => {
            const Icon = iconByArchitectureTitle[block.title as keyof typeof iconByArchitectureTitle] ?? Globe2

            return (
              <ArchitectureCard
                ctaVariant={block.title === 'Frontend React' ? 'primary' : 'secondary'}
                description={block.description}
                href={block.href}
                icon={Icon}
                key={block.title}
                ctaLabel={block.ctaLabel}
                state={block.state}
                title={block.title}
              />
            )
          })}
        </div>

        <p className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm leading-7 text-slate-300">
          {rematePos.note}
        </p>

        <TechnicalAccordion groups={rematePos.technicalGroups} />
      </div>
    </Section>
  )
}
