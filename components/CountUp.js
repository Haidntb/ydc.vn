'use client'

import { useState, useEffect, useRef } from 'react'

export default function CountUp({ value, duration = 800, delay = 0 }) {
  const match = value.match(/^([\d.]+)(.*)$/)
  if (!match) return <span>{value}</span>

  const rawNum = match[1].replace(/\./g, '')
  const target = parseInt(rawNum, 10)
  const suffix = match[2]
  const hasThousandDot = match[1].includes('.')

  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  // Stagger: wait `delay` ms after intersection, then fade in + start counting
  useEffect(() => {
    if (!started) return
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [started, delay])

  useEffect(() => {
    if (!visible) return
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
  }, [visible, target, duration])

  const formatted = hasThousandDot
    ? count.toLocaleString('vi-VN')
    : String(count)

  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3'
      }`}
    >
      {formatted}{suffix}
    </span>
  )
}
