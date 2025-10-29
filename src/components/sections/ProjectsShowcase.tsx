import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../../data/constants";

const ProjectsShowcase = () => {
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
              <span className="shine-wrapper shine-once shine-delay-2">
                Our Recent Work
              </span>
            </h2>
            <p className="text-gray-400">
              Completed projects across different technologies
            </p>
          </div>
          <button
            onClick={() => navigate("/portfolio")}
            className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all group"
          >
            <span className="text-emerald-400 font-semibold">View All</span>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scrolling Projects */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none"></div>

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
            <motion.div
              key={`${project.title}-${index}`}
              onClick={() => handleProjectClick(project.category)}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 w-64 sm:w-80 cursor-pointer group"
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 h-full">
                {/* Project Image Placeholder */}
                <div className="h-40 sm:h-48 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800/50"></div>
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full">
                    <span className="text-white text-xs font-bold">
                      {project.category}
                    </span>
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-gray-900/90 backdrop-blur-sm rounded-full border border-emerald-500/30">
                    <span className="text-emerald-400 text-xs font-bold">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-xs font-semibold text-emerald-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-semibold text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-all pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile View All Button */}
      <div className="sm:hidden flex justify-center mt-6">
        <button
          onClick={() => navigate("/portfolio")}
          className="flex items-center space-x-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all"
        >
          <span className="text-emerald-400 font-semibold">
            View All Projects
          </span>
          <ArrowRight className="w-4 h-4 text-emerald-400" />
        </button>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
