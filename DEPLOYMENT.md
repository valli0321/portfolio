# Deployment Guide

This guide covers how to deploy your premium developer portfolio to various platforms.

## Quick Deploy to Vercel (Recommended)

Vercel is the recommended platform for Next.js applications and offers the best performance and features.

### Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Using GitHub Integration

1. Push your project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live within seconds

3. Future deployments happen automatically on every push to main branch

## Environment Variables

If you add backend functionality or third-party services, add environment variables:

1. In Vercel Dashboard:
   - Go to Settings > Environment Variables
   - Add your variables
   - Redeploy for changes to take effect

2. Locally, create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
API_KEY=your-secret-key
```

## Custom Domain

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard > Your Project > Settings > Domains
2. Add your domain name
3. Update your domain provider DNS records (Vercel will provide instructions)
4. Wait for DNS propagation (up to 48 hours)

## Pre-Deployment Checklist

- [ ] Update portfolio content in `lib/constants.ts`
- [ ] Replace resume PDF in `public/resume.pdf`
- [ ] Update favicon (replace icons in `public/`)
- [ ] Test theme toggle (dark/light mode)
- [ ] Test form submission
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check SEO metadata
- [ ] Optimize images if added
- [ ] Review for broken links

## Deployment to Other Platforms

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `.next`
6. Click "Deploy site"

### AWS Amplify

1. Push to GitHub/GitLab/Bitbucket
2. Go to [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
3. Click "Amplify Apps" > "New app"
4. Connect your repository
5. Accept build settings (auto-detected)
6. Click "Save and deploy"

### Docker (For Self-Hosting)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json pnpm-lock.yaml* ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy app
COPY . .

# Build
RUN pnpm build

# Start
EXPOSE 3000
CMD ["pnpm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Performance Optimization for Production

### Image Optimization
- Use Next.js Image component for all images
- Compress images before adding
- Use modern formats (WebP, AVIF)

### Bundle Analysis
```bash
npm run build --analyze
```

### Monitoring
- Enable Vercel Analytics for performance metrics
- Monitor Core Web Vitals
- Set up error tracking

## SSL/HTTPS

- **Vercel**: Automatic SSL certificate
- **Netlify**: Automatic SSL certificate
- **Custom domain**: Free certificate with Certbot or Let's Encrypt

## Backup & Version Control

### Git Best Practices

```bash
# Create main branch
git checkout -b main

# Create feature branches
git checkout -b feature/my-feature

# Commit with descriptive messages
git commit -m "Add testimonials section"

# Keep history clean
git rebase main
```

### GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g pnpm
      - run: pnpm install
      - run: pnpm build
      - run: pnpm test # Add tests if available
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Troubleshooting

### Build Errors

**Issue**: `Module not found`
- Solution: Run `pnpm install` locally, commit lock file

**Issue**: Port already in use
- Solution: `lsof -i :3000` and kill the process

**Issue**: Deployment timeout
- Solution: Check build logs, optimize dependencies

### Performance Issues

**Issue**: Slow page load
- Solution: Analyze bundle, optimize images, enable caching

**Issue**: High memory usage
- Solution: Check for memory leaks, optimize data fetching

## Monitoring & Analytics

### Enable Vercel Analytics

```bash
npm install @vercel/analytics
```

Update `app/layout.tsx`:
```tsx
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

1. Create Google Analytics account
2. Add tracking ID to environment variables
3. Integrate with analytics service

## Rollback & Recovery

### Vercel Rollback
- Go to Vercel Dashboard > Deployments
- Find previous deployment
- Click "Promote to Production"

### GitHub Version Control
```bash
# View commit history
git log

# Revert to previous commit
git revert <commit-hash>
git push origin main
```

## Security Best Practices

- [ ] Don't commit secrets to Git
- [ ] Use environment variables for sensitive data
- [ ] Enable 2FA on deployment accounts
- [ ] Regularly update dependencies
- [ ] Run security audits: `npm audit`
- [ ] Use HTTPS only
- [ ] Set appropriate CORS headers
- [ ] Validate form inputs

## Maintenance

### Regular Updates

```bash
# Check for outdated packages
pnpm outdated

# Update all packages
pnpm up

# Update specific package
pnpm up <package-name>@latest
```

### Monitoring Uptime

- Use services like UptimeRobot
- Set up alerts for downtime
- Monitor error rates

## Support & Help

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Actions Help](https://docs.github.com/en/actions)

---

Happy deploying! 🚀
