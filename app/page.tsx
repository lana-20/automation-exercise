import Link from 'next/link'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-dlb-card border-b border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl mb-4">
            Welcome to <span className="text-dlb-coral">automation-exercise</span>
          </h1>
          <p className="text-dlb-off-white/70 text-xl mb-8">
            Test e-commerce workflows with a fully functional testing sandbox
          </p>
          <Link
            href="/products"
            className="inline-block bg-dlb-coral hover:bg-dlb-coral-light px-8 py-3 rounded font-semibold transition"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl mb-8">Featured Products</h2>
          <ProductGrid />
        </div>
      </section>
    </main>
  )
}
