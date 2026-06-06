import Link from 'next/link'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="text-sm font-semibold">Testing Platform</span>
            </div>

            <h1 className="section-title text-white mb-6">
              automation<span className="font-light">exercise</span>
            </h1>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
              A fully functional e-commerce testing sandbox designed for automation testing education, benchmarking, and learning. Practice real-world testing workflows with a complete product catalog, shopping cart, and checkout system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-lg">
                Start Exploring →
              </Link>
              <Link href="/products" className="btn-secondary text-lg bg-white text-blue-600 border-0">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <div className="text-blue-600 font-bold text-sm mb-2">✨ FEATURES</div>
            <h2 className="section-title mb-4">Complete Testing Workflows</h2>
            <p className="section-subtitle">Everything you need to practice and benchmark automation testing across the full e-commerce flow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛍️',
                title: 'Product Catalog',
                desc: '12 products across 5 categories with realistic pricing, stock levels, and detailed specifications.'
              },
              {
                icon: '🔍',
                title: 'Search & Filter',
                desc: 'Search by name, filter by category, and sort by price or popularity with live results.'
              },
              {
                icon: '✓',
                title: 'Form Validation',
                desc: 'Complete checkout flow with comprehensive form validation, error handling, and edge cases.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="card-base p-8">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <div className="text-blue-600 font-bold text-sm mb-2">🎯 PRODUCTS</div>
            <h2 className="section-title mb-4">Featured Products</h2>
            <p className="section-subtitle">Explore the full product lineup with real-world testing scenarios built in.</p>
          </div>

          <ProductGrid />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <div className="text-blue-600 font-bold text-sm mb-2">🚀 BENEFITS</div>
            <h2 className="section-title mb-4">Premium Testing Sandbox</h2>
            <p className="section-subtitle">Designed specifically for automation testing professionals and teams learning test automation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '🎯 Complete Test Scenarios',
                items: [
                  'Happy path workflows (browse → add → checkout)',
                  'Edge cases (stock limits, form boundaries)',
                  'Negative scenarios (validation errors)',
                  'Real-world e-commerce logic'
                ]
              },
              {
                title: '⚙️ Real Application Flow',
                items: [
                  'Realistic product data & catalog',
                  'Stock inventory management',
                  'Price calculation with tax',
                  'Shipping method selection'
                ]
              },
              {
                title: '📊 Learning & Benchmarking',
                items: [
                  'Practice automation techniques',
                  'Learn test data handling',
                  'Benchmark test tools',
                  'Measure test metrics'
                ]
              },
              {
                title: '🛠️ Testing Challenges',
                items: [
                  'Form validation & error handling',
                  'Dynamic element interaction',
                  'State management verification',
                  'UI visibility & accessibility'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="card-base p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-gray-600">
                      <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-blue-100 font-semibold">Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5</div>
              <div className="text-blue-100 font-semibold">Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">∞</div>
              <div className="text-blue-100 font-semibold">Test Cases</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Ready to Test?</h2>
          <p className="section-subtitle mb-8">
            Start exploring the e-commerce flow and practice your automation testing skills with a real application.
          </p>
          <Link href="/products" className="btn-primary text-lg">
            Get Started Now →
          </Link>
        </div>
      </section>
    </main>
  )
}
