import { motion } from "framer-motion";
import { Users, Linkedin, Github } from "lucide-react";
import { TEAM_MEMBERS } from "../../data/constants";
import { useMouseGlow } from "../../hooks/useMouseGlow";
import { useTheme } from "../../contexts/ThemeContext";

const TeamCard = ({
  member,
  idx,
}: {
  member: (typeof TEAM_MEMBERS)[0];
  idx: number;
}) => {
  const { theme } = useTheme();
  const { cardRef, mousePosition, isHovered } = useMouseGlow();

  // Function to get specific image positioning based on team member name
  const getImageStyle = (name: string) => {
    switch (name) {
      case "David Japhet":
        return "object-[center_10%]";
      case "Niza Khunga":
        return "object-[center_20%]";
      case "Stanley Kalenga":
        return "object-[center_15%]";
      case "Stephan Malobeka":
        return "object-[center_65%]";
      case "Mubanga Bowa":
        return "object-[center_65%]";
      case "Nchimunya Sichilima":
        return "object-[center_40%]";
      default:
        return "object-[center_35%]";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative"
    >
      {/* Border glow that follows mouse */}
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out"
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
        className={`relative backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-900/50 border border-gray-800"
            : "bg-white/80 border border-gray-200"
        }`}
      >
        {/* Changed bg-gradient-to-br to bg-linear-to-br */}
        <div
          className={`relative h-56 sm:h-64 lg:h-72 bg-linear-to-br ${member.color} flex items-center justify-center overflow-hidden`}
        >
          {/* Image with custom positioning */}
          <img
            src={`${import.meta.env.BASE_URL}${member.image.replace(
              /^\//,
              ""
            )}`}
            alt={member.name}
            className={`absolute inset-0 w-full h-full object-cover ${getImageStyle(
              member.name
            )} group-hover:scale-110 transition-transform duration-500`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const placeholder = e.currentTarget.nextElementSibling;
              if (placeholder) {
                placeholder.classList.remove("hidden");
                placeholder.classList.add("flex");
              }
            }}
          />

          {/* Fallback placeholder */}
          <div className="hidden absolute inset-0 items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-transform">
              <Users className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
          {/* Changed bg-gradient-to-t to bg-linear-to-t */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="p-5 sm:p-6">
          <h3
            className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
              theme === "dark"
                ? "text-white group-hover:text-emerald-400"
                : "text-black group-hover:text-orange-500"
            }`}
          >
            {member.name}
          </h3>
          <p
            className={`text-sm mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {member.role}
          </p>
          <div className="flex space-x-3">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 group ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-emerald-500/20"
                  : "bg-gray-100 hover:bg-orange-500/20"
              }`}
              aria-label={`${member.name} on LinkedIn`}
            >
              <Linkedin
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                  theme === "dark"
                    ? "text-gray-400 group-hover:text-emerald-400"
                    : "text-gray-600 group-hover:text-orange-500"
                }`}
              />
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 group ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-emerald-500/20"
                  : "bg-gray-100 hover:bg-orange-500/20"
              }`}
              aria-label={`${member.name} on GitHub`}
            >
              <Github
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                  theme === "dark"
                    ? "text-gray-400 group-hover:text-emerald-400"
                    : "text-gray-600 group-hover:text-orange-500"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const { theme } = useTheme();
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className={`inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors duration-300 ${
              theme === "dark"
                ? "bg-emerald-500/10 border-emerald-500/20"
                : "bg-orange-500/10 border-orange-500/20"
            }`}
          >
            <Users
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}
            />
            <span
              className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}
            >
              THE TEAM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span
              className={`bg-clip-text text-transparent shine-wrapper shine-once shine-delay-4 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-linear-to-r from-white to-gray-400"
                  : "bg-linear-to-r from-black to-gray-700"
              }`}
            >
              Meet The Innovators
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <TeamCard key={idx} member={member} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
