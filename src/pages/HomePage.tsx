import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import ProjectsShowcase from "../components/sections/ProjectsShowcase";
import Technologies from "../components/sections/Technologies";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

const HomePage = () => {
  const location = useLocation();

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;

    // Only handle if there's a specific scrollTo request
    if (state?.scrollTo) {
      // Ensure we're at the top immediately for instant hero display
      window.scrollTo({ top: 0, behavior: "instant" });

      // Capture scrollTo value for use in timeout
      const scrollToSection = state.scrollTo;

      // Wait for: fade-in transition (1200ms) + hero animations display (1800ms)
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          // Triple RAF to ensure everything is fully rendered and painted
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                // Force layout recalculation for accurate positioning
                const rect = element.getBoundingClientRect();
                const headerOffset =
                  scrollToSection === "about" || scrollToSection === "services"
                    ? 40
                    : 80;
                const offsetPosition = rect.top + window.scrollY - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              });
            });
          });
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
    // Don't do anything if no scrollTo state (allows natural scroll position on refresh)
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsShowcase />
      <Technologies />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
