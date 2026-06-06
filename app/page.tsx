import Link from 'next/link'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dlb-coral/10 via-transparent to-dlb-mint/5" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block badge badge-coral mb-6">
              🚀 E-commerce Testing Sandbox
            </div>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-gradient">automation-exercise</span>
          </h1>

          <p className="text-lg text-dlb-off-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            A fully functional e-commerce testing sandbox designed for automation testing education and benchmarking. Test real-world workflows with a complete product catalog, cart management, and checkout flow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/products"
              className="btn btn-primary group inline-flex items-center justify-center gap-2"
            >
              <span>Start Shopping</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/products?category=all"
              className="btn btn-secondary inline-flex items-center justify-center"
            >
              Browse All Products
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-dlb-coral">12</p>
              <p className="text-sm text-dlb-off-white/60 mt-2">Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-dlb-coral">5</p>
              <p className="text-sm text-dlb-off-white/60 mt-2">Categories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-dlb-coral">∞</p>
              <p className="text-sm text-dlb-off-white/60 mt-2">Test Cases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-block badge badge-mint mb-4">Featured</div>
            <h2 className="font-display text-4xl font-bold">Popular Products</h2>
            <p className="text-dlb-off-white/60 mt-3">
              Explore our best-selling items and test real e-commerce workflows
            </p>
          </div>
          <ProductGrid />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold">Why automation-exercise?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛍️',
                title: 'Complete E-commerce Flow',
                desc: 'Browse, search, filter, add to cart, and checkout with real validation'
              },
              {
                icon: '✓',
                title: 'Validation & Error Handling',
                desc: 'Test form validation, error messages, and edge cases'
              },
              {
                icon: '📊',
                title: 'Realistic Test Data',
                desc: '12 products across 5 categories with varying stock levels'
              }
            ].map((feature, idx) => (
              <div key={idx} className="card p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-dlb-off-white/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
