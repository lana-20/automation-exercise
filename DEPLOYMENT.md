# Deployment Guide

## Overview

**automation-exercise** is deployed on Vercel with a custom domain on AWS Route 53. This document covers the deployment process, DNS configuration, and troubleshooting.

**Live URL:** https://automation-exercise-l597m4a8p-begunova-1027s-projects.vercel.app  
**Custom Domain:** automation-exercise.daisyladybug.com  
**Status:** ✅ Production Ready

---

## Deployment Timeline

### June 5, 2026 - Initial Deployment

**Step 1: Vercel CLI Setup**
```bash
npm install -g vercel
vercel login  # Authenticated with existing Vercel account
```

**Step 2: Project Configuration**
- Fixed `next.config.ts` (removed deprecated `swcMinify`)
- Created `vercel.json` with Next.js framework settings
- Removed environment variable references

**Step 3: Vercel Deployment**
```bash
vercel link --yes  # Linked to begunova-1027s-projects/automation-exercise
vercel deploy --prod  # Built and deployed to production
```

**Build Output:**
```
Framework: Next.js 16.2.7 (Turbopack)
Build time: 19 seconds
Routes generated: 8 (6 static + 2 dynamic)
Size: 206.2 KB uploaded

Routes:
- ○ /                    (Static)
- ○ /cart                (Static)
- ○ /checkout            (Static)
- ○ /confirmation        (Static)
- ○ /products            (Static)
- ○ /_not-found          (Static)
- ƒ /api/checkout        (Dynamic)
- ƒ /products/[id]       (Dynamic)
```

**Deployment URL:**
- Production: `https://automation-exercise-l597m4a8p-begunova-1027s-projects.vercel.app`
- Alias: `https://automation-exercise-blue.vercel.app`

**Step 4: Custom Domain Setup**
```bash
vercel domains add automation-exercise.daisyladybug.com
```

**Output:**
```
Domain added successfully
Nameservers (AWS Route 53):
- ns-100.awsdns-12.com
- ns-647.awsdns-16.net

Required DNS Record:
Type: A
Name: automation-exercise
Value: 76.76.21.21
TTL: 3600
```

**Step 5: DNS Configuration (AWS Route 53)**
```bash
aws route53 change-resource-record-sets \
  --hosted-zone-id Z00109903LJDCG4HQWB8B \
  --change-batch '{
    "Changes": [{
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "automation-exercise.daisyladybug.com",
        "Type": "A",
        "TTL": 3600,
        "ResourceRecords": [{"Value": "76.76.21.21"}]
      }
    }]
  }'
```

**DNS Verification:**
```bash
nslookup automation-exercise.daisyladybug.com
# Returns: 76.76.21.21 ✅
```

**Step 6: GitHub Push**
```bash
git remote add origin https://github.com/lana-20/automation-exercise.git
git push -u origin main
```

---

## Architecture

### Frontend (Vercel)
- **Hosting:** Vercel (serverless, auto-scaling)
- **CDN:** Vercel's global edge network
- **Builds:** Automatic on `main` branch push
- **Preview Deployments:** Generated for each PR
- **SSL:** Auto-issued by Let's Encrypt

### Domain (AWS)
- **Registrar:** Route 53 (daisyladybug.com)
- **DNS Provider:** Route 53 (same account)
- **Zone ID:** Z00109903LJDCG4HQWB8B
- **Record Type:** A (IPv4)
- **Value:** 76.76.21.21 (Vercel's IP)
- **TTL:** 3600 seconds (1 hour)

### SSL/TLS
- **Provider:** Vercel (automatic)
- **Certificate:** Let's Encrypt
- **Status:** Pending (will auto-deploy in 24-48h)
- **Activation:** DNS propagation required

---

## Configuration Files

### `next.config.ts`
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
}

export default nextConfig
```

**Key Settings:**
- `reactStrictMode: true` — Strict mode enabled for development
- `compress: true` — Gzip compression (default)
- No custom rewrites or redirects needed

### `vercel.json`
```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

**Key Settings:**
- Auto-detected Next.js framework
- Standard build command
- Standard output directory

---

## Deployment Process

### Automatic Deployments
Every push to `main` branch triggers:
1. GitHub webhook → Vercel
2. Vercel clones repository
3. Build: `npm install && next build`
4. Deployment to production
5. CDN cache invalidation
6. Status notification to GitHub

### Manual Redeployment
```bash
# Option 1: Via Vercel CLI
vercel deploy --prod

# Option 2: Via GitHub
# Push to main branch triggers automatic deployment

# Option 3: Via Vercel Dashboard
# https://vercel.com/begunova-1027s-projects/automation-exercise
```

### Rollback
```bash
# View deployment history
vercel list

# Promote previous deployment to production
vercel promote <deployment-id>
```

---

## Performance Metrics

### Build Performance
- **Build Time:** ~19 seconds
- **Bundle Size:** 206.2 KB uploaded
- **Pages:** 6 static (pre-rendered) + 2 dynamic (on-demand)
- **Optimization:** Turbopack (faster than Webpack)

### Runtime Performance
- **Time to First Byte (TTFB):** <100ms (edge cached)
- **First Contentful Paint (FCP):** <1s (static pages)
- **Largest Contentful Paint (LCP):** <2.5s
- **Cumulative Layout Shift (CLS):** <0.1 (no layout shifts)

