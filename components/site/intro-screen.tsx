'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

const AUTO_CLOSE_MS = 2400
const EXIT_MS = 400

export function IntroScreen() {
  const [state, setState] = useState<'open' | 'closing' | 'closed'>('open')

  const close = useCallback(() => {
    setState((s) => (s === 'open' ? 'closing' : s))
  }, [])

  useEffect(() => {
    if (state === 'open') {
      document.body.classList.add('intro-active')
      const timer = window.setTimeout(close, AUTO_CLOSE_MS)
      const onKey = (e: KeyboardEvent) => {
        if (['Enter', ' ', 'Escape'].includes(e.key)) {
          e.preventDefault()
          close()
        }
      }
      window.addEventListener('keydown', onKey)
      return () => {
        window.clearTimeout(timer)
        window.removeEventListener('keydown', onKey)
      }
    }
    if (state === 'closing') {
      document.body.classList.remove('intro-active')
      const timer = window.setTimeout(() => setState('closed'), EXIT_MS)
      return () => window.clearTimeout(timer)
    }
  }, [state, close])

  if (state === 'closed') return null

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Entra nel sito"
      onClick={close}
      className={cn(
        'fixed inset-0 z-[90] flex cursor-pointer flex-col items-center justify-center gap-5 bg-background transition-[opacity,transform] duration-[400ms] ease-premium will-change-[opacity,transform]',
        state === 'closing' && 'pointer-events-none -translate-y-3 opacity-0',
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,183,3,0.12),transparent_60%)]"
      />
      <Logo className="relative animate-in fade-in zoom-in-95 text-5xl duration-[400ms] ease-out md:text-7xl" />
      <p className="relative animate-in fade-in slide-in-from-bottom-2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground delay-150 duration-[400ms] ease-out fill-mode-both">
        Movimento terra · Costruzioni · Appalti
      </p>
      <ChevronDown aria-hidden className="relative mt-6 size-6 animate-bounce text-primary" />
    </div>
  )
}
