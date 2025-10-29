# CentDev's Website - Features & Setup

## 🚀 Key Features

### 🎨 UI/UX

- **Neon Brain Circuit Logo** - Luminescent green AI-themed branding
- **Dynamic Typing Animation** - "Future of Tech" cycles through tech phrases with gradient colors
- **Smooth Animations** - Framer Motion for all transitions
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark Theme** - Modern gray-950 background with emerald accents

### 📱 Navigation

- **Active Link Highlighting** - Green underline shows current section
- **Smooth Scrolling** - Seamless section navigation
- **Multi-page Routing** - Home and Portfolio pages
- **Fullscreen Mobile Menu** - Blur background with smooth animations

### 💼 Business Features

- **Quotation Form** - Integrated EmailJS for quote requests
- **Portfolio System** - Category filtering for completed projects
- **Projects Showcase** - Horizontal scrolling preview carousel
- **Team Section** - Member profiles with social links
- **Testimonials** - Client feedback display
- **FAQ Section** - Common questions answered

### 🛠️ Technical Stack

- **React 18** + **TypeScript**
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Production-ready animations
- **React Router** - Client-side routing
- **EmailJS** - Contact form integration
- **Lucide React** - Modern icon library

## 📧 EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template with these variables:

   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{project_type}}`
   - `{{budget}}`
   - `{{message}}`

4. Add credentials to `src/components/QuotationForm.tsx`:

```typescript
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  templateParams,
  "YOUR_PUBLIC_KEY"
);
```

See `EMAIL_SETUP.md` for detailed instructions.

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation with active links
│   │   ├── MobileMenu.tsx      # Fullscreen mobile navigation
│   │   └── Footer.tsx          # Site footer
│   ├── sections/
│   │   ├── Hero.tsx            # Dynamic typing animation
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ProjectsShowcase.tsx # Scrolling projects preview
│   │   ├── Technologies.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Portfolio.tsx       # Full portfolio with filtering
│   └── QuotationForm.tsx       # EmailJS quote form
├── pages/
│   ├── HomePage.tsx            # Main landing page
│   └── PortfolioPage.tsx       # Dedicated portfolio page
├── data/
│   └── constants.ts            # All content data
├── App.tsx                     # Router setup
└── main.tsx                    # Entry point
```

## 🎯 Content Management

All content is centralized in `src/data/constants.ts`:

- `COMPANY_INFO` - Contact details
- `NAV_LINKS` - Navigation items
- `SERVICES` - Service offerings
- `TEAM` - Team members
- `STATS` - Statistics for hero section
- `TECHNOLOGIES` - Tech stack
- `TESTIMONIALS` - Client reviews
- `FAQS` - Frequently asked questions
- `PROJECTS` - Portfolio projects by category

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### GitHub Pages

1. Update `vite.config.ts` with your repo name
2. Current base path: `/cent_dev_website`
3. Build and deploy to `gh-pages` branch

### Preview Build

```bash
npm run preview
```

## 🎨 Customization

### Brand Colors

Primary colors in `tailwind.config.js`:

- Emerald: `#10b981` (main brand color)
- Teal: `#14b8a6` (accent)
- Gray-950: `#030712` (background)

### Typing Animation

Edit phrases in `src/components/sections/Hero.tsx`:

```typescript
sequence={[
  "Future of Tech",
  3000,
  "Future of Innovation",
  2500,
  // Add more phrases...
]}
```

### Logo

Brain circuit icon in `Header.tsx` and `MobileMenu.tsx`

## 📦 Adding Projects

Add to `PROJECTS` array in `src/data/constants.ts`:

```typescript
{
  category: "Mobile Apps",
  projects: [
    {
      title: "Your App Name",
      description: "App description",
      technologies: ["React Native", "Firebase"],
      status: "Completed",
      image: "/projects/your-app.jpg",
      year: "2024",
    },
  ],
}
```

## 🤝 Team Members

Add to `TEAM` array:

```typescript
{
  name: "John Doe",
  role: "Full Stack Developer",
  image: "/team/john.jpg",
  bio: "Expert in...",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
}
```

## 📞 Contact Information

Update `COMPANY_INFO` in `src/data/constants.ts`:

```typescript
export const COMPANY_INFO = {
  email: "malozdev@gmail.com",
  phone: "0975623742",
  whatsappNumber: "260975623742",
  address: "Lusaka, Zambia",
};
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌟 Performance

- ✅ Lightweight animations (Framer Motion)
- ✅ One-time typing effect (no infinite loops)
- ✅ Optimized images and assets
- ✅ Code splitting with React Router
- ✅ Fast Vite builds
- ✅ GPU-accelerated effects

## 📄 License

All rights reserved - Centurion Developers © 2024
