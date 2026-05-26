import { useEffect, useMemo, useState } from 'react'

interface TypewriterTextProps {
  cursorLabel?: string
  phrases: string[]
}

export function TypewriterText({
  cursorLabel = 'Perfil profesional',
  phrases,
}: TypewriterTextProps) {
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases])
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (safePhrases.length === 0) {
      return undefined
    }

    const currentPhrase = safePhrases[phraseIndex]
    const isComplete = letterIndex === currentPhrase.length
    const isEmpty = letterIndex === 0
    const delay = isDeleting ? 34 : isComplete ? 1450 : 58

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false)
        setPhraseIndex((current) => (current + 1) % safePhrases.length)
        return
      }

      setLetterIndex((current) => current + (isDeleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [isDeleting, letterIndex, phraseIndex, safePhrases])

  if (safePhrases.length === 0) {
    return null
  }

  const currentText = safePhrases[phraseIndex].slice(0, letterIndex)

  return (
    <span aria-label={`${cursorLabel}: ${safePhrases.join(', ')}`} className="inline-flex min-h-8">
      <span aria-hidden="true" className="text-teal-200">
        {currentText}
      </span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-7 w-0.5 translate-y-1 rounded-full bg-teal-200 shadow-[0_0_18px_rgba(94,234,212,0.65)] motion-safe:animate-pulse"
      />
      <span className="sr-only">{safePhrases.join(', ')}</span>
    </span>
  )
}
