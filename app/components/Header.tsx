'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function Header() {
  const { itemCount } = useCart()

  return (
    <header className="bg-dlb-card/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-dlb-coral to-dlb-coral-light flex items-center justify-center font-bold text-white shadow-glow">
            AE
          </div>
          <div>
            <div className="font-display text-lg font-bold leading-tight">
              automation-<span className="text-dlb-coral">exercise</span>
            </div>
            <div className="text-xs text-dlb-off-white/50">E-commerce Testing</div>
          </div>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-dlb-off-white/70 hover:text-dlb-coral transition-colors duration-200 font-medium text-sm"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-dlb-off-white/70 hover:text-dlb-coral transition-colors duration-200 font-medium text-sm"
          >
            Products
          </Link>
          <Link href="/cart" className="group">
            <div className="flex items-center gap-2 bg-gradient-to-r from-dlb-coral to-dlb-coral-light hover:from-dlb-coral-light hover:to-dlb-coral px-6 py-2.5 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg shadow-dlb-coral/20 group-hover:shadow-dlb-coral/40 group-hover:scale-105">
              <span>🛒</span>
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-white/20 text-xs font-bold backdrop-blur">
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
