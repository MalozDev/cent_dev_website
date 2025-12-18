import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
} from "@react-email/components";

interface QuoteConfirmationEmailProps {
  name: string;
  submittedAt: string;
}

export default function QuoteConfirmationEmail({
  name,
  submittedAt,
}: QuoteConfirmationEmailProps) {
  return (
    <Html>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.headerSection}>
            <Heading style={styles.heading}>Cendev Innovations</Heading>
            <div style={styles.badge}>Confirmed</div>
          </Section>

          {/* Hero */}
          <Section style={styles.heroSection}>
            <div style={styles.iconCircle}>✓</div>
            <Heading style={styles.heroTitle}>Quote Received</Heading>
            <Text style={styles.heroSubtitle}>
              We'll respond within 24 hours
            </Text>
          </Section>

          {/* Content */}
          <Section style={styles.contentSection}>
            <Text style={styles.text}>
              Hi <strong>{name}</strong>,
            </Text>

            <Text style={styles.text}>
              Thanks for reaching out! Your request is being reviewed by our
              team.
            </Text>

            <Text style={styles.metaText}>Submitted: {submittedAt}</Text>
          </Section>

          <Hr style={styles.divider} />

          {/* Social Links */}
          <Section style={styles.socialSection}>
            <a
              href="https://facebook.com/cendevinnovations"
              style={styles.socialButton}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://linkedin.com/company/cendevinnovations"
              style={styles.socialButton}
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/cendevinnovations"
              style={styles.socialButton}
            >
              <GitHubIcon />
            </a>
          </Section>

          {/* Footer */}
          <Text style={styles.footer}>© 2024 Cendev Innovations</Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ---------- Icons ---------- */

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 3h-3a5 5 0 0 0-5 5v3H4v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3V3z"
      fill="#ffffff"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.94 6.5a2.44 2.44 0 1 1 0-4.88 2.44 2.44 0 0 1 0 4.88zM2.5 21.5h4.88V8.98H2.5V21.5zM9.5 8.98h4.67v1.71h.07c.65-1.23 2.24-2.53 4.61-2.53 4.93 0 5.84 3.25 5.84 7.47v5.87h-4.88v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29H9.5V8.98z"
      fill="#ffffff"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5z"
      fill="#ffffff"
    />
  </svg>
);

/* ---------- Styles ---------- */

const styles = {
  body: {
    backgroundColor: "#f3f4f6",
    padding: "20px 16px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  container: {
    maxWidth: "480px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },
  headerSection: {
    background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
    padding: "20px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "700",
    color: "white",
  },
  badge: {
    backgroundColor: "rgba(16, 185, 129, 0.2)",
    color: "#10b981",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "11px",
    fontWeight: "600",
  },
  heroSection: {
    padding: "32px 24px 24px",
    textAlign: "center" as const,
  },
  iconCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    margin: "0 auto 12px",
  },
  heroTitle: {
    margin: "0 0 6px 0",
    fontSize: "22px",
    fontWeight: "700",
    color: "#111827",
  },
  heroSubtitle: {
    margin: "0",
    fontSize: "14px",
    color: "#6b7280",
  },
  contentSection: {
    padding: "0 24px 24px",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#374151",
    margin: "0 0 12px 0",
  },
  metaText: {
    fontSize: "12px",
    color: "#9ca3af",
    margin: "16px 0 0 0",
  },
  divider: {
    margin: "0",
    borderColor: "#e5e7eb",
  },
  socialSection: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    padding: "20px 24px",
  },
  socialButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#1f2937",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },
  footer: {
    padding: "16px 24px",
    fontSize: "11px",
    color: "#9ca3af",
    textAlign: "center" as const,
    backgroundColor: "#f9fafb",
    margin: "0",
  },
};
