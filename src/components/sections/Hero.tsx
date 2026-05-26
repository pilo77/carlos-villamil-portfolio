import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiCredly } from 'react-icons/si'
import { primaryActions, profile, socialLinks } from '../../data/profile'
import { ActionButton } from '../ui/ActionButton'
import { SocialIconButton } from '../ui/SocialIconButton'
import { TypewriterText } from '../ui/TypewriterText'

const socialIconByLabel = {
  Credly: SiCredly,
  Email: MdEmail,
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  WhatsApp: FaWhatsapp,
}

const typewriterPhrases = [
  'Construyo APIs REST con Java y Spring Boot',
  'Desarrollo interfaces con React y TypeScript',
  'Trabajo con bases de datos SQL y NoSQL',
  'Documento soluciones técnicas claras',
  'Aplico buenas prácticas con Git y Docker',
]

const actionVariantByIndex = ['primary', 'secondary', 'outline', 'outline'] as const

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate px-4 py-8 sm:px-6 lg:min-h-[560px] lg:px-8 lg:py-6 xl:min-h-[600px]"
    >
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-teal-300/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,26rem)] xl:gap-12">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/35 bg-teal-300/10 px-3 py-1.5 text-sm font-semibold text-teal-100 shadow-[0_0_35px_rgba(45,212,191,0.12)]">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Hola, soy
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl xl:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-100 sm:text-2xl">{profile.role}</p>

          <p className="mt-5 flex min-h-[5.25rem] flex-col gap-2 text-xl font-semibold text-teal-200 sm:text-2xl">
            <span className="text-sm uppercase tracking-[0.22em] text-slate-400 sm:text-base">
              Enfoque profesional
            </span>
            <span>
              <TypewriterText phrases={typewriterPhrases} />
            </span>
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {primaryActions.map((action, index) => (
              <ActionButton
                key={action.label}
                {...action}
                variant={actionVariantByIndex[index] ?? 'secondary'}
              />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconByLabel[link.label as keyof typeof socialIconByLabel]

              return Icon ? (
                <SocialIconButton
                  href={link.href}
                  icon={Icon}
                  key={link.label}
                  label={link.label}
                  newTab={link.newTab}
                />
              ) : null
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[23rem] lg:justify-self-end xl:max-w-[25rem]"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[conic-gradient(from_140deg,rgba(45,212,191,0.28),rgba(99,102,241,0.18),transparent,rgba(45,212,191,0.24))] opacity-80 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/14 bg-white/8 p-3 shadow-2xl shadow-slate-950/50">
            <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1.35rem] bg-slate-950">
              <img
                alt={profile.imageAlt}
                className="h-full w-full object-cover object-[50%_16%]"
                height="900"
                src={profile.imageSrc}
                width="720"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/76 to-transparent p-5 pt-28">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
                  Backend Focus
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">Java · APIs · Datos</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Proyectos reales, documentación clara y despliegue cloud académico.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-7 hidden rounded-full border border-white/12 bg-slate-950/85 px-4 py-2 text-xs font-semibold text-teal-100 shadow-xl shadow-slate-950/35 sm:block">
            Spring Boot
          </div>
          <div className="relative mx-3 -mt-7 rounded-2xl border border-white/12 bg-slate-950/92 p-4 shadow-xl shadow-slate-950/40">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400">Stack principal</span>
              <span className="text-sm font-semibold text-white">Java / Spring Boot / React</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
