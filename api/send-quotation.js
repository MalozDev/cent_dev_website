// api/send-quotation.js - DEBUG VERSION
const { Resend } = require("resend");

module.exports = async (req, res) => {
  console.log("=== API CALL STARTED ===");
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);

  // Debug environment
  console.log("Environment check:", {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    HAS_RESEND_KEY: !!process.env.RESEND_API_KEY,
    RESEND_KEY_PREVIEW: process.env.RESEND_API_KEY
      ? "re_" + process.env.RESEND_API_KEY.substring(3, 6) + "..."
      : "none",
  });

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS preflight");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    console.log("Wrong method:", req.method);
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Use POST.",
    });
  }

  try {
    console.log("Parsing request body...");
    let body;

    try {
      // Vercel serverless functions parse body automatically
      body = req.body;
      console.log("Body type:", typeof body);
      console.log("Body keys:", body ? Object.keys(body) : "empty");
    } catch (parseError) {
      console.error("Parse error:", parseError);
      return res.status(400).json({
        success: false,
        error: "Invalid request format",
      });
    }

    if (!body) {
      return res.status(400).json({
        success: false,
        error: "No request body provided",
      });
    }

    const { name, email, phone, company, projectType, budget, message } = body;

    console.log("Received data:", { name, email, projectType });

    // Quick validation
    if (!name || !email || !phone || !projectType || !budget || !message) {
      console.log("Missing fields");
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    // Check for Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.log("NO RESEND API KEY FOUND - Running in mock mode");
      return res.status(200).json({
        success: true,
        message: "Quotation request received (Mock Mode - No email sent)",
        timestamp: new Date().toISOString(),
        mode: "mock",
        debug: {
          hasResendKey: false,
          envKeys: Object.keys(process.env).filter(
            (k) => k.includes("RESEND") || k.includes("VERCEL")
          ),
        },
      });
    }

    console.log("Resend API key found, attempting to send email...");

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const formattedDate = new Date().toLocaleString();

      const emailResult = await resend.emails.send({
        from: "CenDev Quotations <onboarding@resend.dev>",
        to: ["malozdev@gmail.com"],
        replyTo: email,
        subject: `📋 New Quote: ${name}`,
        text: `
          New Quotation Request:
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Company: ${company || "N/A"}
          Project: ${projectType}
          Budget: ${budget}
          Message: ${message}
          Submitted: ${formattedDate}
        `,
      });

      console.log("Email sent successfully:", emailResult);

      return res.status(200).json({
        success: true,
        message: "Quotation request submitted successfully!",
        emailSent: true,
        timestamp: new Date().toISOString(),
      });
    } catch (emailError) {
      console.error("Resend API error:", emailError);
      return res.status(500).json({
        success: false,
        error: "Failed to send email via Resend",
        message: emailError.message,
        type: "resend_error",
      });
    }
  } catch (error) {
    console.error("=== UNEXPECTED ERROR ===", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message,
      stack: process.env.NODE_ENV === "production" ? undefined : error.stack,
    });
  }
};
