import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FAQS } from "../../data/constants";
import { useTheme } from "../../contexts/ThemeContext";

const FAQ = () => {
  const { theme } = useTheme();
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className={`inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors duration-300 ${
            theme === "dark"
              ? "bg-emerald-500/10 border-emerald-500/20"
              : "bg-orange-500/10 border-orange-500/20"
          }`}>
            <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`} />
            <span className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`}>
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 px-4">
            <span className={`bg-clip-text text-transparent shine-wrapper shine-once shine-delay-2 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-gray-400"
                : "bg-gradient-to-r from-black to-gray-700"
            }`}>
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10"
                  : "bg-gradient-to-br from-orange-500/0 to-orange-400/0 group-hover:from-orange-500/10 group-hover:to-orange-400/10"
              }`}></div>
              <div className={`relative backdrop-blur-sm rounded-xl p-5 sm:p-6 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-900/50 border border-gray-800 group-hover:border-emerald-500/50"
                  : "bg-white/80 border border-gray-200 group-hover:border-orange-500/50"
              }`}>
                <div className="flex items-start space-x-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-emerald-400 to-teal-500"
                      : "bg-gradient-to-br from-orange-500 to-orange-600"
                  }`}>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}>
                      {faq.q}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>{faq.a}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
