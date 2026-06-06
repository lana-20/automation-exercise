# automation-exercise

A production-grade e-commerce testing sandbox built with **Next.js 16**, **TypeScript**, **React**, and **Tailwind CSS**. Optimized for both traditional automation testing and agentic/multi-agent testing frameworks.

**Live:** https://automation-exercise.daisyladybug.com  
**Vercel URL:** https://automation-exercise-l597m4a8p-begunova-1027s-projects.vercel.app  
**Repository:** https://github.com/lana-20/automation-exercise

---

## Features

### 6 Complete Pages
- **Homepage** — Hero section, feature overview, product showcase, footer
- **Products Listing** — 12 products, search, category filter, sort by price
- **Product Detail** — Full specs, stock status, quantity controls, add to cart
- **Shopping Cart** — Item management, order summary, stock validation
- **Checkout** — Form validation, billing + payment info, order processing
- **Order Confirmation** — Receipt, next steps, order summary

### E-Commerce Features
- **12 Real Products** across 5 categories (Electronics, Apparel, Home, Books, Accessories)
- **Working Cart** with React Context state management
- **Stock Validation** — Prevents overselling, shows availability status
- **Form Validation** — Email, phone, address, payment fields
- **Real Calculations** — Subtotal, tax (10%), free shipping (>$100)
- **Order Confirmation** — Receipt with order breakdown

