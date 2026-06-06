'use client'

import { useState } from 'react'
import Link from 'next/link'
import products from '@/data/products.json'
import { useCart } from '@/app/context/CartContext'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-dlb-off-white/70">Product not found</p>
        <Link href="/products" className="text-dlb-coral hover:underline">
          ← Back to Products
        </Link>
      </main>
    )
  }

  const handleAddToCart = () => {
    if (product.stock <= 0) {
      alert('Out of stock')
      return
    }
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <Link href="/products" className="text-dlb-coral hover:underline mb-8 inline-block">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-dlb-card border border-white/10 rounded-lg aspect-square flex items-center justify-center">
          <div className="text-dlb-off-white/30 text-lg">Product Image</div>
        </div>

        {/* Product Details */}
        <div>
          <div className="text-sm text-dlb-coral mb-2">{product.category}</div>
          <h1 className="font-display text-4xl mb-4">{product.name}</h1>

          <div className="mb-6">
            <p className="text-2xl text-dlb-coral font-bold">${product.price.toFixed(2)}</p>
            <p className={`text-sm mt-2 ${product.stock > 0 ? 'text-dlb-mint' : 'text-red-500'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </p>
          </div>

          <p className="text-dlb-off-white/70 mb-6">{product.description}</p>

          <div className="bg-dlb-card border border-white/10 rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-4">Specifications</h3>
            <dl className="space-y-2 text-sm">
              {Object.entries(product.specs).map(([key, value]: [string, any]) => (
                <div key={key} className="flex justify-between">
                  <dt className="text-dlb-off-white/70 capitalize">{key.replace(/_/g, ' ')}:</dt>
                  <dd className="font-semibold">
                    {Array.isArray(value) ? value.join(', ') : String(value)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Quantity</label>
              <input
                type="number"
                min="1"
                max={product.stock || 99}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
                className="w-full px-4 py-2 bg-dlb-bg border border-white/10 rounded"
              />
            </div>
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className={`w-full py-3 rounded font-semibold transition ${
                product.stock <= 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : added
                  ? 'bg-dlb-mint text-dlb-bg'
                  : 'bg-dlb-coral hover:bg-dlb-coral-light'
              }`}
            >
              {added ? '✓ Added to Cart!' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
