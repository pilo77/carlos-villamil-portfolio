import { useMemo, useState } from 'react'
import { ChevronDown, ExternalLink, Network, Server, ShieldCheck } from 'lucide-react'
import type { RematePosTechnicalGroup, RematePosTechnicalLink } from '../../data/rematepos'
import { getSafeAnchorProps } from '../../utils/links'
import { StatusBadge } from './StatusBadge'

interface TechnicalAccordionProps {
  groups: RematePosTechnicalGroup[]
}

const badgeByGroup: Record<string, string> = {
  'Servicios desplegados': 'Render',
  'Health checks': 'Health',
  'Endpoints vía API Gateway': 'Gateway',
}

const typeByGroup: Record<string, string> = {
  'Servicios desplegados': 'service',
  'Health checks': 'health',
  'Endpoints vía API Gateway': 'gateway',
}

const iconByGroup: Record<string, typeof Server> = {
  'Servicios desplegados': Server,
  'Health checks': ShieldCheck,
  'Endpoints vía API Gateway': Network,
}

function TechnicalItemCard({ item, badgeLabel, typeLabel }: { item: RematePosTechnicalLink; badgeLabel: string; typeLabel: string }) {
  return (
    <a
      className="group flex h-full flex-col rounded-xl border border-white/10 bg-slate-950/55 p-3 transition hover:-translate-y-0.5 hover:border-teal-300/30 hover:bg-slate-950/75"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      {...getSafeAnchorProps(item.url, true)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <ExternalLink size={12} aria-hidden="true" className="shrink-0 text-teal-200" />
            <p className="truncate text-sm font-semibold text-white">{item.label}</p>
          </div>
          {item.note ? <p className="mt-2 text-xs leading-5 text-slate-400">{item.note}</p> : null}
        </div>
        <StatusBadge label={badgeLabel} tone="muted" />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
          {typeLabel}
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.state}</span>
      </div>
    </a>
  )
}

export function TechnicalAccordion({ groups }: TechnicalAccordionProps) {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.title ?? '')

  const activeGroupData = useMemo(
    () => groups.find((group) => group.title === activeGroup) ?? groups[0],
    [activeGroup, groups],
  )

  if (!activeGroupData) {
    return null
  }

  const GroupIcon = iconByGroup[activeGroupData.title] ?? Network
  const badgeLabel = badgeByGroup[activeGroupData.title] ?? 'Render'
  const typeLabel = typeByGroup[activeGroupData.title] ?? 'service'

  return (
    <details
      className="group rounded-3xl border border-white/10 bg-slate-950/50 p-5 shadow-xl shadow-slate-950/20 sm:p-6"
      id="detalles-rematepos"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
            Ver detalles técnicos del despliegue
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Servicios, health checks y endpoints técnicos en una vista compacta con pestañas.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm font-semibold text-slate-200 transition group-open:rotate-180">
          <ChevronDown size={16} aria-hidden="true" />
          Abrir
        </span>
      </summary>

      <div className="mt-6 border-t border-white/10 pt-6">
        <div className="flex flex-wrap gap-2">
          {groups.map((group) => {
            const isActive = group.title === activeGroupData.title
            const TabIcon = iconByGroup[group.title] ?? Network

            return (
              <button
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                  isActive
                    ? 'border-teal-300/35 bg-teal-300/12 text-teal-100'
                    : 'border-white/10 bg-white/6 text-slate-300 hover:border-teal-300/25 hover:text-teal-100'
                }`}
                key={group.title}
                onClick={() => setActiveGroup(group.title)}
                type="button"
              >
                <TabIcon size={13} aria-hidden="true" />
                {group.title}
              </button>
            )
          })}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GroupIcon size={16} aria-hidden="true" className="text-teal-200" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
              {activeGroupData.title}
            </p>
          </div>
          <StatusBadge label={badgeLabel} tone={activeGroupData.title === 'Health checks' ? 'success' : 'accent'} />
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {activeGroupData.items.map((item) => (
            <TechnicalItemCard
              badgeLabel={badgeLabel}
              item={item}
              key={item.label}
              typeLabel={typeLabel}
            />
          ))}
        </div>
      </div>
    </details>
  )
}
