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
  name: "Centurion Developers",
  shortName: "CenDev",
  email: "developerscenturion@gmail.com",
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
    name: "Henry Viyui",
    role: "ML Engineer",
    color: "from-teal-400 via-emerald-500 to-green-600",
    image: "/team/henry.jpg",
    linkedin: "https://www.linkedin.com/in/henry-viyui",
    github: "https://github.com/henryviyui",
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
    name: "Nchimunya Schilima",
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

export const PROJECTS = [
  {
    category: "Software Development",
    projects: [
      {
        title: "Aviation Dispatch Management System",
        description:
          "Comprehensive dispatch and operations management platform for aviation companies with real-time tracking and reporting.",
        technologies: ["React", "Django", "PostgreSQL", "AWS"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "School Management System",
        description:
          "All-in-one educational platform managing students, teachers, grades, attendance, and parent communication.",
        technologies: ["Next.js", "Node.js", "MongoDB", "Firebase"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "Hospital Management System",
        description:
          "Patient records, appointment scheduling, billing, and inventory management for healthcare facilities.",
        technologies: ["React", "Django", "PostgreSQL", "Docker"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
        year: "2023",
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
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "Fitness Tracking App",
        description:
          "Personal fitness companion with workout plans, calorie tracking, and progress analytics.",
        technologies: ["React Native", "Node.js", "MongoDB"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
        year: "2024",
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
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "Marketing Campaign Materials",
        description:
          "Social media graphics, banners, flyers, and digital ads for various marketing campaigns.",
        technologies: ["Canva", "Adobe Creative Suite"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        year: "2024",
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
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "Network Security Implementation",
        description:
          "Deployed enterprise-grade firewall, VPN, and security monitoring systems for corporate clients.",
        technologies: ["pfSense", "OpenVPN", "Zabbix"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        year: "2023",
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
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "Inventory Management System",
        description:
          "Real-time stock tracking, automated reordering, and supplier management for retail chains.",
        technologies: ["Vue.js", "Laravel", "MySQL"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
        year: "2023",
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
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "Vehicle Service History Tracker",
        description:
          "Digital service records and maintenance scheduling for fleet management companies.",
        technologies: ["Flutter", "Firebase", "Push Notifications"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
        year: "2024",
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
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "Customer Behavior Analytics",
        description:
          "ML-powered analytics platform for understanding customer patterns and improving retention.",
        technologies: ["Python", "TensorFlow", "PostgreSQL", "Tableau"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        year: "2023",
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
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
        year: "2024",
      },
      {
        title: "Social Media Management Bot",
        description:
          "Automated content posting, engagement tracking, and analytics for multiple social platforms.",
        technologies: ["Python", "APIs", "MongoDB", "Cron Jobs"],
        status: "Completed",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        year: "2024",
      },
    ],
  },
];
