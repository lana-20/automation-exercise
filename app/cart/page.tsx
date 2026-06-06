'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  const cart = items
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  if (cart.length === 0) {
    return (
      <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
        <div className="container-wide" style={{ paddingTop: '48px', paddingBottom: '48px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛒</div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '16px' }}>
            Your Cart is Empty
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--ae-ink3)', marginBottom: '24px' }}>
            Start shopping to add items to your cart.
          </p>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              padding: '10px 24px',
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
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
      <section style={{ backgroundColor: 'var(--ae-white)', borderBottom: '1px solid var(--ae-line)' }}>
        <div className="container-wide" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--ae-ink)' }}>Shopping Cart</h1>
        </div>
      </section>

      <section style={{ paddingTop: '24px', paddingBottom: '48px' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
            {/* Cart Items */}
            <div>
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    gap: '16px',
                    alignItems: 'start',
                    paddingBottom: '20px',
                    borderBottom: '1px solid var(--ae-line)',
                    marginBottom: '20px',
                  }}
                >
                  {/* Product Image */}
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      background: '#f3f4f6',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '36px',
                    }}
                  >
                    {item.category === 'Electronics' && '💻'}
                    {item.category === 'Apparel' && '👕'}
                    {item.category === 'Home' && '🏠'}
                    {item.category === 'Books' && '📚'}
                  </div>

                  {/* Product Info */}
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '4px' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--ae-ink3)', marginBottom: '8px' }}>
                      {item.category}
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--ae-red)' }}>
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity & Actions */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '4px' }}>
                        Qty
                      </label>
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                        style={{
                          padding: '6px 8px',
                          fontSize: '13px',
                          border: '1px solid var(--ae-line)',
                          borderRadius: '4px',
                          backgroundColor: 'var(--ae-white)',
                          color: 'var(--ae-ink)',
                        }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={() => removeItem(cart[idx].productId)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--ae-red)',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '700',
                        textDecoration: 'underline',
                        padding: 0,
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <div style={{ backgroundColor: 'var(--ae-white)', border: '1px solid var(--ae-line)', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '20px' }}>
                  Order Summary
                </h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--ae-ink3)', fontSize: '14px' }}>Subtotal</span>
                  <span style={{ fontWeight: '600', color: 'var(--ae-ink)' }}>${subtotal.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--ae-ink3)', fontSize: '14px' }}>Tax (10%)</span>
                  <span style={{ fontWeight: '600', color: 'var(--ae-ink)' }}>${tax.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--ae-line)' }}>
                  <span style={{ color: 'var(--ae-ink3)', fontSize: '14px' }}>
                    Shipping {subtotal > 100 && <span style={{ color: 'var(--ae-green)' }}>(FREE)</span>}
                  </span>
                  <span style={{ fontWeight: '600', color: 'var(--ae-ink)' }}>${shipping.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ae-ink)' }}>Total</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ae-red)' }}>
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    textAlign: 'center',
                    background: 'var(--ae-amber)',
                    color: 'var(--ae-ink)',
                    fontWeight: '700',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'background 0.15s',
                    marginBottom: '12px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ae-amber-d)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ae-amber)')}
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/products"
                  style={{
                    display: 'block',
                    width: '100%',
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
          </div>
        </div>
      </section>
    </main>
  )
}
