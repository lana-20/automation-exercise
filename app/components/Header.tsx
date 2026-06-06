'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-shadow">
              AE
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">automation<span className="text-blue-600">exercise</span></div>
              <div className="text-xs text-gray-500 font-medium">Testing Platform</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</Link>

            <Link href="/cart" className="btn-primary text-sm">
              <span>🛒</span>
              Cart
              {itemCount > 0 && (
                <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-white text-blue-600 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-50">
            <div className="px-4 py-4 space-y-3">
              <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Home</Link>
              <Link href="/products" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Products</Link>
              <Link href="/cart" className="btn-primary w-full justify-center">
                <span>🛒</span>
                Cart {itemCount > 0 && `(${itemCount})`}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
