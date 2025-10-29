import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "../../data/constants";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${COMPANY_INFO.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${COMPANY_INFO.phone}`;
  };

  const handleLocationClick = () => {
    window.open(
      `https://maps.google.com/?q=${COMPANY_INFO.location}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 px-2">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent shine-wrapper shine-once shine-delay-3">
                  Let's Build Something Amazing
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 px-2">
                Ready to transform your business? We're just a message away.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: COMPANY_INFO.email,
                  onClick: handleEmailClick,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: COMPANY_INFO.phoneDisplay,
                  onClick: handlePhoneClick,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: COMPANY_INFO.location,
                  onClick: handleLocationClick,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={item.onClick}
                    className="group relative w-full text-center cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-xl transition-opacity duration-300"></div>
                    <div className="relative bg-gray-800/50 rounded-xl p-5 sm:p-6 text-center border border-gray-700 group-hover:border-emerald-500/50 transition-colors duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-950" />
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-gray-300 break-words">
                        {item.value}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
