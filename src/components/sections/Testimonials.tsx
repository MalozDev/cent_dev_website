import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import { TESTIMONIALS } from "../../data/constants";
import { useTheme } from "../../contexts/ThemeContext";

const Testimonials = () => {
  const { theme } = useTheme();
  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900/30" : "bg-gray-50/50"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className={`inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors duration-300 ${
            theme === "dark"
              ? "bg-emerald-500/10 border-emerald-500/20"
              : "bg-orange-500/10 border-orange-500/20"
          }`}>
            <Sparkles className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`} />
            <span className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`}>
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span className={`bg-clip-text text-transparent shine-wrapper shine-once shine-delay-1 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-gray-400"
                : "bg-gradient-to-r from-black to-gray-700"
            }`}>
              What Our Clients Say
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                  : "bg-gradient-to-br from-orange-500/10 to-orange-400/10"
              }`}></div>
              <div className={`relative backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-900/50 border border-gray-800 group-hover:border-emerald-500/50"
                  : "bg-white/80 border border-gray-200 group-hover:border-orange-500/50"
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-emerald-400 to-teal-500"
                      : "bg-gradient-to-br from-orange-500 to-orange-600"
                  }`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`font-bold transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className={`italic leading-relaxed transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  "{testimonial.text}"
                </p>
                <div className={`flex mt-4 transition-colors duration-300 ${
                  theme === "dark" ? "text-emerald-400" : "text-orange-500"
                }`}>
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
