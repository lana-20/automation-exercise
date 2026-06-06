import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ background: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{
        borderBottom: '2px solid #000000',
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#ffffff'
      }}>
        <div className="container-wide">
          <h1 style={{
            marginBottom: '24px',
            maxWidth: '90%'
          }}>
            automation-exercise
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '70ch', color: '#2a2a2a' }}>
            A professional e-commerce testing sandbox built for serious automation engineers.
            Real checkout flows, form validation, edge cases, and the honest friction of production-grade systems.
            No marketing bullshit. Just products, shopping, and order confirmation.
          </p>
          <div style={{ marginTop: '48px' }}>
            <Link href="/products" style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#000000',
              color: '#ffffff',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '2px solid #000000',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 150ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b87333'
              e.currentTarget.style.borderColor = '#b87333'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000000'
              e.currentTarget.style.borderColor = '#000000'
            }}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* What This Is Section */}
      <section style={{
        borderBottom: '2px solid #d0ccc4',
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#f5f1e8'
      }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#9ca890',
                marginBottom: '24px'
              }}>
                Purpose
              </div>
              <h2 style={{ fontSize: '42px', marginTop: 0 }}>
                Built for Testing
              </h2>
            </div>
            <div style={{ maxWidth: '65ch' }}>
              <p>
                automation-exercise exists to replace older testing sandboxes.
                It's a full e-commerce implementation with 12 products across 5 categories,
                shopping cart functionality, form validation, real checkout flow, and order confirmation.
              </p>
              <p>
                Every page you interact with is production code—not a mock or a demo.
                The friction is real. The validation is thorough. The edge cases are there.
              </p>
              <p style={{ marginBottom: 0 }}>
                This is what modern e-commerce testing looks like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{
        borderBottom: '2px solid #d0ccc4',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}>
        <div className="container-wide">
          <div style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#9ca890',
            marginBottom: '48px'
          }}>
            What You Get
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
            {[
              {
                num: '12',
                label: 'Products',
                desc: 'Diverse catalog across Electronics, Apparel, Home, and Books. Real prices, real stock limits.'
              },
              {
                num: '5',
                label: 'Categories',
                desc: 'Clean taxonomy. Filter by category, search by name, sort by price. The basics done right.'
              },
              {
                num: '∞',
                label: 'Test Cases',
                desc: 'Complete checkout flow. Form validation. Stock edge cases. Cart calculations. Everything matters.'
              }
            ].map((item, i) => (
              <div key={i} style={{ borderTop: '2px solid #000000', paddingTop: '32px' }}>
                <div style={{
                  fontSize: '48px',
                  fontFamily: 'Crimson Text, serif',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  {item.num}
                </div>
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  color: '#b87333'
                }}>
                  {item.label}
                </div>
                <p style={{ maxWidth: '65ch', fontSize: '15px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Spotlight Section */}
      <section style={{
        borderBottom: '2px solid #d0ccc4',
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#f5f1e8'
      }}>
        <div className="container-wide">
          <div style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#9ca890',
            marginBottom: '48px'
          }}>
            Sample Products
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            {[
              { icon: '💻', name: 'Wireless Headphones Pro', price: '$79.99', desc: 'Noise-canceling. Extended wear. Real user reviews.' },
              { icon: '👕', name: 'Premium T-Shirt', price: '$24.99', desc: 'Breathable fabric. True-to-size. Stock limits enforced.' },
              { icon: '🏠', name: 'Coffee Maker Deluxe', price: '$89.99', desc: 'Programmable brew. Thermal carafe. In stock.' }
            ].map((product, i) => (
              <Link key={i} href="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  border: '1px solid #d0ccc4',
                  padding: '32px',
                  background: '#ffffff',
                  cursor: 'pointer',
                  transition: 'border-color 150ms'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#b87333'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#d0ccc4'}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                    {product.icon}
                  </div>
                  <h3 style={{ fontSize: '20px', marginBottom: '12px', marginTop: 0 }}>
                    {product.name}
                  </h3>
                  <div style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#b87333',
                    marginBottom: '16px'
                  }}>
                    {product.price}
                  </div>
                  <p style={{ fontSize: '14px', color: '#2a2a2a', maxWidth: '65ch' }}>
                    {product.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Checkout Section */}
      <section style={{
        borderBottom: '2px solid #d0ccc4',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}>
        <div className="container-wide">
          <div style={{ maxWidth: '70ch' }}>
            <div style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9ca890',
              marginBottom: '24px'
            }}>
              Real World
            </div>
            <h2 style={{ fontSize: '42px', marginTop: 0 }}>
              The Checkout Works
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Every click matters. Search products. Add to cart. Update quantities. Proceed to checkout.
              Fill a real form with validation. See totals recalculate. Submit. Receive confirmation with your order.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              No fake shortcuts. No hardcoded results. This is what you're testing against.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        borderTop: '2px solid #000000',
        borderBottom: '2px solid #000000',
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#000000',
        color: '#ffffff'
      }}>
        <div className="container-wide">
          <h2 style={{
            color: '#ffffff',
            fontSize: '42px',
            marginTop: 0,
            marginBottom: '32px'
          }}>
            Start Testing
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#f5f1e8', maxWidth: '65ch' }}>
            Everything is ready. 12 products. Real forms. Complete flows. Edge cases included.
          </p>
          <div style={{ marginTop: '48px' }}>
            <Link href="/products" style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#b87333',
              color: '#ffffff',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '2px solid #b87333',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 150ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#000000'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#b87333'
              e.currentTarget.style.color = '#ffffff'
            }}>
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '2px solid #d0ccc4',
        paddingTop: '60px',
        paddingBottom: '60px',
        background: '#ffffff'
      }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '80px', marginBottom: '80px' }}>
            <div>
              <div style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#9ca890',
                marginBottom: '20px'
              }}>
                Testing
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="/products" style={{ color: '#000000', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#b87333'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                    Products
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="/cart" style={{ color: '#000000', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#b87333'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/checkout" style={{ color: '#000000', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#b87333'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                    Checkout
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#9ca890',
                marginBottom: '20px'
              }}>
                About
              </div>
              <p style={{ fontSize: '14px', maxWidth: '65ch' }}>
                A professional e-commerce testing platform built for automation engineers.
              </p>
            </div>
            <div>
              <div style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#9ca890',
                marginBottom: '20px'
              }}>
                Build
              </div>
              <p style={{ fontSize: '14px', maxWidth: '65ch' }}>
                Next.js 16 · TypeScript · React · Tailwind CSS</p>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #d0ccc4',
            paddingTop: '40px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#9ca890',
            fontFamily: 'IBM Plex Mono, monospace'
          }}>
            © 2024 automation-exercise. A testing sandbox.
          </div>
        </div>
      </footer>
    </main>
  )
}

