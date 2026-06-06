# Development Guide

## Quick Start

```bash
# Clone repository
git clone https://github.com/lana-20/automation-exercise.git
cd automation-exercise

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## Environment Setup

### Prerequisites
- **Node.js:** 20.x or higher
- **npm:** 10.x or higher
- **Git:** Latest version
- **Browser:** Chrome, Firefox, Safari, or Edge (latest)

### Installation

```bash
# Check Node version
node --version  # Should be v20.x or higher

# Check npm version
npm --version   # Should be 10.x or higher

# Clone repository
git clone https://github.com/lana-20/automation-exercise.git
cd automation-exercise

# Install dependencies
npm install

# Verify installation
npm run build  # Should complete without errors
```

---

## Development Server

### Running Locally

```bash
# Start development server (with hot reload)
npm run dev

# Server runs at http://localhost:3000
# Hot reload enabled - changes appear instantly
# Press Ctrl+C to stop
```

### Accessing Pages

| Page | URL |
|------|-----|
| Homepage | http://localhost:3000 |
| Products | http://localhost:3000/products |
| Product Detail | http://localhost:3000/products/prod_001 |
| Cart | http://localhost:3000/cart |
| Checkout | http://localhost:3000/checkout |
| Confirmation | http://localhost:3000/confirmation |

---

## Building for Production

```bash
# Create optimized production build
npm run build

# Output appears in .next/ directory
# This is what gets deployed to Vercel

# Test production build locally
npm run build && npm start

# Server runs at http://localhost:3000
```

---

## Code Structure

### Key Files
```
automation-exercise/
├── app/
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Design tokens + responsive styles
│   ├── cart/page.tsx        # Shopping cart
│   ├── checkout/page.tsx    # Checkout form
│   ├── confirmation/page.tsx # Order confirmation
│   ├── products/
│   │   ├── page.tsx         # Products listing
│   │   └── [id]/page.tsx    # Product detail
│   ├── api/checkout.ts      # Order processing
│   ├── components/Header.tsx # Navigation
│   └── context/CartContext.tsx # State management
├── data/products.json       # Product catalog
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.ts           # Next.js config
└── vercel.json              # Vercel config
```

### Design System
All styling uses **inline CSS** with **CSS custom properties** for colors:

```typescript
// Example: Using DLB colors
<button style={{
  background: '#d4552a',      // coral
  color: '#f5f0eb',           // off-white
  padding: '12px 32px'
}}>
  Click me
</button>
```

### State Management
Cart state managed with **React Context**:

```typescript
import { useCart } from '@/app/context/CartContext'

function MyComponent() {
  const { items, addItem, removeItem, updateQuantity } = useCart()
  // Use cart state...
}
```

---

## Making Changes

### Adding a New Page

1. Create new file: `app/[new-page]/page.tsx`
2. Import components as needed
3. Use design system colors and typography
4. Export default React component
5. Server-side rendering by default (no 'use client' needed)

### Updating Product Data

Edit `data/products.json`:
```json
{
  "id": "prod_013",
  "name": "New Product",
  "category": "Electronics",
  "price": 99.99,
  "stock": 20,
  "description": "Product description...",
  "specs": {
    "spec1": "value1",
    "spec2": "value2"
  }
}
```

### Styling with DLB Colors

```typescript
// Use these color variables
const colors = {
  bg: '#0f1a2a',              // Dark navy background
  bgDark: '#0a1220',          // Darker navy
  text: '#f5f0eb',            // Primary text (off-white)
  textSecondary: '#d1ccc6',   // Secondary text
  coral: '#d4552a',           // Primary accent
  mint: '#4aa8a5',            // Secondary accent
  gold: '#d4a85a',            // Tertiary accent
  violet: '#7455bf',          // Quaternary accent
  steel: '#3d6abf'            // Quinary accent
}
```

### Font Families

```typescript
const fonts = {
  display: 'Playfair Display, serif',      // Headings
  body: 'Inter, sans-serif',               // Body text
  mono: 'JetBrains Mono, monospace'        // Labels/code
}
```

---

## Testing During Development

### Manual Testing Checklist
- [ ] Page renders without errors
- [ ] Responsive at 320px, 768px, 1024px
- [ ] Colors are correct (compare to DLB palette)
- [ ] Text is readable (check contrast)
- [ ] Buttons are clickable and have hover states
- [ ] Forms have proper labels and validation
- [ ] Mobile layouts stack correctly
- [ ] No horizontal scroll on any viewport

### Browser DevTools
```javascript
// In console, check computed styles
const el = document.querySelector('button')
window.getComputedStyle(el).backgroundColor
window.getComputedStyle(el).color
```

### Accessibility Checking
```javascript
// Check focus visibility
// Press Tab to navigate - focus ring should always be visible

