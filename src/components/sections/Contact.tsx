import { useState } from 'react'
import type { FormEvent } from 'react'
import { Code2, FileText, Mail, MessageCircle, Network } from 'lucide-react'
import { contactLinks } from '../../data/profile'
import { ActionButton } from '../ui/ActionButton'
import { Section } from '../ui/Section'

const iconByLabel = {
  GitHub: Code2,
  LinkedIn: Network,
  Correo: Mail,
  WhatsApp: MessageCircle,
  'CV Español': FileText,
  'CV Inglés': FileText,
}

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Disponible para práctica profesional, aprendizaje y proyectos junior"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-xl border border-white/10 bg-white/8 p-6">
          <p className="leading-8 text-slate-300">
            Canaliza aquí oportunidades de práctica profesional, contrato de aprendizaje,
            colaboración académica o roles junior relacionados con backend, fullstack, bases de
            datos y APIs REST.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => {
              const Icon = iconByLabel[link.label as keyof typeof iconByLabel] ?? Code2

              return (
                <div
                  className="rounded-lg border border-white/10 bg-slate-950/50 p-3"
                  key={link.label}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-teal-300/12 text-teal-200">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <p className="font-semibold text-white">{link.label}</p>
                  </div>
                  <ActionButton {...link} variant={link.href ? 'secondary' : 'ghost'} />
                </div>
              )
            })}
          </div>
        </div>

        <form
          className="rounded-xl border border-white/10 bg-slate-900/75 p-6"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Nombre
              <input
                className="rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
                name="name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Correo
              <input
                className="rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
                name="email"
                required
                type="email"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-medium text-slate-200">
            Mensaje
            <textarea
              className="min-h-36 resize-y rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
              name="message"
              required
            />
          </label>
          <button
            className="mt-5 inline-flex min-h-11 rounded-lg bg-teal-300 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
            type="submit"
          >
            Preparar mensaje
          </button>
          {sent ? (
            <p className="mt-4 rounded-lg border border-teal-300/30 bg-teal-300/10 p-3 text-sm text-teal-100">
              Mensaje preparado. Agrega un correo profesional o EmailJS para habilitar el envío.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  )
}
