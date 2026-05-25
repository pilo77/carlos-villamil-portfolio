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
            className="rounded-xl border border-white/10 bg-white/8 p-5 transition hover:border-teal-300/35 hover:bg-white/10"
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
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-sm text-slate-300"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
