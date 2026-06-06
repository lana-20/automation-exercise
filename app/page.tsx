import HeroBanner from './components/HeroBanner'
import ProductCarousel from './components/ProductCarousel'

const featuredProducts = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    category: 'Electronics',
    limited: true,
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    category: 'Electronics',
    limited: true,
  },
  {
    id: '3',
    name: 'Premium T-Shirt',
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    category: 'Apparel',
    limited: true,
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 59.99,
    originalPrice: 99.99,
    discount: 40,
    category: 'Apparel',
    limited: false,
  },
  {
    id: '5',
    name: 'Coffee Maker Deluxe',
    price: 89.99,
    originalPrice: 159.99,
    discount: 44,
    category: 'Home',
    limited: true,
  },
  {
    id: '6',
    name: 'Desk Lamp LED',
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    category: 'Home',
    limited: false,
  },
  {
    id: '7',
    name: 'JavaScript Guide',
    price: 29.99,
    originalPrice: 49.99,
    discount: 40,
    category: 'Books',
    limited: false,
  },
  {
    id: '8',
    name: 'Testing Automation',
    price: 39.99,
    originalPrice: 69.99,
    discount: 43,
    category: 'Books',
    limited: true,
  },
]

const premiumProducts = featuredProducts.filter((p) => p.discount && p.discount > 40)

const newProducts = [
  {
    id: '9',
    name: 'Ultra Wireless Earbuds',
    price: 99.99,
    category: 'Electronics',
  },
  {
    id: '10',
    name: 'Summer Collection Shorts',
    price: 34.99,
    category: 'Apparel',
  },
  {
    id: '11',
    name: 'Portable Speaker',
    price: 49.99,
    originalPrice: 79.99,
    discount: 37,
    category: 'Electronics',
    limited: true,
  },
  {
    id: '12',
    name: 'Pillow Set Premium',
    price: 44.99,
    originalPrice: 74.99,
    discount: 40,
    category: 'Home',
    limited: false,
  },
]

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Promotional Cards Grid */}
      <div className="bg-white px-6 py-6">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-4">Today's Deals</h3>
            <div className="text-4xl mb-4">⚡</div>
            <p className="text-sm text-gray-700 mb-4">
              Shop limited-time deals across all categories
            </p>
            <a href="#" className="text-blue-600 hover:text-red-600 font-bold text-sm">
              See today's deals
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-4">Electronics</h3>
            <div className="text-4xl mb-4">💻</div>
            <p className="text-sm text-gray-700 mb-4">
              Explore tech gadgets and devices
            </p>
            <a href="#" className="text-blue-600 hover:text-red-600 font-bold text-sm">
              Shop Electronics
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-4">Apparel</h3>
            <div className="text-4xl mb-4">👕</div>
            <p className="text-sm text-gray-700 mb-4">
              Latest fashion and clothing
            </p>
            <a href="#" className="text-blue-600 hover:text-red-600 font-bold text-sm">
              Shop Apparel
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-4">Home & Garden</h3>
            <div className="text-4xl mb-4">🏠</div>
            <p className="text-sm text-gray-700 mb-4">
              Everything for your home
            </p>
            <a href="#" className="text-blue-600 hover:text-red-600 font-bold text-sm">
              Shop Home
            </a>
          </div>
        </div>
      </div>

      {/* Featured Deals */}
      <ProductCarousel title="Lightning Deals" products={featuredProducts} />

      {/* Heavy Discounts */}
      <ProductCarousel
        title="Up to 50% off - Limited time deals"
        products={premiumProducts}
      />

      {/* New Releases */}
      <ProductCarousel title="New Releases" products={newProducts} />

      {/* Info Section */}
      <div className="bg-white border-t border-gray-200 py-8 px-6">
        <h2 className="text-2xl font-bold mb-6">Why Choose automation-exercise?</h2>

        <div className="grid grid-cols-4 gap-6">
          {[
            {
              title: 'Real E-Commerce Flow',
              desc: 'Complete checkout experience with validation',
            },
            {
              title: '12 Test Products',
              desc: 'Diverse products across 5 categories',
            },
            {
              title: 'Edge Cases Built-in',
              desc: 'Stock limits, price calculations, validation',
            },
            {
              title: 'Professional Testing',
              desc: 'Designed for automation testing professionals',
            },
          ].map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded p-4">
              <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12 px-6 text-sm">
        <div className="grid grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Get to Know Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Testing Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; 2024 automation-exercise. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
