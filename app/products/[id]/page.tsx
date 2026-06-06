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

  // Get product from static data based on route param
  const product = products.find((p) => p.id === resolvedParams.id)

  if (!product) {
    return (
      <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
        <div className="container-wide" style={{ paddingTop: '48px', paddingBottom: '48px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '16px' }}>
            Product Not Found
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--ae-ink3)', marginBottom: '24px' }}>
            The product you're looking for doesn't exist.
          </p>
          <Link href="/products" style={{ color: 'var(--ae-blue)', fontWeight: '700', textDecoration: 'none' }}>
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
      image: product.category
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
    <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
      <section style={{ backgroundColor: 'var(--ae-white)', borderBottom: '1px solid var(--ae-line)' }}>
        <div className="container-wide" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
          <Link
            href="/products"
            style={{
              color: 'var(--ae-blue)',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '14px',
              marginBottom: '16px',
              display: 'inline-block',
            }}
          >
            ← Back to Products
          </Link>
        </div>
      </section>

      <section style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            {/* Product Image */}
            <div>
              <div
                style={{
                  height: '400px',
                  background: '#f3f4f6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '120px',
                  marginBottom: '24px',
                  border: '1px solid var(--ae-line)',
                }}
              >
                {categoryEmoji}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      height: '80px',
                      background: '#f3f4f6',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '36px',
                      border: '1px solid var(--ae-line)',
                      cursor: 'pointer',
                    }}
                  >
                    {categoryEmoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div style={{ marginBottom: '16px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: 'var(--ae-ink3)',
                    background: '#f3f4f6',
                    padding: '4px 10px',
                    borderRadius: '999px',
                  }}
                >
                  {product.category}
                </span>
              </div>

              <h1 style={{ fontSize: '32px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '16px', lineHeight: '1.2' }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ color: 'var(--ae-amber-d)', fontSize: '18px', letterSpacing: '1px' }}>
                  ★★★★☆
                </span>
                <span style={{ fontSize: '14px', color: 'var(--ae-ink3)' }}>
                  ({reviewCount}) reviews
                </span>
              </div>

              {/* Price */}
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: 'var(--ae-red)',
                  marginBottom: '24px',
                }}
              >
                ${product.price.toFixed(2)}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--ae-ink2)',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                {product.description}
              </p>

              {/* Specs */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '12px' }}>
                  Specifications
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {Object.entries(product.specs || {}).map(([key, value]) => (
                    <div key={key}>
                      <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--ae-ink3)', marginBottom: '4px' }}>
                        {key.replace(/_/g, ' ').toUpperCase()}
                      </p>
                      <p style={{ fontSize: '14px', color: 'var(--ae-ink)', lineHeight: '1.4' }}>
                        {Array.isArray(value) ? value.join(', ') : String(value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stock Status */}
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: product.stock > 10 ? '#ecfdf5' : product.stock > 0 ? '#fef3c7' : '#fee2e2',
                  marginBottom: '24px',
                }}
              >
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color:
                      product.stock > 10
                        ? 'var(--ae-green)'
                        : product.stock > 0
                          ? '#b45309'
                          : '#dc2626',
                  }}
                >
                  {product.stock > 0
                    ? product.stock > 10
                      ? `In Stock (${product.stock} available)`
                      : `Low Stock (${product.stock} remaining)`
                    : 'Out of Stock'}
                </p>
              </div>

              {/* Add to Cart */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                    QUANTITY
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    disabled={product.stock === 0}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontSize: '14px',
                      border: '1px solid var(--ae-line)',
                      borderRadius: '6px',
                      backgroundColor: 'var(--ae-white)',
                      color: 'var(--ae-ink)',
                      cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                      opacity: product.stock === 0 ? 0.6 : 1,
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
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: '700',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    background: addedToCart
                      ? 'var(--ae-green)'
                      : product.stock === 0
                        ? '#ccc'
                        : 'var(--ae-amber)',
                    color: addedToCart ? 'white' : product.stock === 0 ? '#666' : 'var(--ae-ink)',
                  }}
                  onMouseEnter={(e) => {
                    if (product.stock > 0 && !addedToCart) {
                      e.target.style.background = 'var(--ae-amber-d)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (product.stock > 0 && !addedToCart) {
                      e.target.style.background = 'var(--ae-amber)'
                    }
                  }}
                >
                  {product.stock === 0 ? 'Out of Stock' : addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
