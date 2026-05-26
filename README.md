# Developer Portfolio Website

A modern, professional, and fully responsive developer portfolio built with cutting-edge web technologies. This portfolio showcases a comprehensive collection of sections including hero, about, skills, projects, experience, education, and contact form.

## Features

### ✨ Design & UX
- **Modern Glassmorphism Design** - Clean, elegant cards with frosted glass effect
- **Dual Theme Support** - Seamless dark/light mode toggle with smooth transitions
- **Premium Color Palette** - Carefully crafted cyan, purple, and blue accents
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion-powered transitions and interactions
- **Accessibility First** - WCAG 2.1 AA compliant with semantic HTML

### 🎯 Sections
1. **Hero Section** - Full-screen hero with animated typing effect and gradient background
2. **Navbar** - Sticky navigation with active section highlighting and theme toggle
3. **About Section** - Personal journey with stats and achievements
4. **Skills Section** - Categorized technical skills with progress indicators
5. **Projects Section** - Featured projects with filtering and detailed information
6. **Experience Section** - Professional timeline with achievements and metrics
7. **Education Section** - Academic background with certifications and awards
8. **Contact Section** - Contact form with validation and social links
9. **Footer** - Comprehensive footer with quick links and back-to-top button

### 🚀 Performance
- Next.js 16 with Turbopack for fast builds
- Optimized animations with Framer Motion
- Smooth scrolling and scroll-triggered animations
- SEO optimized with proper metadata
- Production-ready code quality

### 🛠️ Tech Stack
- **Framework**: Next.js 16.2.6
- **UI Library**: React 19.2
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion v12
- **Theming**: next-themes
- **Form Validation**: Zod + react-hook-form
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React & React Icons

## Getting Started

### Prerequisites
- Node.js 18+ or pnpm 10+
- Git

### Installation

1. Clone or extract the project:
```bash
cd your-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## File Structure

```
.
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout with theme provider
│   └── globals.css           # Global styles and design tokens
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Skills showcase
│   ├── Projects.tsx          # Projects grid with filtering
│   ├── Experience.tsx        # Experience timeline
│   ├── Education.tsx         # Education and certifications
│   ├── Testimonials.tsx      # Testimonials carousel
│   ├── Blog.tsx              # Blog articles section
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer
│   ├── SectionWrapper.tsx    # Reusable section wrapper
│   ├── SocialLinks.tsx       # Social media links
│   └── ui/                   # shadcn/ui components
├── hooks/
│   └── useScrollAnimation.ts # Custom animation hooks
├── lib/
│   └── constants.ts          # Portfolio data and content
├── public/
│   └── resume.pdf            # Resume file for download
└── tailwind.config.ts        # Tailwind configuration
```

## License

This project is open source and available under the MIT License.

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)


Made with ❤️ for developers who want to showcase their work professionally.
