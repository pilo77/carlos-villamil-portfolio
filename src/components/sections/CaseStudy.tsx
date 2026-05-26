import { BadgeCheck, ChevronDown, ExternalLink, Globe2, Network, Server, ShieldCheck } from 'lucide-react'
import { rematePos } from '../../data/rematepos'
import { getSafeAnchorProps } from '../../utils/links'
import { Section } from '../ui/Section'

const groupIconByTitle = {
  'Servicios desplegados': Server,
  'Health checks': ShieldCheck,
  'End points vía API Gateway': Globe2,
  'Endpoints vía API Gateway': Globe2,
}

function CompactLinkChip({ href, label, note }: { href: string; label: string; note?: string }) {
  return (
    <a
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-teal-300/45 hover:bg-teal-300/10 hover:text-teal-100"
      href={href}
      title={note ?? label}
      {...getSafeAnchorProps(href, true)}
    >
      <ExternalLink size={12} aria-hidden="true" />
      {label}
    </a>
  )
}

function StateBadge({ state }: { state: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-teal-300/15 bg-teal-300/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-100">
      {state}
    </span>
  )
}

export function CaseStudy() {
  return (
    <Section
      id="caso-rematepos"
      eyebrow="Caso de estudio"
      title="RematePOS como evidencia real de backend, arquitectura y despliegue"
    >
      <div className="space-y-6">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-slate-900/75 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
              Problema
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Pequeños comercios suelen manejar ventas, inventario, caja y facturación con procesos
              manuales o herramientas poco integradas.
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-slate-900/75 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
              Solución
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              RematePOS integra módulos de ventas, productos, clientes, caja, inventario,
              devoluciones y facturación simulada, usando API Gateway y microservicios.
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-slate-900/75 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
              Aporte personal
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              Participación principal en backend, diseño de arquitectura, seguridad con JWT, APIs
              REST, organización de ramas, documentación técnica y despliegue cloud académico.
            </p>
          </article>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/8 p-5 sm:p-6" id="arquitectura-rematepos">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                Arquitectura cloud de demostración
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Vista resumida para reclutadores y revisión técnica
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                {rematePos.note}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {rematePos.architectureBlocks.map((block) => (
              <article
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 shadow-lg shadow-slate-950/20 transition hover:border-teal-300/30 hover:bg-slate-950/65"
                key={block.title}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{block.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{block.description}</p>
                  </div>
                  <StateBadge state={block.state} />
                </div>
                {block.href && block.ctaLabel ? (
                  <div className="mt-4">
                    <CompactLinkChip href={block.href} label={block.ctaLabel} />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/75 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
            Aprendizajes
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {rematePos.learning.split(', ').map((point) => (
              <div
                className="flex gap-3 rounded-xl border border-white/10 bg-white/6 p-4"
                key={point}
              >
                <BadgeCheck
                  className="mt-1 shrink-0 text-teal-300"
                  size={20}
                  aria-hidden="true"
                />
                <p className="leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <details className="group rounded-2xl border border-white/10 bg-slate-950/50 p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                Ver detalles técnicos del despliegue
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Servicios, health checks y endpoints técnicos en formato compacto.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm font-semibold text-slate-200 transition group-open:rotate-180">
              <ChevronDown size={16} aria-hidden="true" />
              Abrir
            </span>
          </summary>

          <div className="mt-6 space-y-6 border-t border-white/10 pt-6">
            {rematePos.technicalGroups.map((group) => {
              const GroupIcon = groupIconByTitle[group.title as keyof typeof groupIconByTitle] ?? Network

              return (
                <section key={group.title}>
                  <div className="flex items-center gap-2">
                    <GroupIcon size={16} aria-hidden="true" className="text-teal-200" />
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                      {group.title}
                    </h4>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {group.items.map((item) => (
                      <a
                        className="rounded-xl border border-white/10 bg-slate-950/55 p-4 transition hover:border-teal-300/35 hover:bg-slate-950/75"
                        href={item.url}
                        key={item.label}
                        {...getSafeAnchorProps(item.url, true)}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-white">{item.label}</p>
                            {item.note ? (
                              <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
                            ) : null}
                          </div>
                          <span className="rounded-full border border-teal-300/15 bg-teal-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-100">
                            {item.state}
                          </span>
                        </div>
                        <p className="mt-3 break-all text-xs text-slate-500">{item.url}</p>
                      </a>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </details>
      </div>
    </Section>
  )
}
