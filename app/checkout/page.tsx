'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/app/context/CartContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const cart = items

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

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
      <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
        <section style={{ paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
          <div style={{
            width: '100%',
            maxWidth: '960px',
            margin: '0 auto',
            paddingLeft: '80px',
            paddingRight: '80px',
            boxSizing: 'border-box'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '500',
              color: '#f5f0eb',
              marginBottom: '16px',
              marginTop: 0
            }}>
              Checkout
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#d1ccc6',
              marginBottom: '40px',
              lineHeight: '1.8'
            }}>
              Your cart is empty. Add items to continue.
            </p>
            <Link
              href="/products"
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: '#d4552a',
                color: '#f5f0eb',
                fontWeight: '600',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'background 150ms',
                fontSize: '14px',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e8785a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#d4552a'}
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required'
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required'
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Valid phone required'
    if (!formData.address.trim()) newErrors.address = 'Address required'
    if (!formData.city.trim()) newErrors.city = 'City required'
    if (!formData.state.trim()) newErrors.state = 'State required'
    if (!/^\d{5}$/.test(formData.zipCode)) newErrors.zipCode = 'Valid ZIP required'
    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name required'
    if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = 'Valid card number required'
    if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) newErrors.cardExpiry = 'Format MM/YY'
    if (!/^\d{3,4}$/.test(formData.cardCvc)) newErrors.cardCvc = 'Valid CVC required'
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    await new Promise((resolve) => setTimeout(resolve, 1000))
    clearCart()
    router.push('/confirmation')
  }

  const FormInput = ({
    label,
    name,
    type = 'text',
    placeholder = '',
    value,
    error,
    required = true,
  }: {
    label: string
    name: string
    type?: string
    placeholder?: string
    value: string
    error?: string
    required?: boolean
  }) => (
    <div style={{ marginBottom: '16px' }}>
      <label style={{
        display: 'block',
        fontSize: '11px',
        fontFamily: 'JetBrains Mono, monospace',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#a8a39d',
        marginBottom: '8px'
      }}>
        {label} {required && '*'}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '12px 14px',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          background: 'rgba(19,36,58,0.5)',
          border: error ? '2px solid #d4552a' : '1px solid rgba(255,255,255,0.08)',
          borderRadius: '4px',
          color: '#f5f0eb',
          transition: 'all 150ms',
          boxSizing: 'border-box',
          '::placeholder': { color: 'rgba(245,240,235,0.38)' }
        }}
        onFocus={(e) => {
          e.currentTarget.style.background = 'rgba(19,36,58,0.7)'
          e.currentTarget.style.borderColor = error ? '#d4552a' : '#d4552a'
        }}
        onBlur={(e) => {
          e.currentTarget.style.background = 'rgba(19,36,58,0.5)'
          e.currentTarget.style.borderColor = error ? '#d4552a' : 'rgba(255,255,255,0.08)'
        }}
      />
      {error && (
        <p style={{
          color: '#d4552a',
          fontSize: '12px',
          marginTop: '4px',
          marginBottom: 0
        }}>
          {error}
        </p>
      )}
    </div>
  )

  return (
    <main style={{ background: '#0f1a2a', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '24px',
        paddingBottom: '24px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <Link
            href="/cart"
            style={{
              color: '#d4552a',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '0.5px'
            }}
          >
            ← Back to Cart
          </Link>
        </div>
      </section>

      {/* Checkout Form */}
      <section style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          boxSizing: 'border-box'
        }}>
          <h1 style={{
            fontSize: '44px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '500',
            color: '#f5f0eb',
            marginBottom: '40px',
            marginTop: 0
          }}>
            Checkout
          </h1>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '60px' }}>
            {/* Form Fields */}
            <div>
              {/* Billing Address */}
              <fieldset style={{ border: 'none', padding: 0, margin: 0, marginBottom: '48px' }}>
                <legend style={{
                  fontSize: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#d4552a',
                  marginBottom: '20px',
                  padding: 0
                }}>
                  Billing Address
                </legend>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <FormInput
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    error={errors.firstName}
                    placeholder="John"
                  />
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    error={errors.lastName}
                    placeholder="Doe"
                  />
                </div>

                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  error={errors.email}
                  placeholder="john@example.com"
                />

                <FormInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  error={errors.phone}
                  placeholder="(555) 123-4567"
                />

                <FormInput
                  label="Address"
                  name="address"
                  value={formData.address}
                  error={errors.address}
                  placeholder="123 Main St"
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 80px', gap: '12px' }}>
                  <FormInput
                    label="City"
                    name="city"
                    value={formData.city}
                    error={errors.city}
                    placeholder="Seattle"
                  />
                  <FormInput
                    label="State"
                    name="state"
                    value={formData.state}
                    error={errors.state}
                    placeholder="WA"
                  />
                  <FormInput
                    label="ZIP"
                    name="zipCode"
                    value={formData.zipCode}
                    error={errors.zipCode}
                    placeholder="98101"
                  />
                </div>
              </fieldset>

              {/* Payment */}
              <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                <legend style={{
                  fontSize: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#d4552a',
                  marginBottom: '20px',
                  padding: 0
                }}>
                  Payment Information
                </legend>

                <FormInput
                  label="Cardholder Name"
                  name="cardName"
                  value={formData.cardName}
                  error={errors.cardName}
                  placeholder="John Doe"
                />

                <FormInput
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  error={errors.cardNumber}
                  placeholder="1234 5678 9012 3456"
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormInput
                    label="Expiry (MM/YY)"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    error={errors.cardExpiry}
                    placeholder="12/25"
                  />
                  <FormInput
                    label="CVC"
                    name="cardCvc"
                    type="text"
                    value={formData.cardCvc}
                    error={errors.cardCvc}
                    placeholder="123"
                  />
                </div>
              </fieldset>
            </div>

            {/* Order Summary Sidebar */}
            <aside style={{
              background: 'rgba(19,36,58,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px',
              padding: '28px',
              height: 'fit-content',
              position: 'sticky',
              top: '100px'
            }}>
              <h2 style={{
                fontSize: '14px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#d4552a',
                marginTop: 0,
                marginBottom: '20px'
              }}>
                Order Summary
              </h2>

              {/* Items */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}>
                {items.slice(0, 3).map((item) => (
                  <div key={item.productId} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '13px'
                  }}>
                    <span style={{ color: '#d1ccc6' }}>
                      {item.name} <span style={{ color: '#a8a39d' }}>×{item.quantity}</span>
                    </span>
                    <span style={{ color: '#f5f0eb', fontWeight: '500' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                {items.length > 3 && (
                  <div style={{
                    fontSize: '12px',
                    color: '#a8a39d',
                    fontStyle: 'italic',
                    paddingTop: '8px'
                  }}>
                    +{items.length - 3} more item{items.length - 3 !== 1 ? 's' : ''}
                  </div>
                )}
              </div>

              {/* Totals */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#d1ccc6' }}>Subtotal</span>
                  <span style={{ color: '#f5f0eb' }}>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#d1ccc6' }}>Tax</span>
                  <span style={{ color: '#f5f0eb' }}>${tax.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#d1ccc6' }}>Shipping</span>
                  <span style={{ color: '#f5f0eb' }}>${shipping.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '24px'
              }}>
                <span style={{
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#a8a39d'
                }}>
                  Total
                </span>
                <span style={{
                  fontSize: '24px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '500',
                  color: '#d4552a'
                }}>
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  background: '#d4552a',
                  color: '#f5f0eb',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background 150ms',
                  opacity: isSubmitting ? 0.7 : 1,
                  fontFamily: 'Inter, sans-serif'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#e8785a'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#d4552a'
                  }
                }}
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </aside>
          </form>
        </div>
      </section>
    </main>
  )
}
