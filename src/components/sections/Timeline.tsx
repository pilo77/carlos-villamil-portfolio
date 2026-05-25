import { timeline } from '../../data/experience'
import { Section } from '../ui/Section'

export function Timeline() {
  return (
    <Section id="experiencia" eyebrow="Ruta" title="Formación, proyectos y aprendizaje continuo">
      <div className="space-y-4">
        {timeline.map((item) => (
          <article className="rounded-xl border border-white/10 bg-white/8 p-5" key={item.title}>
            <div className="grid gap-3 md:grid-cols-[12rem_1fr]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
                {item.period}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      className="rounded-md bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
