import { CheckCircle2, ExternalLink } from 'lucide-react'
import { rematePosServices } from '../../data/projects'
import { getSafeAnchorProps } from '../../utils/links'
import { ActionButton } from '../ui/ActionButton'
import { Section } from '../ui/Section'

const learningPoints = [
  'Diseño de APIs REST.',
  'Separación de responsabilidades.',
  'Manejo de bases de datos SQL y NoSQL.',
  'Seguridad basada en roles.',
  'Integración frontend-backend.',
  'Despliegue en Render.',
  'Buenas prácticas con Git Flow y Conventional Commits.',
]

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

        <div
          className="rounded-xl border border-white/10 bg-white/8 p-6"
          id="arquitectura-rematepos"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                Arquitectura y servicios
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Demo cloud / despliegue académico
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                Proyecto académico en evolución, desplegado para demostración técnica. No se
                presenta como producto comercial terminado ni como producción empresarial.
              </p>
            </div>
            <ActionButton
              href="https://rematepos-frontend.onrender.com"
              label="Ver demo de RematePOS"
              newTab
              variant="primary"
            />
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {rematePosServices.map((service) => (
              <a
                className="rounded-lg border border-white/10 bg-slate-950/45 p-4 transition hover:border-teal-300/40 hover:bg-slate-950/70"
                href={service.url}
                key={service.name}
                {...getSafeAnchorProps(service.url)}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-white">{service.name}</p>
                  <ExternalLink size={16} aria-hidden="true" className="text-teal-200" />
                </div>
                <p className="mt-2 text-sm font-semibold text-teal-200">{service.status}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-slate-900/75 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
            Aprendizajes
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {learningPoints.map((point) => (
              <div
                className="flex gap-3 rounded-lg border border-white/10 bg-white/6 p-4"
                key={point}
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-teal-300"
                  size={20}
                  aria-hidden="true"
                />
                <p className="leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
