'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Icon from '@/components/Icon'

const DOT_COUNT = 4

export default function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0)
  const [sliding, setSliding] = useState(false)
  const timerRef = useRef(null)
  const total = testimonials.length

  const slideTo = useCallback((next) => {
    setSliding(true)
    setTimeout(() => {
      setCurrent(next)
      setSliding(false)
    }, 400)
  }, [])

  const next = useCallback(() => slideTo((current + 1) % total), [current, total, slideTo])
  const prev = useCallback(() => slideTo((current - 1 + total) % total), [current, total, slideTo])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      slideTo(prev => (prev + 1) % total)
    }, 5000)
  }, [total, slideTo])

  // Fix: slideTo in timer needs current from ref
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setSliding(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % total)
        setSliding(false)
      }, 400)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [total])

  const restartTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setSliding(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % total)
        setSliding(false)
      }, 400)
    }, 5000)
  }

  const visible = [0, 1, 2].map(offset => ({
    item: testimonials[(current + offset) % total],
    idx: (current + offset) % total,
  }))

  const activeDot = current % DOT_COUNT

  return (
    <div
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={restartTimer}
    >
      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className={`grid md:grid-cols-3 gap-5 transition-all duration-400 ease-in-out ${
            sliding ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
          }`}
        >
          {visible.map(({ item, idx }, i) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 ${
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
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => { setSliding(true); setTimeout(() => { setCurrent(c => (c - 1 + total) % total); setSliding(false) }, 400); restartTimer() }}
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
          onClick={() => { setSliding(true); setTimeout(() => { setCurrent(c => (c + 1) % total); setSliding(false) }, 400); restartTimer() }}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
          aria-label="Tiếp"
        >
          <Icon name="chevron_right" size={22} className="text-gray-500" />
        </button>
      </div>
    </div>
  )
}
