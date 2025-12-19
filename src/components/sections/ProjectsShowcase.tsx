import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../../data/constants";
import { useMouseGlow } from "../../hooks/useMouseGlow";
import { useTheme } from "../../contexts/ThemeContext";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  image: string;
  year: string;
  category: string;
};

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  const { theme } = useTheme();
  const { cardRef, mousePosition, isHovered } = useMouseGlow();

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="shrink-0 w-64 sm:w-80 cursor-pointer group relative"
    >
      {/* Border glow that follows mouse */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out"
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
        className={`relative backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 h-full ${
          theme === "dark"
            ? "bg-gray-800/50 border border-gray-700"
            : "bg-white/80 border border-gray-200"
        }`}
      >
        {/* Project Image with fallback */}
        <div className="h-40 sm:h-48 relative overflow-hidden">
          {/* Actual Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallbackDiv = e.currentTarget
                .closest(".relative")
                ?.querySelector(".image-fallback");
              if (fallbackDiv) {
                (fallbackDiv as HTMLDivElement).style.display = "block";
              }
            }}
          />

          {/* Fallback gradient background (shows if image fails to load) */}
          <div
            className={`image-fallback absolute inset-0 hidden transition-colors duration-300 ${
              theme === "dark"
                ? "bg-linear-to-br from-emerald-500/10 to-teal-500/10"
                : "bg-linear-to-br from-orange-500/10 to-orange-400/10"
            }`}
          >
            <div
              className={`absolute inset-0 transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-800/50" : "bg-gray-200/50"
              }`}
            ></div>
          </div>

          {/* Category Badge */}
          <div
            className={`absolute top-3 left-3 px-3 py-1 backdrop-blur-sm rounded-full transition-colors duration-300 ${
              theme === "dark" ? "bg-emerald-500/90" : "bg-orange-500/90"
            }`}
          >
            <span className="text-white text-xs font-bold">
              {project.category}
            </span>
          </div>

          {/* Year Badge */}
          <div
            className={`absolute top-3 right-3 px-2 py-1 backdrop-blur-sm rounded-full border transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-900/90 border-emerald-500/30"
                : "bg-white/90 border-orange-500/30"
            }`}
          >
            <span
              className={`text-xs font-bold transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}
            >
              {project.year}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4">
          <h3
            className={`text-lg font-bold mb-2 transition-colors line-clamp-1 ${
              theme === "dark"
                ? "text-white group-hover:text-emerald-400"
                : "text-black group-hover:text-orange-500"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm mb-3 line-clamp-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech, techIdx) => (
              <span
                key={techIdx}
                className={`px-2 py-0.5 border rounded text-xs font-semibold transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : "bg-orange-500/10 border-orange-500/20 text-orange-500"
                }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span
                className={`px-2 py-0.5 text-xs font-semibold transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Hover Effect */}
        <div
          className={`absolute inset-0 transition-all pointer-events-none ${
            theme === "dark"
              ? "bg-emerald-500/0 group-hover:bg-emerald-500/5"
              : "bg-orange-500/0 group-hover:bg-orange-500/5"
          }`}
        ></div>
      </div>
    </div>
  );
};

const ProjectsShowcase = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  // Flatten all projects from all categories
  const allProjects = PROJECTS.flatMap((category) =>
    category.projects.map((project) => ({
      ...project,
      category: category.category,
    }))
  );

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...allProjects, ...allProjects, ...allProjects];

  const handleProjectClick = (category: string) => {
    navigate(`/portfolio?category=${encodeURIComponent(category)}`);
  };

  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900/30" : "bg-gray-50/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-black mb-2 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <span className="shine-wrapper shine-once shine-delay-2">
                Our Recent Work
              </span>
            </h2>
            <p
              className={`transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Completed projects across different technologies
            </p>
          </div>
          <button
            onClick={() => navigate("/portfolio")}
            className={`hidden sm:flex items-center space-x-2 px-4 py-2 border rounded-lg transition-all group ${
              theme === "dark"
                ? "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30"
                : "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30"
            }`}
          >
            <span
              className={`font-semibold transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}
            >
              View All
            </span>
            <ArrowRight
              className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Scrolling Projects */}
      <div className="relative">
        {/* Gradient overlays */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none transition-colors duration-300 ${
            theme === "dark"
              ? "bg-linear-to-r from-gray-900 via-gray-900/50 to-transparent"
              : "bg-linear-to-r from-white via-white/50 to-transparent"
          }`}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none transition-colors duration-300 ${
            theme === "dark"
              ? "bg-linear-to-l from-gray-900 via-gray-900/50 to-transparent"
              : "bg-linear-to-l from-white via-white/50 to-transparent"
          }`}
        ></div>

        {/* Scrolling container */}
        <motion.div
          className="flex space-x-4 sm:space-x-6"
          animate={{
            x: [0, -100 * allProjects.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              onClick={() => handleProjectClick(project.category)}
            />
          ))}
        </motion.div>
      </div>

      {/* Mobile View All Button */}
      <div className="sm:hidden flex justify-center mt-6">
        <button
          onClick={() => navigate("/portfolio")}
          className={`flex items-center space-x-2 px-6 py-3 border rounded-lg transition-all ${
            theme === "dark"
              ? "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30"
              : "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30"
          }`}
        >
          <span
            className={`font-semibold transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`}
          >
            View All Projects
          </span>
          <ArrowRight
            className={`w-4 h-4 transition-colors duration-300 ${
              theme === "dark" ? "text-emerald-400" : "text-orange-500"
            }`}
          />
        </button>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
