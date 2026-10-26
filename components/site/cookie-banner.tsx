'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { X } from 'lucide-react'
import {
  closeConsentPreferences,
  saveConsent,
  useConsent,
  usePreferencesOpen,
  type ConsentChoices,
} from '@/lib/consent'
import { cn } from '@/lib/utils'

const categories: { key: keyof ConsentChoices | 'necessary'; title: string; description: string }[] = [
  {
    key: 'necessary',
    title: 'Necessari',
    description: 'Un cookie tecnico che memorizza le tue scelte per 6 mesi. Non può essere disattivato.',
  },
  {
    key: 'analytics',
    title: 'Statistiche',
    description: 'Netlify Analytics: conteggio aggregato e anonimo delle visite, senza profilazione.',
  },
  {
    key: 'maps',
    title: 'Contenuti esterni',
    description: 'Mappa della sede fornita da OpenStreetMap: il tuo indirizzo IP viene comunicato ai loro server.',
  },
]

const bannerButton =
  'inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-bold transition-[background-color,border-color,color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export function CookieBanner() {
  const consent = useConsent()
  const preferencesOpen = usePreferencesOpen()
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const [customizing, setCustomizing] = useState(false)
  const [draft, setDraft] = useState<ConsentChoices>({ analytics: false, maps: false })

  const visible = consent === null || preferencesOpen
  const showDetails = customizing || preferencesOpen

  useEffect(() => {
    if (preferencesOpen && consent) setDraft({ analytics: consent.analytics, maps: consent.maps })
  }, [preferencesOpen, consent])

  useEffect(() => {
    if (preferencesOpen) panelRef.current?.focus()
  }, [preferencesOpen])

  const rejectAll = () => {
    setCustomizing(false)
    saveConsent({ analytics: false, maps: false })
  }
  const acceptAll = () => {
    setCustomizing(false)
    saveConsent({ analytics: true, maps: true })
  }
  const saveDraft = () => {
    setCustomizing(false)
    saveConsent(draft)
  }
  const dismiss = () => {
    if (consent && preferencesOpen) closeConsentPreferences()
    else rejectAll()
  }

  return (
    <>
      {visible && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          tabIndex={-1}
          onKeyDown={(e) => e.key === 'Escape' && dismiss()}
          className="consent-enter fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] outline-none md:inset-x-6 md:bottom-6 md:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 id={titleId} className="text-lg font-bold">
              Privacy e cookie
            </h2>
            <button
              type="button"
              onClick={dismiss}
              aria-label={consent ? 'Chiudi preferenze' : 'Chiudi e rifiuta i cookie non necessari'}
              className="-m-2 rounded-full p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Usiamo un cookie tecnico necessario e, solo con il tuo consenso, statistiche anonime e la mappa
            OpenStreetMap. Puoi accettare, rifiutare o scegliere per categoria e modificare la scelta in qualsiasi
            momento dal link &quot;Preferenze cookie&quot; nel piè di pagina. Dettagli nella{' '}
            <Link href="/privacy" className="font-semibold text-primary underline underline-offset-2">
              Privacy policy
            </Link>{' '}
            e nella{' '}
            <Link href="/cookie-policy" className="font-semibold text-primary underline underline-offset-2">
              Cookie policy
            </Link>
            .
          </p>

          {showDetails && (
            <ul className="mt-4 grid gap-2">
              {categories.map((c) => {
                const locked = c.key === 'necessary'
                const checked = locked ? true : draft[c.key as keyof ConsentChoices]
                return (
                  <li
                    key={c.key}
                    className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">{c.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.description}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={checked}
                      aria-label={c.title}
                      disabled={locked}
                      onClick={() =>
                        setDraft((d) => ({ ...d, [c.key]: !d[c.key as keyof ConsentChoices] }))
                      }
                      className={cn(
                        'relative h-6 w-11 shrink-0 rounded-full border transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60',
                        checked ? 'border-primary bg-primary' : 'border-border bg-muted',
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          'absolute left-0.5 top-0.5 size-4 rounded-full transition-transform duration-200',
                          checked ? 'translate-x-5 bg-primary-foreground' : 'bg-muted-foreground',
                        )}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}

          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            <button
              type="button"
              onClick={rejectAll}
              className={cn(bannerButton, 'border border-foreground/30 hover:border-foreground')}
            >
              Rifiuta
            </button>
            {showDetails ? (
              <button
                type="button"
                onClick={saveDraft}
                className={cn(bannerButton, 'border border-foreground/30 hover:border-foreground')}
              >
                Salva scelte
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className={cn(bannerButton, 'border border-foreground/30 hover:border-foreground')}
              >
                Personalizza
              </button>
            )}
            <button
              type="button"
              onClick={acceptAll}
              className={cn(bannerButton, 'border border-foreground/30 hover:border-foreground')}
            >
              Accetta tutti
            </button>
          </div>
        </div>
      )}
    </>
  )
}
