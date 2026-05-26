import { motion } from 'framer-motion'
import { certificationGroups } from '../../data/certifications'
import { ActionButton } from '../ui/ActionButton'
import { Section } from '../ui/Section'

export function Certifications() {
  return (
    <Section
      id="certificaciones"
      eyebrow="Formación"
      title="Certificaciones y áreas de aprendizaje verificables"
    >
      <div className="mb-6 flex flex-col gap-4 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-base leading-7 text-slate-300">
          Certificaciones verificables en Cisco, IBM SkillsBuild, CertiProf, The Linux Foundation y
          otras plataformas.
        </p>
        <ActionButton
          href="https://www.credly.com/users/carlos-andres-villamil-yusunguaira"
          label="Ver perfil completo en Credly"
          newTab
          variant="outline"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {certificationGroups.map((group, index) => (
          <motion.article
            className="rounded-xl border border-white/10 bg-white/8 p-5 transition hover:border-teal-300/35 hover:bg-white/10"
            initial={{ opacity: 0, y: 16 }}
            key={group.organization}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold text-white">{group.organization}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.topics.map((topic) => (
                <span
                  className="rounded-full bg-slate-950/60 px-3 py-1 text-sm text-slate-300"
                  key={topic}
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
