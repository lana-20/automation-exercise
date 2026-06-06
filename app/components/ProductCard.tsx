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
    <div className="card-interactive group p-0 overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-56 bg-gradient-to-br from-card-dark to-bg-dark flex items-center justify-center overflow-hidden">
        <div className="text-4xl">📦</div>
        <div className="absolute top-3 right-3">
          <span className="badge badge-coral">{product.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <Link href={`/products/${product.id}`} className="block group/name">
          <h3 className="font-display font-medium text-lg line-clamp-2 group-hover/name:text-coral transition mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Stock Status */}
        <div className="mb-4">
          {product.stock > 0 ? (
            <p className="text-sm font-mono text-mint-light">✓ In Stock ({product.stock})</p>
          ) : (
            <p className="text-sm font-mono text-red-400">Out of stock</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-t border-border">
          <p className="text-3xl font-display font-medium text-coral mt-4">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity & Button */}
        <div className="space-y-3">
          <div>
            <label className="font-mono text-10px tracking-widest uppercase text-fg-3 block mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              max={product.stock || 99}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))
              }
              disabled={product.stock <= 0}
              className="input text-sm"
            />
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              product.stock <= 0
                ? 'bg-border text-fg-3 cursor-not-allowed'
                : isAdded
                ? 'bg-mint text-bg'
                : 'btn-primary'
            }`}
          >
            {isAdded ? '✓ Added!' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
