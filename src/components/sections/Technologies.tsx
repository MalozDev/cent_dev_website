import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { TECHNOLOGIES } from "../../data/constants";
import { useTheme } from "../../contexts/ThemeContext";

const Technologies = () => {
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
            <Code className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`} />
            <span className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`}>
              OUR TECH STACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span className={`bg-clip-text text-transparent shine-wrapper shine-once shine-delay-3 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-gray-400"
                : "bg-gradient-to-r from-black to-gray-700"
            }`}>
              Modern Technologies
            </span>
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4 transition-colors duration-300 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            We use cutting-edge frameworks and tools to build reliable, scalable
            solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {TECHNOLOGIES.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                  : "bg-gradient-to-br from-orange-500/10 to-orange-400/10"
              }`}></div>
              <div className={`relative backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-900/50 border border-gray-800 group-hover:border-emerald-500/50"
                  : "bg-white/80 border border-gray-200 group-hover:border-orange-500/50"
              }`}>
                <div className={`text-sm font-semibold mb-1 transition-colors duration-300 ${
                  theme === "dark" ? "text-emerald-400" : "text-orange-500"
                }`}>
                  {tech.category}
                </div>
                <div className={`font-bold text-sm sm:text-base transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}>
                  {tech.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
