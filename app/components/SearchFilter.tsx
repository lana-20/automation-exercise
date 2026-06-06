export default function SearchFilter({
  searchQuery,
  setSearchQuery,
  categories,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}: {
  searchQuery: string
  setSearchQuery: (query: string) => void
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  sortBy: string
  setSortBy: (sort: string) => void
}) {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-3 bg-dlb-bg border border-white/10 rounded text-dlb-off-white placeholder-dlb-off-white/30"
      />

      <div className="flex gap-4 flex-wrap">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="flex-1 min-w-40 px-4 py-2 bg-dlb-bg border border-white/10 rounded text-dlb-off-white"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="flex-1 min-w-40 px-4 py-2 bg-dlb-bg border border-white/10 rounded text-dlb-off-white"
        >
          <option value="popular">Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}
