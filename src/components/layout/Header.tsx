import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, BrainCircuit } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  handleWhatsAppClick: () => void;
}

const Header = ({ scrollToSection, handleWhatsAppClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item: string) => {
    if (item === "Portfolio") {
      navigate("/portfolio");
    } else if (location.pathname !== "/") {
      // If not on home page, navigate home then scroll
      navigate("/");
      setTimeout(() => scrollToSection(item.toLowerCase()), 100);
    } else {
      scrollToSection(item.toLowerCase());
    }
  };

  // Track active section on scroll
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "about", "services", "team", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (item: string) => {
    if (item === "Portfolio") {
      return location.pathname === "/portfolio";
    }
    return location.pathname === "/" && activeSection === item.toLowerCase();
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on body
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
      document.body.style.height = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
      document.body.style.height = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-emerald-500/10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:justify-between justify-center items-center h-16 sm:h-20 relative">
          <div
            className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400/40 rounded-lg sm:rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 animate-pulse"></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-950 rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-2.5 border border-emerald-400/30 group-hover:border-emerald-400/50 transition-all duration-300">
                <BrainCircuit
                  className="w-full h-full text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.7)] group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.9)] transition-all duration-300"
                  strokeWidth={2.5}
                />
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                CentDev's
              </span>
              <div className="text-[9px] sm:text-xs text-gray-500 font-mono font-medium">
                <span className="text-emerald-500/60">&lt;</span>Centurion
                Developers<span className="text-emerald-500/60">/&gt;</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 lg:px-4 py-2 text-sm lg:text-base transition-all relative group ${
                    isActive(item)
                      ? "text-emerald-400"
                      : "text-gray-400 hover:text-emerald-400"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 rounded-lg transition"></div>
                  {/* Active underline */}
                  {isActive(item) && (
                    <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-400 rounded-full"></div>
                  )}
                </button>
              )
            )}
            <button
              onClick={handleWhatsAppClick}
              className="ml-2 lg:ml-4 px-4 lg:px-6 py-2 lg:py-3 bg-transparent border-2 border-[#25D366] rounded-lg text-sm lg:text-base font-semibold hover:bg-[#25D366]/10 transition-all hover:scale-105 flex items-center space-x-2 text-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  fill="#25D366"
                />
              </svg>
              <span>Let's Chat</span>
            </button>
          </div>

          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden absolute right-0 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-300"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </button>
          )}
        </div>
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        handleWhatsAppClick={handleWhatsAppClick}
      />
    </nav>
  );
};

export default Header;
