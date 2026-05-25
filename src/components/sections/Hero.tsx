import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { primaryActions, profile, socialLinks } from '../../data/profile'
import { ActionButton } from '../ui/ActionButton'

export function Hero() {
  return (
    <section id="inicio" className="px-5 pb-16 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-18">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-sm font-medium text-teal-100">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-teal-200">{profile.role}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryActions.map((action, index) => (
              <ActionButton
                key={action.label}
                {...action}
                variant={index === 0 ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <ActionButton key={link.label} {...link} variant="ghost" />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-2xl shadow-slate-950/50">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(20,184,166,0.22),rgba(59,130,246,0.14)),radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.2),transparent_24rem)] p-6">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/14 bg-slate-950/40 p-6 backdrop-blur">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
                    Backend Focus
                  </p>
                  <div className="mt-8 grid size-28 place-items-center rounded-3xl bg-teal-300 text-4xl font-bold text-slate-950 shadow-xl shadow-teal-950/40">
                    CV
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">Java · APIs · Datos</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Perfil junior orientado a proyectos reales, documentación clara y buenas
                    prácticas de desarrollo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-6 right-6 rounded-xl border border-white/12 bg-slate-950/90 p-4 shadow-xl shadow-slate-950/40">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-slate-400">Stack principal</span>
              <span className="text-sm font-semibold text-white">Java / Spring Boot / React</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
