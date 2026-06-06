'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import products from '@/data/products.json'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, itemCount } = useCart()

  // Get product stock levels
  const getProductStock = (productId: string) => {
    const product = products.find(p => p.id === productId)
    return product?.stock || 0
  }

  // Check for oversold items
  const oversoldItems = items.filter(item => item.quantity > getProductStock(item.productId))
  const hasOversoldItems = oversoldItems.length > 0

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  if (items.length === 0) {
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
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>🛒</div>
            <h1 style={{
              fontSize: '48px',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '500',
              color: '#f5f0eb',
              marginBottom: '16px',
              marginTop: 0
            }}>
              Your Cart is Empty
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#d1ccc6',
              marginBottom: '40px',
              lineHeight: '1.8'
            }}>
              Start shopping to add items to your cart
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

  return (
    <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '24px',
        paddingBottom: '24px',
        background: '#0f1a2a'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link
            href="/products"
            style={{
              color: '#d4552a',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '0.5px',
              transition: 'color 150ms'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#e8785a'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#d4552a'}
          >
            ← Back to Products
          </Link>
          <div style={{
            fontSize: '12px',
            fontFamily: 'JetBrains Mono, monospace',
            color: '#a8a39d',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Shopping Cart
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          {/* Stock Warning Alert */}
          {hasOversoldItems && (
            <div role="alert" aria-live="polite" style={{
              background: 'rgba(212, 85, 42, 0.12)',
              border: '2px solid #d4552a',
              borderRadius: '6px',
              padding: '20px',
              marginBottom: '40px'
            }}>
              <h2 style={{
                fontSize: '14px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#d4552a',
                marginTop: 0,
                marginBottom: '8px'
              }}>
                ⚠ Stock Availability Issue
              </h2>
              <p style={{
                color: '#d1ccc6',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '0'
              }}>
                {oversoldItems.map((item, idx) => (
                  <span key={item.productId}>
                    {idx > 0 && ', '}
                    <strong>{item.name}</strong>: {item.quantity} in cart, only {getProductStock(item.productId)} available
                  </span>
                ))}. Please adjust quantities below to proceed.
              </p>
            </div>
          )}

          {/* Page Title */}
          <h1 style={{
            fontSize: '44px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '500',
            color: '#f5f0eb',
            marginBottom: '8px',
            marginTop: 0
          }}>
            Shopping Cart
          </h1>
          <p style={{
            fontSize: '13px',
            fontFamily: 'JetBrains Mono, monospace',
            color: '#a8a39d',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '40px'
          }}>
            {itemCount} item{itemCount !== 1 ? 's' : ''} · {items.length} product{items.length !== 1 ? 's' : ''}
          </p>

          {/* Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '60px' }}>
            {/* Cart Items */}
            <section aria-label="Cart items">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {items.map((item) => {
                  const stock = getProductStock(item.productId)
                  const isOverstock = item.quantity > stock
                  return (
                    <article
                      key={item.productId}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '100px 1fr',
                        gap: '24px',
                        paddingBottom: '24px',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                        opacity: isOverstock ? 0.75 : 1,
                        transition: 'opacity 150ms'
                      }}
                    >
                      {/* Product Image */}
                      <div style={{
                        width: '100px',
                        height: '100px',
                        background: 'rgba(19,36,58,0.5)',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        border: isOverstock ? '2px solid #d4552a' : '1px solid rgba(255,255,255,0.08)',
                        flexShrink: 0
                      }}>
                        {item.image}
                      </div>

                      {/* Product Details */}
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {/* Header */}
                        <div>
                          <h2 style={{
                            fontSize: '18px',
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: '500',
                            color: '#f5f0eb',
                            marginBottom: '12px',
                            marginTop: 0
                          }}>
                            {item.name}
                          </h2>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '40px',
                            marginBottom: '16px'
                          }}>
                            {/* Price */}
                            <div>
                              <label style={{
                                display: 'block',
                                fontSize: '11px',
                                fontFamily: 'JetBrains Mono, monospace',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#a8a39d',
                                marginBottom: '6px'
                              }}>
                                Unit Price
                              </label>
                              <span style={{
                                fontSize: '20px',
                                fontFamily: 'Playfair Display, serif',
                                fontWeight: '500',
                                color: '#d4552a'
                              }}>
                                ${item.price.toFixed(2)}
                              </span>
                            </div>

                            {/* Stock Info */}
                            <div>
                              <label style={{
                                display: 'block',
                                fontSize: '11px',
                                fontFamily: 'JetBrains Mono, monospace',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#a8a39d',
                                marginBottom: '6px'
                              }}>
                                Availability
                              </label>
                              <span style={{
                                fontSize: '14px',
                                color: isOverstock ? '#d4552a' : '#4aa8a5',
                                fontWeight: isOverstock ? '600' : '500'
                              }}>
                                {isOverstock ? '✗ Exceeds stock' : `✓ ${stock} available`}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Footer: Quantity & Remove */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '24px',
                          justifyContent: 'space-between'
                        }}>
                          {/* Quantity Controls */}
                          <fieldset style={{
                            border: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                          }}>
                            <legend style={{
                              fontSize: '11px',
                              fontFamily: 'JetBrains Mono, monospace',
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              color: '#a8a39d',
                              marginBottom: '6px',
                              display: 'block'
                            }}>
                              Qty
                            </legend>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              aria-label={`Decrease ${item.name} quantity`}
                              style={{
                                background: 'none',
                                border: '1px solid rgba(255,255,255,0.14)',
                                color: '#f5f0eb',
                                padding: '6px 12px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: '600',
                                transition: 'all 150ms',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: '40px'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                                e.currentTarget.style.borderColor = '#d4552a'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'none'
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                              }}
                            >
                              −
                            </button>
                            <span
                              aria-live="polite"
                              style={{
                                color: isOverstock ? '#d4552a' : '#f5f0eb',
                                minWidth: '32px',
                                textAlign: 'center',
                                fontSize: '16px',
                                fontWeight: isOverstock ? '600' : '500',
                                fontFamily: 'Inter, monospace'
                              }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              disabled={item.quantity >= stock}
                              aria-label={`Increase ${item.name} quantity${item.quantity >= stock ? ' (at stock limit)' : ''}`}
                              style={{
                                background: 'none',
                                border: '1px solid rgba(255,255,255,0.14)',
                                color: '#f5f0eb',
                                padding: '6px 12px',
                                borderRadius: '4px',
                                cursor: item.quantity >= stock ? 'not-allowed' : 'pointer',
                                fontSize: '16px',
                                fontWeight: '600',
                                transition: 'all 150ms',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: '40px',
                                opacity: item.quantity >= stock ? 0.4 : 1
                              }}
                              onMouseEnter={(e) => {
                                if (item.quantity < stock) {
                                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                                  e.currentTarget.style.borderColor = '#d4552a'
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'none'
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                              }}
                            >
                              +
                            </button>
                            <span style={{
                              fontSize: '11px',
                              color: '#a8a39d',
                              fontFamily: 'JetBrains Mono, monospace'
                            }}>
                              max {stock}
                            </span>
                          </fieldset>

                          {/* Line Total & Remove */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginLeft: 'auto'
                          }}>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{
                                fontSize: '11px',
                                fontFamily: 'JetBrains Mono, monospace',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#a8a39d',
                                marginBottom: '2px'
                              }}>
                                Subtotal
                              </div>
                              <div style={{
                                fontSize: '18px',
                                fontFamily: 'Playfair Display, serif',
                                fontWeight: '500',
                                color: '#d4552a'
                              }}>
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>

                            <button
                              onClick={() => removeItem(item.productId)}
                              aria-label={`Remove ${item.name} from cart`}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#a8a39d',
                                fontSize: '20px',
                                cursor: 'pointer',
                                padding: '4px 8px',
                                transition: 'color 150ms',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.color = '#d4552a'}
                              onMouseLeave={(e) => e.currentTarget.style.color = '#a8a39d'}
                              title="Remove this item"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              {/* Clear Cart */}
              <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={clearCart}
                  aria-label="Clear all items from cart"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(212, 85, 42, 0.3)',
                    color: '#d4552a',
                    padding: '10px 18px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    transition: 'all 150ms',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 85, 42, 0.1)'
                    e.currentTarget.style.borderColor = '#d4552a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(212, 85, 42, 0.3)'
                  }}
                >
                  Clear All Items
                </button>
              </div>
            </section>

            {/* Order Summary Sidebar */}
            <aside aria-label="Order summary">
              <div style={{
                background: 'rgba(19,36,58,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '32px',
                position: 'sticky',
                top: '100px'
              }}>
                <h2 style={{
                  fontSize: '16px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#d4552a',
                  marginTop: 0,
                  marginBottom: '24px'
                }}>
                  Order Summary
                </h2>

                {/* Line Items */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: '#d1ccc6' }}>Subtotal</span>
                    <span style={{ color: '#f5f0eb', fontWeight: '500' }}>${subtotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: '#d1ccc6' }}>Tax (10%)</span>
                    <span style={{ color: '#f5f0eb', fontWeight: '500' }}>${tax.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: '#d1ccc6' }}>
                      Shipping {subtotal > 100 && <span style={{ fontSize: '12px', color: '#a8a39d' }}>(FREE)</span>}
                    </span>
                    <span style={{ color: '#f5f0eb', fontWeight: '500' }}>${shipping.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '28px'
                }}>
                  <span style={{
                    fontSize: '14px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#a8a39d'
                  }}>
                    Total
                  </span>
                  <span style={{
                    fontSize: '28px',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: '500',
                    color: '#d4552a'
                  }}>
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link
                    href={hasOversoldItems ? '#' : '/checkout'}
                    onClick={(e) => {
                      if (hasOversoldItems) {
                        e.preventDefault()
                      }
                    }}
                    role={hasOversoldItems ? 'button' : 'link'}
                    aria-disabled={hasOversoldItems}
                    style={{
                      display: 'block',
                      padding: '14px 20px',
                      background: hasOversoldItems ? '#555' : '#d4552a',
                      color: '#f5f0eb',
                      fontSize: '14px',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      border: 'none',
                      borderRadius: '4px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      cursor: hasOversoldItems ? 'not-allowed' : 'pointer',
                      transition: 'background 150ms',
                      opacity: hasOversoldItems ? 0.6 : 1,
                      fontFamily: 'Inter, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      if (!hasOversoldItems) {
                        e.currentTarget.style.background = '#e8785a'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!hasOversoldItems) {
                        e.currentTarget.style.background = '#d4552a'
                      }
                    }}
                  >
                    {hasOversoldItems ? 'Fix Stock Issues' : 'Proceed to Checkout'}
                  </Link>

                  <Link
                    href="/products"
                    style={{
                      display: 'block',
                      padding: '14px 20px',
                      background: 'transparent',
                      color: '#d1ccc6',
                      fontSize: '14px',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '4px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 150ms',
                      fontFamily: 'Inter, sans-serif'
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
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
