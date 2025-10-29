# Centurion Developers - Configuration Guide

This guide will help you update all the contact information and social media links on your website.

## 📧 Contact Information

### Email

Update in `src/App.tsx` line 55-56:

```typescript
const handleEmailClick = () => {
  window.location.href = "mailto:info@cendev.co.zm"; // ← Change this
};
```

### Phone Number

Update in `src/App.tsx` line 59-61:

```typescript
const handlePhoneClick = () => {
  window.location.href = "tel:+260XXXXXXXXX"; // ← Change to your actual phone
};
```

### Location

Update in `src/App.tsx` line 64-66:

```typescript
const handleLocationClick = () => {
  window.open("https://maps.google.com/?q=Lusaka,Zambia", "_blank"); // ← Update location
};
```

## 🔗 Social Media Links

Update in `src/App.tsx` lines 47-52:

```typescript
const socialLinks = {
  linkedin: "https://www.linkedin.com/company/centurion-developers", // ← Your LinkedIn
  github: "https://github.com/centurion-developers", // ← Your GitHub
  twitter: "https://twitter.com/centurion_dev", // ← Your Twitter
};
```

## 📊 Statistics

Update in `src/App.tsx` around line 185:

```typescript
const stats = [
  { number: "0+", label: "Projects Delivered" }, // ← Update numbers
  { number: "0+", label: "Happy Clients" },
  { number: "6", label: "Team Members" },
  { number: "24/7", label: "Support" },
];
```

## 👥 Team Member Images

Add team photos to `public/team/` folder:

- `mubanga.jpg` - Mubanga Bowa
- `henry.jpg` - Henry Viyui
- `niza.jpg` - Niza Khunga
- `stanley.jpg` - Stanley Kalenga
- `stephan.jpg` - Stephan Malobeka
- `nchimunya.jpg` - Nchimunya Schilima

## 🎨 Logo

Your logo is located at:

- `public/logo.jpeg` - Replace with your logo (keep the same filename)

## ✨ All Interactive Elements

### Navigation

- ✅ Logo - Scrolls to home
- ✅ Nav links - Smooth scroll to sections
- ✅ "Let's Talk" buttons - Scroll to contact

### Hero Section

- ✅ "Start Your Project" - Scrolls to contact
- ✅ "View Our Work" - Scrolls to services

### Team Section

- ✅ LinkedIn icons - Open LinkedIn (update links above)
- ✅ GitHub icons - Open GitHub (update links above)

### Contact Section

- ✅ Email card - Opens email client
- ✅ Phone card - Opens phone dialer
- ✅ Location card - Opens Google Maps

### Footer

- ✅ Social icons - Open respective platforms

## 🚀 Quick Start

1. Update contact info in `src/App.tsx` (lines 47-66)
2. Update stats in `src/App.tsx` (line 185)
3. Add team photos to `public/team/`
4. Replace `public/logo.jpeg` with your logo
5. Test all links and buttons!

All clickable elements are now functional! 🎉
