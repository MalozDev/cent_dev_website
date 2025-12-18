// api/send-quotation.js - ES Module Version
import { Resend } from "resend";

console.log("=== API Function Starting (ES Module) ===");

export default async function handler(req, res) {
  console.log("Function handler invoked for method:", req.method);

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
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Use POST.",
    });
  }

  try {
    const { name, email, phone, company, projectType, budget, message } =
      req.body;

    // Basic validation
    if (!name || !email || !phone || !projectType || !budget || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    console.log("Processing request for:", name, email);

    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.log("No RESEND_API_KEY found");
      return res.status(200).json({
        success: true,
        message: "Request received (No email sent - RESEND_API_KEY not set)",
        timestamp: new Date().toISOString(),
        mode: "mock",
      });
    }

    // Send email
    const resend = new Resend(process.env.RESEND_API_KEY);

    const formattedDate = new Date().toLocaleString();

    const emailResult = await resend.emails.send({
      from: "CenDev Quotations <onboarding@resend.dev>",
      to: ["malozdev@gmail.com"],
      replyTo: email,
      subject: `New Quote: ${name} - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1>New Quotation Request</h1>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Project:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Submitted:</strong> ${formattedDate}</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResult.data?.id);

    return res.status(200).json({
      success: true,
      message: "Quotation request submitted successfully!",
      emailSent: true,
      timestamp: new Date().toISOString(),
      emailId: emailResult.data?.id,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to process request",
      message: error.message,
    });
  }
}
