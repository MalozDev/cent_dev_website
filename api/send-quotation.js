// api/send-quotation.js
const { Resend } = require("resend");

module.exports = async (req, res) => {
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
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, company, projectType, budget, message } =
      req.body;

    if (!name || !email || !phone || !projectType || !budget || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    console.log(`📧 New quote request from: ${name} (${email})`);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const formattedDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const adminEmail = await resend.emails.send({
      from: "CenDev Quotations <onboarding@resend.dev>",
      to: ["malozdev@gmail.com"],
      replyTo: email,
      subject: `📋 New Quotation: ${name} - ${projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f8fafc; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden; }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .field { margin-bottom: 15px; padding: 12px; background: #f9fafb; border-radius: 8px; }
            .field-label { font-weight: 600; color: #374151; margin-bottom: 4px; }
            .field-value { color: #111827; }
            .message-box { background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; white-space: pre-wrap; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1> New Quotation Request</h1>
              <p>From: ${name}</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a>
                </div>
              </div>
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">${phone}</div>
              </div>
              <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${company || "N/A"}</div>
              </div>
              <div class="field">
                <div class="field-label">Project Type</div>
                <div class="field-value">
                  <span style="background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                    ${projectType}
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="field-label">Budget Range</div>
                <div class="field-value">
                  <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                    ${budget}
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="field-label">Project Description</div>
                <div class="message-box">${message}</div>
              </div>
              <div class="field">
                <div class="field-label">Submitted On</div>
                <div class="field-value">${formattedDate}</div>
              </div>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} CenDev Innovations</p>
              <p>This quotation request was submitted via the website form</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("✅ Email sent to admin");

    return res.status(200).json({
      success: true,
      message: "Quotation request submitted successfully!",
      emailSent: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Email error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to send email",
      message: error.message,
    });
  }
};
