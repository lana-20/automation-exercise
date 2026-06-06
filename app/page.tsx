import Link from 'next/link'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Automation Exercise
            </h1>
            <p className="text-lg text-gray-700 mb-2">
              A fully functional e-commerce testing sandbox designed for automation testing education and practice.
            </p>
            <p className="text-gray-600 mb-8">
              Test real-world workflows including product browsing, search, filtering, shopping cart management, and checkout with complete form validation.
            </p>

            <div className="flex gap-3">
              <Link
                href="/products"
                className="btn btn-primary"
              >
                View Products
              </Link>
              <Link
                href="/products"
                className="btn btn-secondary"
              >
                Browse All
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-3xl mb-3">🛍️</div>
              <h3 className="font-bold text-gray-900 mb-2">Product Catalog</h3>
              <p className="text-gray-600 text-sm">
                12 products across 5 categories with realistic pricing and stock levels.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-bold text-gray-900 mb-2">Search & Filter</h3>
              <p className="text-gray-600 text-sm">
                Search by name, filter by category, and sort by price or popularity.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900 mb-2">Form Validation</h3>
              <p className="text-gray-600 text-sm">
                Complete checkout flow with comprehensive form validation and error handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <ProductGrid />
        </div>
      </section>

      {/* Testing Benefits Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Use Automation Exercise?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">📊 Complete Test Scenarios</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Happy path workflows (browse → add → checkout)</li>
                <li>• Edge cases (stock limits, form boundaries)</li>
                <li>• Negative scenarios (validation errors)</li>
                <li>• Real-world e-commerce logic</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">🎯 Learning & Benchmarking</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Practice automation testing techniques</li>
                <li>• Learn test data handling</li>
                <li>• Benchmark test automation tools</li>
                <li>• Measure test execution metrics</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">🛠️ Testing Challenges</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Form validation testing</li>
                <li>• Dynamic element interaction</li>
                <li>• State management verification</li>
                <li>• Error message validation</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-3">⚙️ Real Application Flow</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Realistic product data</li>
                <li>• Stock inventory management</li>
                <li>• Price calculation with tax</li>
                <li>• Shipping method selection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600">12</p>
              <p className="text-gray-700 font-medium mt-2">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">5</p>
              <p className="text-gray-700 font-medium mt-2">Categories</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">∞</p>
              <p className="text-gray-700 font-medium mt-2">Test Cases</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Test?</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Start exploring the e-commerce flow and practice your automation testing skills.
          </p>
          <Link href="/products" className="btn btn-primary inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}
