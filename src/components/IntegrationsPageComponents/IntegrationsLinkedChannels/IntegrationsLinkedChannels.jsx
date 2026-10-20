"use client"
import React, { useEffect, useRef, useState } from 'react'
import './IntegrationsLinkedChannels.css'

/* ----------------------------------------------------------
   Stage = 1983 x 793 canvas (same proportions as the reference)
   ---------------------------------------------------------- */
const W = 1983
const H = 793

const LOGO_SRC = '/main_logoFav.png' // the big "N"
const CENTER_X = 987
const LOGO_BOTTOM = 318 // where the trunk line leaves the logo
const BUS_Y = 380 // horizontal split line
const NODE = 78 // node size
const RADIUS = 18 // rounded corner of the connectors
const PULSE_DUR = 3.6 // seconds per pulse cycle (must match CSS ilc-arrive / ilc-comet)

/* ---------- Integration nodes (tree) ---------- */
const CHANNELS = [
  { id: 'google-ads', name: 'Google Ads', src: '/googleadds.svg', x: 905, y: 460, connected: true },
  { id: 'facebook', name: 'Facebook', src: '/facebookadds.svg', x: 1068, y: 460, connected: true },
  { id: 'chatbot', name: 'AI Chatbot', src: '/NexzelChatBotINT.png', x: 836, y: 550, connected: true },
  { id: 'chatgpt', name: 'ChatGPT', src: '/ChatGPTNexzellMain.svg', x: 987, y: 550, connected: true },
  { id: 'analytics', name: 'Analytics', src: '/SearchConsoleNExzell.png', x: 1139, y: 550, connected: true },
  { id: 'instagram', name: 'Instagram', src: '/instagramadds.svg', x: 768, y: 640, connected: true },
  { id: 'meta', name: 'Meta', src: '/MetaNExzellINT.png', x: 913, y: 640, connected: false },
  { id: 'merchant', name: 'Merchant Center', src: '/MerchantCenterNExzellIntegration.png', x: 1061, y: 640, connected: false },
  { id: 'whatsapp', name: 'WhatsApp', src: '/WhatsappNexzellINT.svg', x: 1208, y: 640, connected: true },
]

/* ---------- Glass cards on the sides ---------- */
const CARDS = [
  // left
  { id: 'cart', icon: 'cart', x: 225, y: 275, size: 8.1, rot: -14, ry: 14, depth: 1.0, enter: 1.1, dur: 6.2, sheen: 2.0 },
  { id: 'chart', icon: 'chart', x: 380, y: 370, size: 6.5, rot: 14, ry: -10, depth: 0.7, enter: 1.3, dur: 5.4, sheen: 3.2 },
  { id: 'gear', icon: 'gear', x: 525, y: 520, size: 5.3, rot: 10, ry: -12, depth: 0.5, enter: 1.5, dur: 6.8, sheen: 4.4 },
  // right
  { id: 'users', icon: 'users', x: 1717, y: 278, size: 6.5, rot: 12, ry: -14, depth: -1.0, enter: 1.2, dur: 5.8, sheen: 2.6 },
  { id: 'package', icon: 'package', x: 1585, y: 420, size: 5.9, rot: -12, ry: 12, depth: -0.7, enter: 1.4, dur: 6.4, sheen: 3.8 },
  { id: 'billing', icon: 'billing', x: 1750, y: 505, size: 6.8, rot: 10, ry: -12, depth: -0.9, enter: 1.6, dur: 5.6, sheen: 5.0 },
]

/* ---------- Orbit rings (left side; right side is a mirror) ---------- */
const RING_TOP = 'M806 148 C 580 170 380 228 262 304'
const RING_BOTTOM = 'M742 641 C 520 622 300 522 196 412 C 150 356 214 322 304 346'
const RING_INNER = 'M188 388 C 198 332 318 330 440 424'

/* continuous light pulses that travel around the rings */
const RING_COMETS = [
  { p: RING_TOP, dur: 8, delay: 2.0 },
  { p: RING_BOTTOM, dur: 10, delay: 2.6 },
  { p: RING_INNER, dur: 6.5, delay: 3.0 },
]

/* ---------- Orbs (spheres) ---------- */
const ORBS = [
  { x: 515, y: 245, r: 24, dx: 10, dy: -12, dur: 9, d: 1.0 },
  { x: 244, y: 433, r: 24, dx: -8, dy: 12, dur: 10, d: 1.2 },
  { x: 425, y: 499, r: 8, dx: 8, dy: -8, dur: 7, d: 1.4 },
  { x: 1487, y: 215, r: 21, dx: -10, dy: 12, dur: 9.5, d: 1.1 },
  { x: 1547, y: 310, r: 12, dx: 8, dy: 10, dur: 7.5, d: 1.3 },
  { x: 1713, y: 390, r: 9, dx: -6, dy: -8, dur: 8, d: 1.5 },
  { x: 1538, y: 588, r: 26, dx: 10, dy: -10, dur: 10.5, d: 1.7 },
  { x: 1483, y: 556, r: 5, dx: 6, dy: 6, dur: 6, d: 1.8 },
]

