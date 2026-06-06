'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function Header() {
  const { itemCount } = useCart()

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 rounded text-white">
            AE
          </span>
          <span>
            automation<span className="text-blue-500">exercise</span>
          </span>
        </Link>
      </div>

      <div className="flex-none gap-2 hidden md:flex">
        <nav className="flex gap-4">
          <Link href="/" className="btn btn-ghost">
            Home
          </Link>
          <Link href="/products" className="btn btn-ghost">
            Products
          </Link>
        </nav>
        <Link href="/cart" className="btn btn-primary gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Cart
          {itemCount > 0 && (
            <span className="badge badge-primary">{itemCount}</span>
          )}
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="flex-none gap-2 md:hidden">
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">
                Cart {itemCount > 0 && <span className="badge">{itemCount}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
