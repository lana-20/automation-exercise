'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function Header() {
  const { itemCount } = useCart()

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Main Header */}
      <div className="container-wide py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition">
          <div className="text-2xl font-bold">
            automation<span className="text-amber-500">exercise</span>
          </div>
          <div className="text-xs text-gray-600 font-medium">Testing Platform</div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-150 transition">
            <input
              type="text"
              placeholder="Search products, categories..."
              className="flex-1 px-6 py-3 bg-transparent focus:outline-none text-sm"
            />
            <button className="px-6 py-3 text-gray-600 hover:text-gray-900 transition font-medium text-sm">
              🔍
            </button>
          </div>
        </div>

        {/* Cart & Account */}
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-xs text-gray-600 font-medium">Returns</div>
            <div className="text-xs text-gray-600">& Orders</div>
          </div>

          <Link href="/cart" className="hover:opacity-80 transition relative">
            <div className="text-center">
              <div className="text-2xl mb-1">🛒</div>
              <div className="text-xs font-semibold text-gray-900">Cart</div>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-amber-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container-wide flex items-center gap-8 py-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition flex items-center gap-1">
            <span>☰</span> Categories
          </button>
          <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">
            All Products
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">
            Home
          </Link>
          <div className="flex-1"></div>
          <span className="text-sm text-amber-600 font-bold">Today's Deals</span>
        </div>
      </div>
    </header>
  )
}
