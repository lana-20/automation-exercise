'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'

interface OrderData {
  id: string
  items: Array<{
    productId: string
    name: string
    price: number
    quantity: number
  }>
  formData: {
    firstName: string
    lastName: string
    email: string
    address: string
    city: string
    state: string
    zip: string
  }
  subtotal: number
  tax: number
  shipping: number
  total: number
  expectedDelivery: string
}

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const [order, setOrder] = useState<OrderData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      const savedOrder = sessionStorage.getItem(`order_${orderId}`)
      if (savedOrder) {
        try {
          setOrder(JSON.parse(savedOrder))
        } catch (e) {
          console.error('Failed to parse order:', e)
        }
      }
      setLoading(false)
    }
  }, [orderId])

  if (!orderId) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-dlb-off-white/70">Order not found</p>
        <Link href="/products" className="text-dlb-coral hover:underline">
          ← Continue Shopping
        </Link>
      </main>
    )
  }

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-dlb-off-white/70">Loading order details...</p>
      </main>
    )
  }

  if (!order) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-dlb-off-white/70">Order details not available</p>
        <Link href="/products" className="text-dlb-coral hover:underline">
          ← Continue Shopping
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Success Message */}
      <div className="bg-dlb-mint/10 border border-dlb-mint rounded-lg p-6 mb-8">
        <h1 className="font-display text-4xl text-dlb-mint mb-4">✓ Order Confirmed!</h1>
        <p className="text-dlb-off-white/70">
          Thank you for your order. We'll send a confirmation email to {order.formData.email}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Order Number & Timeline */}
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-dlb-off-white/70 text-sm mb-1">Order Number</p>
                <p className="font-mono text-lg font-bold text-dlb-coral">{order.id}</p>
              </div>
              <div>
                <p className="text-dlb-off-white/70 text-sm mb-1">Expected Delivery</p>
                <p className="font-semibold">
                  {new Date(order.expectedDelivery).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-6">Order Summary</h3>

            <div className="space-y-4 pb-6 border-b border-white/10">
              {order.items.length > 0 ? (
                order.items.map(item => (
                  <div key={item.productId} className="flex justify-between">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-dlb-off-white/50 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-dlb-coral font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-dlb-off-white/50">No items in order</p>
              )}
            </div>

            <div className="space-y-3 text-sm mt-6">
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Tax (8%)</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Shipping</span>
                <span>${order.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-3 border-t border-white/10">
                <span>Total</span>
                <span className="text-dlb-coral">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Shipping Address</h3>

            <div className="text-dlb-off-white/70 space-y-1">
              <p className="font-semibold text-dlb-off-white">
                {order.formData.firstName} {order.formData.lastName}
              </p>
              <p>{order.formData.address}</p>
              <p>
                {order.formData.city}, {order.formData.state} {order.formData.zip}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>

            <div className="text-dlb-off-white/70 space-y-2">
              <p>
                <span className="text-dlb-off-white">Email:</span> {order.formData.email}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6 sticky top-20">
            <h3 className="font-semibold text-lg mb-6">What's Next?</h3>

            <div className="space-y-6 text-sm">
              <div>
                <p className="text-dlb-coral font-semibold mb-2">1. Confirmation Email</p>
                <p className="text-dlb-off-white/70">
                  We've sent a confirmation email with your order details.
                </p>
              </div>

              <div>
                <p className="text-dlb-coral font-semibold mb-2">2. Processing</p>
                <p className="text-dlb-off-white/70">
                  Your order will be processed within 24 hours.
                </p>
              </div>

              <div>
                <p className="text-dlb-coral font-semibold mb-2">3. Shipping</p>
                <p className="text-dlb-off-white/70">
                  You'll receive a shipping notification when your order ships.
                </p>
              </div>

              <div>
                <p className="text-dlb-coral font-semibold mb-2">4. Delivery</p>
                <p className="text-dlb-off-white/70">
                  Expected delivery by {new Date(order.expectedDelivery).toLocaleDateString()}.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <Link
                href="/products"
                className="block w-full bg-dlb-coral hover:bg-dlb-coral-light text-center px-6 py-3 rounded font-semibold transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-12">Loading...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  )
}