// Check color contrast (use WebAIM contrast checker)
// Primary text #f5f0eb on #0f1a2a = 300:1 (AAA)
// Secondary text #d1ccc6 on #0f1a2a = 7:1 (AA+)
```

---

## Git Workflow

### Creating a Feature Branch
```bash
# Create new branch
git checkout -b feature/my-feature

# Make changes
# ... edit files ...

# Stage changes
git add .

# Commit
git commit -m "feat: Add new feature description"

# Push to remote
git push -u origin feature/my-feature
```

### Creating a Pull Request
```bash
# After pushing, create PR via GitHub
# https://github.com/lana-20/automation-exercise/pulls

# Or use gh CLI
gh pr create --title "Feature: New feature" --body "Description..."
```

### Deploying to Vercel
```bash
# Merge PR to main
git merge feature/my-feature

# Push to main (automatic deployment)
git push origin main

# Vercel automatically builds and deploys
# Check status at:
# https://vercel.com/begunova-1027s-projects/automation-exercise
```

---

## Useful Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Type check (TypeScript)
npm run type-check

# Format code (if configured)
npm run format

# Lint code (if configured)
npm run lint

# Run tests (if configured)
npm test

# Clean build artifacts
rm -rf .next/
```

---

## Troubleshooting

### Problem: "Cannot find module"
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: Port 3000 already in use
```bash
# Run on different port
npm run dev -- -p 3001

# Or kill the process
lsof -i :3000
kill -9 <PID>
```

### Problem: Build fails with TypeScript errors
```bash
# Check types
npx tsc --noEmit

# Fix errors in source files
```

### Problem: Hot reload not working
```bash
# Restart dev server
# Ctrl+C to stop
# npm run dev to start again
```

### Problem: Strange CSS/styling issues
```bash
# Clear next cache
rm -rf .next/

# Restart dev server
npm run dev
```

---

## Performance Tips

### Development
- Use `npm run dev` for hot reload during development
- Browser DevTools Network tab shows what's being loaded
- Chrome DevTools Lighthouse for performance audits

### Production Builds
- Always test with `npm run build && npm start`
- Check bundle size: `npm run build` shows output size
- Use Vercel Analytics for real user metrics

---

## Code Style

### TypeScript
- Use explicit types (no `any`)
- Components are typed as `React.FC<Props>`
- Props are defined as interfaces

### React Components
- Use functional components
- No `class` components
- Use hooks for state/effects

### CSS
- Inline styles with TypeScript object syntax
- CSS custom properties for colors
- Media queries in globals.css
- Responsive using grid and flexbox

### Naming
- Files: kebab-case (`cart-item.tsx`)
- Components: PascalCase (`CartItem`)
- Functions: camelCase (`addToCart`)
- CSS classes: kebab-case (`.cart-item`)

---

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Design System
- [DLB Design System](https://daisyladybug.com)
- Colors: See colors table above
- Typography: Playfair Display, Inter, JetBrains Mono

### Deployment
- [Vercel Docs](https://vercel.com/docs)
- Project: https://vercel.com/begunova-1027s-projects/automation-exercise
- Custom domain: automation-exercise.daisyladybug.com

---

## FAQ

**Q: How do I add a new product?**  
A: Edit `data/products.json` and add a new object with id, name, category, price, stock, and specs.

**Q: How do I change a color?**  
A: Find the hex code in your component's style object and replace it with a DLB color from the palette table above.

**Q: How do I make the site responsive?**  
A: Use media queries in `globals.css` or inline media queries in styled components. Mobile breakpoints: 480px, 768px, 1024px.

**Q: Where do I find the cart state?**  
A: `app/context/CartContext.tsx` — all cart logic lives there. Import `useCart` to use it in components.

**Q: How do I test accessibility?**  
A: Use browser DevTools > Lighthouse, or press Tab to test keyboard navigation. Check contrast with WebAIM.

**Q: Can I run tests?**  
A: Current project has no automated test setup. Add Vitest or Jest if needed: `npm install -D vitest`

---

**Last Updated:** June 5, 2026  
**Status:** Development Ready ✅
