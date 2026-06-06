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
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="card-interactive group">
      {/* Image Container */}
      <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center rounded-t-lg overflow-hidden">
        <div className="text-5xl">📦</div>
        <div className="absolute top-3 right-3">
          <span className="badge badge-primary">{product.category}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Name */}
        <Link href={`/products/${product.id}`} className="block group/name">
          <h3 className="font-bold text-gray-900 line-clamp-2 group-hover/name:text-blue-600 transition text-sm mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Stock Status */}
        <div className="mb-3">
          {product.stock > 0 ? (
            <p className="text-xs font-medium text-green-600">
              ✓ In Stock ({product.stock})
            </p>
          ) : (
            <p className="text-xs font-medium text-red-600">Out of Stock</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity & Button */}
        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-2">
              Qty
            </label>
            <input
              type="number"
              min="1"
              max={product.stock || 99}
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.max(1, Math.min(99, parseInt(e.target.value) || 1))
                )
              }
              disabled={product.stock <= 0}
              className="input text-sm w-full"
            />
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`w-full py-2.5 rounded-lg font-semibold text-sm transition ${
              product.stock <= 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : isAdded
                ? 'bg-green-600 text-white'
                : 'btn-add-cart'
            }`}
          >
            {isAdded ? '✓ Added!' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
