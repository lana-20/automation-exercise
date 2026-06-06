'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface OrderItem {
  id: string
  name: string
  category: string
  price: number
  quantity: number
}

interface Order {
  items: OrderItem[]
  total: number
}

export default function ConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const lastOrder = sessionStorage.getItem('lastOrder')
    if (lastOrder) {
      setOrder(JSON.parse(lastOrder))
    }
  }, [])

  if (!order) {
    return (
      <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
        <section style={{ paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
          <div style={{
            width: '100%',
            maxWidth: '960px',
            margin: '0 auto',
            paddingLeft: '80px',
            paddingRight: '80px',
            boxSizing: 'border-box'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#d1ccc6',
              marginBottom: '32px'
            }}>
              No order found. Redirecting to products...
            </p>
            <Link
              href="/products"
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: '#d4552a',
                color: '#f5f0eb',
                fontWeight: '600',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'background 150ms',
                fontSize: '14px',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e8785a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#d4552a'}
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const subtotal = order.total
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  return (
    <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
      {/* Success Section */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #0f1a2a 0%, #13243a 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
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
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>✓</div>
          <h1 style={{
            fontSize: '48px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '500',
            color: '#f5f0eb',
            marginBottom: '16px',
            marginTop: 0
          }}>
            Order Confirmed
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#d1ccc6',
            marginBottom: 0,
            lineHeight: '1.8'
          }}>
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>
            {/* Order Details */}
            <div>
              {/* Order Summary Card */}
              <article style={{
                background: 'rgba(19,36,58,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '32px',
                marginBottom: '40px'
              }}>
                <h2 style={{
                  fontSize: '18px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '500',
                  color: '#f5f0eb',
                  marginTop: 0,
                  marginBottom: '24px'
                }}>
                  Order Summary
                </h2>

                {/* Items */}
                <div style={{
                  marginBottom: '24px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)'
                }}>
                  {order.items.map((item, idx) => (
                    <div key={idx} style={{
                      marginBottom: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start'
                    }}>
                      <div>
                        <div style={{
                          fontSize: '14px',
                          color: '#f5f0eb',
                          fontWeight: '500',
                          marginBottom: '4px'
                        }}>
                          {item.name}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#a8a39d',
                          fontFamily: 'JetBrains Mono, monospace',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em'
                        }}>
                          {item.category} × {item.quantity}
                        </div>
                      </div>
                      <div style={{
                        fontSize: '16px',
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: '500',
                        color: '#d4552a'
                      }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: '#d1ccc6' }}>Subtotal</span>
                    <span style={{ color: '#f5f0eb' }}>${subtotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: '#d1ccc6' }}>Tax (10%)</span>
                    <span style={{ color: '#f5f0eb' }}>${tax.toFixed(2)}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '14px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <span style={{ color: '#d1ccc6' }}>Shipping</span>
                    <span style={{ color: '#f5f0eb' }}>
                      {shipping === 0 ? (
                        <span style={{ color: '#4aa8a5' }}>FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <span style={{
                      fontSize: '13px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#a8a39d'
                    }}>
                      Total
                    </span>
                    <span style={{
                      fontSize: '22px',
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: '500',
                      color: '#d4552a'
                    }}>
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </article>

              {/* Confirmation Message */}
              <div style={{
                background: 'rgba(74, 168, 165, 0.12)',
                border: '1px solid rgba(74, 168, 165, 0.3)',
                borderRadius: '6px',
                padding: '20px'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#d1ccc6',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  <span style={{ marginRight: '8px' }}>📧</span>
                  A confirmation email has been sent with order details and tracking information.
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <aside>
              <article style={{
                background: 'rgba(19,36,58,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '28px'
              }}>
                <h3 style={{
                  fontSize: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#d4552a',
                  marginTop: 0,
                  marginBottom: '20px'
                }}>
                  What's Next
                </h3>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  <li style={{
                    fontSize: '13px',
                    color: '#d1ccc6',
                    lineHeight: '1.6'
                  }}>
                    <span style={{ marginRight: '8px' }}>✓</span>
                    Order being prepared for shipment
                  </li>
                  <li style={{
                    fontSize: '13px',
                    color: '#d1ccc6',
                    lineHeight: '1.6'
                  }}>
                    <span style={{ marginRight: '8px' }}>✓</span>
                    Tracking details within 24 hours
                  </li>
                  <li style={{
                    fontSize: '13px',
                    color: '#d1ccc6',
                    lineHeight: '1.6'
                  }}>
                    <span style={{ marginRight: '8px' }}>✓</span>
                    Estimated delivery: 5-7 business days
                  </li>
                </ul>
              </article>
            </aside>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginTop: '60px'
          }}>
            <Link
              href="/"
              style={{
                display: 'block',
                padding: '14px 24px',
                background: '#d4552a',
                color: '#f5f0eb',
                fontWeight: '600',
                borderRadius: '4px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'background 150ms',
                fontSize: '14px',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e8785a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#d4552a'}
            >
              Back to Home
            </Link>

            <Link
              href="/products"
              style={{
                display: 'block',
                padding: '14px 24px',
                background: 'transparent',
                color: '#d1ccc6',
                fontWeight: '600',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '4px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 150ms',
                fontSize: '14px',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = '#d1ccc6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