/* ---------- Tiny twinkling dust ---------- */
const DUST = [
  [120, 90, 2], [330, 60, 1.6], [610, 110, 1.8], [770, 60, 1.4], [150, 520, 1.8],
  [660, 720, 1.6], [880, 735, 1.4], [1100, 725, 1.6], [1320, 740, 1.8],
  [1220, 110, 1.6], [1400, 70, 1.8], [1650, 120, 1.6], [1860, 80, 2],
  [1860, 700, 1.8], [1420, 690, 1.6], [90, 330, 1.6], [1930, 400, 1.6],
  [450, 150, 1.4], [700, 250, 1.2], [1290, 260, 1.2], [1530, 160, 1.4],
  [300, 620, 1.6], [560, 660, 1.2], [1450, 640, 1.4], [1700, 640, 1.6],
  [980, 90, 1.2], [820, 190, 1.2], [1160, 200, 1.2],
]

/* Rounded "bracket" connector from the logo to a node */
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

/* ---------- Icons (inline, stroke uses currentColor) ---------- */
function CardIcon({ name }) {
  const common = {
    className: 'ilc-card__icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  switch (name) {
    case 'cart':
      return (
        <svg {...common}>
          <path d="M2.5 4h2.6l2.2 11.1a1.2 1.2 0 0 0 1.2 1h8.6a1.2 1.2 0 0 0 1.2-.9L20.5 8H6" />
          <circle cx="9.5" cy="20" r="1.4" />
          <circle cx="17" cy="20" r="1.4" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <rect x="3" y="14" width="4.6" height="7" rx="1.2" />
          <rect x="9.7" y="9" width="4.6" height="12" rx="1.2" />
          <rect x="16.4" y="3" width="4.6" height="18" rx="1.2" />
        </svg>
      )
    case 'gear':
      return (
        <svg {...common} fill="currentColor" fillOpacity="0.18">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'users':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <circle cx="9" cy="8" r="3.6" />
          <path d="M2 20.2c0-3.4 3.1-6 7-6s7 2.6 7 6z" />
          <circle cx="17.2" cy="9" r="2.8" opacity="0.8" />
          <path d="M17.4 14.2c2.8.1 4.8 2 4.8 4.8h-4.1c0-1.9-.5-3.5-1.4-4.5.2-.2.5-.3.7-.3z" opacity="0.8" />
        </svg>
      )
    case 'package':
      return (
        <svg {...common}>
          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
          <path d="M12 22V12" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="m7.5 4.27 9 5.15" />
        </svg>
      )
    case 'billing':
    default:
      return (
        <svg {...common}>
          <rect x="2" y="5" width="20" height="14" rx="2.5" />
          <path d="M2 10h20" />
          <path d="M6 15h4" />
          <path d="M14 15h4" />
        </svg>
      )
  }
}

