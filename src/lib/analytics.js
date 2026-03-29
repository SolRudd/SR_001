const GTM_ID = import.meta.env?.VITE_GTM_ID?.trim() ?? ''

let hasLoadedGoogleTagManager = false

export function isGoogleTagManagerConfigured(gtmId = GTM_ID) {
  return Boolean(gtmId)
}

export function loadGoogleTagManager(gtmId = GTM_ID) {
  if (
    !gtmId ||
    typeof window === 'undefined' ||
    typeof document === 'undefined'
  ) {
    return false
  }

  if (hasLoadedGoogleTagManager || document.getElementById('gtm-script')) {
    hasLoadedGoogleTagManager = true
    return true
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js',
  })

  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  document.head.appendChild(script)
  hasLoadedGoogleTagManager = true

  return true
}

export function scheduleGoogleTagManagerLoad(gtmId = GTM_ID) {
  if (!isGoogleTagManagerConfigured(gtmId) || typeof window === 'undefined') {
    return () => {}
  }

  let cancelled = false

  const loadWhenIdle = () => {
    if (!cancelled) {
      loadGoogleTagManager(gtmId)
    }
  }

  if ('requestIdleCallback' in window) {
    const idleId = window.requestIdleCallback(loadWhenIdle, { timeout: 1500 })

    return () => {
      cancelled = true
      window.cancelIdleCallback?.(idleId)
    }
  }

  const timeoutId = window.setTimeout(loadWhenIdle, 1)

  return () => {
    cancelled = true
    window.clearTimeout(timeoutId)
  }
}
