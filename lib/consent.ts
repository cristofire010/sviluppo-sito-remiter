'use client'

import { useSyncExternalStore } from 'react'

export type ConsentChoices = {
  analytics: boolean
  maps: boolean
}

export type ConsentRecord = ConsentChoices & {
  version: number
  updatedAt: string
}

const COOKIE_NAME = 'remiter_consent'
const CONSENT_VERSION = 1
// Il Garante (Linee guida 10/06/2021) sconsiglia di riproporre il banner prima di 6 mesi.
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180

const listeners = new Set<() => void>()
let cachedRaw: string | null | undefined
let cachedRecord: ConsentRecord | null = null
let preferencesOpen = false

function emit() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function readRawCookie() {
  const match = document.cookie.split('; ').find((c) => c.startsWith(`${COOKIE_NAME}=`))
  return match ? decodeURIComponent(match.slice(COOKIE_NAME.length + 1)) : null
}

function getConsentSnapshot(): ConsentRecord | null {
  const raw = readRawCookie()
  if (raw === cachedRaw) return cachedRecord
  cachedRaw = raw
  try {
    const parsed = raw ? (JSON.parse(raw) as ConsentRecord) : null
    cachedRecord = parsed && parsed.version === CONSENT_VERSION ? parsed : null
  } catch {
    cachedRecord = null
  }
  return cachedRecord
}

export function saveConsent(choices: ConsentChoices) {
  const record: ConsentRecord = { ...choices, version: CONSENT_VERSION, updatedAt: new Date().toISOString() }
  const secure = location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(record))}; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`
  preferencesOpen = false
  emit()
}

export function openConsentPreferences() {
  preferencesOpen = true
  emit()
}

export function closeConsentPreferences() {
  preferencesOpen = false
  emit()
}

/** `undefined` durante il rendering lato server, `null` se l'utente non ha ancora scelto. */
export function useConsent(): ConsentRecord | null | undefined {
  return useSyncExternalStore(subscribe, getConsentSnapshot, () => undefined)
}

export function usePreferencesOpen() {
  return useSyncExternalStore(
    subscribe,
    () => preferencesOpen,
    () => false,
  )
}
