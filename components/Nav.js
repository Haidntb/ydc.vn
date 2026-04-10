'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Icon from '@/components/Icon'

const navLinks = [
  { href: '/chuong-trinh-dao-tao', label: 'Chương Trình Đào Tạo' },
  { href: '/dang-ky-to-chuc', label: 'Đăng Ký Cho Tổ Chức' },
  { href: '/tu-van-dau-thau', label: 'Tư Vấn & Hỗ Trợ' },
  { href: '/tin-tuc', label: 'Tin Tức' },
  { href: '/ve-chung-toi', label: 'Về Chúng Tôi' },
]

const examLink = {
  href: 'https://luyenthidauthau.ydc.vn/',
  label: 'Thi Thử',
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-md' : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="YDC Academy"
              width={48}
              height={48}
              className="flex-shrink-0"
            />
            <span className="font-extrabold text-xl text-brand-700 hidden sm:inline">
              YDC Academy
            </span>
          </Link>

          {/* Desktop nav — pushed right with ml-auto */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto mr-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors whitespace-nowrap"
                >
                  {link.label}
                  <Icon name="open_in_new" size={12} className="text-brand-500" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-brand-600 bg-brand-100 font-semibold'
                      : 'text-gray-600 hover:text-brand-600 hover:bg-brand-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href={examLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-colors"
            >
              {examLink.label}
              <Icon name="open_in_new" size={14} />
            </a>
            <Link
              href="/lien-he"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-600 text-white text-xs font-semibold hover:bg-brand-700 transition-colors"
            >
              Liên Hệ
            </Link>
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-600 hover:bg-brand-50"
              onClick={() => setOpen(!open)}
              aria-label="Mở menu"
            >
              <Icon name={open ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-2">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50"
                  >
                    {link.label}
                    <Icon name="open_in_new" size={14} />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === link.href
                        ? 'text-brand-600 bg-brand-100 font-semibold'
                        : 'text-gray-600 hover:text-brand-600 hover:bg-brand-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={examLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800"
              >
                {examLink.label}
                <Icon name="open_in_new" size={14} />
              </a>
              <Link
                href="/lien-he"
                className="px-3 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold text-center hover:bg-brand-700"
              >
                Liên Hệ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
