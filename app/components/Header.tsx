'use client'

import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'

export default function Header() {
  const { itemCount } = useCart()

  return (
    <header style={{
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(15, 26, 42, 0.88)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '16px 0'
    }}>
      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0 80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '48px'
      }}>
        {/* Logo/Brand */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          color: '#f5f0eb',
          flexShrink: 0
        }}>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '22px',
            fontWeight: '500',
            letterSpacing: '-0.01em'
          }}>
            ae
          </div>
        </Link>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          fontSize: '14px'
        }}>
          <Link href="/products" style={{
            color: 'rgba(245,240,235,0.65)',
            textDecoration: 'none',
            fontFamily: 'Inter, sans-serif',
            transition: 'color 150ms'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#f5f0eb'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,240,235,0.65)'}>
            Products
          </Link>
        </nav>

        {/* Cart Button */}
        <Link href="/cart" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'rgba(212, 85, 42, 0.1)',
          border: '1px solid rgba(212, 85, 42, 0.3)',
          borderRadius: '4px',
          color: '#d4552a',
          textDecoration: 'none',
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '0.5px',
          transition: 'all 150ms',
          flexShrink: 0,
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(212, 85, 42, 0.2)'
          e.currentTarget.style.borderColor = '#d4552a'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(212, 85, 42, 0.1)'
          e.currentTarget.style.borderColor = 'rgba(212, 85, 42, 0.3)'
        }}>
          <span>🛒</span>
          <span>Cart</span>
          {itemCount > 0 && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              background: '#d4552a',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: '700',
              color: '#0f1a2a'
            }}>
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
