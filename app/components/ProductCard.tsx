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
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
      {/* Image */}
      <figure className="bg-gradient-to-br from-base-200 to-base-300 h-48 flex items-center justify-center">
        <span className="text-5xl">📦</span>
      </figure>

      {/* Content */}
      <div className="card-body">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <Link href={`/products/${product.id}`} className="hover:text-primary transition">
              <h3 className="card-title text-lg line-clamp-2">{product.name}</h3>
            </Link>
          </div>
          <div className="badge badge-primary">{product.category}</div>
        </div>

        {/* Stock Status */}
        <div className="text-sm">
          {product.stock > 0 ? (
            <p className="text-success">✓ In Stock ({product.stock})</p>
          ) : (
            <p className="text-error">Out of stock</p>
          )}
        </div>

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Price */}
        <div className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </div>

        {/* Quantity & Actions */}
        <div className="form-control gap-2">
          <label className="label">
            <span className="label-text text-xs font-semibold">Quantity</span>
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
            className="input input-bordered input-sm"
          />
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
          className={`btn btn-block transition ${
            product.stock <= 0
              ? 'btn-disabled'
              : isAdded
              ? 'btn-success'
              : 'btn-primary'
          }`}
        >
          {isAdded ? '✓ Added to Cart' : product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>

        {/* View Details Link */}
        <Link href={`/products/${product.id}`} className="link link-primary text-center text-sm">
          View Details
        </Link>
      </div>
    </div>
  )
}
