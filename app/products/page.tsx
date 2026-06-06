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

  return (
    <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
      <section style={{ backgroundColor: 'var(--ae-white)', borderBottom: '1px solid var(--ae-line)' }}>
        <div className="container-wide" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: 'var(--ae-ink)' }}>
            All Products
          </h1>

          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                fontSize: '14px',
                border: '1px solid var(--ae-line)',
                borderRadius: '6px',
                backgroundColor: 'var(--ae-white)',
                color: 'var(--ae-ink)',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', marginRight: '8px', textTransform: 'uppercase' }}>
                Category:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  border: '1px solid var(--ae-line)',
                  borderRadius: '6px',
                  backgroundColor: 'var(--ae-white)',
                  color: 'var(--ae-ink)',
                  cursor: 'pointer',
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', marginRight: '8px', textTransform: 'uppercase' }}>
                Sort:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  border: '1px solid var(--ae-line)',
                  borderRadius: '6px',
                  backgroundColor: 'var(--ae-white)',
                  color: 'var(--ae-ink)',
                  cursor: 'pointer',
                }}
              >
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div style={{ marginLeft: 'auto', fontSize: '14px', color: 'var(--ae-ink3)' }}>
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '24px', paddingBottom: '48px' }}>
        <div className="container-wide">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--ae-ink3)' }}>
              <p style={{ fontSize: '16px', marginBottom: '10px' }}>No products found</p>
              <p style={{ fontSize: '14px' }}>Try adjusting your search or filters</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '18px' }}>
              {filtered.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ height: '120px', background: '#f3f4f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', marginBottom: '10px' }}>
                    {product.category === 'Electronics' && '💻'}
                    {product.category === 'Apparel' && '👕'}
                    {product.category === 'Home' && '🏠'}
                    {product.category === 'Books' && '📚'}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '500', color: 'var(--ae-ink3)', background: '#f3f4f6', padding: '2px 8px', borderRadius: '999px', width: 'fit-content', marginBottom: '6px' }}>
                    {product.category}
                  </div>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '6px', lineHeight: '1.3', minHeight: '36px', color: 'var(--ae-ink)' }}>
                    {product.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--ae-amber-d)', fontSize: '13px', letterSpacing: '1px' }}>★★★★☆</span>
                    <span style={{ fontSize: '12px', color: 'var(--ae-ink3)' }}>({parseInt(product.id.slice(-3)) * 2 + 50})</span>
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ae-red)', marginBottom: '4px' }}>
                    ${product.price.toFixed(2)}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: product.stock > 10 ? 'var(--ae-green)' : '#ff6b6b', marginBottom: '10px' }}>
                    {product.stock > 0 ? (product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`) : 'Out of Stock'}
                  </div>
                  <button disabled={product.stock === 0} style={{ marginTop: 'auto', background: product.stock === 0 ? '#ccc' : 'var(--ae-amber)', border: `1px solid ${product.stock === 0 ? '#bbb' : 'var(--ae-amber-d)'}`, color: product.stock === 0 ? '#666' : 'var(--ae-ink)', fontWeight: '700', fontSize: '13px', padding: '9px', borderRadius: '999px', cursor: product.stock === 0 ? 'not-allowed' : 'pointer', transition: 'background 0.15s', width: '100%' }} onMouseEnter={(e) => { if (product.stock > 0) e.target.style.background = 'var(--ae-amber-d)' }} onMouseLeave={(e) => { if (product.stock > 0) e.target.style.background = 'var(--ae-amber)' }}>
                    {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