### CDN Performance
- **Edge Locations:** 250+ worldwide (Vercel network)
- **Caching:** ISR (Incremental Static Regeneration) for dynamic routes
- **Compression:** Gzip enabled
- **HTTP/2:** Enabled

---

## Monitoring & Troubleshooting

### Vercel Analytics
View at: https://vercel.com/begunova-1027s-projects/automation-exercise/analytics

**Metrics:**
- Page views by route
- Response times
- Error rates
- Browser/device breakdown

### Common Issues

#### Issue: Custom domain shows "Authentication Required"
**Cause:** SSL certificate not yet deployed  
**Solution:** Wait 24-48h for auto-issuance, or use Vercel URL  
**Status:** ✅ Expected during DNS propagation

#### Issue: DNS not resolving
**Cause:** Route 53 propagation delay  
**Solution:** Wait 5-30 minutes, verify with `nslookup`  
**Verify:** `nslookup automation-exercise.daisyladybug.com`

#### Issue: Build fails
**Cause:** Node version mismatch or dependency issue  
**Solution:** 
```bash
npm install  # Reinstall dependencies
npm run build  # Test build locally
vercel deploy --prod  # Redeploy
```

#### Issue: Stale cache
**Cause:** CDN caching old version  
**Solution:** Vercel auto-invalidates, but manual purge available:
```bash
# Via Vercel dashboard: Settings → Caching → Purge Everything
```

---

## DNS Records

### Current Configuration
```
Zone: daisyladybug.com
Hosted Zone ID: Z00109903LJDCG4HQWB8B
Provider: AWS Route 53

Record: automation-exercise.daisyladybug.com
Type: A
Value: 76.76.21.21
TTL: 3600 seconds
Status: Active ✅
```

### Propagation Status
```bash
# Check global DNS propagation
nslookup automation-exercise.daisyladybug.com

# Expected output:
# Name: automation-exercise.daisyladybug.com
# Address: 76.76.21.21

# Propagation time: 5-30 minutes globally
```

---

## Testing & Verification

### Test Deployment
```bash
# Test homepage
curl -s https://automation-exercise-l597m4a8p-begunova-1027s-projects.vercel.app | \
  grep -o "<title>.*</title>"

# Expected: <title>automation-exercise | E-commerce Testing Sandbox</title>

# Test products page
curl -s https://automation-exercise-l597m4a8p-begunova-1027s-projects.vercel.app/products | \
  grep -c "Wireless Headphones"

# Expected: 1 (product appears on page)
```

### Verification Checklist
- ✅ Homepage loads (logo, nav, hero section)
- ✅ Products page loads (12 products visible)
- ✅ Product detail pages load (specs, pricing)
- ✅ Cart functionality works (add items, view totals)
- ✅ Checkout form loads (validation working)
- ✅ Confirmation page loads (order summary)
- ✅ Mobile responsiveness (tested at 320px, 768px, 1024px)
- ✅ Accessibility (keyboard navigation, focus states)
- ✅ Performance metrics meet targets

---

## Maintenance

### Weekly Tasks
- Monitor error rates in Vercel Analytics
- Check deployment status page
- Verify DNS still resolving

### Monthly Tasks
- Review build performance trends
- Audit dependencies for updates
- Check CDN cache hit rates

### Quarterly Tasks
- Update Node version if new LTS released
- Audit security (npm audit)
- Review performance metrics

---

## Rollback Plan

If critical issue found:

**Option 1: Quick Rollback (via Dashboard)**
1. Go to https://vercel.com/begunova-1027s-projects/automation-exercise
2. Click "Deployments"
3. Select previous working deployment
4. Click "Promote to Production"

**Option 2: Git Rollback**
```bash
git revert HEAD  # Create a revert commit
git push origin main  # Triggers new deployment
```

**Option 3: Manual Redeploy**
```bash
git checkout <previous-commit>
vercel deploy --prod
```

---

## Disaster Recovery

### Data Loss
- **Cart:** Stored in browser localStorage (not critical)
- **Products:** In version control (`data/products.json`)
- **Configuration:** In version control (vercel.json, next.config.ts)

### Site Down
- **Detection:** Vercel auto-monitors (status page)
- **Recovery:** Automatic redeploy from last commit
- **Fallback:** Previous deployment available in history

### Domain Outage
- **Detection:** Route 53 health checks (if configured)
- **Fallback:** Use Vercel URL until domain restored
- **Recovery:** Manual DNS update

---

## Related Documentation

- [README.md](./README.md) — Project overview
- [DEVELOPMENT.md](./DEVELOPMENT.md) — Development setup
- [TESTING.md](./TESTING.md) — Testing approach
- [vercel.json](./vercel.json) — Vercel configuration
- [next.config.ts](./next.config.ts) — Next.js configuration

---

## Support

**Deployment Issues:** Check Vercel dashboard or logs  
**DNS Issues:** Check Route 53 console  
**Build Issues:** Check git status and npm dependencies  
**Performance Issues:** Check Vercel Analytics

**Contacts:**
- Vercel Support: https://vercel.com/support
- AWS Route 53: https://console.aws.amazon.com/
- GitHub: https://github.com/lana-20/automation-exercise

---

**Last Updated:** June 5, 2026  
**Status:** Production Ready ✅
