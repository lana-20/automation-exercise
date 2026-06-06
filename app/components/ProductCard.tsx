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
    <div className="bg-dlb-card border border-white/10 rounded-lg overflow-hidden hover:border-dlb-coral/30 transition">
      <div className="aspect-square bg-dlb-bg-dark flex items-center justify-center">
        <div className="text-dlb-off-white/30 text-sm">Image</div>
      </div>

      <div className="p-4">
        <div className="text-xs text-dlb-coral mb-2">{product.category}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold hover:text-dlb-coral transition line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex justify-between items-center mt-3">
          <div className="text-dlb-coral font-bold">${product.price.toFixed(2)}</div>
          <div className="text-xs text-dlb-off-white/50">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <input
            type="number"
            min="1"
            max={product.stock || 99}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
            className="w-full px-2 py-1 bg-dlb-bg border border-white/10 rounded text-sm"
          />
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`w-full py-2 rounded font-semibold transition ${
              product.stock <= 0
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : isAdded
                ? 'bg-dlb-mint text-dlb-bg'
                : 'bg-dlb-coral hover:bg-dlb-coral-light'
            }`}
          >
            {isAdded ? '✓ Added!' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
