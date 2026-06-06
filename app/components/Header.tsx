'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { itemCount } = useCart()
  const [hbgOpen, setHbgOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/8 bg-black/40 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-coral to-coral-light flex items-center justify-center font-bold text-white text-sm animate-pulse">
                AE
              </div>
              <div>
                <div className="font-display font-medium text-lg text-off-white">
                  <em className="not-italic">automation-</em><em className="italic text-coral">exercise</em>
                </div>
                <div className="font-mono text-10px tracking-widest uppercase text-fg-3">Testing Sandbox</div>
              </div>
            </Link>

            <div className="flex items-center gap-8">
              <Link href="/" className="hidden sm:block text-fg-2 hover:text-coral transition font-medium text-sm">
                Home
              </Link>
              <Link href="/products" className="hidden sm:block text-fg-2 hover:text-coral transition font-medium text-sm">
                Products
              </Link>
              <Link href="/cart" className="flex items-center gap-2 bg-coral hover:bg-coral-light px-6 py-2.5 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-xl">
                <span>🛒</span>
                <span>Cart</span>
                {itemCount > 0 && (
                  <span className="flex items-center justify-center min-w-5 h-5 rounded-full bg-white/20 text-xs font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setHbgOpen(true)}
                className="sm:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
                aria-label="Open navigation"
              >
                <span className="block w-6 h-0.5 bg-fg-2 transition"></span>
                <span className="block w-4 h-0.5 bg-fg-2 transition"></span>
                <span className="block w-6 h-0.5 bg-fg-2 transition"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity ${
          hbgOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setHbgOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <aside
        className={`fixed top-0 right-0 w-72 h-screen bg-card border-l border-border-mid z-50 overflow-y-auto transition-transform ${
          hbgOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="font-display text-sm">
            <em className="not-italic">automation-</em><em className="italic text-coral">exercise</em>
          </div>
          <button
            onClick={() => setHbgOpen(false)}
            className="text-fg-3 hover:text-off-white transition text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <Link href="/" className="block font-display text-base text-off-white hover:text-coral transition">
              Home
            </Link>
          </div>

          <div>
            <div className="font-mono text-10px tracking-widest uppercase text-fg-3 mb-3 pb-2 border-b border-border">
              Navigation
            </div>
            <Link href="/" className="block text-fg-2 hover:text-coral transition py-2 text-sm">
              Home
            </Link>
            <Link href="/products" className="block text-fg-2 hover:text-coral transition py-2 text-sm">
              Products
            </Link>
            <Link href="/cart" className="block text-fg-2 hover:text-coral transition py-2 text-sm">
              Cart
            </Link>
          </div>

          <div>
            <div className="font-mono text-10px tracking-widest uppercase text-fg-3 mb-3 pb-2 border-b border-border">
              Getting Started
            </div>
            <a href="#features" className="block text-fg-2 hover:text-coral transition py-2 text-sm">
              Why Use It?
            </a>
            <a href="#benefits" className="block text-fg-2 hover:text-coral transition py-2 text-sm">
              Benefits
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
