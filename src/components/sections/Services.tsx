import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { SERVICES } from "../../data/constants";
import { useMouseGlow } from "../../hooks/useMouseGlow";
import { useTheme } from "../../contexts/ThemeContext";

const ServiceCard = ({
  service,
  idx,
}: {
  service: (typeof SERVICES)[0];
  idx: number;
}) => {
  const { theme } = useTheme();
  const Icon = service.icon;
  const { cardRef, mousePosition, isHovered } = useMouseGlow();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative"
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

      <div className={`relative h-full backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800"
          : "bg-gradient-to-br from-white/80 to-white/60 border border-gray-200"
      }`}>
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300 ${
            theme === "dark"
              ? `bg-gradient-to-br ${service.color}`
              : "bg-gradient-to-br from-orange-500 to-orange-600"
          }`}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 ${
          theme === "dark"
            ? "group-hover:text-emerald-400"
            : "group-hover:text-orange-500"
        }`}>
          {service.title}
        </h3>
        <p className={`text-sm transition-colors duration-300 ${
          theme === "dark" ? "text-gray-500" : "text-gray-600"
        }`}>{service.desc}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { theme } = useTheme();
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className={`inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors duration-300 ${
            theme === "dark"
              ? "bg-emerald-500/10 border-emerald-500/20"
              : "bg-orange-500/10 border-orange-500/20"
          }`}>
            <Zap className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`} />
            <span className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`}>
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span className={`bg-clip-text text-transparent shine-wrapper shine-once shine-delay-1 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-gray-400"
                : "bg-gradient-to-r from-black to-gray-700"
            }`}>
              Multi-Industry Solutions
            </span>
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4 transition-colors duration-300 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            From aviation to retail, we've got the tech stack to power your
            vision
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
