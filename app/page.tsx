import Link from 'next/link'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">automation-exercise</h1>
          <p className="text-lg text-blue-100">
            A fully functional e-commerce testing sandbox for automation testing education
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <Link href="/products" className="text-amber-700 hover:text-amber-900 font-bold text-sm">
              See all →
            </Link>
          </div>
          <ProductGrid />
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '✓',
                title: 'Complete Product Catalog',
                desc: '12 products across 5 categories with realistic pricing and stock levels'
              },
              {
                icon: '🔍',
                title: 'Search & Filter',
                desc: 'Find exactly what you need with powerful search and category filters'
              },
              {
                icon: '🛒',
                title: 'Shopping Cart',
                desc: 'Easy cart management with quantity controls and checkout flow'
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Testing Benefits */}
          <div className="border-t border-gray-300 pt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Use automation-exercise?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Complete Test Scenarios',
                  items: [
                    'Happy path workflows (browse → add → checkout)',
                    'Edge cases (stock limits, form boundaries)',
                    'Negative scenarios (validation errors)',
                    'Real-world e-commerce logic'
                  ]
                },
                {
                  title: 'Real Application Flow',
                  items: [
                    'Realistic product data & catalog',
                    'Stock inventory management',
                    'Price calculation with tax',
                    'Shipping method selection'
                  ]
                },
                {
                  title: 'Learning & Benchmarking',
                  items: [
                    'Practice automation techniques',
                    'Learn test data handling patterns',
                    'Benchmark test automation tools',
                    'Measure test execution metrics'
                  ]
                },
                {
                  title: 'Professional Testing Challenges',
                  items: [
                    'Form validation and error handling',
                    'Dynamic element interaction',
                    'State management verification',
                    'UI element visibility and accessibility'
                  ]
                }
              ].map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-2 text-gray-700 text-sm">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">12</div>
              <div className="text-blue-200">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold">5</div>
              <div className="text-blue-200">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold">∞</div>
              <div className="text-blue-200">Test Cases</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-50 border-t border-amber-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Testing Today</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Begin your automation testing journey with a real, fully functional e-commerce platform.
          </p>
          <Link href="/products" className="btn-primary text-lg px-8 py-3">
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  )
}
