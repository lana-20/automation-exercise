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

  const accentColors = ['#4aa8a5', '#d4a85a', '#7455bf', '#3d6abf']
  const getAccentColor = (index: number) => accentColors[index % accentColors.length]

  return (
    <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        paddingTop: '60px',
        paddingBottom: '60px',
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
            fontSize: '11px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#4aa8a5',
            marginBottom: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4aa8a5' }}></span>
            Catalog
          </span>
          <h1 style={{
            fontSize: '56px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '500',
            color: '#f5f0eb',
            marginBottom: '8px',
            marginTop: '16px'
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
        borderBottom: '2px solid #7455bf'
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
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d4552a',
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
                  padding: '12px 14px',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(19,36,58,0.5)',
                  border: '2px solid #d4552a',
                  borderRadius: '4px',
                  color: '#f5f0eb',
                  transition: 'all 150ms'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#e8785a'
                  e.currentTarget.style.background = 'rgba(19,36,58,0.8)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 85, 42, 0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#d4552a'
                  e.currentTarget.style.background = 'rgba(19,36,58,0.5)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>

            {/* Category */}
            <div>
              <label style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#7455bf',
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
                  padding: '12px 14px',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(19,36,58,0.5)',
                  border: '2px solid #7455bf',
                  borderRadius: '4px',
                  color: '#f5f0eb',
                  transition: 'all 150ms',
                  cursor: 'pointer'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#9e85d4'
                  e.currentTarget.style.background = 'rgba(19,36,58,0.8)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#7455bf'
                  e.currentTarget.style.background = 'rgba(19,36,58,0.5)'
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
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d4a85a',
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
                  padding: '12px 14px',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(19,36,58,0.5)',
                  border: '2px solid #d4a85a',
                  borderRadius: '4px',
                  color: '#f5f0eb',
                  transition: 'all 150ms',
                  cursor: 'pointer'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#e8c87a'
                  e.currentTarget.style.background = 'rgba(19,36,58,0.8)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#d4a85a'
                  e.currentTarget.style.background = 'rgba(19,36,58,0.5)'
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
                fontSize: '13px',
                fontFamily: 'JetBrains Mono, monospace',
                color: '#d1ccc6',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Showing <strong style={{ color: '#d4a85a' }}>{filtered.length}</strong> of <strong style={{ color: '#d4a85a' }}>{products.length}</strong> products
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                {filtered.map((product, index) => {
                  const accentColor = getAccentColor(index)
                  return (
                    <Link key={product.id} href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <article style={{
                        background: 'rgba(19,36,58,0.5)',
                        border: `2px solid ${accentColor}`,
                        borderRadius: '8px',
                        overflow: 'hidden',
                        transition: 'all 150ms',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(19,36,58,0.8)'
                        e.currentTarget.style.boxShadow = `0 8px 24px ${accentColor}30`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(19,36,58,0.5)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}>
                        <div style={{
                          height: '200px',
                          background: 'rgba(13,30,48,0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '80px',
                          borderBottom: `2px solid ${accentColor}`
                        }}>
                          {categoryEmoji[product.category as keyof typeof categoryEmoji] || '📦'}
                        </div>

                        <div style={{ padding: '24px' }}>
                          <div style={{
                            fontSize: '11px',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: accentColor,
                            marginBottom: '12px'
                          }}>
                            {product.category}
                          </div>

                          <h3 style={{
                            fontSize: '18px',
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: '500',
                            color: '#f5f0eb',
                            marginBottom: '16px',
                            marginTop: 0,
                            lineHeight: '1.4'
                          }}>
                            {product.name}
                          </h3>

                          <div style={{
                            fontSize: '20px',
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: '500',
                            color: accentColor,
                            marginBottom: '12px'
                          }}>
                            ${product.price.toFixed(2)}
                          </div>

                          <div style={{
                            fontSize: '12px',
                            color: product.stock > 10 ? '#4aa8a5' : product.stock > 0 ? '#d4a85a' : '#d4552a',
                            fontWeight: '600',
                            padding: '6px 10px',
                            background: product.stock > 10 
                              ? 'rgba(74, 168, 165, 0.15)' 
                              : product.stock > 0 
                              ? 'rgba(212, 170, 90, 0.15)' 
                              : 'rgba(212, 85, 42, 0.15)',
                            borderRadius: '3px',
                            display: 'inline-block'
                          }}>
                            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                          </div>
                        </div>
                      </article>
                    </Link>
                  )
                })}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
              <p style={{ color: '#d1ccc6', fontSize: '16px' }}>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
