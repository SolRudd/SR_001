import { useState } from 'react'
import { IconShield } from './Icons'
import { saveConsent, useConsentState } from '../lib/consent.js'

export default function CookieConsentBanner() {
  const consent = useConsentState()
  const [isManaging, setIsManaging] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  if (consent.analytics !== null) {
    return null
  }

  const acceptAll = () => {
    saveConsent({ analytics: true })
  }

  const rejectAll = () => {
    saveConsent({ analytics: false })
  }

  const savePreferences = () => {
    saveConsent({ analytics: analyticsEnabled })
  }

  return (
    <div className="consent-shell">
      <aside
        className="consent-banner"
        aria-label="Cookie preferences"
        aria-live="polite"
      >
        <div className="consent-main">
          <div className="consent-copy-wrap">
            <div className="consent-label">
              <IconShield size={14} />
              Cookie Preferences
            </div>
            <p className="consent-copy">
              Essential storage keeps your preference saved. Analytics stays off
              unless you opt in.
            </p>
          </div>

          <div className="consent-actions">
            <button
              type="button"
              className="consent-btn consent-btn-ghost"
              onClick={() => setIsManaging((value) => !value)}
              aria-expanded={isManaging}
            >
              {isManaging ? 'Hide options' : 'Manage'}
            </button>
            <button
              type="button"
              className="consent-btn consent-btn-ghost"
              onClick={rejectAll}
            >
              Reject
            </button>
            <button
              type="button"
              className="consent-btn consent-btn-solid"
              onClick={acceptAll}
            >
              Accept
            </button>
          </div>
        </div>

        {isManaging ? (
          <div className="consent-manage">
            <div className="consent-row">
              <div className="consent-row-copy">
                <div className="consent-row-title">Essential</div>
                <div className="consent-row-body">
                  Required to remember your consent choice.
                </div>
              </div>
              <span className="consent-badge">Always on</span>
            </div>

            <div className="consent-row">
              <div className="consent-row-copy">
                <div className="consent-row-title">Analytics</div>
                <div className="consent-row-body">
                  Enables Vercel Analytics and GTM only after opt-in.
                </div>
              </div>

              <button
                type="button"
                className={`consent-toggle${analyticsEnabled ? ' consent-toggle-on' : ''}`}
                role="switch"
                aria-checked={analyticsEnabled}
                aria-label="Toggle analytics consent"
                onClick={() => setAnalyticsEnabled((value) => !value)}
              >
                <span className="consent-toggle-thumb" />
              </button>
            </div>

            <div className="consent-manage-actions">
              <button
                type="button"
                className="consent-btn consent-btn-ghost"
                onClick={rejectAll}
              >
                Reject all
              </button>
              <button
                type="button"
                className="consent-btn consent-btn-solid"
                onClick={savePreferences}
              >
                Save choices
              </button>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  )
}
