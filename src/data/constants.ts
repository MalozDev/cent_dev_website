import {
  CodeXml,
  Smartphone,
  Palette,
  Cloud,
  ShoppingCart,
  Wrench,
  ChartNoAxesCombined,
  CalendarSync,
} from "lucide-react";

export const COMPANY_INFO = {
  name: "CenDev Innovations",
  shortName: "CenDev",
  email: "cendevinnovations@gmail.com",
  phone: "+260975623742",
  phoneDisplay: "+260 975 623 742",
  location: "Lusaka, Zambia",
  whatsappNumber: "260975623742",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/centurion-developers",
  github: "https://github.com/centurion-developers",
  facebook: "https://www.facebook.com/centurion.developers",
};

export const SERVICES = [
  {
    icon: CodeXml,
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
    icon: ChartNoAxesCombined,
    title: "Data Analytics",
    desc: "Business intelligence & reporting",
    color: "from-cyan-400 to-teal-500",
  },
  {
    icon: CalendarSync,
    title: "Automation",
    desc: "Workflow optimization & AI tools",
    color: "from-green-400 to-cyan-500",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Mubanga Bowa",
    role: "Strategic Lead",
    color: "from-emerald-400 via-green-500 to-teal-600",
    image: "/team/mubanga.jpeg",
    linkedin: "https://www.linkedin.com/in/mubanga-bowa",
    github: "https://github.com/mubangabowa",
  },
  {
    name: "David Japhet",
    role: "Web Developer & Designer",
    color: "from-teal-400 via-emerald-500 to-green-600",
    image: "/team/davidjaphet.jpeg",
    linkedin: "http://www.linkedin.com/in/david-japhet-musonda-005413206",
    github: "https://github.com/davidjaphet",
  },
  {
    name: "Niza Khunga",
    role: "Software Architect",
    color: "from-green-400 via-teal-500 to-emerald-600",
    image: "/team/niza.jpeg",
    linkedin: "https://www.linkedin.com/in/niza-khunga",
    github: "https://github.com/nizakhunga",
  },
  {
    name: "Stanley Kalenga",
    role: "AI/Cloud Specialist",
    color: "from-cyan-400 via-teal-500 to-green-600",
    image: "/team/stanly.jpeg",
    linkedin: "https://www.linkedin.com/in/stanley-kalenga-265b08266",
    github: "https://github.com/stanleykalenga",
  },
  {
    name: "Stephan Malobeka",
    role: "Lead Web Developer",
    color: "from-emerald-500 via-green-500 to-teal-500",
    image: "/team/stephan.jpeg",
    linkedin:
      "https://www.linkedin.com/in/stephan-malobeka-154a7b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/malozdev",
  },
  {
    name: "Nchimunya Sichilima",
    role: "Graphics Designer",
    color: "from-green-500 via-emerald-500 to-cyan-500",
    image: "/team/nchimunya.jpeg",
    linkedin: "https://www.linkedin.com/in/nchimunya-schilima",
    github: "https://github.com/nchimunya",
  },
];

export const STATS = [
  { number: "0+", label: "Projects Delivered" },
  { number: "0+", label: "Happy Clients" },
  { number: "6", label: "Team Members" },
  { number: "24/7", label: "Support" },
];

