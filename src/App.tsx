import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Smartphone,
  Palette,
  Cloud,
  ShoppingCart,
  Wrench,
  TrendingUp,
  Users,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Twitter,
  Zap,
  Sparkles,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "CenDev";

  // Scroll to section smoothly
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Open contact (scroll to contact section)
  const handleContactClick = () => {
    scrollToSection("contact");
  };

  // Handle social media links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/centurion-developers", // Update with your actual LinkedIn
    github: "https://github.com/centurion-developers", // Update with your actual GitHub
    twitter: "https://twitter.com/centurion_dev", // Update with your actual Twitter
  };

  // Handle email click
  const handleEmailClick = () => {
    window.location.href = "mailto:info@cendev.co.zm";
  };

  // Handle phone click
  const handlePhoneClick = () => {
    window.location.href = "tel:+260XXXXXXXXX"; // Update with actual phone number
  };

  // Handle location click (open in Google Maps)
  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Lusaka,Zambia", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Typing animation effect with delay
  useEffect(() => {
    let typingInterval: number | undefined;

    // Add a 500ms delay before starting to type
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150); // Slightly faster typing (150ms per character)
    }, 500);

    return () => {
      clearTimeout(startDelay);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in-view");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".animate-fade-in-up-scroll"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: Code,
      title: "Software Development",
      desc: "Custom AI-driven solutions & management systems",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Cross-platform Flutter & React Native apps",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      desc: "Branding, logos & marketing materials",
      color: "from-teal-400 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud & IT Infrastructure",
      desc: "Servers, networks & security systems",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: ShoppingCart,
      title: "Retail Solutions",
      desc: "POS, inventory & loyalty systems",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Wrench,
      title: "Auto Systems",
      desc: "CenDev AutoSuite - Garage management",
      color: "from-teal-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      desc: "Business intelligence & reporting",
      color: "from-cyan-400 to-teal-500",
    },
    {
      icon: Zap,
      title: "Automation",
      desc: "Workflow optimization & AI tools",
      color: "from-green-400 to-cyan-500",
    },
  ];

  const team = [
    {
      name: "Mubanga Bowa",
      role: "Strategic Lead",
      color: "from-emerald-400 via-green-500 to-teal-600",
      image: "/team/mubanga.jpg", // Add your image here
    },
    {
      name: "Henry Viyui",
      role: "ML Engineer",
      color: "from-teal-400 via-emerald-500 to-green-600",
      image: "/team/henry.jpg", // Add your image here
    },
    {
      name: "Niza Khunga",
      role: "Software Architect",
      color: "from-green-400 via-teal-500 to-emerald-600",
      image: "/team/niza.jpg", // Add your image here
    },
    {
      name: "Stanley Kalenga",
      role: "AI/Cloud Specialist",
      color: "from-cyan-400 via-teal-500 to-green-600",
      image: "/team/stanly.jpeg", // Add your image here
    },
    {
      name: "Stephan Malobeka",
      role: "Lead Web Developer",
      color: "from-emerald-500 via-green-500 to-teal-500",
      image: "/team/stephan.jpeg", // Add your image here
    },
    {
      name: "Nchimunya Schilima",
      role: "Graphics Designer",
      color: "from-green-500 via-emerald-500 to-cyan-500",
      image: "/team/nchimunya.jpeg", // Add your image here
    },
  ];

  const stats = [
    { number: "0+", label: "Projects Delivered" },
    { number: "0+", label: "Happy Clients" },
    { number: "6", label: "Team Members" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-emerald-950/20 to-gray-950"></div>
        <div
          className="hidden md:block absolute w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
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
                onClick={() => scrollToSection("home")}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg sm:rounded-xl blur-md group-hover:blur-lg transition"></div>
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-950 rounded-lg sm:rounded-xl flex items-center justify-center p-1.5 sm:p-2 overflow-hidden">
                    <img
                      src="/logo.jpeg"
                      alt="Centurion Developers Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent inline-flex items-center">
                    {typedText}
                    <span className="animate-blink ml-0.5 text-emerald-400 font-bold">
                      |
                    </span>
                  </span>
                  <div className="text-[10px] sm:text-xs text-gray-500 font-medium hidden sm:block">
                    Centurion Developers
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                {["Home", "About", "Services", "Team", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-400 hover:text-emerald-400 transition-all relative group"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 rounded-lg transition"></div>
                    </button>
                  )
                )}
                <button
                  onClick={handleContactClick}
                  className="ml-2 lg:ml-4 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg text-sm lg:text-base font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105"
                >
                  Let's Talk
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden absolute right-0 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 transition"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-950/95 backdrop-blur-xl border-b border-emerald-500/10">
              <div className="px-4 py-4 sm:py-6 space-y-1 sm:space-y-2">
                {["Home", "About", "Services", "Team", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition"
                    >
                      {item}
                    </button>
                  )
                )}
                <button
                  onClick={handleContactClick}
                  className="w-full mt-2 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6 animate-slide-down">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold tracking-wide uppercase text-xs sm:text-sm">
                Zambian Tech Innovation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight">
              <span
                className="block text-white animate-slide-up opacity-0"
                style={{
                  animationDelay: "0.1s",
                  animationFillMode: "forwards",
                }}
              >
                Building The
              </span>
              <span
                className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient animate-slide-up opacity-0"
                style={{
                  animationDelay: "0.3s",
                  animationFillMode: "forwards",
                }}
              >
                Future of Tech
              </span>
              <span
                className="block text-white animate-slide-up opacity-0"
                style={{
                  animationDelay: "0.5s",
                  animationFillMode: "forwards",
                }}
              >
                In Africa
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mb-8 sm:mb-12 leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              We don't just build software. We craft intelligent, scalable
              digital experiences that transform businesses across the
              continent.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <button
                onClick={handleContactClick}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-500/30 rounded-xl font-bold text-base sm:text-lg hover:bg-emerald-500/10 transition-all flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group animate-scale-in opacity-0"
                  style={{
                    animationDelay: `${1.1 + idx * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-emerald-500/40 transition">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  About Centurion Developers
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                Empowering businesses and individuals through innovative,
                robust, and scalable software solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {/* Mission */}
              <div className="group relative animate-fade-in-up-scroll">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-2xl p-6 sm:p-8 h-full transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-gray-950" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-emerald-400">
                    Our Mission
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Empowering businesses and individuals through innovative,
                    robust, and scalable software solutions that solve
                    real-world problems.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div
                className="group relative animate-fade-in-up-scroll"
                style={{ animationDelay: "100ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-2xl p-6 sm:p-8 h-full transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-gray-950" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-emerald-400">
                    Our Vision
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    To become a technology powerhouse in Africa — pioneering
                    software innovation, digital infrastructure, and business
                    automation across industries.
                  </p>
                </div>
              </div>

              {/* Values Preview */}
              <div
                className="group relative animate-fade-in-up-scroll"
                style={{ animationDelay: "200ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-2xl p-6 sm:p-8 h-full transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-gray-950" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-emerald-400">
                    Core Values
                  </h3>
                  <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
                    <li className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                      <span>Innovation & Creativity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                      <span>Collaboration & Integrity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                      <span>Continuous Learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                  WHAT WE DO
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Multi-Industry Solutions
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                From aviation to retail, we've got the tech stack to power your
                vision
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="group relative animate-fade-in-up-scroll opacity-0"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 rounded-xl sm:rounded-2xl blur-xl transition-all duration-500"></div>
                    <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 group-hover:translate-y-[-8px]">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-950" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{service.desc}</p>
                      <div className="mt-3 sm:mt-4 flex items-center text-emerald-400 text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                  OUR TECH STACK
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Modern Technologies
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                We use cutting-edge frameworks and tools to build reliable,
                scalable solutions
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "React & Next.js", category: "Frontend" },
                { name: "Flutter & React Native", category: "Mobile" },
                { name: "Django & Node.js", category: "Backend" },
                { name: "PostgreSQL & MongoDB", category: "Database" },
                { name: "AWS & Azure", category: "Cloud" },
                { name: "Docker & Git", category: "DevOps" },
                { name: "Tailwind CSS", category: "Styling" },
                { name: "Firebase & Supabase", category: "BaaS" },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative animate-fade-in-up-scroll"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 rounded-xl blur-lg transition-all duration-500"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-xl p-4 sm:p-6 text-center transition-all duration-300 group-hover:translate-y-[-4px]">
                    <div className="text-sm text-emerald-400 font-semibold mb-1">
                      {tech.category}
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                  THE TEAM
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Meet The Innovators
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative animate-fade-in-up-scroll opacity-0"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 group-hover:translate-y-[-8px] group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                    <div
                      className={`relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden`}
                    >
                      {/* Image or Placeholder */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover object-[80%_35%] group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.currentTarget.style.display = "none";
                          const placeholder =
                            e.currentTarget.nextElementSibling;
                          if (placeholder)
                            placeholder.classList.remove("hidden");
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="hidden absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-transform">
                          <Users className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-emerald-400 transition">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {member.role}
                      </p>
                      <div className="flex space-x-3">
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center transition"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center transition"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                  TESTIMONIALS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Aviation Client",
                  role: "Operations Manager",
                  text: "CenDev transformed our dispatch management system. The efficiency gains have been remarkable!",
                },
                {
                  name: "Retail Business",
                  role: "Store Owner",
                  text: "Their POS system is intuitive and powerful. Our sales tracking has never been easier.",
                },
                {
                  name: "Auto Garage",
                  role: "Garage Manager",
                  text: "The AutoSuite solution streamlined our entire operation. Highly recommended!",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="group relative animate-fade-in-up-scroll"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-2xl p-6 h-full transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3">
                        <Users className="w-6 h-6 text-gray-950" />
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex mt-4 text-emerald-400">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 px-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What services does CenDev offer?",
                  a: "We offer full-stack software development, mobile apps, web development, graphic design, cloud infrastructure, retail POS systems, auto garage solutions, and more.",
                },
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.",
                },
                {
                  q: "Do you offer support after project completion?",
                  a: "Yes! We provide 24/7 support, maintenance packages, and training to ensure your systems run smoothly long after deployment.",
                },
                {
                  q: "Can you work with businesses outside Zambia?",
                  a: "Absolutely! While we're based in Zambia, we work with clients across Africa and globally through remote collaboration.",
                },
                {
                  q: "What makes CenDev different?",
                  a: "We combine local expertise with international standards, offering innovative AI-driven solutions, personalized service, and a commitment to building long-term partnerships.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="group relative animate-fade-in-up-scroll"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-xl transition-all duration-500"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-xl p-5 sm:p-6 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="w-4 h-4 text-gray-950" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative animate-fade-in-up-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 px-2">
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      Let's Build Something Amazing
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-400 px-2">
                    Ready to transform your business? We're just a message away.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@cendev.co.zm",
                      onClick: handleEmailClick,
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+260 XXX XXX XXX",
                      onClick: handlePhoneClick,
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Lusaka, Zambia",
                      onClick: handleLocationClick,
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={item.onClick}
                        className="group relative w-full text-center cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 rounded-xl transition"></div>
                        <div className="relative bg-gray-800/50 rounded-xl p-5 sm:p-6 text-center border border-gray-700 group-hover:border-emerald-500/50 transition">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-950" />
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500 mb-1">
                            {item.label}
                          </div>
                          <div className="text-sm font-semibold text-gray-300 break-words">
                            {item.value}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-950 border-2 border-emerald-500/30 rounded-lg sm:rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
                  <img
                    src="/logo.jpeg"
                    alt="Centurion Developers Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg">CenDev</div>
                  <div className="text-xs text-gray-500">
                    © 2025 All rights reserved
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 sm:space-x-6">
                {[
                  {
                    icon: Linkedin,
                    link: socialLinks.linkedin,
                    label: "LinkedIn",
                  },
                  { icon: Github, link: socialLinks.github, label: "GitHub" },
                  {
                    icon: Twitter,
                    link: socialLinks.twitter,
                    label: "Twitter",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center transition group"
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-emerald-400 transition" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        @keyframes slide-down {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
        
        @keyframes fade-in-up-scroll {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in-up-scroll {
          opacity: 0;
          transform: translateY(50px);
        }
        .animate-fade-in-up-scroll.animate-in-view {
          animation: fade-in-up-scroll 0.8s ease-out forwards;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        /* Scroll-triggered animations */
        @media (prefers-reduced-motion: no-preference) {
          .animate-fade-in-up-scroll {
            animation: fade-in-up-scroll 0.8s ease-out forwards;
          }
        }
        
        /* Disable animations for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-down,
          .animate-slide-up,
          .animate-fade-in-up,
          .animate-scale-in,
          .animate-fade-in-up-scroll,
          .animate-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
