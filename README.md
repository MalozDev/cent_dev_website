# CentDev's - Centurion Developers

> **`<Centurion Developers/>`**  
> Building The Future of Tech In Africa

Modern, AI-themed developer portfolio and company website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🧠 **Neon AI Branding** - Brain circuit logo with luminescent effects
- ⌨️ **Dynamic Typing Animation** - Morphing tech phrases with gradient colors
- 🎨 **Modern Dark Theme** - Sleek gray-950 with emerald accents
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Smooth Animations** - Framer Motion throughout
- 🎯 **Active Navigation** - Visual feedback for current section
- 📧 **Quote Request System** - EmailJS integration
- 📂 **Portfolio Showcase** - Filterable project categories
- 🌐 **Multi-page Routing** - React Router with smooth transitions

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173/cent_dev_website/`

## 📚 Documentation

- **[FEATURES.md](./FEATURES.md)** - Complete feature list & setup guide
- **[EMAIL_SETUP.md](./EMAIL_SETUP.md)** - EmailJS configuration

## 🛠️ Tech Stack

- **React 18** + **TypeScript** - Modern UI development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Production-ready animations
- **React Router** - Client-side routing
- **EmailJS** - Contact form backend
- **Lucide React** - Beautiful icon set

## 📂 Project Structure

```
src/
├── App.tsx                      # Router setup
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation with active links
│   │   ├── MobileMenu.tsx      # Fullscreen mobile nav
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx            # Dynamic typing animation
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ProjectsShowcase.tsx # Scrolling preview
│   │   ├── Technologies.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Portfolio.tsx       # Full portfolio view
│   └── QuotationForm.tsx       # Quote request modal
├── pages/
│   ├── HomePage.tsx            # Landing page
│   └── PortfolioPage.tsx       # Portfolio page
├── data/
│   └── constants.ts            # All content & config
└── main.tsx                     # Entry point
```

## 🎨 Customization

All content is centralized in `src/data/constants.ts`:

- Company information
- Services & pricing
- Team members
- Projects & portfolio
- Testimonials
- FAQs

See [FEATURES.md](./FEATURES.md) for detailed customization guide.

## 🚢 Deployment

This site is configured for GitHub Pages deployment:

```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

Current base path: `/cent_dev_website`  
Update in `vite.config.ts` for your repository.

## 📞 Contact

**Centurion Developers**

- 📧 Email: malozdev@gmail.com
- 📱 Phone: +260 975 623 742
- 💬 WhatsApp: [Chat with us](https://wa.me/260975623742)
- 📍 Location: Lusaka, Zambia

## 🌐 Connect

- [LinkedIn](https://www.linkedin.com/company/centurion-developers)
- [GitHub](https://github.com/centurion-developers)
- [Facebook](https://www.facebook.com/centurion.developers)

## 📄 License

© 2025 Centurion Developers. All rights reserved.

---

**Built with 💚 by CentDev's Team**
