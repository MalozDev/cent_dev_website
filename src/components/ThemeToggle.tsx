import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {/* Dark theme: orange background, light theme: dark background */}
      <div className="dark:bg-orange-500/20 light:bg-gray-900/20 rounded-lg p-2 transition-colors duration-300">
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
        )}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;

