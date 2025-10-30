import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Sparkles, Rocket, ArrowUpRight } from "lucide-react";
import { STATS } from "../../data/constants";
import QuotationForm from "../QuotationForm";
import { useMouseGlow } from "../../hooks/useMouseGlow";

const StatCard = ({ stat, idx }: { stat: (typeof STATS)[0]; idx: number }) => {
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
            ? `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.6), transparent 100%)`
            : "transparent",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-colors duration-300">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">
          {stat.number}
        </div>
        <div className="text-gray-500 text-xs sm:text-sm font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
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
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-semibold tracking-wide uppercase text-xs sm:text-sm">
            Zambian Tech Innovation
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Building The
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
                "Future of Tech",
                2000,
                "Innovation Hub",
                2000,
                "Digital Excellence",
                2000,
                "Tech Solutions",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={50}
              deletionSpeed={60}
              className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
              style={{
                animation: "gradient-shift 8s ease infinite",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent"
          >
            In Africa
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed"
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
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
          >
            <span>Get Quotation</span>
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => navigate("/portfolio")}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-500/30 rounded-xl font-bold text-base sm:text-lg hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
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
