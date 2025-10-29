import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface QuotationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotationForm = ({ isOpen, onClose }: QuotationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "Software Development",
    "Graphic Design",
    "Cloud Infrastructure",
    "POS System",
    "Auto Garage System",
    "Data Analytics",
    "Other",
  ];

  const budgetRanges = [
    "Under K5,000",
    "K5,000 - K15,000",
    "K15,000 - K50,000",
    "K50,000 - K100,000",
    "K100,000+",
    "Not Sure",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create email content
      const emailContent = `
New Quotation Request from CenDev Website

Client Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
${formData.company ? `- Company: ${formData.company}` : ""}

Project Information:
- Type: ${formData.projectType}
- Budget Range: ${formData.budget}

Message:
${formData.message}

---
This request was sent from the CenDev website quotation form.
      `.trim();

      // Using EmailJS service
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
            template_id: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
            user_id: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
            template_params: {
              to_email: "malozdev@gmail.com",
              from_name: formData.name,
              from_email: formData.email,
              phone: formData.phone,
              company: formData.company || "N/A",
              project_type: formData.projectType,
              budget: formData.budget,
              message: formData.message,
              email_content: emailContent,
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after 3 seconds
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
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending quotation request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-emerald-500/20 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gray-900 border-b border-emerald-500/20 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Request a Quotation
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Tell us about your project and we'll get back to you within 24
                  hours
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
              >
                <X className="w-5 h-5 text-emerald-400" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-gray-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-gray-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-gray-500 transition-colors"
                  placeholder="+260 XXX XXX XXX"
                />
              </div>

              {/* Company (Optional) */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Company Name <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-gray-500 transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Project Type <span className="text-red-400">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Budget Range <span className="text-red-400">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors"
                >
                  <option value="">Select a budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-gray-500 transition-colors resize-none"
                  placeholder="Tell us more about your project requirements, timeline, and any specific features you need..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                {submitStatus === "success" ? (
                  <div className="flex items-center justify-center space-x-2 py-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">
                      Request sent successfully! We'll contact you soon.
                    </span>
                  </div>
                ) : submitStatus === "error" ? (
                  <div className="flex items-center justify-center space-x-2 py-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-semibold">
                      Failed to send. Please try again or contact us directly.
                    </span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-bold text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Quotation Request</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuotationForm;
