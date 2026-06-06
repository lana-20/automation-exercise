import Link from 'next/link'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <main className="bg-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-coral/20 via-transparent to-mint/15" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow mb-8 animate-fade-in">
              <span className="pulse"></span>
              Testing Platform
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-medium leading-tight mb-6">
              automation-<em className="italic text-coral">exercise</em>
            </h1>

            <p className="text-lg text-fg-2 mb-8 leading-relaxed max-w-2xl">
              A fully functional e-commerce testing sandbox designed for automation testing education, benchmarking, and learning. Practice real-world testing workflows with a complete product catalog, shopping cart, and checkout system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/products" className="btn btn-primary">
                Start Exploring
              </Link>
              <Link href="/products" className="btn btn-secondary">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <div className="section-eyebrow">— What's Included</div>
            <h2 className="section-title">Complete Testing <em>Workflows</em></h2>
            <p className="section-lede max-w-2xl">
              Everything you need to practice and benchmark automation testing across the full e-commerce flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={idx} className="card p-8 flex flex-col">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display font-medium text-xl mb-3">{feature.title}</h3>
                <p className="text-fg-2 flex-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <div className="section-eyebrow">— Browse</div>
            <h2 className="section-title">Featured <em>Products</em></h2>
            <p className="section-lede">
              Explore the full product lineup with real-world testing scenarios built in.
            </p>
          </div>

          <ProductGrid />
        </div>
      </section>

      {/* Testing Benefits */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <div className="section-eyebrow">— Why Use It</div>
            <h2 className="section-title">Premium Testing <em>Sandbox</em></h2>
            <p className="section-lede max-w-2xl">
              Designed specifically for automation testing professionals and teams learning test automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div key={idx} className="card p-8">
                <h3 className="font-display font-medium text-xl mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-fg-2">
                      <span className="text-coral-light flex-shrink-0 mt-0.5">•</span>
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
      <section className="py-20 border-t border-border bg-card-dark/40">
        <div className="container">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-4xl font-medium text-coral mb-2">12</p>
              <p className="text-fg-2 font-mono text-sm tracking-wider uppercase">Products</p>
            </div>
            <div>
              <p className="font-display text-4xl font-medium text-coral mb-2">5</p>
              <p className="text-fg-2 font-mono text-sm tracking-wider uppercase">Categories</p>
            </div>
            <div>
              <p className="font-display text-4xl font-medium text-coral mb-2">∞</p>
              <p className="text-fg-2 font-mono text-sm tracking-wider uppercase">Test Cases</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-medium mb-4">Ready to Test?</h2>
          <p className="text-fg-2 mb-8 max-w-md mx-auto">
            Start exploring the e-commerce flow and practice your automation testing skills with a real application.
          </p>
          <Link href="/products" className="btn btn-primary inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}
