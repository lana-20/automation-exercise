'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  const tax = subtotal * 0.08
  const shipping = 10
  const total = subtotal + tax + shipping

  if (items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-3xl mb-8">Shopping Cart</h1>
        <div className="text-center py-12">
          <p className="text-dlb-off-white/70 text-lg mb-8">Your cart is empty</p>
          <Link
            href="/products"
            className="inline-block bg-dlb-coral hover:bg-dlb-coral-light px-8 py-3 rounded font-semibold transition"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="font-display text-3xl mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-dlb-card border border-white/10 rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-sm text-dlb-off-white/70 font-semibold">
              <div className="col-span-5">Product</div>
              <div className="col-span-2">Qty</div>
              <div className="col-span-3">Price</div>
              <div className="col-span-2"></div>
            </div>

            {items.map(item => (
              <div
                key={item.productId}
                className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 items-center hover:bg-dlb-bg-dark transition"
              >
                <div className="col-span-5">
                  <Link href={`/products/${item.productId}`} className="hover:text-dlb-coral transition">
                    {item.name}
                  </Link>
                </div>

                <div className="col-span-2">
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value) || 1)}
                    className="w-16 px-2 py-1 bg-dlb-bg border border-white/10 rounded text-sm"
                  />
                </div>

                <div className="col-span-3 text-dlb-coral font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="col-span-2 text-right">
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-red-500 hover:text-red-400 transition font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href="/products"
              className="flex-1 px-6 py-3 border border-dlb-coral text-dlb-coral rounded hover:bg-dlb-card transition font-semibold text-center"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6 sticky top-20">
            <h3 className="font-semibold text-lg mb-6">Order Summary</h3>

            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-white/10">
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span className="text-dlb-coral">${total.toFixed(2)}</span>
            </div>

            <Link
              href="/checkout"
              className="w-full block bg-dlb-coral hover:bg-dlb-coral-light text-center px-6 py-3 rounded font-semibold transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