const dealProducts = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    limited: true,
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    limited: true,
  },
  {
    id: '3',
    name: 'Premium T-Shirt',
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    limited: true,
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 59.99,
    originalPrice: 99.99,
    discount: 40,
    limited: false,
  },
  {
    id: '5',
    name: 'Coffee Maker Deluxe',
    price: 89.99,
    originalPrice: 159.99,
    discount: 44,
    limited: true,
  },
  {
    id: '6',
    name: 'Desk Lamp LED',
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    limited: false,
  },
]

{/* Old sections below for reference - can be removed */}

      {/* Promotional Cards Section - COMMENTED OUT
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-8">
          <div className="section-eyebrow">— Quick Access</div>
          <h2 className="section-title">Shop by Category</h2>

          <div className="grid grid-cols-4 gap-6">
            {[
              { title: 'Electronics', icon: '💻', color: 'blue' },
              { title: 'Apparel', icon: '👕', color: 'green' },
              { title: 'Home & Garden', icon: '🏠', color: 'purple' },
              { title: 'Books', icon: '📚', color: 'red' },
            ].map((cat, idx) => (
              <div key={idx} className="product-card text-center p-8">
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="font-bold text-lg mb-3">{cat.title}</h3>
                <Link href="/products" className="text-blue-600 hover:text-red-600 font-bold text-sm transition">
                  Explore {cat.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightning Deals Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="section-eyebrow">⚡ Limited Time</div>
              <h2 className="section-title">Lightning Deals</h2>
            </div>
            <Link href="/products" className="text-blue-600 hover:text-red-600 font-bold transition">
              See all deals →
            </Link>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {dealProducts.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="product-card group"
              >
                <div className="w-full h-40 bg-gray-100 rounded mb-3 flex items-center justify-center group-hover:bg-gray-150 transition text-4xl">
                  📦
                </div>

                {product.discount && (
                  <>
                    <div className="badge-deal">{product.discount}% off</div>
                    {product.limited && (
                      <div className="text-xs text-red-600 font-bold mb-2">Limited time</div>
                    )}
                  </>
                )}

                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition mb-3">
                  {product.name}
                </h3>

                <div className="space-y-1 mb-3">
                  <div className="price-new">${product.price.toFixed(2)}</div>
                  {product.originalPrice && (
                    <div className="price-old">${product.originalPrice.toFixed(2)}</div>
                  )}
                </div>

                <p className="text-xs text-green-700 font-bold">In Stock</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Heavy Discounts Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="section-eyebrow">🔥 Up to 50% Off</div>
              <h2 className="section-title">Heavy Discount Deals</h2>
            </div>
            <Link href="/products" className="text-blue-600 hover:text-red-600 font-bold transition">
              See all deals →
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {dealProducts.filter((p) => p.discount && p.discount > 40).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="product-card group"
              >
                <div className="w-full h-48 bg-gray-100 rounded mb-4 flex items-center justify-center group-hover:bg-gray-150 transition text-5xl">
                  📦
                </div>

                {product.discount && (
                  <>
                    <div className="badge-deal">{product.discount}% off</div>
                    {product.limited && (
                      <div className="text-xs text-red-600 font-bold mb-2">Limited time deal</div>
                    )}
                  </>
                )}

                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition mb-4">
                  {product.name}
                </h3>

                <div className="space-y-1 mb-4">
                  <div className="price-new">${product.price.toFixed(2)}</div>
                  {product.originalPrice && (
                    <div className="price-old">${product.originalPrice.toFixed(2)}</div>
                  )}
                </div>

                <p className="text-xs text-green-700 font-bold">In Stock</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-12">
          <div className="section-eyebrow">— Features</div>
          <h2 className="section-title">Why automation-exercise?</h2>

          <div className="grid grid-cols-4 gap-6">
            {[
              {
                title: 'Real E-Commerce Flow',
                desc: 'Complete checkout experience with full validation and order processing',
                icon: '✓',
              },
              {
                title: '12 Test Products',
                desc: 'Diverse products across 5 categories for comprehensive testing',
                icon: '🛍️',
              },
              {
                title: 'Edge Cases Built-in',
                desc: 'Stock limits, price calculations, and validation scenarios',
                icon: '⚙️',
              },
              {
                title: 'Professional Testing',
                desc: 'Designed specifically for automation testing professionals',
                icon: '🎯',
              },
            ].map((item, idx) => (
              <div key={idx} className="product-card p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-12">
          <div className="section-eyebrow">— By The Numbers</div>
          <h2 className="section-title">Platform Overview</h2>

          <div className="grid grid-cols-4 gap-6">
            {[
              { number: '12', label: 'Products' },
              { number: '5', label: 'Categories' },
              { number: '100+', label: 'Test Cases' },
              { number: '∞', label: 'Scenarios' },
            ].map((stat, idx) => (
              <div key={idx} className="product-card p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-sm text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container-wide py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Testing?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Explore our complete e-commerce platform with real-world testing scenarios
          </p>
          <Link href="/products" className="btn-primary bg-amber-400 hover:bg-amber-500 text-black">
            Browse All Products
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-wide py-12">
          <div className="grid grid-cols-5 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4">Get to Know Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Testing Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 automation-exercise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
