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
