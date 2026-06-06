'use client'

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
                Next.js 16 · TypeScript · React · Tailwind CSS
              </p>
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
