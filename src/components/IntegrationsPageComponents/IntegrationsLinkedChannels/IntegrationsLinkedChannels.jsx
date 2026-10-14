"use client"
import React, { useEffect, useRef, useState } from 'react'
import './IntegrationsLinkedChannels.css'

/* ------------------------------------------------------------------
   LOGOS — replace these paths with your own images (or imports).
   e.g. import shopifyLogo from '../../assets/logos/shopify.png'
------------------------------------------------------------------- */
const SHOPIFY_LOGO = '/main_logoFav.png'

/* ------------------------------------------------------------------
   Stage geometry (matches the screenshot, 350 x 400 coordinate space)
   x / y = node CENTER. `connected: false` = floating node, no line
   (Walmart and eBay have no connector in the screenshot).
------------------------------------------------------------------- */
const STAGE_W = 350
const STAGE_H = 400
const CENTER_X = 175
const LOGO_BOTTOM = 140 // where the lines leave the Shopify bag
const BUS_Y = 202 // height of the horizontal split
const NODE = 46 // node card size
const RADIUS = 12 // corner radius of the connector lines

const CHANNELS = [
  { id: 'pinterest', name: 'Pinterest', src: '/instagramadds.svg', x: 22, y: 373, connected: true },
  { id: 'amazon', name: 'Amazon', src: '/NexzelChatBotINT.png', x: 75, y: 315, connected: true },
  { id: 'chatgpt', name: 'ChatGPT', src: '/googleadds.svg', x: 122, y: 256, connected: true },
  { id: 'walmart', name: 'Walmart', src: '/MetaNExzellINT.png', x: 124, y: 373, connected: false },
  { id: 'etsy', name: 'Etsy', src: '/ChatGPTNexzellMain.svg', x: 175, y: 315, connected: true },
  { id: 'google', name: 'Google', src: '/facebookadds.svg', x: 225, y: 256, connected: true },
  { id: 'ebay', name: 'eBay', src: '/MerchantCenterNExzellIntegration.png', x: 224, y: 373, connected: false },
  { id: 'tiktok', name: 'TikTok', src: '/SearchConsoleNExzell.png', x: 272, y: 315, connected: true },
  { id: 'instagram', name: 'Instagram', src: '/WhatsappNexzellINT.svg', x: 325, y: 373, connected: true },
]

/* Builds the rounded "bracket" connector from the Shopify bag to a node */
function buildPath(x, y) {
  const topY = y - NODE / 2
  if (x === CENTER_X) return `M${CENTER_X} ${LOGO_BOTTOM} V${topY}`
  const dir = x < CENTER_X ? -1 : 1
  return [
    `M${CENTER_X} ${LOGO_BOTTOM}`,
    `V${BUS_Y - RADIUS}`,
    `Q${CENTER_X} ${BUS_Y} ${CENTER_X + dir * RADIUS} ${BUS_Y}`,
    `H${x - dir * RADIUS}`,
    `Q${x} ${BUS_Y} ${x} ${BUS_Y + RADIUS}`,
    `V${topY}`,
  ].join(' ')
}

/* Logo image with a text fallback if the image is missing */
function LogoImage({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <span className="ilc-fallback">{alt}</span>
  return (
    <img
      className="ilc-logo-img"
      src={src}
      alt={alt}
      draggable="false"
      onError={() => setFailed(true)}
    />
  )
}

function IntegrationsLinkedChannels({ title, description }) {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  /* Respect reduced motion */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  /* Trigger the entrance sequence once, when the section scrolls into view */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const connected = CHANNELS.filter((c) => c.connected)

  return (
    <section
      ref={sectionRef}
      className={`ilc-section ${visible ? 'is-visible' : ''}`}
      aria-label="Shopify linked sales channels"
    >
      <div className="ilc-container">
        {(title || description) && (
          <div className="ilc-header">
            {title && <h2 className="ilc-title">{title}</h2>}
            {description && <p className="ilc-description">{description}</p>}
          </div>
        )}

        <div className="ilc-stage" style={{ '--ilc-aspect': `${STAGE_W} / ${STAGE_H}` }}>
          {/* Soft glow behind the Shopify bag */}
          <div className="ilc-glow" aria-hidden="true" />

          {/* Shopify bag */}
          <div className="ilc-shopify">
            <div className="ilc-shopify__inner">
              <LogoImage src={SHOPIFY_LOGO} alt="Shopify" />
            </div>
          </div>

          {/* Connector lines (draw-in animation) */}
          <svg
            className="ilc-lines"
            viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
          >
            {connected.map((c, i) => (
              <path
                key={c.id}
                d={buildPath(c.x, c.y)}
                pathLength="1"
                className="ilc-line"
                style={{ '--ilc-delay': `${0.55 + i * 0.09}s` }}
              />
            ))}
          </svg>

          {/* Travelling pulses — mounted only after entrance so timing starts fresh */}
          {visible && !reduceMotion && (
            <svg
              className="ilc-pulses"
              viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
              preserveAspectRatio="xMidYMin meet"
              aria-hidden="true"
            >
              {connected.map((c, i) => {
                const begin = `${2.4 + i * 0.45}s`
                return (
                  <circle key={c.id} r="2.6" className="ilc-pulse" opacity="0">
                    <animateMotion
                      dur="3.4s"
                      begin={begin}
                      repeatCount="indefinite"
                      path={buildPath(c.x, c.y)}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.12;0.85;1"
                      dur="3.4s"
                      begin={begin}
                      repeatCount="indefinite"
                    />
                  </circle>
                )
              })}
            </svg>
          )}

          {/* Channel nodes */}
          {CHANNELS.map((c, i) => (
            <div
              key={c.id}
              className="ilc-node"
              style={{
                '--ilc-x': `${(c.x / STAGE_W) * 100}%`,
                '--ilc-y': `${(c.y / STAGE_H) * 100}%`,
                '--ilc-size': `${(NODE / STAGE_W) * 100}%`,
                '--ilc-enter': `${c.connected ? 0.95 + connected.findIndex((k) => k.id === c.id) * 0.09 : 1.5 + i * 0.05}s`,
                '--ilc-float-delay': `${(i % 5) * -0.8}s`,
                '--ilc-float-dur': `${4.2 + (i % 4) * 0.5}s`,
              }}
            >
              <div className="ilc-node__float">
                <div className="ilc-node__card" title={c.name}>
                  <LogoImage src={c.src} alt={c.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntegrationsLinkedChannels