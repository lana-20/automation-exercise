'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ background: '#ffffff' }}>
      {/* Hero Section - Minimal & Elegant */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: '#ffffff',
        borderBottom: '1px solid #e8e3de'
      }}>
        <div className="container-wide">
          <h1 style={{
            marginBottom: '40px',
            maxWidth: '85%',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '72px',
            fontWeight: '400',
            letterSpacing: '-0.02em',
            color: '#000000'
          }}>
            automation-exercise
          </h1>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            maxWidth: '65ch',
            color: '#3d3d3d',
            fontWeight: '400',
            letterSpacing: '0.3px'
          }}>
            An uncompromising e-commerce testing platform for discerning automation engineers.
            Production-grade checkout flows, comprehensive form validation, and the realities of modern commerce.
          </p>
          <div style={{ marginTop: '60px' }}>
            <Link href="/products" style={{
              display: 'inline-block',
              padding: '14px 48px',
              background: '#000000',
              color: '#ffffff',
              fontFamily: 'Sohne, sans-serif',
              fontSize: '13px',
              fontWeight: '500',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'opacity 300ms'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section style={{ height: '1px', background: '#e8e3de' }} />

      {/* What This Is Section */}
      <section style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        background: '#fafaf7'
      }}>
        <div className="container-wide">
          <div style={{ maxWidth: '70ch' }}>
            <div style={{
              fontFamily: 'Sohne, sans-serif',
              fontSize: '11px',
              fontWeight: '500',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#3d3d3d',
              marginBottom: '40px'
            }}>
              Purpose
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '48px',
              fontWeight: '400',
              marginTop: 0,
              marginBottom: '40px',
              color: '#000000'
            }}>
              Built Without Compromise
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#3d3d3d',
              marginBottom: '24px'
            }}>
              automation-exercise is a complete e-commerce system. Twelve curated products. Five thoughtful categories. Real shopping cart. Real form validation. Real checkout.
            </p>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#3d3d3d'
            }}>
              Every interaction reflects the demands of production systems. No shortcuts. No compromises.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section style={{ height: '1px', background: '#e8e3de' }} />

      {/* What You Get Section */}
      <section style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        background: '#ffffff'
      }}>
        <div className="container-wide">
          <div style={{ marginBottom: '80px' }}>
            <div style={{
              fontFamily: 'Sohne, sans-serif',
              fontSize: '11px',
              fontWeight: '500',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#3d3d3d',
              marginBottom: '40px'
            }}>
              Collection
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '80px' }}>
            {[
              {
                num: '12',
                label: 'Products',
                desc: 'Carefully selected items across electronics, apparel, home, and literature.'
              },
              {
                num: '5',
                label: 'Categories',
                desc: 'Organized with refinement. Filter, search, and sort with clarity.'
              },
              {
                num: '100+',
                label: 'Test Cases',
                desc: 'Complete checkout. Form validation. Stock management. Precision throughout.'
              }
            ].map((item, i) => (
              <div key={i} style={{ paddingTop: '40px', borderTop: '1px solid #e8e3de' }}>
                <div style={{
                  fontSize: '48px',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: '400',
                  marginBottom: '12px',
                  color: '#c9a961'
                }}>
                  {item.num}
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '20px',
                  fontWeight: '400',
                  marginBottom: '20px',
                  marginTop: 0,
                  color: '#000000'
                }}>
                  {item.label}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: '#3d3d3d',
                  maxWidth: '65ch'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section style={{ height: '1px', background: '#e8e3de' }} />

      {/* Featured Products Section */}
      <section style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        background: '#fafaf7'
      }}>
        <div className="container-wide">
          <div style={{
            fontFamily: 'Sohne, sans-serif',
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#3d3d3d',
            marginBottom: '80px'
          }}>
            Selection
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
            {[
              { icon: '💻', name: 'Wireless Headphones Pro', price: '$79.99' },
              { icon: '👕', name: 'Premium T-Shirt', price: '$24.99' },
              { icon: '🏠', name: 'Coffee Maker Deluxe', price: '$89.99' }
            ].map((product, i) => (
              <Link key={i} href="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '40px',
                  cursor: 'pointer',
                  transition: 'opacity 300ms'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                  <div style={{ fontSize: '56px', marginBottom: '32px', textAlign: 'center' }}>
                    {product.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px',
                    fontWeight: '400',
                    marginBottom: '20px',
                    marginTop: 0,
                    textAlign: 'center',
                    color: '#000000'
                  }}>
                    {product.name}
                  </h3>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '18px',
                    fontWeight: '400',
                    color: '#c9a961',
                    textAlign: 'center'
                  }}>
                    {product.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '80px', textAlign: 'center' }}>
            <Link href="/products" style={{
              display: 'inline-block',
              padding: '14px 48px',
              background: 'transparent',
              color: '#000000',
              fontFamily: 'Sohne, sans-serif',
              fontSize: '13px',
              fontWeight: '500',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: '1px solid #000000',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 300ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#000000'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#000000'
            }}>
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section style={{ height: '1px', background: '#e8e3de' }} />

      {/* The Experience Section */}
      <section style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        background: '#ffffff'
      }}>
        <div className="container-wide">
          <div style={{ maxWidth: '70ch' }}>
            <div style={{
              fontFamily: 'Sohne, sans-serif',
              fontSize: '11px',
              fontWeight: '500',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#3d3d3d',
              marginBottom: '40px'
            }}>
              The Complete Journey
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '48px',
              fontWeight: '400',
              marginTop: 0,
              marginBottom: '40px',
              color: '#000000'
            }}>
              From Discovery to Confirmation
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#3d3d3d',
              marginBottom: '24px'
            }}>
              Search. Discover. Add to cart. Proceed to checkout. Enter your details with confidence. Submit your order. Receive confirmation.
            </p>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#3d3d3d'
            }}>
              Every step is authentic. Every interaction matters.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section style={{ height: '1px', background: '#e8e3de' }} />

      {/* CTA Section - Minimal */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: '#000000',
        color: '#ffffff'
      }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: '#ffffff',
            fontSize: '48px',
            fontWeight: '400',
            marginTop: 0,
            marginBottom: '32px'
          }}>
            Begin
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#e8e3de',
            maxWidth: '65ch',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '60px'
          }}>
            The collection awaits. Twelve products. Complete workflows. Production-grade systems.
          </p>
          <Link href="/products" style={{
            display: 'inline-block',
            padding: '14px 48px',
            background: '#c9a961',
            color: '#000000',
            fontFamily: 'Sohne, sans-serif',
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            border: 'none',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'opacity 300ms'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* Footer - Minimal & Refined */}
      <footer style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#ffffff',
        borderTop: '1px solid #e8e3de'
      }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '100px', marginBottom: '80px' }}>
            <div>
              <h4 style={{
                fontFamily: 'Sohne, sans-serif',
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#3d3d3d',
                marginBottom: '24px',
                marginTop: 0
              }}>
                Explore
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '16px' }}>
                  <a href="/products" style={{
                    fontFamily: 'Sohne, sans-serif',
                    fontSize: '14px',
                    color: '#3d3d3d',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 300ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#c9a961'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                    Products
                  </a>
                </li>
                <li style={{ marginBottom: '16px' }}>
                  <a href="/cart" style={{
                    fontFamily: 'Sohne, sans-serif',
                    fontSize: '14px',
                    color: '#3d3d3d',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 300ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#c9a961'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/checkout" style={{
                    fontFamily: 'Sohne, sans-serif',
                    fontSize: '14px',
                    color: '#3d3d3d',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 300ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#c9a961'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                    Checkout
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{
                fontFamily: 'Sohne, sans-serif',
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#3d3d3d',
                marginBottom: '24px',
                marginTop: 0
              }}>
                About
              </h4>
              <p style={{
                fontFamily: 'Sohne, sans-serif',
                fontSize: '14px',
                lineHeight: '1.8',
                color: '#3d3d3d'
              }}>
                A professional testing platform designed for automation engineers.
              </p>
            </div>
            <div>
              <h4 style={{
                fontFamily: 'Sohne, sans-serif',
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#3d3d3d',
                marginBottom: '24px',
                marginTop: 0
              }}>
                Technical
              </h4>
              <p style={{
                fontFamily: 'Sohne, sans-serif',
                fontSize: '14px',
                lineHeight: '1.8',
                color: '#3d3d3d'
              }}>
                Next.js 16 · TypeScript · React · Tailwind CSS
              </p>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #e8e3de',
            paddingTop: '40px',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'Sohne, sans-serif',
              fontSize: '12px',
              color: '#3d3d3d',
              letterSpacing: '0.2px'
            }}>
              © 2024 automation-exercise. A testing platform.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
