import ProductGrid from '../components/ProductGrid'

export default function ProductsPage() {
  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h1 className="font-display text-3xl mb-2">All Products</h1>
        <p className="text-dlb-off-white/70">Browse our complete catalog</p>
      </div>
      <ProductGrid />
    </main>
  )
}
