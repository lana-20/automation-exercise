import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, formData, subtotal, tax, shipping, total } = body

    // Validate data
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      )
    }

    if (!formData.firstName || !formData.email || !formData.cardNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Generate order ID
    const orderId = `ORD-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Calculate expected delivery (5-7 days from now)
    const deliveryDate = new Date()
    deliveryDate.setDate(deliveryDate.getDate() + 6)

    // Create order object
    const order = {
      id: orderId,
      items,
      formData,
      subtotal,
      tax,
      shipping,
      total,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      expectedDelivery: deliveryDate.toISOString().split('T')[0],
    }

    // In a real app, this would save to a database
    // For now, we'll just return the order with the ID
    console.log('Order created:', order)

    return NextResponse.json({
      orderId,
      order,
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    )
  }
}
