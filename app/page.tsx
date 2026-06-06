import Link from 'next/link'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Banner - Spacious */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="container-wide py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              automation-exercise
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl font-light">
              A fully functional e-commerce testing sandbox built for automation testing education, comprehensive benchmarking, and professional learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary">
                Start Exploring
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section - More Spacious */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why automation-exercise?</h2>
          <p className="text-lg text-gray-700 mb-12 font-light max-w-3xl">
            Everything you need for real-world automation testing practice in one professional platform.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛍️',
                title: 'Complete Product Catalog',
                desc: '12 products across 5 carefully designed categories with realistic pricing, stock management, and detailed product specifications.',
              },
              {
                icon: '🔍',
                title: 'Powerful Search & Filter',
                desc: 'Find exactly what you need with intelligent search functionality, category filtering, and sorting by multiple criteria.',
              },
              {
                icon: '✓',
                title: 'Professional Checkout',
                desc: 'Complete order flow with form validation, shipping options, payment processing, and order confirmation.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="card p-8 hover:border-amber-300">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Large Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Products</h2>
              <p className="text-gray-700 font-light">
                Explore our selection of test products with real-world scenarios
              </p>
            </div>
            <Link href="/products" className="text-amber-700 hover:text-amber-800 font-semibold text-sm transition">
              See all products →
            </Link>
          </div>
          <ProductGrid />
        </div>
      </section>

      {/* Testing Scenarios Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing Scenarios</h2>
          <p className="text-lg text-gray-700 mb-12 font-light max-w-3xl">
            Practice real-world testing workflows and master automation testing fundamentals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Happy Path Workflows',
                items: [
                  'Complete browse-to-checkout journey',
                  'Product discovery and selection',
                  'Cart management and updates',
                  'Successful order completion',
                ],
              },
              {
                title: 'Edge Cases & Boundaries',
                items: [
                  'Stock limit handling',
                  'Form field boundaries',
                  'Price calculations with tax',
                  'Shipping method selection',
                ],
              },
              {
                title: 'Error Scenarios',
                items: [
                  'Form validation errors',
                  'Invalid input handling',
                  'Out-of-stock conditions',
                  'Payment failure scenarios',
                ],
              },
              {
                title: 'Advanced Testing',
                items: [
                  'Dynamic element interactions',
                  'State management verification',
                  'UI accessibility testing',
                  'Performance benchmarking',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="card p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-gray-700">
                      <span className="text-amber-500 font-bold flex-shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Clean & Spacious */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-b border-blue-700">
        <div className="container-wide py-20">
          <h2 className="text-3xl font-bold mb-16 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-3">12</div>
              <div className="text-lg font-light">Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">5</div>
              <div className="text-lg font-light">Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">100+</div>
              <div className="text-lg font-light">Test Cases</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">∞</div>
              <div className="text-lg font-light">Scenarios</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Spacious */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-wide py-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Begin your automation testing journey with a professional, fully-featured e-commerce platform designed for real-world learning and benchmarking.
          </p>
          <Link href="/products" className="btn-primary">
            Explore All Products
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container-wide py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Get to Know Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Testing Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Community</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2024 automation-exercise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
