import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import LoadingSpinner from "./components/LoadingSpinner";
import { COMPANY_INFO } from "./data/constants";
import "./index.css";

const AnimatedRoutes = () => {
  const location = useLocation();
  const isInitialMount = useRef(true);
  const prevLocation = useRef(location.pathname);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Always ensure we're at top when route changes (but allow scrollTo state to override)
    if (!isInitialMount.current && !location.state) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    isInitialMount.current = false;
  }, [location.pathname, location.state]);

  // Detect if coming from Portfolio to Home
  const isComingFromPortfolio =
    prevLocation.current === "/portfolio" && location.pathname === "/";

  useEffect(() => {
    // Show loading spinner on route change
    if (prevLocation.current !== location.pathname && !isInitialMount.current) {
      setIsLoading(true);

      // Hide spinner after transition completes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600); // Match with transition duration

      return () => clearTimeout(timer);
    }

    prevLocation.current = location.pathname;
  }, [location.pathname]);

  return (
    <>
      {/* Loading Spinner */}
      <AnimatePresence>{isLoading && <LoadingSpinner />}</AnimatePresence>

      {/* Page Routes */}
      <AnimatePresence mode="popLayout">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={
                  isComingFromPortfolio
                    ? { opacity: 0, scale: 0.9, filter: "blur(10px)" }
                    : { opacity: 0, x: -50 }
                }
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 50 }}
                transition={
                  isComingFromPortfolio
                    ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                    : { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                }
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <PortfolioPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Show initial loading spinner for minimum duration
  useEffect(() => {
    const minLoadTime = 2000; // 2 seconds minimum
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel previous frame if it hasn't executed yet
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth, GPU-accelerated animation
      rafRef.current = requestAnimationFrame(() => {
        if (glowRef.current) {
          const x = e.clientX / 20;
          const y = e.clientY / 20;
          // Use transform instead of left/top for better performance
          glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Triple RAF for ultra-smooth accurate position calculation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Force layout recalculation
            const rect = element.getBoundingClientRect();
            const headerOffset =
              sectionId === "about" || sectionId === "services" ? 40 : 80;
            const offsetPosition = rect.top + window.scrollY - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
        });
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}`, "_blank");
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* Initial Loading Spinner */}
      <AnimatePresence>
        {isInitialLoading && <LoadingSpinner />}
      </AnimatePresence>

      <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-emerald-950/20 to-gray-950"></div>
          <div
            ref={glowRef}
            className="hidden md:block absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl transition-transform duration-300 ease-out will-change-transform"
          ></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse will-change-opacity"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-700 will-change-opacity"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          <Header
            scrollToSection={scrollToSection}
            handleWhatsAppClick={handleWhatsAppClick}
          />

          <AnimatedRoutes />

          <Footer />
        </div>

        <style>{`
          /* Gradient animation for text */
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
          
          /* Blinking cursor for typing animation */
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
          
          /* Disable animations for users who prefer reduced motion */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
        }
      `}</style>
      </div>
    </Router>
  );
}

export default App;
