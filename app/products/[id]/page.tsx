'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import products from '@/data/products.json'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem } = useCart()

  const product = products.find((p) => p.id === resolvedParams.id)

  if (!product) {
    return (
      <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box',
          paddingTop: '48px',
          paddingBottom: '48px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#f5f0eb',
            marginBottom: '16px'
          }}>
            Product Not Found
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#d1ccc6',
            marginBottom: '24px'
          }}>
            The product you're looking for doesn't exist.
          </p>
          <Link href="/products" style={{
            color: '#d4552a',
            fontWeight: '700',
            textDecoration: 'none'
          }}>
            Back to Products
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: categoryEmoji
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const categoryEmoji = {
    Electronics: '💻',
    Apparel: '👕',
    Home: '🏠',
    Books: '📚',
  }[product.category] || '📦'

  const reviewCount = parseInt(product.id.slice(-3)) * 2 + 50

  return (
    <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        borderBottom: "3px solid #7455bf", older: { borderBottom: "1px solid rgba(255,255,255,0.08)',
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
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '14px',
              marginBottom: '16px',
              display: 'inline-block'
            }}
          >
            ← Back to Products
          </Link>
        </div>
      </section>

      {/* Product */}
      <section style={{
        paddingTop: '60px',
        paddingBottom: '60px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            {/* Image */}
            <div>
              <div style={{
                height: '480px',
                background: 'rgba(19,36,58,0.5)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '120px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                {categoryEmoji}
              </div>
            </div>

            {/* Info */}
            <div>
              {/* Category */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#d4552a',
                  background: 'rgba(212, 85, 42, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  display: 'inline-block'
                }}>
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: '44px',
                fontFamily: 'Playfair Display, serif',
                fontWeight: '500',
                color: '#f5f0eb',
                marginBottom: '20px',
                marginTop: 0,
                lineHeight: '1.2'
              }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px'
              }}>
                <span style={{
                  color: '#d4a85a',
                  fontSize: '16px',
                  letterSpacing: '1px'
                }}>
                  ★★★★☆
                </span>
                <span style={{
                  fontSize: '14px',
                  color: '#d1ccc6'
                }}>
                  ({reviewCount}) reviews
                </span>
              </div>

              {/* Price */}
              <div style={{
                fontSize: '36px',
                fontFamily: 'Playfair Display, serif',
                fontWeight: '500',
                color: '#d4552a',
                marginBottom: '24px'
              }}>
                ${product.price.toFixed(2)}
              </div>

              {/* Description */}
              <p style={{
                fontSize: '16px',
                color: '#d1ccc6',
                lineHeight: '1.8',
                marginBottom: '32px'
              }}>
                {product.description}
              </p>

              {/* Specs */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#f5f0eb',
                  marginBottom: '16px',
                  marginTop: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  Specifications
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  {Object.entries(product.specs || {}).map(([key, value]) => (
                    <div key={key}>
                      <p style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#a8a39d',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontFamily: 'JetBrains Mono, monospace'
                      }}>
                        {key.replace(/_/g, ' ')}
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#d1ccc6',
                        lineHeight: '1.5',
                        marginBottom: 0
                      }}>
                        {Array.isArray(value) ? value.join(', ') : String(value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stock */}
              <div style={{
                padding: '14px 16px',
                borderRadius: '6px',
                background: product.stock > 10
                  ? 'rgba(74, 168, 165, 0.15)'
                  : product.stock > 0
                  ? 'rgba(180, 134, 42, 0.15)'
                  : 'rgba(212, 85, 42, 0.15)',
                marginBottom: '32px'
              }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: product.stock > 10
                    ? '#4aa8a5'
                    : product.stock > 0
                    ? '#d4a85a'
                    : '#d4552a',
                  marginBottom: 0
                }}>
                  {product.stock > 0
                    ? product.stock > 10
                      ? '✓ In Stock'
                      : `⚠ Only ${product.stock} left`
                    : '✗ Out of Stock'}
                </p>
              </div>

              {/* Quantity & Add to Cart */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#f5f0eb',
                      fontSize: '18px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    −
                  </button>
                  <span style={{
                    color: '#f5f0eb',
                    padding: '8px 12px',
                    borderLeft: '1px solid rgba(255,255,255,0.08)',
                    borderRight: '1px solid rgba(255,255,255,0.08)',
                    minWidth: '40px',
                    textAlign: 'center'
                  }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stock}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#f5f0eb',
                      fontSize: '18px',
                      padding: '8px 12px',
                      cursor: quantity >= product.stock ? 'not-allowed' : 'pointer',
                      fontWeight: '600',
                      opacity: quantity >= product.stock ? 0.5 : 1
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    background: '#d4552a',
                    color: '#f5f0eb',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                    transition: 'background 150ms',
                    opacity: product.stock === 0 ? 0.5 : 1
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e8785a'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#d4552a'}
                >
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
