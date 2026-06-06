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
    <div className="card-base p-0 overflow-hidden flex flex-col h-full hover:border-blue-300 group">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">📦</span>
        <div className="absolute top-3 right-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Product Name */}
        <Link href={`/products/${product.id}`} className="group/name">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover/name:text-blue-600 transition mb-3">
            {product.name}
          </h3>
        </Link>

        {/* Stock Status */}
        <div className="mb-4">
          {product.stock > 0 ? (
            <p className="text-sm font-semibold text-green-600">✓ In Stock ({product.stock})</p>
          ) : (
            <p className="text-sm font-semibold text-red-600">Out of stock</p>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Price */}
        <div className="mb-6">
          <p className="text-3xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity & Button */}
        <div className="space-y-3 mt-auto">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Quantity
            </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock || 99, parseInt(e.target.value))))}
              disabled={product.stock <= 0}
              className="input-base text-base"
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
            className={`w-full py-3 rounded-lg font-bold transition-all duration-200 ${
              product.stock <= 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : isAdded
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:scale-105 active:scale-95'
            }`}
          >
            {isAdded ? '✓ Added to Cart!' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>

          {/* View Details */}
          <Link href={`/products/${product.id}`} className="btn-secondary w-full text-center text-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
