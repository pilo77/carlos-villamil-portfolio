import { useState } from 'react'
import type { FormEvent } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="rounded-xl border border-white/10 bg-slate-900/75 p-6" onSubmit={handleSubmit}>
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
  )
}
