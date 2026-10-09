import type { Metadata } from "next"

const FONT = `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
const APP_NAME = "Drishti.10"
const CONTACT_EMAIL = "drishtiai10@gmail.com"

export const metadata: Metadata = {
  title: "Delete Account — Drishti.10",
  description: "How to request deletion of your Drishti.10 account and data.",
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "48px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "16px" }}>
        {title}
      </h2>
      <div style={{ color: "#a0a0a0", fontSize: "15px", lineHeight: 1.8 }}>{children}</div>
    </section>
  )
}

export default function DeleteAccountPage() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Delete My Account")}`
  return (
    <div style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: FONT, minHeight: "100vh" }}>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          padding: "24px 48px",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <a
          href="./"
          style={{
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 900,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          Drishti<span style={{ color: "#00d395" }}>.</span>10
        </a>
      </nav>

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "72px 24px 140px" }}>
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00d395", marginBottom: "16px" }}>
          Account
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "48px" }}>
          {APP_NAME} Account Deletion
        </h1>

        <Section title="Option 1: Delete in the app (instant)">
          <ol style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>Open {APP_NAME} and go to the Profile tab.</li>
            <li style={{ marginBottom: "8px" }}>Scroll to the Account section and tap Delete Account.</li>
            <li>Confirm twice. Your account and data are deleted immediately and you are signed out.</li>
          </ol>
        </Section>

        <Section title="Option 2: Request deletion by email">
          <p style={{ marginBottom: "16px" }}>
            If you can&rsquo;t access the app, request deletion of your {APP_NAME} account and
            associated data:
          </p>
          <ol style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              Email{" "}
              <a href={mailto} style={{ color: "#00d395" }}>{CONTACT_EMAIL}</a>{" "}
              from the email address associated with your account (or the Google/Apple account
              you signed in with).
            </li>
            <li style={{ marginBottom: "8px" }}>Use the subject line &ldquo;Delete My Account.&rdquo;</li>
            <li>We may reply to confirm it&rsquo;s really you before proceeding.</li>
          </ol>
        </Section>

        <Section title="What gets deleted">
          <p style={{ marginBottom: "12px" }}>
            Within 30 days of a verified request, we delete:
          </p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Your account and profile information (name, email, sign-in details)</li>
            <li>Your check-in photos</li>
            <li>Your schedules, tasks, check-in history, and productivity scores</li>
            <li>Your push notification token</li>
          </ul>
        </Section>

        <Section title="Subscriptions">
          <p>
            Deleting your account cancels any active web (Stripe) subscription. Subscriptions
            bought through the Apple App Store or Google Play can&rsquo;t be cancelled by us —
            cancel them in your App Store or Play Store subscription settings to avoid further
            charges.
          </p>
        </Section>

        <Section title="What may be retained">
          <p>
            Encrypted backups may hold copies of your data for up to 30 additional days before
            they are overwritten. We may also keep limited records where required by law or to
            prevent fraud and abuse. Anonymized, aggregated analytics that can no longer be tied
            to you may be kept.
          </p>
        </Section>

        <Section title="Waitlist sign-ups">
          <p>
            If you only joined the waitlist on this website, email the same address with the
            subject &ldquo;Remove Me From Waitlist&rdquo; and we will delete your name and email.
          </p>
        </Section>

        <a href="privacy" style={{ color: "#4a4a4a", fontSize: "13px", textDecoration: "none", marginRight: "24px" }}>
          Privacy Policy
        </a>
        <a href="./" style={{ color: "#4a4a4a", fontSize: "13px", textDecoration: "none" }}>
          ← Back to {APP_NAME}
        </a>
      </main>
    </div>
  )
}
