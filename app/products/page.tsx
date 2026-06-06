'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import products from '@/data/products.json'

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  const categoryEmoji = {
    Electronics: '💻',
    Apparel: '👕',
    Home: '🏠',
    Books: '📚',
  }

  return (
    <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        background: '#0f1a2a',
        borderBottom: "3px solid #4aa8a5", older: { borderBottom: "1px solid rgba(255,255,255,0.08)'
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
            fontSize: '56px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '500',
            color: '#f5f0eb',
            marginBottom: '8px',
            marginTop: 0
          }}>
            All Products
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#d1ccc6',
            marginBottom: 0
          }}>
            Browse our collection of {products.length} products
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section style={{
        paddingTop: '40px',
        paddingBottom: '40px',
        background: '#0f1a2a',
        borderBottom: "3px solid #4aa8a5", older: { borderBottom: "1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {/* Search */}
            <div>
              <label style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d1ccc6',
                display: 'block',
                marginBottom: '8px'
              }}>
                Search
              </label>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(19,36,58,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  color: '#f5f0eb',
                  transition: 'all 150ms'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#d4552a'
                  e.target.style.background = 'rgba(19,36,58,0.8)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.target.style.background = 'rgba(19,36,58,0.5)'
                }}
              />
            </div>

            {/* Category */}
            <div>
              <label style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d1ccc6',
                display: 'block',
                marginBottom: '8px'
              }}>
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(19,36,58,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  color: '#f5f0eb',
                  transition: 'all 150ms',
                  cursor: 'pointer'
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} style={{ background: '#13243a', color: '#f5f0eb' }}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d1ccc6',
                display: 'block',
                marginBottom: '8px'
              }}>
                Sort
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(19,36,58,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  color: '#f5f0eb',
                  transition: 'all 150ms',
                  cursor: 'pointer'
                }}
              >
                <option value="popular" style={{ background: '#13243a', color: '#f5f0eb' }}>Popular</option>
                <option value="price-low" style={{ background: '#13243a', color: '#f5f0eb' }}>Price: Low to High</option>
                <option value="price-high" style={{ background: '#13243a', color: '#f5f0eb' }}>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        background: '#0f1a2a'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          {filtered.length > 0 ? (
            <>
              <div style={{
                marginBottom: '40px',
                fontSize: '14px',
                color: '#d1ccc6'
              }}>
                Showing <strong style={{ color: '#f5f0eb' }}>{filtered.length}</strong> of <strong style={{ color: '#f5f0eb' }}>{products.length}</strong> products
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                {filtered.map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                      background: '#13243a',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'all 150ms',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#d4552a'
                      e.currentTarget.style.background = '#0d1e30'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.background = '#13243a'
                    }}>
                      {/* Product Image */}
                      <div style={{
                        height: '200px',
                        background: 'rgba(19,36,58,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '64px',
                        borderBottom: "3px solid #4aa8a5", older: { borderBottom: "1px solid rgba(255,255,255,0.08)'
                      }}>
                        {categoryEmoji[product.category] || '📦'}
                      </div>

                      {/* Product Info */}
                      <div style={{ padding: '20px' }}>
                        <div style={{
                          fontSize: '11px',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontWeight: '600',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#a8a39d',
                          marginBottom: '8px'
                        }}>
                          {product.category}
                        </div>

                        <h3 style={{
                          fontSize: '16px',
                          fontFamily: 'Playfair Display, serif',
                          fontWeight: '500',
                          color: '#f5f0eb',
                          marginBottom: '12px',
                          marginTop: 0,
                          lineHeight: '1.3'
                        }}>
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '12px'
                        }}>
                          <span style={{
                            color: '#d4a85a',
                            fontSize: '12px',
                            letterSpacing: '0.5px'
                          }}>
                            ★★★★☆
                          </span>
                          <span style={{
                            fontSize: '12px',
                            color: '#a8a39d'
                          }}>
                            ({parseInt(product.id.slice(-3)) * 2 + 50})
                          </span>
                        </div>

                        {/* Price */}
                        <div style={{
                          fontSize: '20px',
                          fontFamily: 'Playfair Display, serif',
                          fontWeight: '500',
                          color: '#d4552a',
                          marginBottom: '12px'
                        }}>
                          ${product.price.toFixed(2)}
                        </div>

                        {/* Stock Status */}
                        <div style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: product.stock > 10 ? '#4aa8a5' : product.stock > 0 ? '#d4a85a' : '#d4552a'
                        }}>
                          {product.stock > 0
                            ? product.stock > 10
                              ? '✓ In Stock'
                              : `⚠ Only ${product.stock} left`
                            : '✗ Out of Stock'}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h2 style={{
                fontSize: '28px',
                fontFamily: 'Playfair Display, serif',
                fontWeight: '500',
                color: '#f5f0eb',
                marginBottom: '8px'
              }}>
                No products found
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#d1ccc6'
              }}>
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
