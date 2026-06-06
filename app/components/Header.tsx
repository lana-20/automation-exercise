'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function Header() {
  const { itemCount } = useCart()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-lg">
            AE
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg">
              Automation Exercise
            </div>
            <div className="text-xs text-gray-500">Testing Practice</div>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition text-sm"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-blue-600 font-medium transition text-sm"
          >
            Products
          </Link>
          <Link href="/cart" className="relative">
            <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition text-sm">
              <span>🛒</span>
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-blue-600 text-xs font-bold ml-1">
                  {itemCount}
                </span>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
