'use client'

import { useState, useEffect, useRef } from 'react'

export default function CountUp({ value, duration = 800 }) {
  // Parse: "1.000+" → number 1000, suffix "+"
  // "150+" → 150, "+"
  // "5+" → 5, "+"
  const match = value.match(/^([\d.]+)(.*)$/)
  if (!match) return <span>{value}</span>

  const rawNum = match[1].replace(/\./g, '') // "1.000" → "1000"
  const target = parseInt(rawNum, 10)
  const suffix = match[2] // "+"
  const hasThousandDot = match[1].includes('.')

  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const fps = 30
    const steps = Math.round(duration / (1000 / fps))
    const increment = target / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [started, target, duration])

  // Format with dots: 1000 → "1.000"
  const formatted = hasThousandDot
    ? count.toLocaleString('vi-VN')
    : String(count)

  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  )
}
