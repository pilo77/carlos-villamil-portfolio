import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 px-5 py-14 sm:px-8 lg:px-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <div className="mt-7">{children}</div>
      </div>
    </motion.section>
  )
}
