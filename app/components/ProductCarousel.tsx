import Link from 'next/link'

interface CarouselProduct {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  category: string
  limited?: boolean
}

interface ProductCarouselProps {
  title: string
  products: CarouselProduct[]
}

export default function ProductCarousel({ title, products }: ProductCarouselProps) {
  return (
    <div className="bg-white py-6">
      <div className="px-6">
        <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
          {title}
          <Link href="/products" className="text-sm text-blue-600 hover:text-red-600 font-normal">
            See all
          </Link>
        </h2>
      </div>

      <div className="overflow-x-auto px-6 scrollbar-hide">
        <div className="flex gap-4 pb-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded hover:shadow-lg transition-shadow p-3 group"
            >
              {/* Product Image Area */}
              <div className="w-full h-56 bg-gray-100 rounded mb-3 flex items-center justify-center group-hover:bg-gray-150 transition text-5xl">
                📦
              </div>

              {/* Deal Badge */}
              {product.discount && (
                <div className="flex gap-2 mb-2">
                  <span className="badge-deal">{product.discount}% off</span>
                  {product.limited && (
                    <span className="text-xs text-red-600 font-bold">Limited time deal</span>
                  )}
                </div>
              )}

              {/* Product Name */}
              <p className="text-sm font-bold text-gray-900 line-clamp-2 mb-3 group-hover:text-blue-600">
                {product.name}
              </p>

              {/* Pricing */}
              <div className="space-y-1">
                {product.originalPrice && product.discount ? (
                  <>
                    <div className="text-lg font-bold text-black">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="price-old">
                      ${product.originalPrice.toFixed(2)}
                    </div>
                  </>
                ) : (
                  <div className="text-lg font-bold text-black">
                    ${product.price.toFixed(2)}
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <p className="text-xs text-green-700 font-bold mt-2">In Stock</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
