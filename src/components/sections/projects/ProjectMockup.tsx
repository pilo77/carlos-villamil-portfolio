import type { Project } from '../../../types'

interface ProjectMockupProps {
  project: Project
}

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-red-300/75" />
        <span className="size-2.5 rounded-full bg-amber-300/75" />
        <span className="size-2.5 rounded-full bg-teal-300/75" />
      </div>
      <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-teal-100">
        {label}
      </span>
    </div>
  )
}

function PosMockup() {
  return (
    <div className="grid h-full gap-3 p-4 sm:grid-cols-[0.72fr_1fr]">
      <aside className="rounded-xl border border-white/10 bg-slate-950/70 p-3">
        <div className="h-3 w-24 rounded-full bg-teal-300/70" />
        <div className="mt-5 grid gap-2">
          {['Ventas', 'Inventario', 'Caja', 'Clientes'].map((item) => (
            <div
              className="flex items-center justify-between rounded-lg bg-white/7 px-3 py-2 text-xs text-slate-300"
              key={item}
            >
              <span>{item}</span>
              <span className="size-1.5 rounded-full bg-teal-300" />
            </div>
          ))}
        </div>
      </aside>
      <main className="grid gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            ['Ventas', '$2.4M'],
            ['Items', '128'],
            ['Caja', '36'],
          ].map(([label, value]) => (
            <div className="rounded-lg border border-teal-300/15 bg-teal-300/10 p-3" key={label}>
              <div className="text-[0.68rem] uppercase tracking-[0.16em] text-teal-100/80">
                {label}
              </div>
              <div className="mt-1 text-sm font-bold text-white">{value}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-950/58 p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-300">Orden activa</span>
            <span className="rounded-full bg-teal-300 px-2 py-1 text-[10px] font-bold text-slate-950">
              POS
            </span>
          </div>
          <div className="space-y-2">
            {[72, 54, 86].map((width) => (
              <div className="h-2 rounded-full bg-white/10" key={width}>
                <div className="h-2 rounded-full bg-teal-300/70" style={{ width: `${width}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-white/7 p-3">
              <div className="h-2 w-16 rounded-full bg-white/20" />
              <div className="mt-3 h-8 rounded-md bg-sky-300/12" />
            </div>
            <div className="rounded-lg bg-white/7 p-3">
              <div className="h-2 w-14 rounded-full bg-white/20" />
              <div className="mt-3 h-8 rounded-md bg-violet-300/12" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function AiMockup() {
  return (
    <div className="grid h-full gap-3 p-4 sm:grid-cols-[1fr_0.72fr]">
      <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-100">
            Modelo
          </span>
          <span className="rounded-full bg-sky-300/12 px-3 py-1 text-xs text-sky-100">
            Streamlit
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="aspect-square rounded-xl border border-white/10 bg-white/7" key={item}>
              <div className="m-auto mt-[35%] size-3 rounded-full bg-teal-300/70" />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-slate-950/55 p-4">
        <div className="h-3 w-20 rounded-full bg-teal-300/55" />
        <div className="mt-5 space-y-3">
          {[82, 68, 43].map((width) => (
            <div className="h-2 rounded-full bg-white/10" key={width}>
              <div className="h-2 rounded-full bg-sky-300/65" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WebMockup() {
  return (
    <div className="h-full p-4">
      <div className="grid h-full gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-4">
        <div className="grid grid-cols-[0.7fr_1fr] gap-3">
          <div className="rounded-xl bg-teal-300/12 p-3">
            <div className="h-3 w-20 rounded-full bg-teal-300/65" />
            <div className="mt-4 h-14 rounded-lg bg-white/8" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 rounded-full bg-white/18" />
            <div className="h-3 w-1/2 rounded-full bg-white/10" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div className="h-16 rounded-lg border border-white/10 bg-white/7" key={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div className="h-12 rounded-lg border border-teal-300/10 bg-teal-300/8" key={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function GenericMockup() {
  return (
    <div className="flex h-full flex-col justify-between p-5">
      <div className="space-y-3">
        <div className="h-3 w-3/4 rounded-full bg-teal-300/45" />
        <div className="h-3 w-1/2 rounded-full bg-sky-300/30" />
      </div>
      <div className="grid grid-cols-3 gap-2 pt-3">
        {[1, 2, 3].map((item) => (
          <div className="h-20 rounded-xl border border-white/10 bg-white/7" key={item} />
        ))}
      </div>
    </div>
  )
}

export function ProjectMockup({ project }: ProjectMockupProps) {
  const contentByLabel = {
    AI: <AiMockup />,
    POS: <PosMockup />,
    WEB: <WebMockup />,
  }

  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.18),rgba(37,99,235,0.14)),linear-gradient(180deg,rgba(15,23,42,0.82),rgba(15,23,42,0.98))] transition duration-500 group-hover:scale-[1.015]">
      <div className="absolute inset-0 opacity-55 [background-image:radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(129,140,248,0.18),transparent_26%)]" />
      <div className="relative flex min-h-[18rem] flex-col">
        <WindowChrome label={project.mockupLabel} />
        <div className="flex-1">
          {contentByLabel[project.mockupLabel as keyof typeof contentByLabel] ?? <GenericMockup />}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/92 to-transparent p-4">
        <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-100">
          {project.status}
        </span>
      </div>
    </div>
  )
}
