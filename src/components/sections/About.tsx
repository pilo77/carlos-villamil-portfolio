import { profile } from '../../data/profile'
import { Section } from '../ui/Section'

const highlights = [
  'Responsabilidad',
  'Aprendizaje rápido',
  'Documentación técnica',
  'Trabajo por objetivos',
]

export function About() {
  return (
    <Section id="sobre-mi" eyebrow="Perfil" title="Un perfil junior con enfoque práctico y técnico">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-white/10 bg-white/8 p-6">
          <p className="text-lg leading-8 text-slate-200">{profile.about}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {highlights.map((item) => (
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4" key={item}>
              <p className="font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
