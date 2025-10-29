import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Linkedin,
  Github,
  Facebook,
  BrainCircuit,
} from "lucide-react";

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
  const navigate = useNavigate();
  const location = useLocation();

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/centurion-developers",
    github: "https://github.com/centurion-developers",
    facebook: "https://www.facebook.com/centurion.developers",
  };

  const handleNavClick = (item: string) => {
    if (item === "Portfolio") {
      navigate("/portfolio");
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(item.toLowerCase()), 100);
    } else {
      scrollToSection(item.toLowerCase());
    }
    setIsMenuOpen(false);
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
          className="md:hidden fixed inset-0 z-50 bg-gray-950/98 backdrop-blur-3xl overflow-hidden"
          style={{ position: "fixed", height: "100vh", width: "100vw" }}
          onTouchMove={(e) => e.preventDefault()}
        >
          <div className="flex flex-col h-full overflow-hidden">
            {/* Menu Header */}
            <div className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6 border-b border-emerald-500/10">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/40 rounded-lg sm:rounded-xl blur-md animate-pulse"></div>
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-950 rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-2.5 border border-emerald-400/30">
                    <BrainCircuit
                      className="w-full h-full text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  CentDev's
                </span>
              </div>
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-300"
              >
                <motion.svg
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-emerald-400"
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

            {/* Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 space-y-2 overflow-hidden">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item, idx) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    onClick={() => handleNavClick(item)}
                    className={`group relative px-6 py-3.5 text-left text-xl sm:text-2xl font-bold transition-all duration-300 ${
                      isActive(item)
                        ? "text-emerald-400"
                        : "text-gray-400 hover:text-emerald-400"
                    }`}
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 rounded-xl transition-all"></div>
                    {isActive(item) ? (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-400 rounded-full"></div>
                    ) : (
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    )}
                  </motion.button>
                )
              )}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                onClick={handleWhatsAppClick}
                className="mt-6 px-8 py-4 bg-transparent border-2 border-[#25D366] rounded-2xl text-lg font-bold hover:bg-[#25D366]/10 transition-all hover:scale-105 flex items-center justify-center space-x-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    fill="#25D366"
                  />
                </svg>
                <span>Let's Chat</span>
              </motion.button>
            </div>

            {/* Menu Footer with Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="px-6 sm:px-8 py-6 border-t border-emerald-500/10"
            >
              <p className="text-gray-500 text-sm mb-4">Follow Us</p>
              <div className="flex items-center space-x-4">
                {[
                  {
                    icon: Linkedin,
                    link: socialLinks.linkedin,
                    label: "LinkedIn",
                  },
                  { icon: Github, link: socialLinks.github, label: "GitHub" },
                  {
                    icon: Facebook,
                    link: socialLinks.facebook,
                    label: "Facebook",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center transition-all duration-300 group"
                  >
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
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
