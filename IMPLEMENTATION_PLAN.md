# Phase 2 Implementation — automation-exercise Build Plan

**Tech Stack:** Next.js 14 + TypeScript + Tailwind CSS + DLB Design System  
**Status:** In Progress  
**Target Completion:** Single day build

## File Structure

```
automation-exercise/
├── app/
│   ├── layout.tsx              # Root layout with Header + CartProvider
│   ├── globals.css             # Tailwind + DLB colors
│   ├── page.tsx                # Homepage (/)
│   ├── products/
│   │   ├── page.tsx            # Products list (with search/filter)
│   │   └── [id]/
│   │       └── page.tsx        # Product detail (/products/:id)
│   ├── cart/
│   │   └── page.tsx            # Shopping cart (/cart)
│   ├── checkout/
│   │   └── page.tsx            # Checkout form (/checkout)
│   ├── order-confirmation/
│   │   └── page.tsx            # Order confirmation
│   ├── components/
│   │   ├── Header.tsx          # Navigation + cart icon
│   │   ├── ProductCard.tsx     # Product grid card
│   │   ├── ProductGrid.tsx     # Product grid layout
│   │   ├── SearchFilter.tsx    # Search + category + sort
│   │   ├── CartSummary.tsx     # Totals display
│   │   ├── CheckoutForm.tsx    # Multi-step form
│   │   └── Alert.tsx           # Error/success messages
│   ├── context/
│   │   └── CartContext.tsx     # Cart state management
│   ├── hooks/
│   │   ├── useCart.ts          # Cart hook
│   │   └── useProducts.ts      # Products hook
│   └── api/
│       ├── products/
│       │   └── route.ts        # GET /api/products
│       ├── products/[id]/
│       │   └── route.ts        # GET /api/products/:id
│       └── checkout/
│           └── route.ts        # POST /api/checkout
├── data/
│   └── products.json           # Product catalog (12 items)
├── public/
│   └── images/                 # Product images (placeholder)
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Implementation Steps

### Step 1: Core Setup ✓
- [x] Initialize Next.js project
- [x] Configure Tailwind + DLB colors
- [x] Create product data (12 products)
- [x] Set up TypeScript

### Step 2: Context & State Management
- [ ] Create CartContext (useState + useContext)
- [ ] Implement cart hooks (useCart)
- [ ] Add localStorage persistence

### Step 3: Components
- [ ] Header with logo + cart icon + search
- [ ] ProductCard (image, name, price, stock, add to cart button)
- [ ] ProductGrid (responsive 3-col grid)
- [ ] SearchFilter (search input, category select, sort select)
- [ ] CartSummary (subtotal, tax, shipping, total)
- [ ] CheckoutForm (shipping info + payment fields + validation)
- [ ] Alert (error/success messages)

### Step 4: Pages
- [ ] Homepage (/) - Welcome + featured products
- [ ] Products (/products) - Product grid + search + filter
- [ ] Product Detail (/products/:id) - Full product details + add to cart
- [ ] Cart (/cart) - Cart items + quantities + totals + promo code
- [ ] Checkout (/checkout) - Shipping form + payment method
- [ ] Order Confirmation (/order-confirmation) - Order details + confirmation

### Step 5: API Routes
- [ ] GET /api/products - List all products
- [ ] GET /api/products/:id - Get single product
- [ ] POST /api/checkout - Process order (validate form, create order)

### Step 6: Validation & Errors
- [ ] Email validation (email regex)
- [ ] Phone validation (###-###-#### format)
- [ ] Zip code validation (5 digits)
- [ ] Card number validation (16 digits)
- [ ] Required field validation
- [ ] Stock validation (don't allow purchase if out of stock)
- [ ] Cart limit validation (max 99 items per product)

### Step 7: Features
- [ ] Search by product name (case-insensitive)
- [ ] Filter by category
- [ ] Sort by price / popularity
- [ ] Add to cart (single + multiple quantities)
- [ ] View cart (show items + totals)
- [ ] Remove from cart
- [ ] Update quantities
- [ ] Apply promo code (simulation: "SAVE10" = 10% off)
- [ ] Shipping method selection (Standard free, Express +$15, Overnight +$25)
- [ ] Form submission → Order confirmation
- [ ] Order number generation (ORD-YYYY-XXXXXX format)

### Step 8: Styling
- [ ] DLB color scheme (dark bg, coral accents, mint success)
- [ ] Responsive design (mobile-first, Tailwind breakpoints)
- [ ] Hover states (buttons, links, product cards)
- [ ] Form styling (inputs, selects, validation states)
- [ ] Loading states (spinners, disabled buttons)

### Step 9: Testing & Validation
- [ ] Manual testing of all workflows
- [ ] Edge case testing (out of stock, invalid inputs)
- [ ] Browser compatibility (Chrome, Firefox, Safari)
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Accessibility check (keyboard navigation, ARIA labels)

### Step 10: Deployment Preparation
- [ ] Build optimization (Next.js build)
- [ ] Environment variables (if needed)
- [ ] Static export (if needed for static hosting)
- [ ] Deploy to daisyladybug.com (via /dlb-page or manual)

## Measurement Workflow

**CLI Test Flow (target: ~12s):**
```
1. Navigate to homepage (2s)
2. Map elements (1s)
3. Search/filter products (1s)
4. Click product detail (1.5s)
5. Map detail page (1s)
6. Add to cart (1s)
7. Navigate to cart (1.5s)
8. Click checkout (1s)
9. Fill form (1.5s)
10. Submit (1s)
11. Verify confirmation (1s)
12. Navigate back (0.5s)
```

**MCP Test Flow (target: ~36s @ 3.0×):**
- Same workflow
- Additional validation checks
- Error handling verification

## Success Criteria

- ✅ All 5 pages functional and accessible
- ✅ Product search/filter working
- ✅ Cart add/remove/update working
- ✅ Checkout form validates all fields
- ✅ Order confirmation displays correctly
- ✅ Mobile responsive
- ✅ DLB design system applied
- ✅ CLI measurement ~12s ±2s
- ✅ Ready for measurement phase

## Timeline

- **Setup:** 30 min (structure, config, data)
- **Components:** 2 hours (reusable UI components)
- **Pages:** 1.5 hours (5 pages)
- **API:** 30 min (3 endpoints)
- **Validation:** 1 hour (form validation)
- **Styling:** 1 hour (responsive, DLB colors)
- **Testing:** 1 hour (manual testing, edge cases)
- **Deployment:** 30 min (build + deploy)

**Total: ~8 hours** (can be split over sessions)

## Next Steps

1. Create CartContext and state management
2. Build core components (Header, ProductCard, etc.)
3. Implement pages with real data
4. Add API routes
5. Add form validation
6. Style with Tailwind + DLB colors
7. Test all workflows
8. Deploy to daisyladybug.com
9. Measure (CLI + MCP)
10. Document results

---

**Status:** Ready to start implementation  
**Lead:** User (project owner)  
**Framework:** Next.js 14  
**Design System:** Daisy Lady Bug (DLB)  
**Target Date:** Complete ASAP for measurement
