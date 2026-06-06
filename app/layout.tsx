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
      <body className="bg-dlb-bg text-dlb-off-white">
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}
