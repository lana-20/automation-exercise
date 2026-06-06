import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import { CartProvider } from './context/CartContext'

export const metadata: Metadata = {
  title: 'automation-exercise | E-commerce Testing Sandbox',
  description: 'Test e-commerce workflows with a fully functional testing sandbox for automation testing education.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#0f1a2a', color: '#f5f0eb' }}>
        <CartProvider>
          <Header />
          <main style={{ minHeight: '100vh' }}>
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}
