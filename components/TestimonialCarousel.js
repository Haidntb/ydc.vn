'use client'

import { useState, useEffect, useRef } from 'react'
import Icon from '@/components/Icon'

const DOT_COUNT = 4

export default function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const scrollRef = useRef(null)
  const total = testimonials.length

  const scrollToIndex = (idx) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.children[idx]
    if (!card) return
    container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: 'smooth' })
  }

  const goNext = () => {
    const next = (current + 1) % total
    setCurrent(next)
    scrollToIndex(next)
  }

  const goPrev = () => {
    const prev = (current - 1 + total) % total
    setCurrent(prev)
    scrollToIndex(prev)
  }

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(goNext, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [current, total])

  const activeDot = current % DOT_COUNT

  return (
    <div
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={startTimer}
    >
      {/* Cards — horizontal scroll, snap */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-[calc(33.333%-14px)] max-md:w-[85%] bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4"
          >
            <Icon name="format_quote" size={28} className="text-brand-200" />
            <p className="text-gray-700 leading-relaxed flex-1 text-base">"{item.quote}"</p>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-bold text-gray-900">{item.author}</p>
              <p className="text-gray-600 text-sm mt-0.5">{item.title}</p>
              <p className="text-brand-600 text-sm font-medium mt-0.5">{item.org}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => { goPrev(); startTimer() }}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
          aria-label="Trước"
        >
          <Icon name="chevron_left" size={22} className="text-gray-500" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === activeDot
                  ? 'w-6 h-2.5 bg-brand-600'
                  : 'w-2.5 h-2.5 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => { goNext(); startTimer() }}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
          aria-label="Tiếp"
        >
          <Icon name="chevron_right" size={22} className="text-gray-500" />
        </button>
      </div>
    </div>
  )
}
