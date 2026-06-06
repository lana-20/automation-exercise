'use client'

import { useState } from 'react'

const banners = [
  {
    id: 1,
    title: 'Testing Made Easy',
    subtitle: 'Complete e-commerce testing platform',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    title: 'Real-World Scenarios',
    subtitle: 'Learn automation testing with professional tools',
    color: 'from-indigo-600 to-indigo-800',
  },
  {
    id: 3,
    title: 'Practice & Learn',
    subtitle: 'Master automation testing fundamentals',
    color: 'from-purple-600 to-purple-800',
  },
]

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const banner = banners[currentIndex]

  return (
    <div className="relative w-full h-80 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} flex items-center justify-center text-white`}>
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">{banner.title}</h2>
          <p className="text-xl text-gray-100">{banner.subtitle}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition"
      >
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition ${
              idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
