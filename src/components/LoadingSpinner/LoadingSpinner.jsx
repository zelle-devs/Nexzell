import React from 'react'
import './LoadingSpinner.css'

const BRAND_NAME = 'NEXZELL'
const DEFAULT_MESSAGES = ['Initializing', 'Loading assets', 'Almost there']

// Three tilted orbit planes around the logo
const ORBITS = [
  { ry: '0deg', dur: '6s', delay: '0s', dot: '#00E699' },
  { ry: '60deg', dur: '8s', delay: '-2s', dot: '#00B3FF' },
  { ry: '120deg', dur: '10s', delay: '-4s', dot: '#00E699' },
]

// Hexagon centered at (100,100), radius 84
const HEX_PATH = 'M100 16 L172.7 58 L172.7 142 L100 184 L27.3 142 L27.3 58 Z'
// "N" monogram centered at (0,0)
const N_PATH = 'M-16 18 V-18 L16 18 V-18'

/**
 * Nexzell animated logo loader.
 *
 * Props (all optional):
 *  - messages:   array of 3 status texts that cycle under the bar
 *  - fullScreen: cover the whole viewport (default true). false = fits inside its parent
 *  - logoSrc:    path to your real logo (e.g. "/logo.svg"); replaces the built-in "N" mark
 */
function LoadingSpinner({
  messages = DEFAULT_MESSAGES,
  fullScreen = true,
  logoSrc,
}) {
  const overlayClass = fullScreen
    ? 'overlayNexzellLogoLoader'
    : 'overlayNexzellLogoLoader inlineNexzellLogoLoader'

  return (
    <div className={overlayClass} role="status" aria-live="polite" aria-busy="true">
      <span className="srOnlyNexzellLogoLoader">Loading Nexzell, please wait</span>

      {/* Ambient background */}
      <div className="auroraNexzellLogoLoader" aria-hidden="true" />
      <div className="gridNexzellLogoLoader" aria-hidden="true" />

      {/* Logo stage */}
      <div className="stageNexzellLogoLoader" aria-hidden="true">
        {/* <span className="bracketNexzellLogoLoader bracketTlNexzellLogoLoader" />
        <span className="bracketNexzellLogoLoader bracketTrNexzellLogoLoader" />
        <span className="bracketNexzellLogoLoader bracketBlNexzellLogoLoader" />
        <span className="bracketNexzellLogoLoader bracketBrNexzellLogoLoader" /> */}

        <div className="coreGlowNexzellLogoLoader" />

        {ORBITS.map((orbit, index) => (
          <div
            key={index}
            className="orbitPlaneNexzellLogoLoader"
            style={{ '--ry': orbit.ry }}
          >
            <div
              className="orbitSpinNexzellLogoLoader"
              style={{ '--dur': orbit.dur, '--delay': orbit.delay, '--dot': orbit.dot }}
            >
              <span className="orbitDotNexzellLogoLoader" />
            </div>
          </div>
        ))}

        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="particleNexzellLogoLoader"
            style={{ '--i': index }}
          />
        ))}

        <svg
          className="artNexzellLogoLoader"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hexGradientNexzellLogoLoader" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E699" />
              <stop offset="100%" stopColor="#00B3FF" />
            </linearGradient>
            <linearGradient id="markGradientNexzellLogoLoader" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E699" />
              <stop offset="100%" stopColor="#00B3FF" />
            </linearGradient>
          </defs>

          {/* Slowly rotating dashed outer hexagon */}
          <path
            className="hexOuterNexzellLogoLoader"
            d="M100 6 L181 53 L181 147 L100 194 L19 147 L19 53 Z"
          />

          {/* Hexagon body + light that runs around it */}
          <path className="hexTrackNexzellLogoLoader" d={HEX_PATH} />
          <path className="hexTraceNexzellLogoLoader" d={HEX_PATH} pathLength="100" />

          {/* Monogram (hidden when a real logo image is supplied) */}
          {!logoSrc && (
            <g className="markGroupNexzellLogoLoader" transform="translate(100 100) scale(1.35)">
              <path className="markTrackNexzellLogoLoader" d={N_PATH} />
              <path className="markGlowNexzellLogoLoader" d={N_PATH} pathLength="100" />
              <path className="markStrokeNexzellLogoLoader" d={N_PATH} pathLength="100" />
            </g>
          )}
        </svg>

        {logoSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoSrc} alt="" className="logoImageNexzellLogoLoader" />
        )}

        <div className="scanNexzellLogoLoader" />
      </div>

      {/* Wordmark */}
      {/* <h1 className="brandNexzellLogoLoader" aria-hidden="true">
        {BRAND_NAME}
      </h1> */}

      {/* Progress + cycling status */}
      {/* <div className="progressNexzellLogoLoader" aria-hidden="true">
        <div className="barNexzellLogoLoader">
          <span className="barFillNexzellLogoLoader" />
        </div>

        <div className="statusNexzellLogoLoader">
          <span className="statusDotNexzellLogoLoader" />
          <div className="statusTextWrapNexzellLogoLoader">
            {messages.slice(0, 3).map((message, index) => (
              <span
                key={message}
                className="statusTextNexzellLogoLoader"
                style={{ '--s': index }}
              >
                {message}
              </span>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default LoadingSpinner