export const TECHNOLOGIES = [
  { name: "React & Next.js", category: "Frontend" },
  { name: "Flutter & React Native", category: "Mobile" },
  { name: "Django & Node.js", category: "Backend" },
  { name: "PostgreSQL & MongoDB", category: "Database" },
  { name: "AWS & Azure", category: "Cloud" },
  { name: "Docker & Git", category: "DevOps" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Firebase & Supabase", category: "BaaS" },
];

export const TESTIMONIALS = [
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
];

export const FAQS = [
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
];
// Update just the PROJECTS array in your constants file
export const PROJECTS = [
  {
    category: "Software Development",
    projects: [
      {
        title: "Aviation Dispatch Management System",
        description:
          "Comprehensive dispatch and operations management platform for aviation companies with real-time tracking and reporting.",
        technologies: ["React", "Django", "PostgreSQL", "AWS"],
        status: "",
        image: "/projects/aviation-dispatch.jpeg", // Your local image
        year: "2025",
      },
      {
        title: "School Management System",
        description:
          "All-in-one educational platform managing students, teachers, grades, attendance, and parent communication.",
        technologies: ["Next.js", "Node.js", "MongoDB", "Firebase"],
        status: "",
        image: "/projects/school-management.jpg", // Your local image
        year: "2025",
      },
      {
        title: "Hospital Management System",
        description:
          "Patient records, appointment scheduling, billing, and inventory management for healthcare facilities.",
        technologies: ["React", "Django", "PostgreSQL", "Docker"],
        status: "",
        image: "/projects/hospital-management.webp", // Your local image
        year: "2025",
      },
    ],
  },
  {
    category: "Mobile Apps",
    projects: [
      {
        title: "E-Commerce Mobile App",
        description:
          "Full-featured shopping app with cart, payments, order tracking, and push notifications.",
        technologies: ["Flutter", "Firebase", "Stripe", "FCM"],
        status: "",
        image: "/projects/ecommerce-app.jpg", // Your local image
        year: "2025",
      },
      {
        title: "Fitness Tracking App",
        description:
          "Personal fitness companion with workout plans, calorie tracking, and progress analytics.",
        technologies: ["React Native", "Node.js", "MongoDB"],
        status: "",
        image: "/projects/fitness-app.webp", // Your local image
        year: "2025",
      },
    ],
  },
  {
    category: "Graphic Design",
    projects: [
      {
        title: "Brand Identity Package",
        description:
          "Complete branding suite including logo, business cards, letterheads, and brand guidelines for 10+ businesses.",
        technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
        status: "",
        image: "/projects/brand-identity.png", // Your local image
        year: "2025",
      },
      {
        title: "Marketing Campaign Materials",
        description:
          "Social media graphics, banners, flyers, and digital ads for various marketing campaigns.",
        technologies: ["Canva", "Adobe Creative Suite"],
        status: "",
        image: "/projects/marketing-materials.jpg", // Your local image
        year: "2025",
      },
    ],
  },
  {
    category: "Cloud & IT Infrastructure",
    projects: [
      {
        title: "Enterprise Cloud Migration",
        description:
          "Migrated legacy systems to AWS cloud infrastructure with 99.9% uptime and improved performance.",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
        status: "",
        image: "/projects/cloud-migration.jpeg", // Your local image
        year: "2025",
      },
      {
        title: "Network Security Implementation",
        description:
          "Deployed enterprise-grade firewall, VPN, and security monitoring systems for corporate clients.",
        technologies: ["pfSense", "OpenVPN", "Zabbix"],
        status: "",
        image: "/projects/network-security.png", // Your local image
        year: "2025",
      },
    ],
  },
  {
    category: "Retail Solutions",
    projects: [
      {
        title: "CenDev POS System",
        description:
          "Point-of-sale system with inventory management, sales tracking, and customer loyalty programs.",
        technologies: ["React", "Django", "PostgreSQL", "Thermal Printing"],
        status: "",
        image: "/projects/pos-system.jpg", // Your local image
        year: "2025",
      },
      {
        title: "Inventory Management System",
        description:
          "Real-time stock tracking, automated reordering, and supplier management for retail chains.",
        technologies: ["Vue.js", "Laravel", "MySQL"],
        status: "",
        image: "/projects/inventory-management.webp", // Your local image
        year: "2025",
      },
    ],
  },
  {
    category: "Auto Systems",
    projects: [
      {
        title: "CenDev AutoSuite",
        description:
          "Complete garage management solution with job cards, parts inventory, customer management, and invoicing.",
        technologies: ["React", "Node.js", "PostgreSQL", "PDF Generation"],
        status: "",
        image: "/projects/autosuite.webp", // Your local image
        year: "2025",
      },
      {
        title: "Vehicle Service History Tracker",
        description:
          "Digital service records and maintenance scheduling for fleet management companies.",
        technologies: ["Flutter", "Firebase", "Push Notifications"],
        status: "",
        image: "/projects/vehicle-tracker.webp", // Your local image
        year: "2025",
      },
    ],
  },
  {
    category: "Data Analytics",
    projects: [
      {
        title: "Business Intelligence Dashboard",
        description:
          "Real-time analytics dashboard with KPI tracking, sales forecasting, and custom reports.",
        technologies: ["React", "Python", "Power BI", "SQL"],
        status: "",
        image: "/projects/bi-dashboard.jpg", // Your local image
        year: "2025",
      },
      {
        title: "Customer Behavior Analytics",
        description:
          "ML-powered analytics platform for understanding customer patterns and improving retention.",
        technologies: ["Python", "TensorFlow", "PostgreSQL", "Tableau"],
        status: "",
        image: "/projects/customer-analytics.jpg", // Your local image
        year: "2025",
      },
    ],
  },
  {
    category: "Automation",
    projects: [
      {
        title: "Invoice Automation System",
        description:
          "Automated invoice generation, sending, and payment tracking with AI-powered data extraction.",
        technologies: ["Python", "OCR", "Django", "Celery"],
        status: "",
        image: "/projects/invoice-automation.webp", // Your local image
        year: "2025",
      },
      {
        title: "Social Media Management Bot",
        description:
          "Automated content posting, engagement tracking, and analytics for multiple social platforms.",
        technologies: ["Python", "APIs", "MongoDB", "Cron Jobs"],
        status: "",
        image: "/projects/social-media-bot.jpg", // Your local image
        year: "2025",
      },
    ],
  },
];
