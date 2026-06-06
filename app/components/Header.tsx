'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function Header() {
  const { itemCount } = useCart()

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 border-b border-gray-800">
      {/* Top Bar */}
      <div className="bg-gray-900 py-2 px-6 text-xs flex items-center justify-between border-b border-gray-800">
        <div className="flex gap-6">
          <span>Delivering to Seattle 98168</span>
          <span>Update location</span>
        </div>
        <div className="flex gap-6">
          <span>Hello, Sign in</span>
          <span>Account & Lists</span>
          <span>Returns & Orders</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center gap-4 px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 text-white font-bold text-xl hover:opacity-80 transition">
          automation<span className="text-amber-400">exercise</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 flex">
          <select className="bg-gray-100 text-black px-3 py-2 rounded-l text-sm font-medium">
            <option>All</option>
            <option>Electronics</option>
            <option>Apparel</option>
            <option>Home</option>
            <option>Books</option>
          </select>
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 text-black text-sm focus:outline-none"
          />
          <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-r font-bold transition">
            🔍
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="text-center text-xs">
            <div className="text-gray-400">EN</div>
            <div>🌐</div>
          </div>

          <div className="text-center text-xs cursor-pointer hover:opacity-80">
            <div className="text-gray-400">Hello, Sign in</div>
            <div className="font-bold">Account & Lists</div>
          </div>

          <div className="text-center text-xs cursor-pointer hover:opacity-80">
            <div className="text-gray-400">Returns</div>
            <div className="font-bold">& Orders</div>
          </div>

          <Link href="/cart" className="text-center hover:opacity-80 transition relative">
            <div className="text-2xl">🛒</div>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-gray-800 px-6 py-2 overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 text-sm font-medium text-white whitespace-nowrap">
          <button className="hover:text-amber-400 transition">☰ All</button>
          <Link href="/products" className="hover:text-amber-400 transition">
            Electronics
          </Link>
          <Link href="/products" className="hover:text-amber-400 transition">
            Apparel
          </Link>
          <Link href="/products" className="hover:text-amber-400 transition">
            Home & Garden
          </Link>
          <Link href="/products" className="hover:text-amber-400 transition">
            Books
          </Link>
          <Link href="/products" className="hover:text-amber-400 transition">
            Best Sellers
          </Link>
          <Link href="/products" className="hover:text-amber-400 transition">
            New Releases
          </Link>
          <Link href="/products" className="hover:text-amber-400 transition">
            Prime
          </Link>
          <a href="#" className="text-amber-400 font-bold hover:text-amber-300 transition">
            Today's Deals
          </a>
        </div>
      </div>
    </header>
  )
}