### Design System (DLB)
- **Color Palette** — Navy (#0f1a2a), Coral (#d4552a), Mint (#4aa8a5), Gold (#d4a85a), Violet (#7455bf), Steel (#3d6abf)
- **Typography** — Playfair Display (headings), Inter (body), JetBrains Mono (labels)
- **Responsive Layout** — Mobile-first (320px → desktop)
- **Spacing System** — 80px desktop padding → 40px tablet → 20px mobile
- **Shadow & Depth** — Consistent elevation system with blur effects

### Accessibility (WCAG 2.1 AA/AAA)
- ✅ Semantic HTML with proper heading hierarchy
- ✅ ARIA labels on all interactive elements
- ✅ Color contrast ratios (primary text 300:1, secondary 7:1)
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus states with visible indicators
- ✅ Aria-live regions for dynamic content
- ✅ Form validation messages with role="alert"

### Mobile Optimization
- **Responsive Grids** — Auto-collapse 3-col → 2-col → 1-col
- **Responsive Padding** — 80px → 40px → 20px on breakpoints
- **Responsive Typography** — h1: 64px → 36px → 28px
- **Sticky Elements** — Dynamic (sticky on desktop, static on mobile)
- **Touch-Friendly** — Buttons 44px+ minimum touch target
- **Full-Width Layout** — No horizontal scroll on any screen size

### Agentic Testing Ready
- Built for **Selenium**, **Appium**, **WebDriver BiDi**
- Optimized for **agentic testing systems** (multi-agent automation)
- Support for **autonomous test execution**
- Clear form fields with stable selectors
- Consistent, predictable user flows
- Real-world e-commerce friction (validation, stock limits, taxes)

---

## Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | Next.js 16.2.7 (Turbopack) |
| **Language** | TypeScript |
| **UI Framework** | React 19 |
| **Styling** | Inline CSS (no framework) |
| **State Management** | React Context (CartContext) |
| **Deployment** | Vercel (serverless) |
| **Domain** | Route 53 (AWS) + CloudFront |

---

## Project Structure

```
automation-exercise/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout + metadata
│   ├── globals.css           # Design tokens + responsive styles
│   ├── cart/
│   │   └── page.tsx          # Shopping cart page
│   ├── checkout/
│   │   └── page.tsx          # Checkout form
│   ├── confirmation/
│   │   └── page.tsx          # Order confirmation
│   ├── products/
│   │   ├── page.tsx          # Products listing
│   │   └── [id]/
│   │       └── page.tsx      # Product detail
│   ├── api/
│   │   └── checkout.ts       # Order processing API
│   ├── components/
│   │   └── Header.tsx        # Navigation header
│   └── context/
│       └── CartContext.tsx   # Cart state management
├── data/
│   └── products.json         # 12 products catalog
├── public/                   # Static assets
├── vercel.json              # Vercel configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies

```

---

## Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Setup
```bash
# Clone repository
git clone https://github.com/lana-20/automation-exercise.git
cd automation-exercise

# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:3000
```

### Build & Deploy
```bash
# Production build
npm run build

# Deploy to Vercel (from GitHub)
# Automatic on push to main, or via Vercel dashboard

# Verify deployment
curl https://automation-exercise-l597m4a8p-begunova-1027s-projects.vercel.app
```

---

## Design System Details

### Color Tokens
```css
--bg: #0f1a2a              /* Dark navy background */
--bg-dark: #0a1220         /* Darker navy (footer) */
--card: #13243a            /* Card background */
--off-white: #f5f0eb       /* Primary text */
--coral: #d4552a           /* Primary accent (CTAs) */
--mint: #4aa8a5            /* Secondary accent (success) */
--gold: #d4a85a            /* Tertiary accent (highlights) */
--violet: #7455bf          /* Quaternary accent */
--steel: #3d6abf           /* Quinary accent */
```

### Typography
- **Display**: Playfair Display (serif, headings)
- **Body**: Inter (sans-serif, body text)
- **Mono**: JetBrains Mono (labels, uppercase, code)

### Responsive Breakpoints
- **Desktop**: 1024px+ (full layout)
- **Tablet**: 768px-1023px (1-column grids)
- **Mobile**: 480px-767px (compact padding)
- **Small Mobile**: <480px (minimal padding)

---

## Accessibility Features

### Forms
- All inputs have visible labels
- Validation errors shown as `role="alert"`
- Focus states with 3px outline
- Fieldsets group related inputs
- Required fields marked with `*`

### Navigation
- Skip-to-main-content link (hidden, visible on Tab)
- Semantic nav/header/main/footer
- ARIA landmarks on sections
- Keyboard navigation (Tab through all elements)

### Content
- Color is never the only indicator (always paired with text/icons)
- Contrast ratios meet WCAG AAA (7:1 minimum, many 15:1+)
- Images have alt text
- Emojis used decoratively (not for info)

### Dynamic Content
- Stock changes use `aria-live="polite"`
- Quantity updates announce via live region
- Cart updates show visual + text feedback

---

## Deployment

### Vercel Configuration
The site is deployed on Vercel with automatic builds on `main` branch push.

**Build Settings:**
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `.next`
- Node Version: 20.x

**Environment Variables:** None required (public site)

### Custom Domain Setup
**Domain:** automation-exercise.daisyladybug.com  
**Provider:** Route 53 (AWS)  
**DNS Record:**
```
Name:  automation-exercise.daisyladybug.com
Type:  A
Value: 76.76.21.21
TTL:   3600
```

**SSL Certificate:** Auto-issued by Vercel (24-48h after DNS activation)

---

## Testing Approach

### Manual Testing (Completed)
- ✅ Homepage load and render
- ✅ Products listing (search, filter, sort)
- ✅ Product detail page (specs, images, add to cart)
- ✅ Cart management (add, remove, quantity changes)
- ✅ Stock validation (prevents overselling)
- ✅ Checkout form validation
- ✅ Order confirmation display
- ✅ Mobile responsiveness (320px → desktop)
- ✅ Accessibility keyboard navigation
- ✅ Color contrast compliance

### Automation Ready
The site is designed for automated testing with:
- Stable semantic selectors
- Clear form field names
- Predictable navigation flows
- Real form validation
- Stock limits (edge case handling)
- Tax calculations
- Shipping logic

**Tested by:** Vibium, curl, browser inspection  
**Status:** All pages responsive, all features functional

---

## Recent Changes

### Session 2026-06-05 (Deployment & Mobile Optimization)
- ✅ Deployed to Vercel
- ✅ Custom domain DNS configured
- ✅ Fixed mobile padding squishing (responsive container overrides)
- ✅ Added responsive grid classes (grid-responsive, two-col-responsive, footer-grid)
- ✅ Mobile breakpoints (768px, 480px) with typography scaling
- ✅ Sidebar sticky → static on mobile
- ✅ All 6 pages fully responsive
- ✅ Agentic testing messaging integrated throughout
- ✅ 44 commits of progressive improvements
- ✅ GitHub repository created and pushed
- ✅ All tests passing

### Commit History
```
a783087 fix: Featured products now link to their respective product pages
b95304c style: Improve horizontal text alignment on hero and flow sections
67328d4 style: Add mobile-responsive design foundations
ba6eae8 style: Apply responsive grid classes to all site pages
fab223a fix: Fix remaining mobile layout issues on features and footer
b82855a fix: Make grid layouts responsive for mobile devices
df6908f fix: Optimize sidebar styling for mobile on cart and checkout pages
bfe0d43 fix: Fix right edge squishing on mobile cart page
98960fa build: Prepare for Vercel deployment
```

---

## Known Limitations

- No backend database (products stored in JSON)
- No actual payment processing (demo only)
- No user accounts or authentication
- No order persistence (clears on page refresh)
- Cart stored in localStorage (browser only)

These are intentional design choices for a testing sandbox.

---

## Resources

- **GitHub:** https://github.com/lana-20/automation-exercise
- **Live Site:** https://automation-exercise-l597m4a8p-begunova-1027s-projects.vercel.app
- **Vercel Project:** https://vercel.com/begunova-1027s-projects/automation-exercise
- **Design System:** DLB (Daisy Lady Bug)
- **Status:** Production Ready ✅

---

## License

Built for educational and testing purposes.
