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
    <div className="card">
      {/* Image Container */}
      <Link href={`/products/${product.id}`} className="group">
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden group-hover:shadow-md transition mb-4">
          <span className="text-5xl">📦</span>
        </div>
      </Link>

      {/* Category */}
      <div className="text-xs text-gray-600 mb-1">{product.category}</div>

      {/* Product Title */}
      <Link href={`/products/${product.id}`} className="group">
        <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-amber-700 transition mb-2">
          {product.name}
        </h3>
      </Link>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-amber-500">★★★★☆</span>
        <span className="text-xs text-gray-600">(42)</span>
      </div>

      {/* Stock Status */}
      <div className="mb-3">
        {product.stock > 0 ? (
          <p className="text-xs text-green-700 font-bold">In Stock</p>
        ) : (
          <p className="text-xs text-red-700 font-bold">Out of Stock</p>
        )}
      </div>

      {/* Price */}
      <div className="mb-4 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* Quantity Selector */}
      <div className="mb-4 flex items-center gap-2">
        <label className="text-xs text-gray-700">Qty:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock || 99, parseInt(e.target.value))))}
          disabled={product.stock <= 0}
          className="input text-sm w-16"
        >
          {Array.from({ length: Math.min(10, product.stock || 10) }).map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={product.stock <= 0}
        className={`w-full py-2 rounded-md font-bold text-sm mb-3 transition ${
          product.stock <= 0
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : isAdded
            ? 'bg-green-600 text-white'
            : 'btn-primary'
        }`}
      >
        {isAdded ? '✓ Added to Cart' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>

      {/* View Details Link */}
      <Link href={`/products/${product.id}`} className="text-center text-amber-700 hover:text-amber-900 font-bold text-sm transition">
        See details
      </Link>
    </div>
  )
}
