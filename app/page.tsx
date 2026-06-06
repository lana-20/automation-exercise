'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ background: '#0f1a2a' }}>
      {/* Hero Section */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'linear-gradient(135deg, #0f1a2a 0%, #13243a 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container-wide">
          <h1 style={{
            marginBottom: '32px',
            maxWidth: '90%',
            color: '#f5f0eb',
            fontSize: '64px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '500',
            letterSpacing: '-0.01em'
          }}>
            automation-exercise
          </h1>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '70ch',
            color: 'rgba(245,240,235,0.65)',
            marginBottom: '56px',
            fontFamily: 'Inter, sans-serif'
          }}>
            A production-grade e-commerce testing platform designed for professional automation engineers.
            Real checkout flows, comprehensive form validation, and the friction of modern commerce systems.
          </p>
          <Link href="/products" className="btn-primary" style={{ textDecoration: 'none' }}>
            Explore Products
          </Link>
        </div>
      </section>

      {/* What This Is */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: '#0f1a2a',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px', alignItems: 'start' }}>
            <div>
              <span className="section-eyebrow">Overview</span>
              <h2 style={{
                marginTop: '16px',
                marginBottom: 0,
                fontSize: '48px'
              }}>
                Built for Testing
              </h2>
            </div>
            <div>
              <p style={{ color: 'rgba(245,240,235,0.65)', fontSize: '16px', lineHeight: '1.8' }}>
                automation-exercise replaces legacy testing sandboxes with a complete, production-grade e-commerce platform.
                Twelve products across five categories. Real shopping cart. Real form validation. Real checkout flow.
              </p>
              <p style={{ color: 'rgba(245,240,235,0.65)', fontSize: '16px', lineHeight: '1.8' }}>
                Every interaction is authentic. Every validation is thorough. Every edge case is present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#0f1a2a'
      }}>
        <div className="container-wide">
          <span className="section-eyebrow">Features</span>
          <h2 style={{ marginTop: 0, marginBottom: '60px' }}>
            What's Included
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              {
                num: '12',
                label: 'Products',
                desc: 'Diverse catalog across Electronics, Apparel, Home, and Books with real pricing and stock limits.'
              },
              {
                num: '5',
                label: 'Categories',
                desc: 'Clean taxonomy with filtering, searching, and sorting capabilities built in.'
              },
              {
                num: '∞',
                label: 'Test Cases',
                desc: 'Complete checkout flow with validation, cart calculations, and edge case handling.'
              }
            ].map((item, i) => (
              <div key={i} className="card">
                <div style={{
                  fontSize: '48px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '500',
                  marginBottom: '12px',
                  color: '#d4552a'
                }}>
                  {item.num}
                </div>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '16px',
                  fontSize: '20px'
                }}>
                  {item.label}
                </h3>
                <p style={{
                  marginBottom: 0,
                  fontSize: '14px',
                  color: 'rgba(245,240,235,0.65)'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#13243a',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container-wide">
          <span className="section-eyebrow">Sample</span>
          <h2 style={{ marginTop: 0, marginBottom: '60px' }}>
            Featured Products
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '60px' }}>
            {[
              { icon: '💻', name: 'Wireless Headphones Pro', price: '$79.99' },
              { icon: '👕', name: 'Premium T-Shirt', price: '$24.99' },
              { icon: '🏠', name: 'Coffee Maker Deluxe', price: '$89.99' }
            ].map((product, i) => (
              <Link key={i} href="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product-card" style={{ padding: '40px', textAlign: 'center' }}>
                  <div style={{ fontSize: '56px', marginBottom: '24px' }}>
                    {product.icon}
                  </div>
                  <h3 style={{
                    marginTop: 0,
                    marginBottom: '16px',
                    fontSize: '18px'
                  }}>
                    {product.name}
                  </h3>
                  <div className="price-new" style={{ marginBottom: 0 }}>
                    {product.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/products" className="btn-primary" style={{ textDecoration: 'none' }}>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* The Flow */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#0f1a2a',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container-wide">
          <div style={{ maxWidth: '70ch' }}>
            <span className="section-eyebrow">Experience</span>
            <h2 style={{ marginTop: 0 }}>
              The Complete Journey
            </h2>
            <p style={{ color: 'rgba(245,240,235,0.65)', marginBottom: '16px' }}>
              Search for products by name. Filter by category. Sort by price. Add items to your cart.
            </p>
            <p style={{ color: 'rgba(245,240,235,0.65)', marginBottom: '16px' }}>
              Review your order. Proceed to checkout. Fill out the form with validation. Submit your order.
            </p>
            <p style={{ color: 'rgba(245,240,235,0.65)' }}>
              Receive order confirmation with summary. Everything you'd expect from a production e-commerce system.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        background: 'linear-gradient(135deg, #13243a 0%, #0d1e30 100%)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        textAlign: 'center'
      }}>
        <div className="container-wide">
          <h2 style={{ marginTop: 0, marginBottom: '24px' }}>
            Ready to Test
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'rgba(245,240,235,0.65)',
            maxWidth: '65ch',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '48px'
          }}>
            Explore a complete e-commerce platform designed for automation testing professionals.
          </p>
          <Link href="/products" className="btn-primary" style={{ textDecoration: 'none' }}>
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        background: '#0a1220',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container-wide">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '60px',
            marginBottom: '60px'
          }}>
            <div>
              <h4 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d4552a',
                marginBottom: '20px',
                marginTop: 0
              }}>
                Testing
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="/products" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(245,240,235,0.65)',
                    textDecoration: 'none',
                    transition: 'color 150ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f5f0eb'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,240,235,0.65)'}>
                    Products
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="/cart" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(245,240,235,0.65)',
                    textDecoration: 'none',
                    transition: 'color 150ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f5f0eb'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,240,235,0.65)'}>
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/checkout" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(245,240,235,0.65)',
                    textDecoration: 'none',
                    transition: 'color 150ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f5f0eb'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,240,235,0.65)'}>
                    Checkout
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d4552a',
                marginBottom: '20px',
                marginTop: 0
              }}>
                About
              </h4>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'rgba(245,240,235,0.65)',
                lineHeight: '1.6'
              }}>
                A professional e-commerce testing platform built for automation engineers.
              </p>
            </div>
            <div>
              <h4 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d4552a',
                marginBottom: '20px',
                marginTop: 0
              }}>
                Build
              </h4>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                color: 'rgba(245,240,235,0.65)',
                lineHeight: '1.6'
              }}>
                Next.js 16 · TypeScript · React · Tailwind CSS
              </p>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '40px',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              color: 'rgba(245,240,235,0.38)',
              letterSpacing: '0.1em'
            }}>
              © 2024 automation-exercise. A testing sandbox.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
