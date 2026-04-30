# Graviity Tuitions - Premium Educational Website

A visually stunning, high-converting educational website for Graviity Tuitions coaching institute.

## 🎯 Features

- **Premium Design**: Ultra-clean, modern UI inspired by Apple, Byju's, and Stripe
- **High Conversion**: Strategically placed CTAs and trust elements
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Micro-interactions and scroll animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with React and Vite for optimal speed

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
graviity-tuitions/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Programs.jsx
│   │   ├── Results.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Faculty.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── CTASection.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (#2563eb)
- **Accent**: Orange/Gold (#f97316)
- **Background**: White with subtle gradients

### Typography
- **Headings**: Poppins (Bold, 600-800)
- **Body**: Inter (Regular, 400-600)

### Key Features
- Glassmorphism effects
- Soft shadows
- Gradient accents
- Rounded sections
- Micro animations

## 📱 Sections

1. **Hero Section**: Trust-building headline with CTAs
2. **Trust Bar**: Social proof with key metrics
3. **Why Choose Us**: Feature cards with icons
4. **Programs**: 4 premium program cards
5. **Results**: Achievement stats and top performers
6. **Testimonials**: Parent reviews with ratings
7. **Faculty**: Expert teacher profiles
8. **How It Works**: 4-step process
9. **CTA Section**: Strong conversion banner
10. **Contact**: Form + contact info + map
11. **Footer**: Links, programs, contact, social media
12. **WhatsApp Button**: Floating chat button

## 🔧 Customization

### Update Contact Information

Edit the following files:
- `src/components/Contact.jsx` - Contact details
- `src/components/Footer.jsx` - Footer contact info
- `src/components/WhatsAppButton.jsx` - WhatsApp number

### Update Content

- **Programs**: Edit `src/components/Programs.jsx`
- **Results**: Edit `src/components/Results.jsx`
- **Testimonials**: Edit `src/components/Testimonials.jsx`
- **Faculty**: Edit `src/components/Faculty.jsx`

### Update Colors

Edit `tailwind.config.js` to change the color scheme.

## 📊 Performance

- Fast loading with Vite
- Optimized images (use WebP format)
- Lazy loading for images
- Minimal JavaScript bundle
- CSS optimized with Tailwind

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

2. Build and deploy:
```bash
npm run build
# Push the dist folder to gh-pages branch
```

## 📞 Support

For any questions or support, contact:
- Email: info@graviitytuitions.com
- Phone: +91 93817 91038
- WhatsApp: +91 93817 91038
- Address: Hyderabad, Telangana, India

## 📄 License

© 2026 Graviity Tuitions. All rights reserved.

---

Built with ❤️ using React, Tailwind CSS, and Vite
