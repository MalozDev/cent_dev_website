import { Linkedin, Github, Facebook, BrainCircuit } from "lucide-react";
import { SOCIAL_LINKS } from "../../data/constants";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`border-t py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20 transition-colors duration-300 ${
      theme === "dark" ? "border-gray-800" : "border-gray-300"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0 gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className={`absolute inset-0 rounded-lg sm:rounded-xl blur-md animate-pulse ${
                theme === "dark" ? "bg-emerald-400/30" : "bg-orange-400/30"
              }`}></div>
              <div className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center p-1.5 sm:p-2 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-950 border border-emerald-400/30"
                  : "bg-white border border-orange-400/30"
              }`}>
                <BrainCircuit
                  className={`w-full h-full transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                      : "text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                  }`}
                  strokeWidth={2.5}
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg">CENDEV</div>
              <div className={`text-xs transition-colors duration-300 ${
                theme === "dark" ? "text-gray-500" : "text-gray-600"
              }`}>
                © 2025 All rights reserved
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            {[
              {
                icon: Linkedin,
                link: SOCIAL_LINKS.linkedin,
                label: "LinkedIn",
              },
              { icon: Github, link: SOCIAL_LINKS.github, label: "GitHub" },
              {
                icon: Facebook,
                link: SOCIAL_LINKS.facebook,
                label: "Facebook",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 group ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-emerald-500/20"
                    : "bg-gray-100 hover:bg-orange-500/20"
                }`}
              >
                <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                  theme === "dark"
                    ? "text-gray-400 group-hover:text-emerald-400"
                    : "text-gray-600 group-hover:text-orange-500"
                }`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
