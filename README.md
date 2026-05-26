# Premium Developer Portfolio Website

A modern, professional, and fully responsive developer portfolio built with cutting-edge web technologies. This portfolio showcases a comprehensive collection of sections including hero, about, skills, projects, experience, education, testimonials, blog, and contact form.

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
8. **Testimonials Section** - Client/colleague recommendations with carousel
9. **Blog Section** - Featured technical articles and publications
10. **Contact Section** - Contact form with validation and social links
11. **Footer** - Comprehensive footer with quick links and back-to-top button

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
- **Icons**: Lucide React

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

## Customization

### Update Portfolio Content

Edit `lib/constants.ts` to update:
- Personal information (name, email, phone, location)
- Social media links
- About section content
- Skills and categories
- Projects and work experience
- Education and certifications
- Testimonials and blog articles

### Customize Colors

The portfolio uses design tokens defined in:
- `app/globals.css` - CSS custom properties for theme colors
- `tailwind.config.ts` - Tailwind color configuration

Key color variables:
- `--primary`: Main brand color (blue)
- `--accent`: Accent color (cyan)
- Background and foreground colors adapt automatically to dark/light theme

### Modify Animations

Framer Motion animations are configured in individual components. Key animation hooks:
- `useScrollAnimation()` - Fade-in on scroll
- `useScrollNavigation()` - Active section tracking
- `useParallax()` - Parallax scroll effects

### Update Resume

Replace the resume PDF:
1. Generate your PDF resume
2. Save it to `public/resume.pdf`
3. The download button will automatically use the new file

## Key Components

### Hero Section
- Animated gradient background with floating blobs
- Typing effect for the headline
- CTA buttons and social links
- Scroll indicator animation

### Projects Section
- Project cards with category filtering
- Tech stack display
- Links to GitHub and live demos
- Smooth filtering animations

### Experience Timeline
- Visual timeline with achievements
- Metric-based accomplishments
- Responsive card layout

### Contact Form
- Form validation with Zod
- Email, name, subject, and message fields
- Success state feedback
- Integration-ready for email services

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub first
git push

# Deploy using Vercel CLI
vercel deploy
```

Or connect your repository to Vercel Dashboard for automatic deployments.

### Deploy to Other Platforms

The portfolio is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- GitHub Pages
- Any Node.js hosting provider

## Performance Optimization

- **Image Optimization**: Use Next.js Image component for images
- **Code Splitting**: Automatic with Next.js and Turbopack
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Animation Performance**: GPU-accelerated transforms with Framer Motion
- **SEO**: Open Graph tags, metadata, and structured data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus indicators on interactive elements

## SEO Optimization

- Dynamic meta tags
- Open Graph support
- Structured data
- Sitemap ready
- Mobile-friendly design
- Fast page load times

## Customization Tips

### Add New Sections
1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Update `navItems` in `lib/constants.ts`

### Modify Theme
1. Update color variables in `app/globals.css`
2. Modify Tailwind config in `tailwind.config.ts`
3. Adjust component className values

### Change Fonts
1. Update font imports in `app/layout.tsx`
2. Modify Tailwind font-family in `tailwind.config.ts`

### Add Form Functionality
The contact form is currently client-side. To add backend functionality:
1. Create an API route in `app/api/contact/route.ts`
2. Update the `Contact.tsx` component to call the API
3. Add email service integration (SendGrid, Nodemailer, etc.)

## License

This project is open source and available under the MIT License.

## Support & Questions

For issues, feature requests, or questions:
1. Check the documentation
2. Review the component code and comments
3. Consult the Next.js and Framer Motion documentation

## Future Enhancements

Potential improvements:
- Blog integration with MDX or CMS
- Case studies with detailed project information
- Analytics integration
- Newsletter signup
- Comments on testimonials
- Search functionality
- Dark mode system preferences auto-detection (already included)
- Progressive Web App (PWA) support

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

Made with ❤️ for developers who want to showcase their work professionally.
