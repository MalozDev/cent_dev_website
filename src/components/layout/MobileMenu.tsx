import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Linkedin,
  Github,
  Facebook,
  BrainCircuit,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeToggle from "../ThemeToggle";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
}

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  handleWhatsAppClick,
}: MobileMenuProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/centurion-developers",
    github: "https://github.com/centurion-developers",
    facebook: "https://www.facebook.com/centurion.developers",
  };

  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);

    if (item === "Portfolio") {
      // Scroll to top first, then navigate
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        navigate("/portfolio");
      }, 600);
    } else if (item === "Home") {
      if (location.pathname !== "/") {
        // Coming from another page, scroll current page to top first
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          navigate("/");
        }, 600);
      } else {
        // Already on home page, scroll to hero
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }
    } else if (location.pathname !== "/") {
      // If not on home page, scroll to top first, then navigate with scrollTo state
      const sectionId = item.toLowerCase();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        navigate("/", { state: { scrollTo: sectionId } });
      }, 800);
    } else {
      // Already on home page, just scroll to section
      setTimeout(() => scrollToSection(item.toLowerCase()), 100);
    }
  };

  const isActive = (item: string) => {
    if (item === "Portfolio") {
      return location.pathname === "/portfolio";
    }
    return false; // For mobile, we don't track scroll position
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`md:hidden fixed inset-0 z-50 backdrop-blur-3xl transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-950/98" : "bg-white/98"
          }`}
          style={{ position: "fixed", height: "100dvh", width: "100vw" }}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header - Compact */}
            <div
              className={`flex justify-between items-center h-14 sm:h-16 px-4 sm:px-6 border-b shrink-0 transition-colors duration-300 ${
                theme === "dark"
                  ? "border-emerald-500/10"
                  : "border-orange-500/20"
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-lg blur-sm animate-pulse transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-emerald-400/40"
                        : "bg-orange-400/40"
                    }`}
                  ></div>
                  <div
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center p-1.5 sm:p-2 transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-gray-950 border border-emerald-400/30"
                        : "bg-white border border-orange-400/30"
                    }`}
                  >
                    <BrainCircuit
                      className={`w-full h-full transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]"
                          : "text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]"
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <span
                  className={`text-lg sm:text-xl font-black bg-clip-text text-transparent transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-linear-to-r from-emerald-400 to-teal-400"
                      : "bg-linear-to-r from-orange-500 to-orange-600"
                  }`}
                >
                  CENDEV
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 sm:p-2.5 rounded-xl transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-emerald-500/10 hover:bg-emerald-500/20"
                      : "bg-orange-500/10 hover:bg-orange-500/20"
                  }`}
                >
                  <motion.svg
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                      theme === "dark" ? "text-emerald-400" : "text-orange-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </div>

            {/* Menu Content - Scrollable */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 py-6 sm:py-8">
              <div className="flex flex-col space-y-1 sm:space-y-1.5">
                {["Home", "About", "Services", "Portfolio", "Contact"].map(
                  (item, idx) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      onClick={() => handleNavClick(item)}
                      className={`group relative px-4 sm:px-5 py-3 sm:py-3.5 text-left text-lg sm:text-xl font-bold transition-all duration-300 rounded-xl ${
                        isActive(item)
                          ? theme === "dark"
                            ? "text-emerald-400 bg-emerald-500/10"
                            : "text-orange-500 bg-orange-500/10"
                          : theme === "dark"
                          ? "text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5"
                          : "text-gray-600 hover:text-orange-500 hover:bg-orange-500/5"
                      }`}
                    >
                      <span className="relative z-10 flex items-center">
                        {item}
                        {isActive(item) && (
                          <span
                            className={`ml-2 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                              theme === "dark"
                                ? "bg-emerald-400"
                                : "bg-orange-500"
                            }`}
                          ></span>
                        )}
                      </span>
                      {!isActive(item) && (
                        <ChevronRight
                          className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${
                            theme === "dark"
                              ? "text-emerald-400"
                              : "text-orange-500"
                          }`}
                        />
                      )}
                    </motion.button>
                  )
                )}

                {/* WhatsApp Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  onClick={handleWhatsAppClick}
                  className={`mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-[#25D366] rounded-xl text-base sm:text-lg font-bold hover:bg-[#25D366]/10 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2 sm:space-x-3 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      fill="#25D366"
                    />
                  </svg>
                  <span>Let's Chat</span>
                </motion.button>
              </div>
            </div>

            {/* Menu Footer with Social Links - Always Visible */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className={`px-4 sm:px-6 py-4 sm:py-5 border-t shrink-0 transition-colors duration-300 ${
                theme === "dark"
                  ? "border-emerald-500/10 bg-gray-950/50"
                  : "border-orange-500/20 bg-white/50"
              }`}
            >
              <p
                className={`text-xs sm:text-sm mb-3 font-medium transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Connect With Us
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                {[
                  {
                    icon: Linkedin,
                    link: socialLinks.linkedin,
                    label: "LinkedIn",
                    color: "hover:bg-blue-500/20 hover:border-blue-500/50",
                  },
                  {
                    icon: Github,
                    link: socialLinks.github,
                    label: "GitHub",
                    color: "hover:bg-purple-500/20 hover:border-purple-500/50",
                  },
                  {
                    icon: Facebook,
                    link: socialLinks.facebook,
                    label: "Facebook",
                    color: "hover:bg-blue-600/20 hover:border-blue-600/50",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`flex-1 h-11 sm:h-12 rounded-lg border flex items-center justify-center transition-all duration-300 group ${
                      item.color
                    } ${
                      theme === "dark"
                        ? "border-gray-800 bg-gray-900/50"
                        : "border-gray-200 bg-gray-100/50"
                    }`}
                  >
                    <item.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-gray-400 group-hover:text-emerald-400"
                          : "text-gray-600 group-hover:text-orange-500"
                      }`}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
