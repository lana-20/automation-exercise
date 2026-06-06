import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/app/context/CartContext'

interface Product {
  id: string
  name: string
  price: number
  stock: number
  image: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    if (product.stock <= 0) return
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="card p-5">
      {/* Image Container - Much Larger */}
      <Link href={`/products/${product.id}`} className="group block mb-6">
        <div className="w-full h-72 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden group-hover:bg-gray-150 transition mb-4">
          <span className="text-7xl">📦</span>
        </div>
      </Link>

      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Product Title */}
      <Link href={`/products/${product.id}`} className="group block mb-3">
        <h3 className="text-sm font-bold text-gray-900 line-clamp-3 group-hover:text-amber-700 transition leading-tight mb-2">
          {product.name}
        </h3>
      </Link>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400">
              {i < 4 ? '★' : '☆'}
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-600 ml-1">(248)</span>
      </div>

      {/* Stock Status */}
      <div className="mb-6">
        {product.stock > 0 ? (
          <p className="text-sm font-semibold text-green-700">In Stock</p>
        ) : (
          <p className="text-sm font-semibold text-red-700">Out of Stock</p>
        )}
      </div>

      {/* Price - Large & Bold */}
      <div className="mb-6 border-t border-gray-200 pt-4">
        <div className="text-2xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Quantity Selector */}
      {product.stock > 0 && (
        <div className="mb-6 flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">Quantity:</label>
          <select
            value={quantity}
            onChange={(e) =>
              setQuantity(
                Math.max(1, Math.min(product.stock || 99, parseInt(e.target.value)))
              )
            }
            disabled={product.stock <= 0}
            className="input w-20 text-sm"
          >
            {Array.from({ length: Math.min(10, product.stock || 10) }).map(
              (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              )
            )}
          </select>
        </div>
      )}

      {/* Add to Cart Button - Full Width */}
      <button
        onClick={handleAddToCart}
        disabled={product.stock <= 0}
        className={`w-full py-3 rounded-lg font-bold text-sm mb-3 transition duration-200 ${
          product.stock <= 0
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : isAdded
            ? 'bg-green-600 text-white shadow-md'
            : 'btn-primary'
        }`}
      >
        {isAdded ? '✓ Added to Cart' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>

      {/* View Details Link */}
      <Link
        href={`/products/${product.id}`}
        className="block text-center text-sm font-semibold text-amber-700 hover:text-amber-800 transition py-2"
      >
        See more details
      </Link>
    </div>
  )
}
