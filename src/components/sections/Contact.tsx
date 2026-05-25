import { contactLinks } from '../../data/profile'
import { Section } from '../ui/Section'
import { ContactCard } from './contact/ContactCard'
import { ContactForm } from './contact/ContactForm'

export function Contact() {
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
            {contactLinks.map((link) => (
              <ContactCard key={link.label} link={link} />
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
