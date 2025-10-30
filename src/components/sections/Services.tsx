import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { SERVICES } from "../../data/constants";
import { useMouseGlow } from "../../hooks/useMouseGlow";

const ServiceCard = ({
  service,
  idx,
}: {
  service: (typeof SERVICES)[0];
  idx: number;
}) => {
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
            ? `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.6), transparent 100%)`
            : "transparent",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-colors duration-300">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4`}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-950" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-emerald-400">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm">{service.desc}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent shine-wrapper shine-once shine-delay-1">
              Multi-Industry Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
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
