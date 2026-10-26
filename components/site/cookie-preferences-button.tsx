'use client'

import { openConsentPreferences } from '@/lib/consent'

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openConsentPreferences}
      className="font-semibold text-foreground/80 transition-colors duration-200 hover:text-primary"
    >
      Preferenze cookie
    </button>
  )
}
