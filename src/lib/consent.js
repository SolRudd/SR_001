import { useSyncExternalStore } from 'react'

export const CONSENT_STORAGE_KEY = 'solrudd-consent'

const CONSENT_VERSION = 1

const DEFAULT_CONSENT = {
  version: CONSENT_VERSION,
  essential: true,
  analytics: null,
  updatedAt: null,
}

const listeners = new Set()

let consentCache = DEFAULT_CONSENT

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

function normalizeConsent(value) {
  return {
    version: CONSENT_VERSION,
    essential: true,
    analytics: typeof value?.analytics === 'boolean' ? value.analytics : null,
    updatedAt: value?.updatedAt ?? null,
  }
}

function syncConsentDataset(consent) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.dataset.analyticsConsent =
    consent.analytics === true
      ? 'granted'
      : consent.analytics === false
        ? 'denied'
        : 'pending'
}

function readStoredConsent() {
  if (!canUseStorage()) {
    return DEFAULT_CONSENT
  }

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)

    if (!raw) {
      return DEFAULT_CONSENT
    }

    return normalizeConsent(JSON.parse(raw))
  } catch {
    return DEFAULT_CONSENT
  }
}

function emitChange() {
  listeners.forEach((listener) => listener())
}

function updateConsentCache(nextConsent) {
  consentCache = normalizeConsent(nextConsent)
  syncConsentDataset(consentCache)
}

export function getConsentSnapshot() {
  return consentCache
}

export function subscribeToConsent(listener) {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

export function saveConsent(nextConsent) {
  const normalizedConsent = normalizeConsent({
    ...getConsentSnapshot(),
    ...nextConsent,
    updatedAt: new Date().toISOString(),
  })

  updateConsentCache(normalizedConsent)

  if (canUseStorage()) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(normalizedConsent))
  }

  emitChange()

  return normalizedConsent
}

export function hasAnalyticsConsent(consent = getConsentSnapshot()) {
  return consent.analytics === true
}

export function useConsentState() {
  return useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => DEFAULT_CONSENT,
  )
}

if (typeof window !== 'undefined') {
  updateConsentCache(readStoredConsent())
  window.addEventListener('storage', (event) => {
    if (event.key === CONSENT_STORAGE_KEY) {
      updateConsentCache(readStoredConsent())
      emitChange()
    }
  })
}
