import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Sparkles, Rocket, ArrowUpRight } from "lucide-react";
import { STATS } from "../../data/constants";
import QuotationForm from "../QuotationForm";
import { useMouseGlow } from "../../hooks/useMouseGlow";
import { useTheme } from "../../contexts/ThemeContext";

const StatCard = ({ stat, idx }: { stat: (typeof STATS)[0]; idx: number }) => {
  const { theme } = useTheme();
  const { cardRef, mousePosition, isHovered } = useMouseGlow();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.1 + idx * 0.1 }}
      className="relative group"
    >
      {/* Border glow that follows mouse */}
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out"
        style={{
          background: isHovered
            ? theme === "dark"
              ? `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.6), transparent 100%)`
              : `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.6), transparent 100%)`
            : "transparent",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div
        className={`relative backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900/50 border border-emerald-500/20"
            : "bg-white/80 border border-orange-500/30"
        }`}
      >
        <div
          className={`text-2xl sm:text-3xl lg:text-4xl font-black bg-clip-text text-transparent mb-1 sm:mb-2 ${
            theme === "dark"
              ? "bg-linear-to-r from-emerald-400 to-teal-400"
              : "bg-linear-to-r from-orange-500 to-orange-600"
          }`}
        >
          {stat.number}
        </div>
        <div
          className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
            theme === "dark" ? "text-gray-500" : "text-gray-600"
          }`}
        >
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const { theme } = useTheme();
  const [isQuotationFormOpen, setIsQuotationFormOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-4 sm:mb-6"
        >
          <Sparkles
            className={`w-4 h-4 sm:w-5 sm:h-5 animate-pulse transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`}
          />
          <span
            className={`font-semibold tracking-wide uppercase text-xs sm:text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`}
          >
            Zambian Tech Innovation
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`block bg-clip-text text-transparent transition-colors duration-300 ${
              theme === "dark"
                ? "bg-linear-to-r from-white to-gray-300"
                : "bg-linear-to-r from-black to-gray-700"
            }`}
          >
            Building
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block min-h-[1.2em]"
          >
            <TypeAnimation
              sequence={[
                "",
                500,
                " The Future of Tech",
                2000,
                "Innovations",
                2000,
                "Digital Excellence",
                2000,
                "Tech Solutions",
                2000,
                "Scalable Solutions",
                2000,
                "Smart Solutions",
                2000,
                "User-Friendly Solutions",
                2000,
                "Smart Systems",
                2000,
                "Innovative Solutions",
                2000,
                "Infrastructure Solutions",
                2000,
                "Security Solutions",
                2000,
                "Data Solutions",
                2000,
                "Cloud Solutions",
                2000,
                "AI Solutions",
                2000,
                "IoT Solutions",
                2000,
                "Blockchain Solutions",
                2000,
                "Machine Learning Solutions",
                2000,
                "Data Science Solutions",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={50}
              deletionSpeed={60}
              className={`bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400"
                  : "bg-linear-to-r from-orange-500 via-orange-600 to-orange-700"
              }`}
              style={{
                animation: "gradient-shift 8s ease infinite",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`block bg-clip-text text-transparent transition-colors duration-300 ${
              theme === "dark"
                ? "bg-linear-to-r from-gray-300 to-white"
                : "bg-linear-to-r from-gray-700 to-black"
            }`}
          >
            In Africa
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed transition-colors duration-300 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          We don't just build software. We craft intelligent, scalable digital
          experiences that transform businesses across the continent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20 justify-center"
        >
          <button
            onClick={() => setIsQuotationFormOpen(true)}
            className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 ${
              theme === "dark"
                ? "bg-linear-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
                : "bg-linear-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 text-white"
            }`}
          >
            <span>Get Free Quotation</span>
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => navigate("/portfolio")}
            className={`px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 ${
              theme === "dark"
                ? "border-emerald-500/30 hover:bg-emerald-500/10"
                : "border-orange-500/30 hover:bg-orange-500/10"
            }`}
          >
            <span>View Our Work</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>

        {/* Quotation Form Modal */}
        <QuotationForm
          isOpen={isQuotationFormOpen}
          onClose={() => setIsQuotationFormOpen(false)}
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
