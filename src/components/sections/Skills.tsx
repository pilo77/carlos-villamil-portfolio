import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import { Section } from '../ui/Section'

export function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Stack"
      title="Habilidades organizadas para roles backend y fullstack junior"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map(({ category, icon: Icon, items }, index) => (
          <motion.article
            className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 shadow-lg shadow-slate-950/15 transition hover:border-teal-300/35 hover:bg-white/8 sm:p-5"
            initial={{ opacity: 0, y: 16 }}
            key={category}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-teal-300/14 text-teal-200">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-white">{category}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-200"
                  key={`${category}-${item.name}`}
                >
                  {item.name}
                  <span className="rounded-full bg-teal-300/10 px-2 py-0.5 text-[0.68rem] font-semibold text-teal-100">
                    {item.level}
                  </span>
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
