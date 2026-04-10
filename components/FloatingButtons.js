'use client'

import { site } from '@/data/site'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo */}
      <a
        href={site.social.zalo}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 hover:scale-110 transition-all"
        aria-label="Chat Zalo"
        title="Chat Zalo"
      >
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
          <path d="M12.5 7C9.46 7 7 9.46 7 12.5v23C7 38.54 9.46 41 12.5 41h23c3.04 0 5.5-2.46 5.5-5.5v-23C41 9.46 38.54 7 35.5 7h-23zm11.62 6.5c5.97 0 10.81 4.2 10.81 9.38 0 5.18-4.84 9.37-10.81 9.37-1.2 0-2.35-.16-3.43-.46a.89.89 0 00-.7.08l-2.41 1.4a.53.53 0 01-.79-.5l.22-2.09a.89.89 0 00-.31-.77C14.17 28.06 13.3 25.8 13.3 22.88c0-5.18 4.84-9.38 10.82-9.38zm-5.25 6.75a.75.75 0 00-.75.75v4.12a.75.75 0 001.5 0V22.5h1.63a.75.75 0 000-1.5h-2.38zm4.26 0a.75.75 0 00-.75.75v4.12a.75.75 0 001.5 0v-2.24l2.17 2.82a.75.75 0 001.19-.91l-1.87-2.43 1.72-1.72a.75.75 0 00-1.06-1.06l-2.15 2.15V21a.75.75 0 00-.75-.75z" fill="currentColor"/>
        </svg>
      </a>

      {/* Phone */}
      <a
        href={`tel:${site.phone.replace(/\./g, '')}`}
        className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg hover:bg-brand-700 hover:scale-110 transition-all"
        aria-label="Gọi điện"
        title={`Gọi ${site.phone}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>
    </div>
  )
}
