import type { Metadata } from "next"

const FONT = `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
const CONTACT_EMAIL = "drishtiai10@gmail.com"
const EFFECTIVE_DATE = "October 2, 2026"

export const metadata: Metadata = {
  title: "Privacy Policy — Drishti.10",
  description: "How Drishti.10 collects, uses, and protects your information.",
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

export default function PrivacyPolicyPage() {
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
            display: "flex",
            alignItems: "center",
            gap: "10px",
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
          Privacy Policy
        </h1>
        <p style={{ color: "#4a4a4a", fontSize: "14px", marginBottom: "64px" }}>
          Effective date: {EFFECTIVE_DATE}
        </p>

        <div style={{ color: "#a0a0a0", fontSize: "15px", lineHeight: 1.8, marginBottom: "48px" }}>
          <p>
            This Privacy Policy explains how Drishti.10 (&ldquo;Drishti.10,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and protects
            information when you use the Drishti.10 mobile application (the &ldquo;App&rdquo;) or
            visit this website, including the early-access waitlist (together, the
            &ldquo;Service&rdquo;).
          </p>
          <p>
            By using the Service, you agree to the collection and use of information as described
            in this policy. If you do not agree, please do not use the Service.
          </p>
        </div>

        <Section title="1. Information We Collect">
          <p style={{ marginBottom: "16px" }}>
            <strong style={{ color: "#ffffff" }}>Account information.</strong> When you create a
            Drishti.10 account, we collect your name, email address, and authentication
            information. You may also sign in using Google or Apple Sign-In, in which case those
            providers share your basic profile information (such as name and email) with us,
            subject to your account settings with them.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong style={{ color: "#ffffff" }}>Check-in photos.</strong> The App asks you to take
            a photo to confirm you are completing a scheduled task (a &ldquo;check-in&rdquo;).
            These photos are uploaded to our servers so we can generate your productivity score
            and so you can review your check-in history.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong style={{ color: "#ffffff" }}>Schedule, task, and score data.</strong> Task
            names, scheduled times, check-in timestamps, productivity scores, and other metrics
            you create or generate while using the App.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong style={{ color: "#ffffff" }}>Waitlist information.</strong> If you join our
            early-access waitlist on this website, we collect the first name, last name, and email
            address you submit, solely to notify you when the App launches.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong style={{ color: "#ffffff" }}>Device and usage data.</strong> We automatically
            collect information such as device type, operating system and version, app version,
            crash and error logs, and general usage data (for example, which features you interact
            with and how often).
          </p>
          <p>
            <strong style={{ color: "#ffffff" }}>Push notification data.</strong> We collect a
            device push token so we can deliver check-in alarms and reminders to your device.
          </p>
        </Section>

        <Section title="2. How We Use Information">
          <p>We use the information we collect to:</p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li>Provide the scheduling, check-in, and photo-based accountability features</li>
            <li>Generate AI-based productivity scores from your check-in photos</li>
            <li>Send check-in alarms, reminders, and other service notifications</li>
            <li>Maintain, secure, and improve the Service, including diagnosing crashes and bugs</li>
            <li>Communicate with you, including launch updates and support requests</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </ul>
        </Section>

        <Section title="3. How We Share Information">
          <p style={{ marginBottom: "16px" }}>
            We do not sell your personal information. We share information only in the following
            circumstances:
          </p>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#ffffff" }}>AI processing providers.</strong> Check-in
              photos are sent to third-party AI service providers to generate your productivity
              score. These providers process the photo only to return a result to us and are
              bound by their own privacy terms.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#ffffff" }}>Cloud hosting providers</strong> that store
              account, schedule, and photo data on our behalf.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#ffffff" }}>Push notification providers</strong> (such as
              Firebase Cloud Messaging or the Apple Push Notification service) to deliver alarms
              and reminders.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#ffffff" }}>Analytics and crash-reporting providers</strong>{" "}
              that help us understand usage and fix bugs.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#ffffff" }}>Sign-in providers</strong> (Google, Apple) if
              you choose to authenticate through them.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#ffffff" }}>Payment and subscription providers</strong>{" "}
              (Stripe for web payments, RevenueCat, and Apple/Google for in-app purchases) to
              process and verify Drishti Pro subscriptions. We do not receive or store your full
              card number.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: "#ffffff" }}>Advertising providers.</strong> Free accounts
              may see ads served by Google AdMob, which may collect device identifiers and
              usage data under Google&rsquo;s own policy. Where required, we ask for your consent
              first. Pro subscribers do not see ads.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>Legal and safety reasons</strong>, such as to
              comply with applicable law, respond to lawful requests, or protect the rights,
              property, or safety of Drishti.10, our users, or others.
            </li>
          </ul>
        </Section>

        <Section title="4. Data Retention">
          <p>
            We retain account, schedule, and check-in data for as long as your account is active
            or as needed to provide the Service. Check-in photos are automatically deleted after
            90 days. If you delete your account, we delete your profile, schedules, check-ins,
            photos, and push tokens, and cancel any active web (Stripe) subscription; backups may
            hold copies for up to 30 further days. We may keep limited records where retention
            is required for legal, security, or backup purposes. Waitlist information is retained
            until the App launches or until you ask us to remove it, whichever comes first.
          </p>
        </Section>

        <Section title="5. Your Rights and Choices">
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "12px" }}>You can access and update your profile information from within the App.</li>
            <li style={{ marginBottom: "12px" }}>You can delete individual check-ins and photos from your history in the App.</li>
            <li style={{ marginBottom: "12px" }}>
              You can delete your account and all associated data yourself in the App (Profile →
              Account → Delete Account), or see{" "}
              <a href="delete-account" style={{ color: "#00d395" }}>Delete Account</a> for all options.
            </li>
            <li style={{ marginBottom: "12px" }}>
              You can also ask what information we hold about you, or request deletion by email,
              by contacting{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#00d395" }}>
                {CONTACT_EMAIL}
              </a>.
            </li>
            <li style={{ marginBottom: "12px" }}>You can unsubscribe from waitlist emails at any time by contacting us.</li>
            <li>
              If you are located in the EEA, UK, or California, you may have additional rights
              under laws such as the GDPR or CCPA, including the right to access, correct, or
              delete your personal information, and the right to object to certain processing.
              Contact us to exercise these rights.
            </li>
          </ul>
        </Section>

        <Section title="6. Children's Privacy">
          <p>
            Drishti.10 is not directed to children under 13 (or the equivalent minimum age in your
            jurisdiction), and we do not knowingly collect personal information from children. If
            you believe a child has provided us with personal information, please contact us and
            we will delete it.
          </p>
        </Section>

        <Section title="7. Security">
          <p>
            We use reasonable administrative, technical, and physical safeguards designed to
            protect your information. No method of transmission or storage is completely secure,
            and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="8. International Data Transfers">
          <p>
            Your information may be processed and stored in countries other than your own,
            including the United States, where our service providers operate. We take steps
            intended to ensure your information receives an adequate level of protection wherever
            it is processed.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we
            will update the effective date above and, where appropriate, notify you through the
            App or by email. Your continued use of the Service after a change becomes effective
            constitutes acceptance of the revised policy.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>
            If you have questions about this Privacy Policy or how we handle your information,
            contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#00d395" }}>
              {CONTACT_EMAIL}
            </a>.
          </p>
        </Section>

        <a href="terms" style={{ color: "#4a4a4a", fontSize: "13px", textDecoration: "none", marginRight: "24px" }}>
          Terms of Service
        </a>
        <a
          href="./"
          style={{
            display: "inline-block",
            marginTop: "24px",
            color: "#4a4a4a",
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          ← Back to Drishti.10
        </a>
      </main>
    </div>
  )
}
