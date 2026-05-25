interface ProjectMockupProps {
  label: string
  status: string
}

export function ProjectMockup({ label, status }: ProjectMockupProps) {
  return (
    <div className="border-b border-white/10 bg-slate-950/45 p-5">
      <div className="flex min-h-36 items-end justify-between rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.18),rgba(37,99,235,0.12)),linear-gradient(180deg,rgba(15,23,42,0.82),rgba(15,23,42,0.95))] p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
            Proyecto
          </p>
          <p className="mt-2 text-3xl font-bold text-white">{label}</p>
        </div>
        <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-100">
          {status}
        </span>
      </div>
    </div>
  )
}
