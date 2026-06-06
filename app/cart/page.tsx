'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import products from '@/data/products.json'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, itemCount } = useCart()

  const getProductStock = (productId: string) => {
    const product = products.find(p => p.id === productId)
    return product?.stock || 0
  }

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
                transition: 'all 150ms',
                fontSize: '14px',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e8785a'
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(212, 85, 42, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#d4552a'
                e.currentTarget.style.boxShadow = 'none'
              }}
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
        borderBottom: '3px solid #7455bf',
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
            color: '#7455bf',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: '600'
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
              background: 'rgba(212, 85, 42, 0.15)',
              border: '2px solid #d4552a',
              borderRadius: '6px',
              padding: '20px',
              marginBottom: '40px',
              boxShadow: '0 4px 12px rgba(212, 85, 42, 0.2)'
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
            color: '#7455bf',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '40px',
            fontWeight: '600'
          }}>
            {itemCount} item{itemCount !== 1 ? 's' : ''} · {items.length} product{items.length !== 1 ? 's' : ''}
          </p>

          {/* Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '60px' }}>
            {/* Cart Items */}
            <section aria-label="Cart items">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {items.map((item, index) => {
                  const stock = getProductStock(item.productId)
                  const isOverstock = item.quantity > stock
                  const accentColors = ['#4aa8a5', '#d4a85a', '#7455bf', '#3d6abf']
                  const accentColor = accentColors[index % accentColors.length]
                  
                  return (
                    <article
                      key={item.productId}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '100px 1fr',
                        gap: '24px',
                        paddingBottom: '24px',
                        borderBottom: `2px solid ${accentColor}`,
                        opacity: isOverstock ? 0.75 : 1,
                        transition: 'opacity 150ms',
                        paddingLeft: '16px',
                        borderLeft: `4px solid ${accentColor}`
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
                        border: isOverstock ? `2px solid #d4552a` : `1px solid rgba(255,255,255,0.08)`,
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
                                color: '#d4a85a',
                                marginBottom: '6px',
                                fontWeight: '600'
                              }}>
                                Unit Price
                              </label>
                              <span style={{
                                fontSize: '20px',
                                fontFamily: 'Playfair Display, serif',
                                fontWeight: '500',
                                color: '#d4a85a'
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
                                color: '#4aa8a5',
                                marginBottom: '6px',
                                fontWeight: '600'
                              }}>
                                Availability
                              </label>
                              <span style={{
                                fontSize: '14px',
                                color: isOverstock ? '#d4552a' : '#4aa8a5',
                                fontWeight: isOverstock ? '600' : '500',
                                display: 'inline-block',
                                padding: '4px 8px',
                                background: isOverstock ? 'rgba(212, 85, 42, 0.1)' : 'rgba(74, 168, 165, 0.1)',
                                borderRadius: '3px'
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
                              color: accentColor,
                              marginBottom: '6px',
                              display: 'block',
                              fontWeight: '600'
                            }}>
                              Qty
                            </legend>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              aria-label={`Decrease ${item.name} quantity`}
                              style={{
                                background: 'none',
                                border: `2px solid ${accentColor}`,
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
                                e.currentTarget.style.background = accentColor
                                e.currentTarget.style.color = '#0f1a2a'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'none'
                                e.currentTarget.style.color = '#f5f0eb'
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
                                border: `2px solid ${accentColor}`,
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
                                  e.currentTarget.style.background = accentColor
                                  e.currentTarget.style.color = '#0f1a2a'
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'none'
                                e.currentTarget.style.color = '#f5f0eb'
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
                                color: accentColor,
                                marginBottom: '2px',
                                fontWeight: '600'
                              }}>
                                Subtotal
                              </div>
                              <div style={{
                                fontSize: '18px',
                                fontFamily: 'Playfair Display, serif',
                                fontWeight: '500',
                                color: accentColor
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
              <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '2px solid #3d6abf' }}>
                <button
                  onClick={clearCart}
                  aria-label="Clear all items from cart"
                  style={{
                    background: 'transparent',
                    border: '2px solid #7455bf',
                    color: '#7455bf',
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
                    e.currentTarget.style.background = '#7455bf'
                    e.currentTarget.style.color = '#0f1a2a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#7455bf'
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
                border: '2px solid #d4a85a',
                borderRadius: '6px',
                padding: '32px',
                position: 'sticky',
                top: '100px',
                boxShadow: '0 8px 24px rgba(212, 170, 90, 0.15)'
              }}>
                <h2 style={{
                  fontSize: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#d4a85a',
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
                  borderBottom: '2px solid #4aa8a5'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: '#d1ccc6' }}>Subtotal</span>
                    <span style={{ color: '#d4a85a', fontWeight: '600' }}>${subtotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: '#d1ccc6' }}>Tax (10%)</span>
                    <span style={{ color: '#f5f0eb', fontWeight: '500' }}>${tax.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: '#d1ccc6' }}>
                      Shipping {subtotal > 100 && <span style={{ fontSize: '12px', color: '#4aa8a5' }}>(FREE)</span>}
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
                    fontSize: '12px',
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
                    color: '#d4a85a'
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
                      transition: 'all 150ms',
                      opacity: hasOversoldItems ? 0.6 : 1,
                      fontFamily: 'Inter, sans-serif',
                      boxShadow: !hasOversoldItems ? '0 4px 12px rgba(212, 85, 42, 0.3)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!hasOversoldItems) {
                        e.currentTarget.style.background = '#e8785a'
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 85, 42, 0.5)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!hasOversoldItems) {
                        e.currentTarget.style.background = '#d4552a'
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 85, 42, 0.3)'
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
                      border: '2px solid #4aa8a5',
                      borderRadius: '4px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 150ms',
                      fontFamily: 'Inter, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(74, 168, 165, 0.1)'
                      e.currentTarget.style.borderColor = '#4aa8a5'
                      e.currentTarget.style.color = '#4aa8a5'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = '#4aa8a5'
                      e.currentTarget.style.color = '#d1ccc6'
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
