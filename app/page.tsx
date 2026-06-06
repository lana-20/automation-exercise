import HeroBanner from './components/HeroBanner'
import Link from 'next/link'

const dealProducts = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    limited: true,
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    limited: true,
  },
  {
    id: '3',
    name: 'Premium T-Shirt',
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    limited: true,
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 59.99,
    originalPrice: 99.99,
    discount: 40,
    limited: false,
  },
  {
    id: '5',
    name: 'Coffee Maker Deluxe',
    price: 89.99,
    originalPrice: 159.99,
    discount: 44,
    limited: true,
  },
  {
    id: '6',
    name: 'Desk Lamp LED',
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    limited: false,
  },
]

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Promotional Cards Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-8">
          <div className="section-eyebrow">— Quick Access</div>
          <h2 className="section-title">Shop by Category</h2>

          <div className="grid grid-cols-4 gap-6">
            {[
              { title: 'Electronics', icon: '💻', color: 'blue' },
              { title: 'Apparel', icon: '👕', color: 'green' },
              { title: 'Home & Garden', icon: '🏠', color: 'purple' },
              { title: 'Books', icon: '📚', color: 'red' },
            ].map((cat, idx) => (
              <div key={idx} className="product-card text-center p-8">
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="font-bold text-lg mb-3">{cat.title}</h3>
                <Link href="/products" className="text-blue-600 hover:text-red-600 font-bold text-sm transition">
                  Explore {cat.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightning Deals Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="section-eyebrow">⚡ Limited Time</div>
              <h2 className="section-title">Lightning Deals</h2>
            </div>
            <Link href="/products" className="text-blue-600 hover:text-red-600 font-bold transition">
              See all deals →
            </Link>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {dealProducts.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="product-card group"
              >
                <div className="w-full h-40 bg-gray-100 rounded mb-3 flex items-center justify-center group-hover:bg-gray-150 transition text-4xl">
                  📦
                </div>

                {product.discount && (
                  <>
                    <div className="badge-deal">{product.discount}% off</div>
                    {product.limited && (
                      <div className="text-xs text-red-600 font-bold mb-2">Limited time</div>
                    )}
                  </>
                )}

                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition mb-3">
                  {product.name}
                </h3>

                <div className="space-y-1 mb-3">
                  <div className="price-new">${product.price.toFixed(2)}</div>
                  {product.originalPrice && (
                    <div className="price-old">${product.originalPrice.toFixed(2)}</div>
                  )}
                </div>

                <p className="text-xs text-green-700 font-bold">In Stock</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Heavy Discounts Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="section-eyebrow">🔥 Up to 50% Off</div>
              <h2 className="section-title">Heavy Discount Deals</h2>
            </div>
            <Link href="/products" className="text-blue-600 hover:text-red-600 font-bold transition">
              See all deals →
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {dealProducts.filter((p) => p.discount && p.discount > 40).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="product-card group"
              >
                <div className="w-full h-48 bg-gray-100 rounded mb-4 flex items-center justify-center group-hover:bg-gray-150 transition text-5xl">
                  📦
                </div>

                {product.discount && (
                  <>
                    <div className="badge-deal">{product.discount}% off</div>
                    {product.limited && (
                      <div className="text-xs text-red-600 font-bold mb-2">Limited time deal</div>
                    )}
                  </>
                )}

                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition mb-4">
                  {product.name}
                </h3>

                <div className="space-y-1 mb-4">
                  <div className="price-new">${product.price.toFixed(2)}</div>
                  {product.originalPrice && (
                    <div className="price-old">${product.originalPrice.toFixed(2)}</div>
                  )}
                </div>

                <p className="text-xs text-green-700 font-bold">In Stock</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-12">
          <div className="section-eyebrow">— Features</div>
          <h2 className="section-title">Why automation-exercise?</h2>

          <div className="grid grid-cols-4 gap-6">
            {[
              {
                title: 'Real E-Commerce Flow',
                desc: 'Complete checkout experience with full validation and order processing',
                icon: '✓',
              },
              {
                title: '12 Test Products',
                desc: 'Diverse products across 5 categories for comprehensive testing',
                icon: '🛍️',
              },
              {
                title: 'Edge Cases Built-in',
                desc: 'Stock limits, price calculations, and validation scenarios',
                icon: '⚙️',
              },
              {
                title: 'Professional Testing',
                desc: 'Designed specifically for automation testing professionals',
                icon: '🎯',
              },
            ].map((item, idx) => (
              <div key={idx} className="product-card p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-12">
          <div className="section-eyebrow">— By The Numbers</div>
          <h2 className="section-title">Platform Overview</h2>

          <div className="grid grid-cols-4 gap-6">
            {[
              { number: '12', label: 'Products' },
              { number: '5', label: 'Categories' },
              { number: '100+', label: 'Test Cases' },
              { number: '∞', label: 'Scenarios' },
            ].map((stat, idx) => (
              <div key={idx} className="product-card p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-sm text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container-wide py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Testing?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Explore our complete e-commerce platform with real-world testing scenarios
          </p>
          <Link href="/products" className="btn-primary bg-amber-400 hover:bg-amber-500 text-black">
            Browse All Products
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-wide py-12">
          <div className="grid grid-cols-5 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4">Get to Know Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Testing Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 automation-exercise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
