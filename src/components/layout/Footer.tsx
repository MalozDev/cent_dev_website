import { Linkedin, Github, Facebook, BrainCircuit } from "lucide-react";
import { SOCIAL_LINKS } from "../../data/constants";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0 gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400/30 rounded-lg sm:rounded-xl blur-md animate-pulse"></div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-gray-950 border border-emerald-400/30 rounded-lg sm:rounded-xl flex items-center justify-center p-1.5 sm:p-2">
                <BrainCircuit
                  className="w-full h-full text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                  strokeWidth={2.5}
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg">CENDEV</div>
              <div className="text-xs text-gray-500">
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
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-emerald-500/20 flex items-center justify-center transition-all duration-300 group"
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
