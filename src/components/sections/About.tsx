import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Telescope,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900/30" : "bg-gray-50/50"
      }`}
    >
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
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span className={`bg-clip-text text-transparent shine-wrapper shine-once transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-gray-400"
                : "bg-gradient-to-r from-black to-gray-700"
            }`}>
              About Centurion Developers
            </span>
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 transition-colors duration-300 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            Empowering businesses and individuals through innovative, robust,
            and scalable software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                : "bg-gradient-to-br from-orange-500/10 to-orange-400/10"
            }`}></div>
            <div className={`relative backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 text-center lg:text-left ${
              theme === "dark"
                ? "bg-gray-900/50 border border-gray-800 group-hover:border-emerald-500/50"
                : "bg-white/80 border border-gray-200 group-hover:border-orange-500/50"
            }`}>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 mx-auto lg:mx-0 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-emerald-400 to-teal-500"
                  : "bg-gradient-to-br from-orange-500 to-orange-600"
              }`}>
                <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors duration-300" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}>
                Our Mission
              </h3>
              <p className={`leading-relaxed transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                Empowering businesses and individuals through innovative,
                robust, and scalable software solutions that solve real-world
                problems.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative"
          >
            <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                : "bg-gradient-to-br from-orange-500/10 to-orange-400/10"
            }`}></div>
            <div className={`relative backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 text-center lg:text-left ${
              theme === "dark"
                ? "bg-gray-900/50 border border-gray-800 group-hover:border-emerald-500/50"
                : "bg-white/80 border border-gray-200 group-hover:border-orange-500/50"
            }`}>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 mx-auto lg:mx-0 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-green-400 to-emerald-500"
                  : "bg-gradient-to-br from-orange-500 to-orange-600"
              }`}>
                <Telescope className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors duration-300" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}>
                Our Vision
              </h3>
              <p className={`leading-relaxed transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                To become a technology powerhouse in Africa — pioneering
                software innovation, digital infrastructure, and business
                automation across industries.
              </p>
            </div>
          </motion.div>

          {/* Values Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative"
          >
            <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                : "bg-gradient-to-br from-orange-500/10 to-orange-400/10"
            }`}></div>
            <div className={`relative backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 text-center lg:text-left ${
              theme === "dark"
                ? "bg-gray-900/50 border border-gray-800 group-hover:border-emerald-500/50"
                : "bg-white/80 border border-gray-200 group-hover:border-orange-500/50"
            }`}>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 mx-auto lg:mx-0 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-teal-400 to-cyan-500"
                  : "bg-gradient-to-br from-orange-500 to-orange-600"
              }`}>
                <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors duration-300" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}>
                Core Values
              </h3>
              <ul className={`space-y-2 text-sm sm:text-base transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                <li className="flex items-center space-x-2 justify-center lg:justify-start">
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${
                    theme === "dark" ? "text-emerald-400" : "text-orange-500"
                  }`} />
                  <span>Innovation & Creativity</span>
                </li>
                <li className="flex items-center space-x-2 justify-center lg:justify-start">
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${
                    theme === "dark" ? "text-emerald-400" : "text-orange-500"
                  }`} />
                  <span>Collaboration & Integrity</span>
                </li>
                <li className="flex items-center space-x-2 justify-center lg:justify-start">
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${
                    theme === "dark" ? "text-emerald-400" : "text-orange-500"
                  }`} />
                  <span>Continuous Learning</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
