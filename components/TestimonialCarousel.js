'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Icon from '@/components/Icon'

export default function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const total = testimonials.length

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 5000)
  }, [next])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  // Show 3 cards on desktop, 1 on mobile — wrap around
  const visible = [0, 1, 2].map(offset => ({
    item: testimonials[(current + offset) % total],
    idx: (current + offset) % total,
  }))

  return (
    <div
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={startTimer}
    >
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {visible.map(({ item, idx }, i) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 transition-opacity duration-300 ${
              i > 0 ? 'hidden md:flex' : 'flex'
            }`}
          >
            <Icon name="format_quote" size={28} className="text-brand-200" />
            <p className="text-gray-700 leading-relaxed flex-1 text-base">"{item.quote}"</p>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-900">{item.author}</p>
              <p className="text-gray-600 text-sm mt-0.5">{item.title}</p>
              <p className="text-brand-600 text-sm font-medium mt-0.5">{item.org}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => { prev(); startTimer() }}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
          aria-label="Trước"
        >
          <Icon name="chevron_left" size={22} className="text-gray-500" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); startTimer() }}
              className={`rounded-full transition-all ${
                i === current
                  ? 'w-6 h-2 bg-brand-600'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Đến ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => { next(); startTimer() }}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
          aria-label="Tiếp"
        >
          <Icon name="chevron_right" size={22} className="text-gray-500" />
        </button>
      </div>

      <p className="text-center text-sm text-gray-400 mt-2">
        {current + 1} / {total}
      </p>
    </div>
  )
}
