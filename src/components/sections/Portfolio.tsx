import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Image as ImageIcon,
  Filter,
} from "lucide-react";
import { PROJECTS } from "../../data/constants";
import { useTheme } from "../../contexts/ThemeContext";

interface PortfolioProps {
  initialCategory?: string;
}

const Portfolio = ({ initialCategory = "All" }: PortfolioProps) => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  // Get all unique categories
  const categories = ["All", ...PROJECTS.map((cat) => cat.category)];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((cat) => cat.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-950/50" : "bg-gray-50/50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className={`inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors duration-300 ${
              theme === "dark"
                ? "bg-emerald-500/10 border-emerald-500/20"
                : "bg-orange-500/10 border-orange-500/20"
            }`}
          >
            <Briefcase
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}
            />
            <span
              className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}
            >
              OUR PORTFOLIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span
              className={`bg-clip-text text-transparent shine-wrapper shine-once transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-linear-to-r from-white to-gray-400"
                  : "bg-linear-to-r from-black to-gray-700"
              }`}
            >
              Projects We've Delivered
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Real solutions for real businesses. Explore our completed projects
            across different industries and technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Filter
              className={`w-4 h-4 mr-2 transition-colors duration-300 ${
                theme === "dark" ? "text-emerald-400" : "text-orange-500"
              }`}
            />
            <span
              className={`text-sm font-semibold transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Filter by Service
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? theme === "dark"
                      ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20"
                      : "bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                    : theme === "dark"
                    ? "bg-gray-800/50 text-gray-400 hover:bg-gray-800 border border-gray-700"
                    : "bg-gray-100/50 text-gray-600 hover:bg-gray-200 border border-gray-300"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="space-y-12 sm:space-y-16">
          {filteredProjects.map((categoryGroup, catIdx) => (
            <motion.div
              key={categoryGroup.category}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-6 sm:mb-8">
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {categoryGroup.category}
                </h3>
                <div
                  className={`h-1 w-20 rounded-full transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-linear-to-r from-emerald-500 to-teal-500"
                      : "bg-linear-to-r from-orange-500 to-orange-600"
                  }`}
                ></div>
              </div>

              {/* Projects in this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {categoryGroup.projects.map((project, projIdx) => (
                  <motion.div
                    key={projIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: projIdx * 0.1 }}
                    className="group relative"
                  >
                    {/* Card Background Glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        theme === "dark"
                          ? "bg-linear-to-br from-emerald-500/10 to-teal-500/10"
                          : "bg-linear-to-br from-orange-500/10 to-orange-400/10"
                      }`}
                    ></div>

                    {/* Card */}
                    <div
                      className={`relative backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
                        theme === "dark"
                          ? "bg-gray-900/50 border border-gray-800 group-hover:border-emerald-500/50"
                          : "bg-white/80 border border-gray-200 group-hover:border-orange-500/50"
                      }`}
                    >
                      {/* Project Image */}
                      <div
                        className={`relative h-48 sm:h-56 overflow-hidden transition-colors duration-300 ${
                          theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                        }`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon
                            className={`w-16 h-16 transition-colors duration-300 ${
                              theme === "dark"
                                ? "text-gray-700"
                                : "text-gray-400"
                            }`}
                          />
                        </div>
                        {/* Placeholder for actual image */}
                        <div
                          className={`absolute inset-0 transition-colors duration-300 ${
                            theme === "dark"
                              ? "bg-linear-to-br from-emerald-500/5 to-teal-500/5"
                              : "bg-linear-to-br from-orange-500/5 to-orange-400/5"
                          }`}
                        ></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1.5 bg-green-500/90 backdrop-blur-sm rounded-full">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white text-xs font-bold">
                            {project.status}
                          </span>
                        </div>

                        {/* Year Badge */}
                        <div
                          className={`absolute top-4 left-4 flex items-center space-x-1 px-3 py-1.5 backdrop-blur-sm rounded-full border transition-colors duration-300 ${
                            theme === "dark"
                              ? "bg-gray-900/90 border-emerald-500/30"
                              : "bg-white/90 border-orange-500/30"
                          }`}
                        >
                          <Calendar
                            className={`w-3 h-3 transition-colors duration-300 ${
                              theme === "dark"
                                ? "text-emerald-400"
                                : "text-orange-500"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold transition-colors duration-300 ${
                              theme === "dark"
                                ? "text-emerald-400"
                                : "text-orange-500"
                            }`}
                          >
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col">
                        <h4
                          className={`text-lg sm:text-xl font-bold mb-3 transition-colors duration-300 ${
                            theme === "dark"
                              ? "text-white group-hover:text-emerald-400"
                              : "text-black group-hover:text-orange-500"
                          }`}
                        >
                          {project.title}
                        </h4>
                        <p
                          className={`text-sm sm:text-base mb-4 flex-1 transition-colors duration-300 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <p
                            className={`text-xs font-semibold uppercase transition-colors duration-300 ${
                              theme === "dark"
                                ? "text-gray-500"
                                : "text-gray-600"
                            }`}
                          >
                            Technologies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className={`px-2.5 py-1 border rounded-lg text-xs font-semibold transition-colors duration-300 ${
                                  theme === "dark"
                                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                                    : "bg-orange-500/10 border-orange-500/20 text-orange-500"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Briefcase
              className={`w-16 h-16 mx-auto mb-4 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-600" : "text-gray-400"
              }`}
            />
            <p
              className={`text-lg transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            {
              number: PROJECTS.reduce(
                (sum, cat) => sum + cat.projects.length,
                0
              ),
              label: "Total Projects",
            },
            { number: PROJECTS.length, label: "Service Categories" },
            { number: "100%", label: "Success Rate" },
            { number: "24/7", label: "Support" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`relative group backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-900/50 border border-emerald-500/20 hover:border-emerald-500/40"
                  : "bg-white/80 border border-orange-500/30 hover:border-orange-500/50"
              }`}
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-black bg-clip-text text-transparent mb-1 sm:mb-2 transition-colors duration-300 ${
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
