"use client"

import { useState, useEffect, useRef } from "react"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

const FONT = `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`

const WAITLIST_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzeczFttniPE7_xFFd80DFkY5QuJznxaV_DjAWmODlDBn2MOu1njfPayovNJb1_LDU/exec"

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconApple() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function IconGoogle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76A12 12 0 1 0 12 0a12 12 0 0 0-8.82 3.76zm1.41-1.41A10 10 0 1 1 12 2a10 10 0 0 1-7.41 20.35z" opacity="0.3" />
      <path d="M22 12.2c0-.74-.06-1.44-.17-2.12H12v4h5.52a4.72 4.72 0 0 1-2.04 3.1v2.56h3.3C20.8 18 22 15.3 22 12.2z" />
      <path d="M12 23c2.7 0 4.96-.9 6.62-2.43l-3.3-2.57c-.9.6-2.04.96-3.32.96-2.55 0-4.72-1.72-5.5-4.04H3.1v2.65A10 10 0 0 0 12 23z" />
      <path d="M6.5 14.92A6.02 6.02 0 0 1 6.18 13c0-.67.11-1.32.32-1.92V8.43H3.1A10.03 10.03 0 0 0 2 13c0 1.62.39 3.14 1.1 4.49z" />
      <path d="M12 6.98c1.44 0 2.73.5 3.75 1.46l2.8-2.8A9.96 9.96 0 0 0 12 3a10 10 0 0 0-8.9 5.43l3.4 2.65C7.28 8.7 9.45 6.98 12 6.98z" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// ─── Gooey Text Morph ─────────────────────────────────────────────────────────

function GooeyText({
  words,
  morphTime = 1.2,
  cooldownTime = 1.8,
  style,
}: {
  words: string[]
  morphTime?: number
  cooldownTime?: number
  style?: React.CSSProperties
}) {
  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)
  const indexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(cooldownTime)
  const lastTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (text2Ref.current) {
      text2Ref.current.textContent = words[0]
      text2Ref.current.style.opacity = "1"
      text2Ref.current.style.filter = ""
    }
    if (text1Ref.current) {
      text1Ref.current.textContent = words[words.length - 1]
      text1Ref.current.style.opacity = "0"
      text1Ref.current.style.filter = ""
    }
    indexRef.current = 0
    morphRef.current = 0
    cooldownRef.current = cooldownTime
    lastTimeRef.current = null

    let frameId: number

    const animate = (ts: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = ts
      const dt = Math.min((ts - lastTimeRef.current) / 1000, 0.05)
      lastTimeRef.current = ts
      cooldownRef.current -= dt

      if (cooldownRef.current <= 0) {
        morphRef.current += dt / morphTime

        if (morphRef.current >= 1) {
          indexRef.current = (indexRef.current + 1) % words.length
          morphRef.current = 0
          cooldownRef.current = cooldownTime
          if (text2Ref.current) {
            text2Ref.current.style.filter = ""
            text2Ref.current.style.opacity = "1"
            text2Ref.current.textContent = words[indexRef.current]
          }
          if (text1Ref.current) {
            text1Ref.current.style.filter = ""
            text1Ref.current.style.opacity = "0"
          }
        } else {
          const f = morphRef.current
          const fi = 1 - f
          if (text1Ref.current) {
            text1Ref.current.textContent = words[indexRef.current]
            text1Ref.current.style.filter = `blur(${Math.min(8 / fi - 8, 100)}px)`
            text1Ref.current.style.opacity = `${Math.pow(fi, 0.4)}`
          }
          if (text2Ref.current) {
            text2Ref.current.textContent = words[(indexRef.current + 1) % words.length]
            text2Ref.current.style.filter = `blur(${Math.min(8 / f - 8, 100)}px)`
            text2Ref.current.style.opacity = `${Math.pow(f, 0.4)}`
          }
        }
      }

      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [words, morphTime, cooldownTime])

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        ...style,
      }}
    >
      {/* Invisible sizer — holds the line height so layout doesn't collapse */}
      <span aria-hidden="true" style={{ visibility: "hidden", pointerEvents: "none" }}>
        {words[0]}
      </span>
      <span
        ref={text1Ref}
        aria-hidden="true"
        style={{ position: "absolute", top: 0, left: 0, right: 0, textAlign: "center" }}
      />
      <span
        ref={text2Ref}
        style={{ position: "absolute", top: 0, left: 0, right: 0, textAlign: "center" }}
      />
    </span>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const manifesto = [
  {
    stop: "Stop tracking goals.",
    start: "Start tracking reality.",
    rest: "The gap between the two is where excuses live.",
  },
  {
    stop: "Stop setting alarms.",
    start: "Start answering them.",
    rest: "Five minutes in — are you actually doing it?",
  },
  {
    stop: "Stop writing it down.",
    start: "Start showing it.",
    rest: "A photo doesn't lie. Your to-do list does.",
  },
  {
    stop: "Great intentions.",
    start: "Zero proof.",
    rest: "That changes today.",
  },
]

