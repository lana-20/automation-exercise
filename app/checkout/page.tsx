'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/app/context/CartContext'
import { useRouter } from 'next/navigation'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  shippingMethod: string
  cardNumber: string
  cardExpiry: string
  cardCvv: string
}

interface FormErrors {
  [key: string]: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'CA',
    zip: '',
    shippingMethod: 'standard',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  })

  const tax = subtotal * 0.08
  const shippingCosts = {
    standard: 0,
    express: 15,
    overnight: 25,
  }
  const shipping = shippingCosts[formData.shippingMethod as keyof typeof shippingCosts]
  const total = subtotal + tax + shipping

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (formData.firstName.length > 50) newErrors.firstName = 'First name must be 50 characters or less'

    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (formData.lastName.length > 50) newErrors.lastName = 'Last name must be 50 characters or less'

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be in format: ###-###-####'
    }

    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (formData.address.length > 100) newErrors.address = 'Address must be 100 characters or less'

    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (formData.city.length > 50) newErrors.city = 'City must be 50 characters or less'

    if (!formData.state) newErrors.state = 'State is required'

    if (!formData.zip.trim()) {
      newErrors.zip = 'Zip code is required'
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) {
      newErrors.zip = 'Zip must be in format: #####'
    }

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required'
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits'
    }

    if (!formData.cardExpiry.trim()) {
      newErrors.cardExpiry = 'Expiration date is required'
    } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
      newErrors.cardExpiry = 'Expiration must be in format: MM/YY'
    }

    if (!formData.cardCvv.trim()) {
      newErrors.cardCvv = 'CVV is required'
    } else if (!/^\d{3,4}$/.test(formData.cardCvv)) {
      newErrors.cardCvv = 'CVV must be 3-4 digits'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          formData,
          subtotal,
          tax,
          shipping,
          total,
        }),
      })

      if (!response.ok) {
        throw new Error('Order submission failed')
      }

      const data = await response.json()

      // Save order to sessionStorage for confirmation page
      sessionStorage.setItem(
        `order_${data.orderId}`,
        JSON.stringify({
          id: data.orderId,
          items,
          formData,
          subtotal,
          tax,
          shipping,
          total,
          expectedDelivery: data.order.expectedDelivery,
        })
      )

      clearCart()
      router.push(`/order-confirmation?orderId=${data.orderId}`)
    } catch (error) {
      setErrors({ submit: 'Failed to submit order. Please try again.' })
      setSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-3xl mb-8">Checkout</h1>
        <div className="text-center py-12">
          <p className="text-dlb-off-white/70 text-lg mb-8">Your cart is empty</p>
          <Link
            href="/products"
            className="inline-block bg-dlb-coral hover:bg-dlb-coral-light px-8 py-3 rounded font-semibold transition"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="font-display text-3xl mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
          {errors.submit && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded">
              {errors.submit}
            </div>
          )}

          {/* Shipping Information */}
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-6">Shipping Information</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  maxLength={50}
                  className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                    errors.firstName ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  maxLength={50}
                  className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                    errors.lastName ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                  errors.email ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                  errors.phone ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="415-555-0123"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                maxLength={100}
                className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                  errors.address ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="123 Main St"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  maxLength={50}
                  className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                    errors.city ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="San Francisco"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                    errors.state ? 'border-red-500' : 'border-white/10'
                  }`}
                >
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Zip Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                maxLength={10}
                className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                  errors.zip ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="94105"
              />
              {errors.zip && (
                <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
              )}
            </div>
          </div>

          {/* Shipping Method */}
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-6">Shipping Method</h2>

            <div className="space-y-3">
              {[
                { value: 'standard', label: 'Standard (5-7 days)', cost: 0 },
                { value: 'express', label: 'Express (2-3 days)', cost: 15 },
                { value: 'overnight', label: 'Overnight', cost: 25 },
              ].map(method => (
                <label key={method.value} className="flex items-center gap-3 p-3 hover:bg-dlb-bg-dark rounded cursor-pointer transition">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value={method.value}
                    checked={formData.shippingMethod === method.value}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="flex-1">{method.label}</span>
                  <span className="text-dlb-coral font-semibold">
                    {method.cost === 0 ? 'FREE' : `+$${method.cost}`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-6">Payment Information</h2>

            <div className="mb-4">
              <label className="block text-sm mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength={16}
                className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                  errors.cardNumber ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="1234567890123456"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Exp Date (MM/YY)</label>
                <input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  maxLength={5}
                  className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                    errors.cardExpiry ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="12/25"
                />
                {errors.cardExpiry && (
                  <p className="text-red-500 text-xs mt-1">{errors.cardExpiry}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2">CVV</label>
                <input
                  type="text"
                  name="cardCvv"
                  value={formData.cardCvv}
                  onChange={handleChange}
                  maxLength={4}
                  className={`w-full px-4 py-2 bg-dlb-bg border rounded ${
                    errors.cardCvv ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="123"
                />
                {errors.cardCvv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cardCvv}</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-dlb-coral hover:bg-dlb-coral-light disabled:bg-gray-600 px-6 py-3 rounded font-semibold transition"
            >
              {submitting ? 'Processing...' : 'Place Order'}
            </button>
            <Link
              href="/cart"
              className="flex-1 border border-dlb-coral text-dlb-coral hover:bg-dlb-card px-6 py-3 rounded font-semibold transition text-center"
            >
              Back to Cart
            </Link>
          </div>
        </form>

        {/* Order Summary Sidebar */}
        <div>
          <div className="bg-dlb-card border border-white/10 rounded-lg p-6 sticky top-20">
            <h3 className="font-semibold text-lg mb-6">Order Summary</h3>

            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-white/10 max-h-64 overflow-y-auto">
              {items.map(item => (
                <div key={item.productId} className="flex justify-between">
                  <span className="text-dlb-off-white/70">
                    {item.name} <span className="font-semibold">×{item.quantity}</span>
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-white/10">
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dlb-off-white/70">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-dlb-coral">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
