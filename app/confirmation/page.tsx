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
      <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
        <div className="container-wide" style={{ paddingTop: '48px', paddingBottom: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: 'var(--ae-ink3)', marginBottom: '24px' }}>
            No order found. Redirecting...
          </p>
          <Link href="/products" style={{ color: 'var(--ae-blue)', fontWeight: '700', textDecoration: 'none' }}>
            Return to Products
          </Link>
        </div>
      </main>
    )
  }

  const subtotal = order.total
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  return (
    <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
      <section style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container-wide" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '80px', marginBottom: '24px' }}>✓</div>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '8px' }}>
              Order Confirmed!
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--ae-ink3)' }}>
              Thank you for your purchase. Your order has been received.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--ae-white)', border: '1px solid var(--ae-line)', borderRadius: '8px', padding: '32px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '24px' }}>
              Order Summary
            </h2>

            <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--ae-line)' }}>
              {order.items.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '600', color: 'var(--ae-ink)' }}>
                      {item.name}
                    </span>
                    <span style={{ color: 'var(--ae-ink3)' }}>×{item.quantity}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', color: 'var(--ae-ink3)' }}>
                      {item.category}
                    </span>
                    <span style={{ fontWeight: '700', color: 'var(--ae-red)' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                <span style={{ color: 'var(--ae-ink3)' }}>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                <span style={{ color: 'var(--ae-ink3)' }}>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px', paddingBottom: '16px', borderBottom: '1px solid var(--ae-line)' }}>
                <span style={{ color: 'var(--ae-ink3)' }}>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ae-ink)' }}>
                  Total
                </span>
                <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ae-red)' }}>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div style={{ background: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '16px' }}>
              <p style={{ fontSize: '13px', color: '#1e40af', margin: 0 }}>
                📧 A confirmation email has been sent to your email address with order details and tracking information.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--ae-white)', border: '1px solid var(--ae-line)', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '16px' }}>
              What's Next?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', fontSize: '14px', color: 'var(--ae-ink3)' }}>
                ✓ Your order is being prepared for shipment
              </li>
              <li style={{ marginBottom: '12px', fontSize: '14px', color: 'var(--ae-ink3)' }}>
                ✓ We'll send tracking details within 24 hours
              </li>
              <li style={{ fontSize: '14px', color: 'var(--ae-ink3)' }}>
                ✓ Estimated delivery: 5-7 business days
              </li>
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Link
              href="/"
              style={{
                display: 'block',
                padding: '12px',
                textAlign: 'center',
                background: 'var(--ae-amber)',
                color: 'var(--ae-ink)',
                fontWeight: '700',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ae-amber-d)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ae-amber)')}
            >
              Home
            </Link>

            <Link
              href="/products"
              style={{
                display: 'block',
                padding: '12px',
                textAlign: 'center',
                background: 'var(--ae-white)',
                color: 'var(--ae-blue)',
                fontWeight: '700',
                border: '1px solid var(--ae-line)',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--ae-blue)'
                e.currentTarget.style.background = '#f0f9ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--ae-line)'
                e.currentTarget.style.background = 'var(--ae-white)'
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
