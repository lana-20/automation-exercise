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
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-dlb-bg-dark to-dlb-bg flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-dlb-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="text-dlb-off-white/20 text-sm font-semibold">📷</div>
      </div>

      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-block badge badge-coral mb-3">
          {product.category}
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.id}`} className="block group/name">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover/name:text-dlb-coral transition-colors duration-200 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Stock Status */}
        <div className="mb-4">
          {product.stock > 0 ? (
            <p className="text-sm text-dlb-mint font-medium">
              ✓ {product.stock} in stock
            </p>
          ) : (
            <p className="text-sm text-red-400 font-medium">Out of stock</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-white/10">
          <p className="text-3xl font-bold text-gradient">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity & Button */}
        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-dlb-off-white/70 block mb-2">
              Quantity
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
              className="input text-sm"
            />
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
              product.stock <= 0
                ? 'bg-dlb-off-white/10 text-dlb-off-white/40 cursor-not-allowed'
                : isAdded
                ? 'bg-gradient-to-r from-dlb-mint to-dlb-mint/80 text-dlb-bg shadow-lg shadow-dlb-mint/20'
                : 'bg-gradient-to-r from-dlb-coral to-dlb-coral-light text-white shadow-lg shadow-dlb-coral/20 hover:shadow-dlb-coral/40 hover:scale-105'
            }`}
          >
            {isAdded ? '✓ Added to cart!' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
