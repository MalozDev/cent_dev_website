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

interface PortfolioProps {
  initialCategory?: string;
}

const Portfolio = ({ initialCategory = "All" }: PortfolioProps) => {
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
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
              OUR PORTFOLIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent shine-wrapper shine-once">
              Projects We've Delivered
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Real solutions for real businesses. Explore our completed projects
            across different industries and technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-sm text-gray-400 font-semibold">
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
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 border border-gray-700"
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
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {categoryGroup.category}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
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
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Card */}
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative h-48 sm:h-56 bg-gray-800 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon className="w-16 h-16 text-gray-700" />
                        </div>
                        {/* Placeholder for actual image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1.5 bg-green-500/90 backdrop-blur-sm rounded-full">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-white text-xs font-bold">
                            {project.status}
                          </span>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-4 left-4 flex items-center space-x-1 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm rounded-full border border-emerald-500/30">
                          <Calendar className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 text-xs font-bold">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 flex-1">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gray-500 uppercase">
                            Technologies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs font-semibold text-emerald-400"
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
            <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
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
              className="relative group bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm font-medium">
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
