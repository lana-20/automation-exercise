'use client'

import { useState, useMemo } from 'react'
import products from '@/data/products.json'
import ProductCard from './ProductCard'
import SearchFilter from './SearchFilter'

export default function ProductGrid() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const categories = ['All', ...new Set(products.map(p => p.category))]

  const filtered = useMemo(() => {
    let result = products

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price)
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-dlb-off-white/50">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
