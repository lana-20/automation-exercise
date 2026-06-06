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
        borderBottom: '3px solid #d4552a'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <h1 style={{
            marginBottom: '32px',
            maxWidth: '90%',
            color: '#f5f0eb',
            fontSize: '64px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '500',
            letterSpacing: '-0.01em',
            marginTop: 0,
            backgroundImage: 'linear-gradient(90deg, #f5f0eb 0%, #d4a85a 50%, #4aa8a5 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            automation-exercise
          </h1>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '70ch',
            color: '#d1ccc6',
            marginBottom: '56px',
            fontFamily: 'Inter, sans-serif'
          }}>
            A production-grade e-commerce testing platform designed for professional automation engineers.
            Real checkout flows, comprehensive form validation, and the friction of modern commerce systems.
          </p>
          <Link href="/products" className="btn-primary" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: '#d4552a',
            color: '#f5f0eb',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 150ms',
            boxShadow: '0 4px 12px rgba(212, 85, 42, 0.3)',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e8785a'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 85, 42, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#d4552a'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 85, 42, 0.3)'
          }}>
            Explore Products
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: '#0f1a2a',
        borderBottom: '3px solid #7455bf'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px', alignItems: 'start' }}>
            <div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                fontWeight: '500',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#7455bf',
                marginBottom: '16px',
                marginTop: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#7455bf'
                }}></span>
                Overview
              </span>
              <h2 style={{
                marginTop: '16px',
                marginBottom: 0,
                fontSize: '48px',
                color: '#f5f0eb',
                fontFamily: 'Playfair Display, serif'
              }}>
                Built for Testing
              </h2>
            </div>
            <div>
              <p style={{ color: '#d1ccc6', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                automation-exercise replaces legacy testing sandboxes with a complete, production-grade e-commerce platform.
                Twelve products across five categories. Real shopping cart. Real form validation. Real checkout flow.
              </p>
              <p style={{ color: '#d1ccc6', fontSize: '16px', lineHeight: '1.8' }}>
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
        background: '#0f1a2a',
        borderBottom: '3px solid #4aa8a5'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            fontWeight: '500',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#d4a85a',
            marginBottom: '16px',
            marginTop: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#d4a85a'
            }}></span>
            Features
          </span>
          <h2 style={{ marginTop: 0, marginBottom: '60px', color: '#f5f0eb', fontFamily: 'Playfair Display, serif' }}>
            What's Included
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { num: '12', label: 'Products', desc: 'Diverse catalog across Electronics, Apparel, Home, and Books with real pricing and stock limits.', color: '#4aa8a5' },
              { num: '5', label: 'Categories', desc: 'Clean taxonomy with filtering, searching, and sorting capabilities built in.', color: '#d4a85a' },
              { num: '∞', label: 'Test Cases', desc: 'Complete checkout flow with validation, cart calculations, and edge case handling.', color: '#7455bf' }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(19,36,58,0.5)',
                border: `2px solid ${item.color}`,
                borderRadius: '8px',
                padding: '24px',
                transition: 'all 150ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(19,36,58,0.8)'
                e.currentTarget.style.boxShadow = `0 8px 20px ${item.color}20`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(19,36,58,0.5)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  fontSize: '48px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '500',
                  marginBottom: '12px',
                  color: item.color
                }}>
                  {item.num}
                </div>
                <h3 style={{
                  marginTop: 0,
                  marginBottom: '16px',
                  fontSize: '20px',
                  color: '#f5f0eb'
                }}>
                  {item.label}
                </h3>
                <p style={{
                  marginBottom: 0,
                  fontSize: '14px',
                  color: '#d1ccc6'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#13243a',
        borderTop: '3px solid #3d6abf',
        borderBottom: '3px solid #3d6abf'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            fontWeight: '500',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#3d6abf',
            marginBottom: '16px',
            marginTop: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#3d6abf'
            }}></span>
            Sample
          </span>
          <h2 style={{ marginTop: 0, marginBottom: '60px', color: '#f5f0eb', fontFamily: 'Playfair Display, serif' }}>
            Featured Products
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '60px' }}>
            {[
              { icon: '💻', name: 'Wireless Headphones Pro', price: '$79.99' },
              { icon: '👕', name: 'Premium T-Shirt', price: '$24.99' },
              { icon: '🏠', name: 'Coffee Maker Deluxe', price: '$89.99' }
            ].map((product, i) => (
              <Link key={i} href="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  background: '#0f1a2a',
                  border: '2px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '40px',
                  textAlign: 'center',
                  transition: 'all 150ms',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#d4a85a'
                  e.currentTarget.style.background = '#0d1e30'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 170, 90, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = '#0f1a2a'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{ fontSize: '56px', marginBottom: '24px' }}>
                    {product.icon}
                  </div>
                  <h3 style={{
                    marginTop: 0,
                    marginBottom: '16px',
                    fontSize: '18px',
                    color: '#f5f0eb'
                  }}>
                    {product.name}
                  </h3>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#d4a85a',
                    letterSpacing: '-0.01em'
                  }}>
                    {product.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/products" style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#d4552a',
              color: '#f5f0eb',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 150ms',
              boxShadow: '0 4px 12px rgba(212, 85, 42, 0.3)',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e8785a'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 85, 42, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#d4552a'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 85, 42, 0.3)'
            }}>
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
        borderBottom: '3px solid #4aa8a5'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '70ch' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              fontWeight: '500',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#4aa8a5',
              marginBottom: '16px',
              marginTop: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#4aa8a5'
              }}></span>
              Experience
            </span>
            <h2 style={{ marginTop: '0', color: '#f5f0eb', fontFamily: 'Playfair Display, serif' }}>The Complete Journey</h2>
            <p style={{ color: '#d1ccc6', marginBottom: '16px' }}>
              Search for products by name. Filter by category. Sort by price. Add items to your cart.
            </p>
            <p style={{ color: '#d1ccc6', marginBottom: '16px' }}>
              Review your order. Proceed to checkout. Fill out the form with validation. Submit your order.
            </p>
            <p style={{ color: '#d1ccc6' }}>
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
        borderTop: '3px solid #d4a85a',
        textAlign: 'center'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ marginTop: '0', marginBottom: '24px', color: '#f5f0eb', fontFamily: 'Playfair Display, serif' }}>
            Ready to Test
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#d1ccc6',
            maxWidth: '65ch',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '48px'
          }}>
            Explore a complete e-commerce platform designed for automation testing professionals.
          </p>
          <Link href="/products" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: '#d4552a',
            color: '#f5f0eb',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 150ms',
            boxShadow: '0 4px 12px rgba(212, 85, 42, 0.3)',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e8785a'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 85, 42, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#d4552a'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 85, 42, 0.3)'
          }}>
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        background: '#0a1220',
        borderTop: '3px solid #7455bf'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
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
                    color: '#d1ccc6',
                    textDecoration: 'none',
                    transition: 'color 150ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f5f0eb'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1ccc6'}>
                    Products
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="/cart" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#d1ccc6',
                    textDecoration: 'none',
                    transition: 'color 150ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f5f0eb'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1ccc6'}>
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/checkout" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#d1ccc6',
                    textDecoration: 'none',
                    transition: 'color 150ms'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f5f0eb'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1ccc6'}>
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
                color: '#4aa8a5',
                marginBottom: '20px',
                marginTop: 0
              }}>
                About
              </h4>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#d1ccc6',
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
                color: '#d4a85a',
                marginBottom: '20px',
                marginTop: 0
              }}>
                Build
              </h4>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                color: '#d1ccc6',
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