/* Logo image with a text fallback if the file is missing */
function LogoImage({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <span className="ilc-fallback">{alt}</span>
  return (
    <img
      className="ilc-img"
      src={src}
      alt={alt}
      draggable="false"
      onError={() => setFailed(true)}
    />
  )
}

/* A light pulse (bright head + fading tail) that loops forever along a path.
   Pure CSS (stroke-dashoffset), so it can never stall like SMIL animateMotion. */
function Comet({ d, dur = PULSE_DUR, delay = 2, tail = 0.2, head = 0.035 }) {
  const common = { '--cdur': `${dur}s`, '--cdelay': `${delay}s` }
  return (
    <>
      <path
        d={d}
        pathLength="1"
        className="ilc-comet ilc-comet--tail"
        style={{ ...common, '--len': tail, '--o0': tail, '--o1': tail - (1 + head) }}
      />
      <path
        d={d}
        pathLength="1"
        className="ilc-comet ilc-comet--head"
        style={{ ...common, '--len': head, '--o0': head, '--o1': -1 }}
      />
    </>
  )
}

function IntegrationsLinkedChannels({ title, description }) {
  const sectionRef = useRef(null)
  const rafRef = useRef(0)
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

  /* Start the entrance sequence once the section is on screen */
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
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* Subtle pointer parallax for the side cards (desktop only) */
  useEffect(() => {
    const el = sectionRef.current
    if (!el || reduceMotion) return
    if (!window.matchMedia('(hover: hover)').matches) return

    const onMove = (e) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const px = ((e.clientX - r.left) / r.width - 0.5) * 2
        const py = ((e.clientY - r.top) / r.height - 0.5) * 2
        el.style.setProperty('--px', px.toFixed(3))
        el.style.setProperty('--py', py.toFixed(3))
      })
    }
    const onLeave = () => {
      el.style.setProperty('--px', 0)
      el.style.setProperty('--py', 0)
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(rafRef.current)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [reduceMotion])

  const connected = CHANNELS.filter((c) => c.connected)
  const pct = (v, total) => `${(v / total) * 100}%`
  /* pulse start time for each connected channel (comet + node flash share it) */
  const pulseDelay = (id) => 1.8 + connected.findIndex((k) => k.id === id) * 0.5

  return (
    <section
      ref={sectionRef}
      className={`ilc-section ${visible ? 'is-visible' : ''}`}
      aria-label="Integrated sales and marketing channels"
    >
      {(title || description) && (
        <div className="ilc-header">
          {title && <h2 className="ilc-title">{title}</h2>}
          {description && <p className="ilc-description">{description}</p>}
        </div>
      )}

      <div className="ilc-viewport">
        <div className="ilc-stage">
          {/* soft glow behind the logo + light pool under the tree */}
          <div className="ilc-ambient" aria-hidden="true" />
          <div className="ilc-halo" aria-hidden="true" />
          <div className="ilc-floor" aria-hidden="true" />

          {/* ripples expanding from the logo */}
          <div className="ilc-ripples" aria-hidden="true">
            <span className="ilc-ripple" style={{ '--rd': '1.2s' }} />
            <span className="ilc-ripple" style={{ '--rd': '3.2s' }} />
            <span className="ilc-ripple" style={{ '--rd': '5.2s' }} />
          </div>

          {/* ============ BACKGROUND: rings, orbs, dust ============ */}
          <svg className="ilc-bg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="ilc-ring-grad" x1="180" y1="0" x2="810" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2fe0b8" stopOpacity="0.15" />
                <stop offset="0.55" stopColor="#2fe0b8" stopOpacity="0.7" />
                <stop offset="1" stopColor="#2fe0b8" stopOpacity="0.05" />
              </linearGradient>
              <radialGradient id="ilc-orb-grad" cx="0.35" cy="0.3" r="0.8">
                <stop offset="0" stopColor="#8ffbe3" />
                <stop offset="0.45" stopColor="#1fc9a4" />
                <stop offset="1" stopColor="#0a5f56" />
              </radialGradient>
              <filter id="ilc-orb-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* --- ORBIT RINGS (left, then mirrored for right) --- */}
            <g>
              <path className="ilc-ring" pathLength="1" style={{ '--d': '0.6s' }} d={RING_TOP} stroke="url(#ilc-ring-grad)" />
              <path className="ilc-ring" pathLength="1" style={{ '--d': '0.8s' }} d={RING_BOTTOM} stroke="url(#ilc-ring-grad)" />
              <path className="ilc-ring" pathLength="1" style={{ '--d': '1.0s' }} d={RING_INNER} stroke="url(#ilc-ring-grad)" opacity="0.7" />
              {!reduceMotion &&
                RING_COMETS.map((c, i) => (
                  <Comet key={`l${i}`} d={c.p} dur={c.dur} delay={c.delay} tail={0.14} head={0.025} />
                ))}
            </g>
            <g transform={`translate(${W} 0) scale(-1 1)`}>
              <path className="ilc-ring" pathLength="1" style={{ '--d': '0.7s' }} d={RING_TOP} stroke="url(#ilc-ring-grad)" />
              <path className="ilc-ring" pathLength="1" style={{ '--d': '0.9s' }} d={RING_BOTTOM} stroke="url(#ilc-ring-grad)" />
              <path className="ilc-ring" pathLength="1" style={{ '--d': '1.1s' }} d={RING_INNER} stroke="url(#ilc-ring-grad)" opacity="0.7" />
              {!reduceMotion &&
                RING_COMETS.map((c, i) => (
                  <Comet key={`r${i}`} d={c.p} dur={c.dur + 1} delay={c.delay + 1.1} tail={0.14} head={0.025} />
                ))}
            </g>

            {/* --- ORBS --- */}
            {ORBS.map((o, i) => (
              <g key={i} transform={`translate(${o.x} ${o.y})`}>
                <g
                  className="ilc-orb"
                  style={{ '--d': `${o.d}s`, '--dur': `${o.dur}s`, '--ox': `${o.dx}px`, '--oy': `${o.dy}px` }}
                >
                  <circle r={o.r} fill="url(#ilc-orb-grad)" filter="url(#ilc-orb-glow)" />
                  <ellipse cx={-o.r * 0.3} cy={-o.r * 0.38} rx={o.r * 0.38} ry={o.r * 0.22} fill="#fff" opacity="0.35" />
                </g>
              </g>
            ))}

            {/* --- DUST --- */}
            {DUST.map(([x, y, r], i) => (
              <circle
                key={i}
                className="ilc-dust"
                cx={x}
                cy={y}
                r={r}
                style={{ '--d': `${(i * 0.37) % 3}s`, '--dur': `${3.2 + (i % 5) * 0.7}s` }}
              />
            ))}
          </svg>

          {/* ============ CENTRAL LOGO ============ */}
          <div className="ilc-logo">
            <div className="ilc-logo__inner">
              <LogoImage src={LOGO_SRC} alt="Nexzell" />
            </div>
          </div>

          {/* ============ CONNECTOR LINES + CONTINUOUS PULSES ============ */}
          <svg className="ilc-lines" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="ilc-line-grad" gradientUnits="userSpaceOnUse" x1="0" y1="318" x2="0" y2="640">
                <stop offset="0" stopColor="#6fe9cf" stopOpacity="0.6" />
                <stop offset="0.5" stopColor="#78a5af" stopOpacity="0.42" />
                <stop offset="1" stopColor="#78a5af" stopOpacity="0.22" />
              </linearGradient>
            </defs>

            {connected.map((c, i) => (
              <path
                key={c.id}
                d={buildPath(c.x, c.y)}
                pathLength="1"
                className="ilc-line"
                style={{ '--ilc-delay': `${0.55 + i * 0.09}s` }}
              />
            ))}

            {/* small end caps where each line meets its node */}
            {connected.map((c, i) => (
              <circle
                key={`end-${c.id}`}
                className="ilc-end-dot"
                cx={c.x}
                cy={c.y - NODE / 2}
                r="2.6"
                style={{ '--ilc-delay': `${1.3 + i * 0.09}s` }}
              />
            ))}

            {/* static junction dots with a soft ping */}
            {/* <circle className="ilc-hub-dot" cx={CENTER_X} cy={346} r="4.5" /> */}
            {/* <circle className="ilc-hub-dot" cx={CENTER_X} cy={456} r="4.5" /> */}
            {/* <circle className="ilc-hub-ring" cx={CENTER_X} cy={346} r="4.5" style={{ '--hd': '1s' }} /> */}
            {/* <circle className="ilc-hub-ring" cx={CENTER_X} cy={456} r="4.5" style={{ '--hd': '2.2s' }} /> */}

            {/* travelling pulses: one per connected channel, looping forever */}
            {!reduceMotion &&
              connected.map((c) => (
                <Comet key={`pulse-${c.id}`} d={buildPath(c.x, c.y)} dur={PULSE_DUR} delay={pulseDelay(c.id)} />
              ))}
          </svg>

          {/* ============ CHANNEL NODES ============ */}
          {CHANNELS.map((c, i) => (
            <div
              key={c.id}
              className={`ilc-node ${c.connected ? 'ilc-node--live' : 'ilc-node--idle'}`}
              style={{
                '--ilc-x': pct(c.x, W),
                '--ilc-y': pct(c.y, H),
                '--ilc-enter': `${c.connected ? 0.95 + connected.findIndex((k) => k.id === c.id) * 0.09 : 1.6 + i * 0.05}s`,
                '--ilc-float-delay': `${(i % 5) * -0.8}s`,
                '--ilc-float-dur': `${4.2 + (i % 4) * 0.5}s`,
                '--ilc-pd': c.connected ? `${pulseDelay(c.id)}s` : '0s',
                '--ilc-led-delay': `${(i % 4) * 0.6}s`,
              }}
            >
              <div className="ilc-node__float">
                <div className="ilc-node__card" title={c.name}>
                  <LogoImage src={c.src} alt={c.name} />
                </div>
                {c.connected && <span className="ilc-node__led" aria-hidden="true" />}
              </div>
            </div>
          ))}

          {/* ============ SIDE GLASS CARDS ============ */}
          {CARDS.map((c) => (
            <div
              key={c.id}
              className="ilc-card"
              style={{
                '--ilc-x': pct(c.x, W),
                '--ilc-y': pct(c.y, H),
                '--ilc-size': `${c.size}cqw`,
                '--ilc-rot': `${c.rot}deg`,
                '--ilc-ry': `${c.ry}deg`,
                '--depth': c.depth,
                '--ilc-enter': `${c.enter}s`,
                '--ilc-float-dur': `${c.dur}s`,
                '--ilc-sheen-delay': `${c.sheen}s`,
              }}
            >
              <div className="ilc-card__parallax">
                <div className="ilc-card__float">
                  <div className="ilc-card__glass">
                    <CardIcon name={c.icon} />
                  </div>
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