import { useEffect, useState } from 'react'
import { hasAnalyticsConsent, useConsentState } from '../lib/consent.js'
import { scheduleGoogleTagManagerLoad } from '../lib/analytics.js'

export default function ConsentAwareAnalytics() {
  const consent = useConsentState()
  const analyticsEnabled = hasAnalyticsConsent(consent)
  const [VercelAnalytics, setVercelAnalytics] = useState(null)

  useEffect(() => {
    if (!analyticsEnabled) {
      setVercelAnalytics(null)
      return undefined
    }

    let isActive = true

    import('@vercel/analytics/react')
      .then(({ Analytics }) => {
        if (isActive) {
          setVercelAnalytics(() => Analytics)
        }
      })
      .catch(() => {
        if (isActive) {
          setVercelAnalytics(null)
        }
      })

    return () => {
      isActive = false
    }
  }, [analyticsEnabled])

  useEffect(() => {
    if (!analyticsEnabled) {
      return undefined
    }

    return scheduleGoogleTagManagerLoad()
  }, [analyticsEnabled])

  return analyticsEnabled && VercelAnalytics ? <VercelAnalytics /> : null
}
