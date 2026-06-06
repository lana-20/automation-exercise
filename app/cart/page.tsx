'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, itemCount } = useCart()

  const cart = items
  const tax = cart.length > 0 ? items.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.1 : 0
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  if (cart.length === 0) {
    return (
      <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box',
          paddingTop: '60px',
          paddingBottom: '60px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛒</div>
          <h1 style={{
            fontSize: '44px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '500',
            color: '#f5f0eb',
            marginBottom: '16px'
          }}>
            Your Cart is Empty
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#d1ccc6',
            marginBottom: '32px'
          }}>
            Start shopping to add items to your cart.
          </p>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#d4552a',
              color: '#f5f0eb',
              fontWeight: '600',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background 150ms'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#e8785a'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#d4552a'}
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '24px',
        paddingBottom: '24px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <Link
            href="/products"
            style={{
              color: '#d4552a',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            ← Back to Products
          </Link>
        </div>
      </section>

      {/* Cart Content */}
      <section style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '60px' }}>
            {/* Items */}
            <div>
              <h1 style={{
                fontSize: '44px',
                fontFamily: 'Playfair Display, serif',
                fontWeight: '500',
                color: '#f5f0eb',
                marginBottom: '40px',
                marginTop: 0
              }}>
                Shopping Cart
              </h1>

              <div style={{ marginBottom: '24px', color: '#d1ccc6', fontSize: '14px' }}>
                {itemCount} item{itemCount !== 1 ? 's' : ''} in cart
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {cart.map((item) => (
                  <div key={item.productId} style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '24px',
                    paddingBottom: '24px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    {/* Image */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(19,36,58,0.5)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px'
                    }}>
                      {item.image}
                    </div>

                    {/* Details */}
                    <div>
                      <h3 style={{
                        fontSize: '18px',
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: '500',
                        color: '#f5f0eb',
                        marginBottom: '8px',
                        marginTop: 0
                      }}>
                        {item.name}
                      </h3>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '32px',
                        alignItems: 'center',
                        marginBottom: '12px'
                      }}>
                        {/* Price */}
                        <div>
                          <p style={{ color: '#a8a39d', fontSize: '12px', marginBottom: '4px' }}>Price</p>
                          <p style={{ color: '#d4552a', fontSize: '18px', fontWeight: '600', marginBottom: 0 }}>
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity */}
                        <div>
                          <p style={{ color: '#a8a39d', fontSize: '12px', marginBottom: '4px' }}>Quantity</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              style={{
                                background: 'none',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: '#f5f0eb',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: '600'
                              }}
                            >
                              −
                            </button>
                            <span style={{ color: '#f5f0eb', minWidth: '24px', textAlign: 'center' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              style={{
                                background: 'none',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: '#f5f0eb',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: '600'
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.productId)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#a8a39d',
                          fontSize: '12px',
                          cursor: 'pointer',
                          padding: 0,
                          textDecoration: 'underline',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={clearCart}
                  style={{
                    background: 'rgba(212, 85, 42, 0.1)',
                    border: '1px solid rgba(212, 85, 42, 0.3)',
                    color: '#d4552a',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '600',
                    transition: 'all 150ms'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 85, 42, 0.2)'
                    e.currentTarget.style.borderColor = '#d4552a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 85, 42, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(212, 85, 42, 0.3)'
                  }}
                >
                  Clear All Items
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div style={{
              background: 'rgba(19,36,58,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              padding: '24px'
            }}>
              <h2 style={{
                fontSize: '20px',
                fontFamily: 'Playfair Display, serif',
                fontWeight: '500',
                color: '#f5f0eb',
                marginBottom: '24px',
                marginTop: 0
              }}>
                Order Summary
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d1ccc6' }}>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d1ccc6' }}>
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d1ccc6' }}>
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
              </div>

              <div style={{
                paddingTop: '16px',
                paddingBottom: '16px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#f5f0eb' }}>Total</span>
                <span style={{
                  fontSize: '20px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '500',
                  color: '#d4552a'
                }}>
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link
                href="/checkout"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px 24px',
                  background: '#d4552a',
                  color: '#f5f0eb',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '4px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  transition: 'background 150ms'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e8785a'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#d4552a'}
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/products"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px 24px',
                  background: 'transparent',
                  color: '#d1ccc6',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 150ms'
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
        </div>
      </section>
    </main>
  )
}
