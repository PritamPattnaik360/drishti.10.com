import type { Metadata } from "next"

const FONT = `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
const CONTACT_EMAIL = "drishtiai10@gmail.com"
const EFFECTIVE_DATE = "October 2, 2026"

export const metadata: Metadata = {
  title: "Terms of Service — Drishti.10",
  description: "The terms that govern your use of Drishti.10.",
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "48px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        {title}
      </h2>
      <div style={{ color: "#a0a0a0", fontSize: "15px", lineHeight: 1.8 }}>{children}</div>
    </section>
  )
}

export default function TermsPage() {
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
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00d395",
            marginBottom: "16px",
          }}
        >
          Legal
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            marginBottom: "12px",
          }}
        >
          Terms of Service
        </h1>
        <p style={{ color: "#4a4a4a", fontSize: "14px", marginBottom: "64px" }}>
          Effective date: {EFFECTIVE_DATE}
        </p>

        <Section title="1. The service">
          <p>
            Drishti.10 (&ldquo;Drishti,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) is a schedule and
            accountability app: you plan your day, and the app asks you to prove you did it with
            a photo check-in. By creating an account or using the app or this website, you agree
            to these terms and to our{" "}
            <a href="privacy" style={{ color: "#00d395" }}>Privacy Policy</a>. If you do not
            agree, please do not use the service.
          </p>
        </Section>

        <Section title="2. Your account">
          <p>
            You are responsible for keeping your sign-in credentials secure and for activity under
            your account. You must be at least 13 years old (or the minimum age in your
            jurisdiction) to use Drishti. You can delete your account at any time — see{" "}
            <a href="delete-account" style={{ color: "#00d395" }}>Delete Account</a>.
          </p>
        </Section>

        <Section title="3. Subscriptions">
          <p style={{ marginBottom: "16px" }}>
            Drishti Pro is an optional monthly subscription, billed in advance and renewing
            automatically until cancelled. Depending on your region and platform, you subscribe
            through Apple&rsquo;s App Store, Google Play, or directly through Stripe on our
            website.
          </p>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#ffffff" }}>App Store / Google Play subscribers:</strong>{" "}
              billing, cancellation, and refunds are handled by Apple or Google under their own
              terms. Manage or cancel from your device&rsquo;s subscription settings.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>Web (Stripe) subscribers:</strong> manage or
              cancel anytime from the billing portal while signed in. Cancelling stops future
              renewals; you keep Pro access through the end of the period you already paid for.
            </li>
          </ul>
          <p style={{ marginTop: "16px" }}>
            Deleting your account does not automatically cancel a subscription purchased through
            Apple or Google — cancel those from your store account settings. Web (Stripe)
            subscriptions are cancelled when you delete your account in the app.
          </p>
        </Section>

        <Section title="4. Acceptable use">
          <p>
            Use Drishti for its intended purpose: scheduling and accountability tracking for
            yourself. Do not attempt to disrupt the service, access other users&rsquo; data,
            submit photos you have no right to share or that are unlawful, circumvent paywalls or
            usage limits, or use the app for anything unlawful. We may suspend or terminate
            accounts that violate these terms.
          </p>
        </Section>

        <Section title="5. Your content">
          <p>
            You own the schedule data, check-in photos, and other content you create in Drishti.
            You grant us a limited license to store and process it, including sending check-in
            photos to AI providers to generate your score, solely to operate the service as
            described in the Privacy Policy.
          </p>
        </Section>

        <Section title="6. AI-generated scores">
          <p>
            Scores and feedback are best-effort estimates produced by AI. They can be wrong and
            are not professional advice.
          </p>
        </Section>

        <Section title="7. Advertising">
          <p>
            Free accounts may see ads served by Google AdMob. Pro subscribers do not see ads.
          </p>
        </Section>

        <Section title="8. Disclaimers and limitation of liability">
          <p>
            Drishti is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
            warranties of any kind. Alarms and notifications depend on your device, operating
            system, and network, and may be delayed or missed. To the fullest extent permitted by
            law, we are not liable for missed check-ins, alarms, or decisions made based on the
            app, or for indirect or consequential damages.
          </p>
        </Section>

        <Section title="9. Changes to these terms">
          <p>
            We may update these terms from time to time. We will change the effective date above
            and post material changes here before they take effect. Continued use after a change
            means you accept the updated terms.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions about these terms? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#00d395" }}>
              {CONTACT_EMAIL}
            </a>.
          </p>
        </Section>

        <a href="privacy" style={{ color: "#4a4a4a", fontSize: "13px", textDecoration: "none", marginRight: "24px" }}>
          Privacy Policy
        </a>
        <a href="./" style={{ color: "#4a4a4a", fontSize: "13px", textDecoration: "none" }}>
          ← Back to Drishti.10
        </a>
      </main>
    </div>
  )
}
