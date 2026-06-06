'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { itemCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      {/* Top Header */}
      <header className="bg-gradient-to-b from-gray-800 to-gray-700 text-white py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex-shrink-0 hover:opacity-80 transition">
            automation<span className="text-amber-400">exercise</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 flex items-center bg-white rounded-md overflow-hidden max-w-2xl">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 text-black focus:outline-none"
            />
            <button className="bg-amber-400 hover:bg-amber-500 px-4 py-2 text-black font-bold transition">
              🔍
            </button>
          </div>

          {/* Cart */}
          <Link href="/cart" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="flex flex-col items-end">
              <span className="text-xs">Your</span>
              <span className="font-bold">Cart</span>
            </div>
            <div className="text-2xl">🛒</div>
            {itemCount > 0 && (
              <span className="absolute ml-12 -mt-6 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gray-700 text-white py-3 border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6">
          <button className="text-sm hover:bg-gray-600 px-2 py-1 rounded transition">
            ☰ All
          </button>
          <Link href="/products" className="text-sm hover:bg-gray-600 px-2 py-1 rounded transition">
            Products
          </Link>
          <Link href="/" className="text-sm hover:bg-gray-600 px-2 py-1 rounded transition">
            Home
          </Link>
          <a href="#" className="text-sm text-amber-400 font-bold hover:bg-gray-600 px-2 py-1 rounded transition">
            Today's Deals
          </a>
        </div>
      </nav>
    </>
  )
}
