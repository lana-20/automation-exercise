'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/app/context/CartContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()
  const cart = items
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (cart.length === 0) {
    return (
      <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
        <div className="container-wide" style={{ paddingTop: '48px', paddingBottom: '48px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '16px' }}>
            Checkout
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--ae-ink3)', marginBottom: '24px' }}>
            Your cart is empty. Add items to continue.
          </p>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: 'var(--ae-amber)',
              color: 'var(--ae-ink)',
              fontWeight: '700',
              borderRadius: '6px',
              textDecoration: 'none',
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required'
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Valid phone number is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!/^\d{5}$/.test(formData.zipCode)) newErrors.zipCode = 'Valid ZIP code is required'
    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required'
    if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = 'Valid card number is required'
    if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) newErrors.cardExpiry = 'Format MM/YY required'
    if (!/^\d{3,4}$/.test(formData.cardCvc)) newErrors.cardCvc = 'Valid CVC is required'

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelect>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      sessionStorage.setItem('lastOrder', JSON.stringify({ items: cart, total: subtotal }))
      clearCart()
      router.push('/confirmation')
    }, 1000)
  }

  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  return (
    <main style={{ backgroundColor: 'var(--ae-bg)', minHeight: '100vh' }}>
      <section style={{ backgroundColor: 'var(--ae-white)', borderBottom: '1px solid var(--ae-line)' }}>
        <div className="container-wide" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--ae-ink)' }}>Checkout</h1>
        </div>
      </section>

      <section style={{ paddingTop: '32px', paddingBottom: '48px' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Billing Address */}
              <div style={{ backgroundColor: 'var(--ae-white)', padding: '24px', borderRadius: '8px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '20px' }}>
                  Billing Address
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '14px',
                        border: `1px solid ${errors.firstName ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                        borderRadius: '6px',
                        color: 'var(--ae-ink)',
                      }}
                    />
                    {errors.firstName && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.firstName}</p>}
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '14px',
                        border: `1px solid ${errors.lastName ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                        borderRadius: '6px',
                        color: 'var(--ae-ink)',
                      }}
                    />
                    {errors.lastName && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.lastName}</p>}
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontSize: '14px',
                      border: `1px solid ${errors.email ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                      borderRadius: '6px',
                      color: 'var(--ae-ink)',
                    }}
                  />
                  {errors.email && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontSize: '14px',
                      border: `1px solid ${errors.phone ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                      borderRadius: '6px',
                      color: 'var(--ae-ink)',
                    }}
                  />
                  {errors.phone && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.phone}</p>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontSize: '14px',
                      border: `1px solid ${errors.address ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                      borderRadius: '6px',
                      color: 'var(--ae-ink)',
                    }}
                  />
                  {errors.address && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.address}</p>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '14px',
                        border: `1px solid ${errors.city ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                        borderRadius: '6px',
                        color: 'var(--ae-ink)',
                      }}
                    />
                    {errors.city && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.city}</p>}
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      placeholder="WA"
                      value={formData.state}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '14px',
                        border: `1px solid ${errors.state ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                        borderRadius: '6px',
                        color: 'var(--ae-ink)',
                      }}
                    />
                    {errors.state && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.state}</p>}
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '14px',
                        border: `1px solid ${errors.zipCode ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                        borderRadius: '6px',
                        color: 'var(--ae-ink)',
                      }}
                    />
                    {errors.zipCode && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.zipCode}</p>}
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div style={{ backgroundColor: 'var(--ae-white)', padding: '24px', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '20px' }}>
                  Payment Information
                </h3>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontSize: '14px',
                      border: `1px solid ${errors.cardName ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                      borderRadius: '6px',
                      color: 'var(--ae-ink)',
                    }}
                  />
                  {errors.cardName && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.cardName}</p>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontSize: '14px',
                      border: `1px solid ${errors.cardNumber ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                      borderRadius: '6px',
                      color: 'var(--ae-ink)',
                    }}
                  />
                  {errors.cardNumber && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.cardNumber}</p>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                      Expiry (MM/YY)
                    </label>
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="12/25"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '14px',
                        border: `1px solid ${errors.cardExpiry ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                        borderRadius: '6px',
                        color: 'var(--ae-ink)',
                      }}
                    />
                    {errors.cardExpiry && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.cardExpiry}</p>}
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--ae-ink3)', display: 'block', marginBottom: '6px' }}>
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cardCvc"
                      placeholder="123"
                      value={formData.cardCvc}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '14px',
                        border: `1px solid ${errors.cardCvc ? 'var(--ae-red)' : 'var(--ae-line)'}`,
                        borderRadius: '6px',
                        color: 'var(--ae-ink)',
                      }}
                    />
                    {errors.cardCvc && <p style={{ fontSize: '12px', color: 'var(--ae-red)', marginTop: '4px' }}>{errors.cardCvc}</p>}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '14px',
                  marginTop: '24px',
                  fontSize: '16px',
                  fontWeight: '700',
                  background: isSubmitting ? '#ccc' : 'var(--ae-amber)',
                  color: isSubmitting ? '#666' : 'var(--ae-ink)',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.background = 'var(--ae-amber-d)'
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.background = 'var(--ae-amber)'
                }}
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </form>

            {/* Order Summary */}
            <div>
              <div style={{ backgroundColor: 'var(--ae-white)', border: '1px solid var(--ae-line)', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ae-ink)', marginBottom: '20px' }}>
                  Order Summary
                </h3>

                <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--ae-line)' }}>
                  {cart.map((item, idx) => (
                    <div key={idx} style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span style={{ color: 'var(--ae-ink)' }}>{item.name}</span>
                        <span style={{ color: 'var(--ae-ink3)' }}>×{item.quantity}</span>
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--ae-red)', fontWeight: '600' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span style={{ color: 'var(--ae-ink3)' }}>Subtotal</span>
                  <span style={{ fontWeight: '600' }}>${subtotal.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span style={{ color: 'var(--ae-ink3)' }}>Tax</span>
                  <span style={{ fontWeight: '600' }}>${tax.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--ae-line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--ae-ink3)' }}>Shipping</span>
                  <span style={{ fontWeight: '600' }}>${shipping.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '700', color: 'var(--ae-ink)' }}>Total</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ae-red)' }}>
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
