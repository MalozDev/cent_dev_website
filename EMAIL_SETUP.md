# 📧 Email Setup for Quotation Form

The quotation form sends emails using **EmailJS** - a free service that allows you to send emails directly from your website without a backend server.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a Free EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up Free"**
3. Create your account (100 emails/month free)

---

### Step 2: Add an Email Service

1. After logging in, go to **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email provider)
4. Click **"Connect Account"**
5. Follow the prompts to authorize EmailJS
6. **Copy the Service ID** (e.g., `service_abc123`)

---

### Step 3: Create an Email Template

1. Go to **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Replace the default template with this:

```
New Quotation Request from CenDev Website

Client Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}

Project Information:
- Type: {{project_type}}
- Budget Range: {{budget}}

Message:
{{message}}

---
This request was sent from the CenDev website quotation form.
```

4. Click **"Save"** and **copy the Template ID** (e.g., `template_xyz789`)

---

### Step 4: Get Your Public Key

1. Go to **"Account"** in the left menu
2. Find your **Public Key** (e.g., `abcDEF123xyz`)
3. Copy it

---

### Step 5: Update Your Code

Open `src/components/QuotationForm.tsx` and find these lines around **line 67**:

```typescript
service_id: "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
template_id: "YOUR_TEMPLATE_ID",   // Replace with your EmailJS template ID
user_id: "YOUR_PUBLIC_KEY",        // Replace with your EmailJS public key
```

**Replace them with your actual values:**

```typescript
service_id: "service_abc123",      // Your Service ID from Step 2
template_id: "template_xyz789",    // Your Template ID from Step 3
user_id: "abcDEF123xyz",          // Your Public Key from Step 4
```

---

### Step 6: Test the Form

1. Run your website: `npm run dev`
2. Click **"Get Quotation"** button
3. Fill out the form and submit
4. Check your email (malozdev@gmail.com) - you should receive the quotation request!

---

## ✅ What Happens When Someone Submits the Form

When a client fills out the quotation form, you'll receive an email like this:

```
To: malozdev@gmail.com
Subject: New Quotation Request from CenDev Website

New Quotation Request from CenDev Website

Client Details:
- Name: John Doe
- Email: john@example.com
- Phone: +260 123 456 789
- Company: ABC Limited

Project Information:
- Type: Web Development
- Budget Range: K15,000 - K50,000

Message:
I need a professional website for my business with e-commerce
functionality. Looking to launch within 2 months.

---
This request was sent from the CenDev website quotation form.
```

---

## 🎨 Form Features

### Fields Included:

- ✅ **Name** (required)
- ✅ **Email** (required)
- ✅ **Phone** (required)
- ✅ **Company** (optional)
- ✅ **Project Type** (dropdown with 9 options)
- ✅ **Budget Range** (dropdown with 6 ranges in Kwacha)
- ✅ **Project Description** (text area)

### User Experience:

- ✅ Beautiful modal overlay
- ✅ Smooth animations
- ✅ Form validation
- ✅ Loading state while sending
- ✅ Success message (green)
- ✅ Error handling (red)
- ✅ Mobile responsive
- ✅ Auto-closes after success

---

## 💰 EmailJS Pricing

- **Free Plan**: 200 emails/month
- **Personal Plan**: $7/month for 1,000 emails
- **Professional Plan**: $25/month for 10,000 emails

The free plan should be more than enough to start!

---

## 🔧 Alternative: Using FormSubmit (No Sign-Up Required)

If you prefer not to use EmailJS, you can use **FormSubmit** which is simpler but less customizable:

1. Open `src/components/QuotationForm.tsx`
2. Replace the entire `handleSubmit` function with:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  const formDataToSend = new FormData();
  formDataToSend.append("_subject", "New Quotation Request from CenDev");
  formDataToSend.append("Name", formData.name);
  formDataToSend.append("Email", formData.email);
  formDataToSend.append("Phone", formData.phone);
  formDataToSend.append("Company", formData.company || "N/A");
  formDataToSend.append("Project Type", formData.projectType);
  formDataToSend.append("Budget", formData.budget);
  formDataToSend.append("Message", formData.message);

  try {
    const response = await fetch("https://formsubmit.co/malozdev@gmail.com", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          message: "",
        });
        setSubmitStatus("idle");
        onClose();
      }, 3000);
    } else {
      throw new Error("Failed to send");
    }
  } catch (error) {
    console.error("Error:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

**Note:** FormSubmit will send you a confirmation email the first time - you must click the link to activate it!

---

## 🐛 Troubleshooting

### Emails Not Sending?

- ✅ Check that all 3 IDs are correct in `QuotationForm.tsx`
- ✅ Make sure EmailJS account is active
- ✅ Check spam/junk folder
- ✅ Verify template is saved in EmailJS dashboard

### Getting Errors?

- ✅ Open browser console (F12) to see error messages
- ✅ Make sure you have internet connection
- ✅ Try the FormSubmit alternative above

### Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- FormSubmit Docs: https://formsubmit.co/

---

## 🎉 You're All Set!

Your quotation form is now ready to capture leads and send them directly to your email!

**Test it thoroughly before going live!**
