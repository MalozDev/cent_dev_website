import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Hr,
  Section,
} from "@react-email/components";

interface QuoteRequestEmailProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  submittedAt: string;
}

export default function QuoteRequestEmail({
  name,
  email,
  phone,
  company,
  projectType,
  budget,
  message,
  submittedAt,
}: QuoteRequestEmailProps) {
  return (
    <Html>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Heading style={styles.heading}>Cendev Innovations</Heading>
            <Text style={styles.subheading}>New Quotation Request</Text>
          </Section>

          <Hr style={styles.divider} />

          {/* Meta */}
          <Text style={styles.meta}>Submitted on {submittedAt}</Text>

          <Hr style={styles.divider} />

          {/* Client Info */}
          <Section>
            <Text style={styles.label}>Client Details</Text>
            <Text style={styles.text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={styles.text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={styles.text}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={styles.text}>
              <strong>Company:</strong> {company}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          {/* Project Info */}
          <Section>
            <Text style={styles.label}>Project Information</Text>
            <Text style={styles.text}>
              <strong>Type:</strong> {projectType}
            </Text>
            <Text style={styles.text}>
              <strong>Budget:</strong> {budget}
            </Text>
          </Section>

          <Hr style={styles.divider} />

          {/* Message */}
          <Section>
            <Text style={styles.label}>Project Description</Text>
            <Text style={styles.message}>{message}</Text>
          </Section>

          <Hr style={styles.divider} />

          <Text style={styles.footer}>
            This request was submitted via the Cendev Innovations website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#0b0b0b",
    padding: "24px",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    padding: "28px",
    fontFamily: "Inter, Arial, sans-serif",
    color: "#111111",
    borderTop: "6px solid #f97316", // Cendev orange
  },
  header: {
    marginBottom: "12px",
  },
  heading: {
    margin: "0",
    fontSize: "22px",
    fontWeight: "700",
    color: "#111111",
  },
  subheading: {
    marginTop: "4px",
    fontSize: "14px",
    color: "#f97316",
    fontWeight: "600",
  },
  meta: {
    fontSize: "12px",
    color: "#6b7280",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "6px",
  },
  text: {
    fontSize: "14px",
    margin: "4px 0",
    color: "#1f2937",
  },
  message: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#1f2937",
  },
  divider: {
    margin: "18px 0",
    borderColor: "#e5e7eb",
  },
  footer: {
    fontSize: "12px",
    color: "#6b7280",
  },
};
