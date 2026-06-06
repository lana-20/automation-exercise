'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { itemCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-dlb-card border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-2xl font-semibold">
          automation-<span className="text-dlb-coral">exercise</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/" className="text-dlb-off-white/70 hover:text-dlb-off-white transition">
            Home
          </Link>
          <Link href="/products" className="text-dlb-off-white/70 hover:text-dlb-off-white transition">
            Products
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-2 bg-dlb-coral hover:bg-dlb-coral-light px-4 py-2 rounded transition"
          >
            <span>Cart</span>
            {itemCount > 0 && (
              <span className="bg-dlb-bg text-dlb-coral font-bold px-2 py-1 rounded text-sm">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
