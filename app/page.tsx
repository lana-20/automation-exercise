import Link from 'next/link'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              automation<span className="text-primary">exercise</span>
            </h1>
            <p className="text-lg text-base-content/70 mb-8 leading-relaxed max-w-2xl">
              A fully functional e-commerce testing sandbox designed for automation testing education, benchmarking, and learning. Practice real-world testing workflows with a complete product catalog, shopping cart, and checkout system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn btn-primary">
                Start Exploring
              </Link>
              <Link href="/products" className="btn btn-outline">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Testing Workflows</h2>
            <p className="text-base-content/70 text-lg max-w-2xl">
              Everything you need to practice and benchmark automation testing across the full e-commerce flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div key={idx} className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="card-title text-xl">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-base-content/70 text-lg">
              Explore the full product lineup with real-world testing scenarios built in.
            </p>
          </div>

          <ProductGrid />
        </div>
      </section>

      {/* Testing Benefits */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Premium Testing Sandbox</h2>
            <p className="text-base-content/70 text-lg max-w-2xl">
              Designed specifically for automation testing professionals and teams learning test automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '🎯 Complete Test Scenarios',
                items: [
                  'Happy path workflows (browse → add → checkout)',
                  'Edge cases (stock limits, form boundaries)',
                  'Negative scenarios (validation errors, stock)',
                  'Real-world e-commerce logic'
                ]
              },
              {
                title: '⚙️ Real Application Flow',
                items: [
                  'Realistic product data and catalog',
                  'Stock inventory management',
                  'Price calculation with tax',
                  'Shipping method selection'
                ]
              },
              {
                title: '📊 Learning & Benchmarking',
                items: [
                  'Practice automation testing techniques',
                  'Learn test data handling patterns',
                  'Benchmark test automation tools',
                  'Measure test execution metrics'
                ]
              },
              {
                title: '🛠️ Testing Challenges',
                items: [
                  'Form validation and error handling',
                  'Dynamic element interaction',
                  'State management verification',
                  'UI element visibility and accessibility'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body">
                  <h3 className="card-title text-xl">{section.title}</h3>
                  <ul className="space-y-2 text-base-content/70">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-2">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">12</p>
              <p className="text-base-content/70 text-sm font-semibold">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">5</p>
              <p className="text-base-content/70 text-sm font-semibold">Categories</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">∞</p>
              <p className="text-base-content/70 text-sm font-semibold">Test Cases</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Test?</h2>
          <p className="text-base-content/70 text-lg mb-8 max-w-md mx-auto">
            Start exploring the e-commerce flow and practice your automation testing skills with a real application.
          </p>
          <Link href="/products" className="btn btn-primary btn-lg">
            Get Started →
          </Link>
        </div>
      </section>
    </main>
  )
}