const steps = [
  {
    number: "01",
    title: "Schedule it",
    description: "Name the task. Set the time. Mean it this time.",
  },
  {
    number: "02",
    title: "Answer the alarm",
    description: "Five minutes in, we ask: are you there? One photo. That's your proof.",
  },
  {
    number: "03",
    title: "Build the proof",
    description: "A photo doesn't lie. Your to-do list does. 91 days of reality — no excuses, no spin.",
  },
]

// ─── Main page ────────────────────────────────────────────────────────────────

export default function DrishtiWaitlistPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your first and last name.")
      return
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    setLoading(true)
    try {
      // GitHub Pages only serves static files, so this can't go through a
      // Next.js API route — it posts to the Apps Script web app directly.
      // text/plain avoids a CORS preflight (Apps Script doesn't handle
      // OPTIONS requests), and the script still JSON.parses the body.
      await fetch(WAITLIST_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ firstName: firstName.trim(), lastName: lastName.trim(), email }),
      })
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: FONT }}>

      {/* ── NAV ──────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 48px",
          background: "rgba(10,10,10,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <img
            src="logo.png"
            alt="Drishti"
            style={{ width: "36px", height: "36px", objectFit: "contain", mixBlendMode: "lighten" }}
          />
          <span
            style={{
              fontSize: "15px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Drishti<span style={{ color: "#00d395" }}>.</span>10
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="privacy"
            style={{
              color: "#6a6a6a",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#00d395" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#6a6a6a" }}
          >
            Privacy
          </a>
          <a
            href="delete-account"
            style={{
              color: "#6a6a6a",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#00d395" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#6a6a6a" }}
          >
            Delete Account
          </a>
          <a
            href="#waitlist"
            style={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.01em",
              padding: "9px 20px",
              borderRadius: "100px",
              border: "1px solid #2a2a2a",
              textDecoration: "none",
              transition: "border-color 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#00d395"
              e.currentTarget.style.color = "#00d395"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2a2a"
              e.currentTarget.style.color = "#ffffff"
            }}
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <MeshGradient
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          colors={["#05081a", "#0d1a50", "#1a5fff", "#05081a"]}
          speed={0.4}
          distortion={0.4}
          swirl={0.2}
        />

        <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
          <DotOrbit
            style={{ width: "100%", height: "100%" }}
            colorBack="#0a0a0a"
            colors={["#00d395"]}
            size={0.25}
            spreading={0.35}
            speed={0.5}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 70% at 50% 60%, transparent 20%, #0a0a0a 90%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "140px 24px 100px",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "40px",
              fontSize: "11px",
              fontWeight: 600,
              color: "#00d395",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#00d395",
                animation: "pulse 2s infinite",
              }}
            />
            Coming Soon
          </div>

          <h1
            style={{
              fontSize: "clamp(60px, 11vw, 112px)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              color: "#ffffff",
              marginBottom: "156px",
            }}
          >
            Stop planning.
            <br />
            <GooeyText
              words={["Start proving.", "Start showing up.", "Start being real."]}
              style={{ color: "#00d395" }}
            />
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#aaaaaa",
              lineHeight: 1.7,
              maxWidth: "460px",
              margin: "0 auto 52px",
            }}
          >
            Plans are cheap. Proof isn't. Five minutes into every block, your
            phone asks one question: are you actually there? One photo. No
            excuses; Just proof.
          </p>

        </div>
      </section>

      {/* ── PROOF STRIP ──────────────────────────────────────────────────────── */}
      <div>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "91", unit: "d", label: "Check-in history" },
            { num: "5", unit: "min", label: "Alarm fires in" },
            { num: "0", unit: "bs", label: "Excuses accepted" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                flex: "1 1 180px",
                textAlign: "center",
                padding: "56px 24px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(44px, 7vw, 64px)",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                {stat.num}
                <span style={{ color: "#00d395", fontSize: "0.55em" }}>{stat.unit}</span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#4a4a4a",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  marginTop: "12px",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "140px 48px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00d395",
            marginBottom: "20px",
          }}
        >
          The problem
        </p>
        <h2
          style={{
            fontSize: "clamp(30px, 4.5vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#ffffff",
            marginBottom: "80px",
            maxWidth: "680px",
          }}
        >
          Every resource you need exists.
          <br />Every tool is at your fingertips.
          <br />Every answer is one Google search away.
          <br />
          <span style={{ color: "#2e2e2e" }}>So why aren't you where you want to be?</span>
        </h2>

        <p
          style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "#4a4a4a",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginBottom: "28px",
          }}
        >
          Because information without action is just expensive procrastination.
        </p>

        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#00d395",
            marginBottom: "80px",
          }}
        >
          Stop optimizing. Start executing.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            maxWidth: "680px",
          }}
        >
          {manifesto.map((line, i) => (
            <ManifestoLine key={i} line={line} />
          ))}
        </div>
      </section>

      {/* ── DOT ORBIT DIVIDER ────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <DotOrbit
          style={{ width: "100%", height: "100%" }}
          colorBack="#0d0d0d"
          colors={["#1e1e1e", "#141414"]}
          size={0.35}
          spreading={0.4}
          speed={0.5}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(18px, 3.5vw, 32px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              textAlign: "center",
              padding: "0 24px",
              lineHeight: 1.35,
            }}
          >
            Stop telling yourself you're productive.
            <br />
            <span style={{ color: "#00d395" }}>Let Drishti.10 decide.</span>
          </p>
        </div>
      </div>

      {/* ── THE CHANGE (3 steps) ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: "140px 48px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00d395",
            marginBottom: "20px",
          }}
        >
          The change
        </p>
        <h2
          style={{
            fontSize: "clamp(30px, 4.5vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#ffffff",
            marginBottom: "80px",
            maxWidth: "640px",
          }}
        >
          Stop being the person who plans.
          <br />
          <span style={{ color: "#333333" }}>Start being the person who proves.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "0",
          }}
        >
          {steps.map((s, i) => (
            <StepCard key={s.number} {...s} isLast={i === steps.length - 1} />
          ))}
        </div>
      </section>

      {/* ── PHONE SHOWCASE ───────────────────────────────────────────────────── */}
      <PhoneShowcase />

      {/* ── WAITLIST FORM ────────────────────────────────────────────────────── */}
      <section
        id="waitlist"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#00d395",
              marginBottom: "20px",
            }}
          >
            Early access
          </p>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Ready to change?
          </h2>
          <p
            style={{
              color: "#4a4a4a",
              fontSize: "15px",
              lineHeight: 1.7,
              marginBottom: "48px",
            }}
          >
            If you want to be the person who actually shows up — join the waitlist.
          </p>

          {submitted ? (
            <div
              style={{
                borderRadius: "16px",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                background: "rgba(0,211,149,0.04)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#00d395",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0a0a0a",
                }}
              >
                <IconCheck />
              </div>
              <p style={{ fontWeight: 800, fontSize: "17px", color: "#ffffff", letterSpacing: "-0.02em" }}>
                You're on the list, {firstName}.
              </p>
              <p style={{ color: "#4a4a4a", fontSize: "13px" }}>
                We'll send a ping to {email} when we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} action="#" method="POST" noValidate>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", gap: "12px" }}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value); setError("") }}
                    required
                    style={{
                      flex: 1,
                      background: "#111111",
                      border: error ? "1px solid #ff4d4f" : "1px solid #1e1e1e",
                      borderRadius: "12px",
                      padding: "18px 20px",
                      fontSize: "15px",
                      color: "#ffffff",
                      outline: "none",
                      transition: "border-color 0.15s",
                    }}
                    onFocus={(e) => { if (!error) e.target.style.borderColor = "#00d395" }}
                    onBlur={(e) => { if (!error) e.target.style.borderColor = "#1e1e1e" }}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value); setError("") }}
                    required
                    style={{
                      flex: 1,
                      background: "#111111",
                      border: error ? "1px solid #ff4d4f" : "1px solid #1e1e1e",
                      borderRadius: "12px",
                      padding: "18px 20px",
                      fontSize: "15px",
                      color: "#ffffff",
                      outline: "none",
                      transition: "border-color 0.15s",
                    }}
                    onFocus={(e) => { if (!error) e.target.style.borderColor = "#00d395" }}
                    onBlur={(e) => { if (!error) e.target.style.borderColor = "#1e1e1e" }}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "#111111",
                    border: error ? "1px solid #ff4d4f" : "1px solid #1e1e1e",
                    borderRadius: "12px",
                    padding: "18px 20px",
                    fontSize: "15px",
                    color: "#ffffff",
                    outline: "none",
                    transition: "border-color 0.15s",
                  }}
                  onFocus={(e) => {
                    if (!error) e.target.style.borderColor = "#00d395"
                  }}
                  onBlur={(e) => {
                    if (!error) e.target.style.borderColor = "#1e1e1e"
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    background: "#00d395",
                    color: "#0a0a0a",
                    fontWeight: 800,
                    fontSize: "15px",
                    letterSpacing: "0.01em",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.6 : 1,
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = "0.85" }}
                  onMouseLeave={(e) => { if (!loading) e.currentTarget.style.opacity = "1" }}
                >
                  {loading ? "Joining…" : "I'm In →"}
                </button>
              </div>
              {error && (
                <p style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "10px" }}>
                  {error}
                </p>
              )}
              <p style={{ color: "#2a2a2a", fontSize: "12px", marginTop: "20px" }}>
                No spam. No noise. Just the launch ping.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── COMING SOON ──────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#2a2a2a",
            marginBottom: "20px",
          }}
        >
          Platform
        </p>
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#ffffff",
            marginBottom: "12px",
          }}
        >
          Available soon
        </h2>
        <p style={{ color: "#2a2a2a", fontSize: "14px", marginBottom: "56px" }}>
          iOS &amp; Android
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <StoreBadge icon={<IconApple />} line1="Download on the" line2="App Store" />
          <StoreBadge icon={<IconGoogle />} line1="Get it on" line2="Google Play" />
        </div>

        <p style={{ marginTop: "28px", color: "#222222", fontSize: "12px" }}>
          Store links will be live at launch.
        </p>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          padding: "40px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 900,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#ffffff",
              marginBottom: "4px",
            }}
          >
            Drishti<span style={{ color: "#00d395" }}>.</span>10
          </p>
          <p style={{ color: "#2a2a2a", fontSize: "12px" }}>
            Stop planning. Start proving.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
          <p style={{ color: "#222222", fontSize: "12px" }}>
            © {new Date().getFullYear()} Drishti.10. All rights reserved.
          </p>
          <a
            href="privacy"
            style={{ color: "#4a4a4a", fontSize: "12px", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        * { box-sizing: border-box; }
        ::selection { background: #00d39530; }
      `}</style>
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

// ─── Phone Showcase ───────────────────────────────────────────────────────────

function PhoneShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const phones = [
    {
      src: "app-schedule.png",
      label: "Schedule your blocks",
      sub: "Name the task. Set the time. Mean it.",
      from: "translateX(-80px)",
      delay: "0s",
    },
    {
      src: "app-home.png",
      label: "Answer the check-in",
      sub: "Five minutes in, we ask: are you there?",
      from: "translateY(80px)",
      delay: "0.18s",
    },
    {
      src: "app-metrics.png",
      label: "See your proof",
      sub: "91 days of reality. No excuses.",
      from: "translateX(80px)",
      delay: "0.36s",
    },
  ]

  return (
    <section style={{ padding: "140px 24px", maxWidth: "1100px", margin: "0 auto" }}>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#00d395",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        The app
      </p>
      <h2
        style={{
          fontSize: "clamp(30px, 4.5vw, 48px)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: "#ffffff",
          marginBottom: "80px",
          textAlign: "center",
        }}
      >
        Proof lives in your pocket.
      </h2>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "flex-end",
          flexWrap: "wrap",
        }}
      >
        {phones.map((phone) => (
          <div
            key={phone.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "28px",
              transform: visible ? "translate(0,0)" : phone.from,
              opacity: visible ? 1 : 0,
              transition: `transform 0.9s cubic-bezier(0.22,1,0.36,1) ${phone.delay}, opacity 0.9s ease ${phone.delay}`,
            }}
          >
            <div
              style={{
                borderRadius: "44px",
                overflow: "hidden",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)",
                width: "240px",
                background: "#111",
              }}
            >
              <img
                src={phone.src}
                alt={phone.label}
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "6px",
                  letterSpacing: "-0.02em",
                }}
              >
                {phone.label}
              </p>
              <p style={{ fontSize: "13px", color: "#4a4a4a", lineHeight: 1.6 }}>
                {phone.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .phone-row { flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  )
}

function ManifestoLine({ line }: { line: typeof manifesto[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        padding: "32px 0",
        transition: "opacity 0.2s",
        opacity: hovered ? 1 : 0.85,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          lineHeight: 1.6,
          color: "#4a4a4a",
          margin: 0,
        }}
      >
        <span style={{ color: "#ffffff", fontWeight: 800 }}>{line.stop} </span>
        <span style={{ color: "#00d395", fontWeight: 700 }}>{line.start} </span>
        {line.rest}
      </p>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
  isLast,
}: {
  number: string
  title: string
  description: string
  isLast: boolean
}) {
  return (
    <div
      style={{
        padding: "48px 40px 48px 0",
        position: "relative",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "#00d395",
          display: "block",
          marginBottom: "20px",
        }}
      >
        {number}
      </span>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#ffffff",
          marginBottom: "12px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p style={{ color: "#4a4a4a", fontSize: "14px", lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  )
}

function StoreBadge({
  icon,
  line1,
  line2,
}: {
  icon: React.ReactNode
  line1: string
  line2: string
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
        border: "1px solid #1a1a1a",
        borderRadius: "14px",
        padding: "16px 28px",
        cursor: "default",
        minWidth: "180px",
        opacity: 0.35,
        position: "relative",
      }}
      title="Coming soon"
    >
      <div
        style={{
          position: "absolute",
          top: "-9px",
          right: "16px",
          background: "#f5a623",
          color: "#0a0a0a",
          fontSize: "9px",
          fontWeight: 800,
          letterSpacing: "0.08em",
          padding: "2px 7px",
          borderRadius: "4px",
          textTransform: "uppercase",
        }}
      >
        Soon
      </div>
      <div style={{ color: "#ffffff" }}>{icon}</div>
      <div style={{ textAlign: "left" }}>
        <p style={{ fontSize: "10px", color: "#6a6a6a", lineHeight: 1, marginBottom: "3px" }}>{line1}</p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          {line2}
        </p>
      </div>
    </div>
  )
}
