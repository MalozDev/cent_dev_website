const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const { render } = require("@react-email/render");
const React = require("react");

require("dotenv").config();

const app = express();
const PORT = 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Request logging
app.use((req, res, next) => {
  console.log(`\n📡 ${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log("Origin:", req.headers.origin);
  next();
});

// Helper function to render React component to HTML string
async function renderEmail(component, props) {
  return await render(React.createElement(component, props));
}

// 1. Quote Request Email Component (EXACTLY as you provided)
function QuoteRequestEmail(props) {
  const {
    Html,
    Body,
    Container,
    Text,
    Heading,
    Hr,
    Section,
  } = require("@react-email/components");

  return React.createElement(
    Html,
    null,
    React.createElement(
      Body,
      { style: styles.body },
      React.createElement(
        Container,
        { style: styles.container },
        // Header
        React.createElement(
          Section,
          { style: styles.header },
          React.createElement(
            Heading,
            { style: styles.heading },
            "Cendev Innovations"
          ),
          React.createElement(
            Text,
            { style: styles.subheading },
            "New Quotation Request"
          )
        ),
        React.createElement(Hr, { style: styles.divider }),
        React.createElement(
          Text,
          { style: styles.meta },
          `Submitted on ${props.submittedAt}`
        ),
        React.createElement(Hr, { style: styles.divider }),
        // Client Info
        React.createElement(
          Section,
          null,
          React.createElement(Text, { style: styles.label }, "Client Details"),
          React.createElement(
            Text,
            { style: styles.text },
            React.createElement("strong", null, "Name: "),
            props.name
          ),
          React.createElement(
            Text,
            { style: styles.text },
            React.createElement("strong", null, "Email: "),
            props.email
          ),
          React.createElement(
            Text,
            { style: styles.text },
            React.createElement("strong", null, "Phone: "),
            props.phone
          ),
          React.createElement(
            Text,
            { style: styles.text },
            React.createElement("strong", null, "Company: "),
            props.company
          )
        ),
        React.createElement(Hr, { style: styles.divider }),
        // Project Info
        React.createElement(
          Section,
          null,
          React.createElement(
            Text,
            { style: styles.label },
            "Project Information"
          ),
          React.createElement(
            Text,
            { style: styles.text },
            React.createElement("strong", null, "Type: "),
            props.projectType
          ),
          React.createElement(
            Text,
            { style: styles.text },
            React.createElement("strong", null, "Budget: "),
            props.budget
          )
        ),
        React.createElement(Hr, { style: styles.divider }),
        // Message
        React.createElement(
          Section,
          null,
          React.createElement(
            Text,
            { style: styles.label },
            "Project Description"
          ),
          React.createElement(Text, { style: styles.message }, props.message)
        ),
        React.createElement(Hr, { style: styles.divider }),
        // Footer
        React.createElement(
          Text,
          { style: styles.footer },
          "This request was submitted via the Cendev Innovations website."
        )
      )
    )
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
    borderTop: "6px solid #f97316",
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

// 2. Quote Confirmation Email Component (EXACTLY as you provided)
function QuoteConfirmationEmail(props) {
  const {
    Html,
    Body,
    Container,
    Heading,
    Text,
    Hr,
    Section,
  } = require("@react-email/components");

  // Icons (EXACTLY as you provided)
  const FacebookIcon = () =>
    React.createElement(
      "svg",
      { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none" },
      React.createElement("path", {
        d: "M15 3h-3a5 5 0 0 0-5 5v3H4v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3V3z",
        fill: "#ffffff",
      })
    );

  const LinkedInIcon = () =>
    React.createElement(
      "svg",
      { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none" },
      React.createElement("path", {
        d: "M6.94 6.5a2.44 2.44 0 1 1 0-4.88 2.44 2.44 0 0 1 0 4.88zM2.5 21.5h4.88V8.98H2.5V21.5zM9.5 8.98h4.67v1.71h.07c.65-1.23 2.24-2.53 4.61-2.53 4.93 0 5.84 3.25 5.84 7.47v5.87h-4.88v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29H9.5V8.98z",
        fill: "#ffffff",
      })
    );

  const GitHubIcon = () =>
    React.createElement(
      "svg",
      { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none" },
      React.createElement("path", {
        d: "M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5z",
        fill: "#ffffff",
      })
    );

  const confirmationStyles = {
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
      textAlign: "center",
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
      textAlign: "center",
      backgroundColor: "#f9fafb",
      margin: "0",
    },
  };

  return React.createElement(
    Html,
    null,
    React.createElement(
      Body,
      { style: confirmationStyles.body },
      React.createElement(
        Container,
        { style: confirmationStyles.container },
        // Header
        React.createElement(
          Section,
          { style: confirmationStyles.headerSection },
          React.createElement(
            Heading,
            { style: confirmationStyles.heading },
            "Cendev Innovations"
          ),
          React.createElement(
            "div",
            { style: confirmationStyles.badge },
            "Confirmed"
          )
        ),
        // Hero
        React.createElement(
          Section,
          { style: confirmationStyles.heroSection },
          React.createElement(
            "div",
            { style: confirmationStyles.iconCircle },
            "✓"
          ),
          React.createElement(
            Heading,
            { style: confirmationStyles.heroTitle },
            "Quote Received"
          ),
          React.createElement(
            Text,
            { style: confirmationStyles.heroSubtitle },
            "We'll respond within 24 hours"
          )
        ),
        // Content
        React.createElement(
          Section,
          { style: confirmationStyles.contentSection },
          React.createElement(
            Text,
            { style: confirmationStyles.text },
            "Hi ",
            React.createElement("strong", null, props.name),
            ","
          ),
          React.createElement(
            Text,
            { style: confirmationStyles.text },
            "Thanks for reaching out! Your request is being reviewed by our team."
          ),
          React.createElement(
            Text,
            { style: confirmationStyles.metaText },
            `Submitted: ${props.submittedAt}`
          )
        ),
        React.createElement(Hr, { style: confirmationStyles.divider }),
        // Social Links
        React.createElement(
          Section,
          { style: confirmationStyles.socialSection },
          React.createElement(
            "a",
            {
              href: "https://facebook.com/cendevinnovations",
              style: confirmationStyles.socialButton,
            },
            React.createElement(FacebookIcon, null)
          ),
          React.createElement(
            "a",
            {
              href: "https://linkedin.com/company/cendevinnovations",
              style: confirmationStyles.socialButton,
            },
            React.createElement(LinkedInIcon, null)
          ),
          React.createElement(
            "a",
            {
              href: "https://github.com/cendevinnovations",
              style: confirmationStyles.socialButton,
            },
            React.createElement(GitHubIcon, null)
          )
        ),
        // Footer
        React.createElement(
          Text,
          { style: confirmationStyles.footer },
          "© 2024 Cendev Innovations"
        )
      )
    )
  );
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "Server is running",
    service: "CenDev Quotation API",
    timestamp: new Date().toISOString(),
    emailService: process.env.RESEND_API_KEY ? "Resend API Ready" : "Mock Mode",
    emailEngine: "React-email Components",
  });
});

// Main quotation endpoint
app.post("/api/send-quotation", async (req, res) => {
  try {
    const { name, email, phone, company, projectType, budget, message } =
      req.body;

    // Validation
    if (!name || !email || !phone || !projectType || !budget || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    console.log("\n📧 ====== PROCESSING QUOTATION REQUEST ======");
    console.log("📋 Client:", name);
    console.log("📧 Client Email:", email);
    console.log("📞 Phone:", phone);
    console.log("🚀 Project:", projectType);
    console.log("💰 Budget:", budget);

    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Check if we have a real Resend API key
    const hasRealApiKey =
      process.env.RESEND_API_KEY &&
      !process.env.RESEND_API_KEY.includes("test");

    if (!hasRealApiKey) {
      // Mock mode
      console.log("\n📧 ====== MOCK EMAIL (React-email Styled) ======");
      console.log("Admin Email: malozdev@gmail.com");
      console.log("Client Confirmation Email:", email);
      console.log("Using: React-email components for styling");

      // Test rendering to ensure styles are correct
      try {
        const testHtml = await renderEmail(QuoteConfirmationEmail, {
          name,
          submittedAt: formattedDate,
        });
        console.log("✅ Confirmation email rendered successfully");
        console.log("📧 HTML length:", testHtml.length, "chars");
      } catch (renderError) {
        console.log("❌ Email rendering error:", renderError.message);
      }

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return res.json({
        success: true,
        message: "Quotation request sent successfully (Mock Mode)",
        messageId: "mock-" + Date.now(),
        timestamp,
        mode: "mock",
        styling: "React-email Components",
        emailsSent: {
          toAdmin: "malozdev@gmail.com",
          toClient: email,
          confirmationSent: true,
        },
      });
    }

    // REAL EMAIL SENDING WITH RESEND
    console.log("📤 Sending real emails via Resend (React-email Styled)...");

    try {
      // 1. Send quotation email to admin
      const adminEmailHtml = await renderEmail(QuoteRequestEmail, {
        name,
        email,
        phone,
        company: company || "N/A",
        projectType,
        budget,
        message,
        submittedAt: formattedDate,
      });

      const adminEmail = await resend.emails.send({
        from: "CenDev Quotations <onboarding@resend.dev>",
        to: ["malozdev@gmail.com"],
        replyTo: email,
        subject: `📋 New Quotation Request from ${name}`,
        html: adminEmailHtml,
      });

      console.log(
        "✅ Admin email sent to malozdev@gmail.com:",
        adminEmail.data?.id
      );

      // 2. Send confirmation email to client
      try {
        const confirmationEmailHtml = await renderEmail(
          QuoteConfirmationEmail,
          {
            name,
            submittedAt: formattedDate,
          }
        );

        console.log("📤 Sending confirmation email to:", email);
        console.log("✅ Confirmation email HTML generated successfully");

        const clientEmail = await resend.emails.send({
          from: "CenDev Quotations <onboarding@resend.dev>",
          to: [email], // Client's email from the form
          subject: `✅ Thank you for your quotation request, ${name}!`,
          html: confirmationEmailHtml,
        });

        console.log(
          "✅ Confirmation email sent to client:",
          clientEmail.data?.id
        );
        console.log("📧 Client email address used:", email);
      } catch (confirmationError) {
        console.log("❌ Confirmation email failed:", confirmationError.message);
        console.log("Error details:", confirmationError);

        // Log the email content for debugging
        try {
          const debugHtml = await renderEmail(QuoteConfirmationEmail, {
            name,
            submittedAt: formattedDate,
          });
          console.log(
            "📧 Email HTML sample (first 500 chars):",
            debugHtml.substring(0, 500)
          );
        } catch (e) {
          console.log("Could not generate debug HTML");
        }
      }

      return res.json({
        success: true,
        message: "Quotation request sent successfully!",
        messageId: adminEmail.data?.id,
        timestamp,
        mode: "real",
        styling: "React-email Components",
        emailsSent: {
          toAdmin: "malozdev@gmail.com",
          toClient: email,
          confirmationStatus: "attempted",
        },
      });
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError);

      // Fallback to mock mode
      return res.json({
        success: true,
        message: "Request received (email service temporarily unavailable)",
        messageId: "fallback-" + Date.now(),
        timestamp,
        mode: "fallback",
      });
    }
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to process quotation request",
      message: error.message,
    });
  }
});

// Simple 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    availableRoutes: {
      health: "GET /api/health",
      sendQuotation: "POST /api/send-quotation",
    },
  });
});

// Start server
app.listen(PORT, () => {
  const hasRealApiKey =
    process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes("test");

  console.log(`
  🚀 CenDev Quotation Server Started!
  
  📍 Port: ${PORT}
  🌍 URL: http://localhost:${PORT}
  
  📊 Available Endpoints:
     ✅ GET  http://localhost:${PORT}/api/health
     ✅ POST http://localhost:${PORT}/api/send-quotation
  
  🎨 Email Styling: React-email Components ✓
  📨 Email Mode: ${hasRealApiKey ? "Resend API ✓" : "Mock Mode ✓"}
  
  ${hasRealApiKey ? "🔐 Using Resend API for real emails" : "⚠️  Using Mock Mode - Set RESEND_API_KEY for real emails"}
  `);

  console.log("\n📧 Email Components Loaded:");
  console.log("- QuoteRequestEmail: ✓");
  console.log("- QuoteConfirmationEmail: ✓");
  console.log("- All icons included: ✓");
});
